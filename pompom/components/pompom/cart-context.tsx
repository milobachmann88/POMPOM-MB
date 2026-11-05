'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { PRODUCT_CATALOG, type Product } from './product-catalog'

export type DeliveryPoint = 'Parque Brown' | 'Coto de Lugano' | 'Otro'

type CartLine = { productId: string; quantity: number }
type CartItem = { product: Product; quantity: number }
type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  isCartOpen: boolean
  deliveryPoint: DeliveryPoint | ''
  addItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  openCart: () => void
  closeCart: () => void
  setDeliveryPoint: (point: DeliveryPoint | '') => void
}

const CART_STORAGE_KEY = 'pompom-cart-v1'
const MAX_ITEM_QUANTITY = 99
const validDeliveryPoints: DeliveryPoint[] = ['Parque Brown', 'Coto de Lugano', 'Otro']
const productIds = new Set(PRODUCT_CATALOG.map((product) => product.id))
const CartContext = createContext<CartContextValue | null>(null)

function restoreCart(value: string | null): { lines: CartLine[]; deliveryPoint: DeliveryPoint | '' } {
  if (!value) return { lines: [], deliveryPoint: '' }

  try {
    const stored: unknown = JSON.parse(value)
    if (!stored || typeof stored !== 'object') return { lines: [], deliveryPoint: '' }

    const record = stored as Record<string, unknown>
    const lines = Array.isArray(record.items)
      ? record.items.flatMap((entry): CartLine[] => {
          if (!entry || typeof entry !== 'object') return []
          const item = entry as Record<string, unknown>
          if (
            typeof item.productId !== 'string' ||
            !productIds.has(item.productId) ||
            typeof item.quantity !== 'number' ||
            !Number.isInteger(item.quantity) ||
            item.quantity < 1
          ) {
            return []
          }
          return [{ productId: item.productId, quantity: Math.min(item.quantity, MAX_ITEM_QUANTITY) }]
        })
      : []
    const deliveryPoint = validDeliveryPoints.includes(record.deliveryPoint as DeliveryPoint)
      ? (record.deliveryPoint as DeliveryPoint)
      : ''

    return { lines, deliveryPoint }
  } catch {
    return { lines: [], deliveryPoint: '' }
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [deliveryPoint, setDeliveryPoint] = useState<DeliveryPoint | ''>('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isStorageReady, setIsStorageReady] = useState(false)

  useEffect(() => {
    try {
      const restored = restoreCart(window.localStorage.getItem(CART_STORAGE_KEY))
      setLines(restored.lines)
      setDeliveryPoint(restored.deliveryPoint)
    } catch {
      setLines([])
      setDeliveryPoint('')
    } finally {
      setIsStorageReady(true)
    }
  }, [])

  useEffect(() => {
    if (!isStorageReady) return
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: lines, deliveryPoint }))
    } catch {
      // The in-memory cart remains usable if browser storage is unavailable.
    }
  }, [deliveryPoint, isStorageReady, lines])

  const addItem = useCallback((productId: string) => {
    if (!productIds.has(productId)) return
    setLines((current) => {
      const existing = current.find((line) => line.productId === productId)
      if (!existing) return [...current, { productId, quantity: 1 }]
      return current.map((line) =>
        line.productId === productId
          ? { ...line, quantity: Math.min(line.quantity + 1, MAX_ITEM_QUANTITY) }
          : line,
      )
    })
    setIsCartOpen(true)
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const nextQuantity = Math.trunc(quantity)
    if (nextQuantity < 1) {
      setLines((current) => current.filter((line) => line.productId !== productId))
      return
    }
    setLines((current) =>
      current.map((line) =>
        line.productId === productId
          ? { ...line, quantity: Math.min(nextQuantity, MAX_ITEM_QUANTITY) }
          : line,
      ),
    )
  }, [])

  const removeItem = useCallback((productId: string) => {
    setLines((current) => current.filter((line) => line.productId !== productId))
  }, [])

  const items = useMemo(
    () =>
      lines.flatMap((line) => {
        const product = PRODUCT_CATALOG.find((entry) => entry.id === line.productId)
        return product ? [{ product, quantity: line.quantity }] : []
      }),
    [lines],
  )
  const count = items.reduce((amount, item) => amount + item.quantity, 0)
  const total = items.reduce((amount, item) => amount + item.product.price * item.quantity, 0)

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count,
      total,
      isCartOpen,
      deliveryPoint,
      addItem,
      updateQuantity,
      removeItem,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      setDeliveryPoint,
    }),
    [addItem, count, deliveryPoint, isCartOpen, items, removeItem, total, updateQuantity],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
  return context
}
