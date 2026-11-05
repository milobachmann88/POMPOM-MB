'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef } from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from './product-catalog'
import { useCart, type DeliveryPoint } from './cart-context'
import { createWhatsAppMessageLink } from './site-config'

const deliveryPoints: DeliveryPoint[] = ['Parque Brown', 'Coto de Lugano', 'Otro']
const otherPointMessage = 'Escribime por WhatsApp para coordinar el punto de entrega'

export function CartDrawer() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const {
    items,
    count,
    total,
    isCartOpen,
    deliveryPoint,
    setDeliveryPoint,
    updateQuantity,
    removeItem,
    closeCart,
  } = useCart()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isCartOpen && !dialog.open) dialog.showModal()
    if (!isCartOpen && dialog.open) dialog.close()
  }, [isCartOpen])

  useEffect(() => {
    if (!isCartOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isCartOpen])

  const checkoutUrl = useMemo(() => {
    const orderSummary = [
      '¡Hola PomPom! Quiero finalizar este pedido:',
      ...items.map(({ product, quantity }) => `• ${product.name} × ${quantity} — ${formatPrice(product.price * quantity)}`),
      `Total: ${formatPrice(total)}`,
      `Punto de encuentro para la entrega: ${deliveryPoint || 'A definir'}`,
    ].join('\n')
    return createWhatsAppMessageLink(orderSummary)
  }, [deliveryPoint, items, total])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cart-title"
      className="pompom-cart-dialog"
      onCancel={(event) => {
        event.preventDefault()
        closeCart()
      }}
      onClose={closeCart}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeCart()
      }}
    >
      <div className="flex h-full min-h-0 flex-col bg-card text-foreground">
        <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">Tu pedido</p>
            <h2 id="cart-title" className="mt-1 text-2xl font-black text-primary">Mi carrito <span className="text-lg font-bold">({count})</span></h2>
          </div>
          <button type="button" onClick={closeCart} aria-label="Cerrar carrito" className="flex size-11 items-center justify-center rounded-full bg-accent text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        {items.length ? (
          <>
            <ul className="flex-1 overflow-y-auto px-5 py-4 md:px-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3 border-b border-border/80 py-4 first:pt-1">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-secondary">
                    <Image src={product.image} alt={product.imageAlt} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate font-extrabold text-primary">{product.name}</h3>
                        <p className="mt-0.5 text-xs font-semibold text-muted-foreground">{formatPrice(product.price)} c/u</p>
                      </div>
                      <button type="button" onClick={() => removeItem(product.id)} aria-label={`Eliminar ${product.name} del carrito`} className="flex size-9 shrink-0 items-center justify-center rounded-full text-primary/70 transition-colors hover:bg-accent hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        <Trash2 className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background/70 p-1">
                        <button type="button" onClick={() => updateQuantity(product.id, quantity - 1)} disabled={quantity <= 1} aria-label={`Quitar una unidad de ${product.name}`} className="flex size-8 items-center justify-center rounded-full text-primary transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary">
                          <Minus className="size-4" aria-hidden="true" />
                        </button>
                        <span aria-label={`Cantidad: ${quantity}`} className="min-w-6 text-center text-sm font-extrabold text-primary">{quantity}</span>
                        <button type="button" onClick={() => updateQuantity(product.id, quantity + 1)} disabled={quantity >= 99} aria-label={`Agregar una unidad de ${product.name}`} className="flex size-8 items-center justify-center rounded-full text-primary transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary">
                          <Plus className="size-4" aria-hidden="true" />
                        </button>
                      </div>
                      <p className="text-sm font-black text-primary">{formatPrice(product.price * quantity)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="shrink-0 border-t border-border bg-card px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-6">
              <fieldset>
                <legend className="mb-2 text-sm font-extrabold text-primary">Punto de encuentro para la entrega</legend>
                <div className="grid grid-cols-3 gap-2">
                  {deliveryPoints.map((point) => (
                    <label key={point} className="group relative flex min-h-11 cursor-pointer items-center justify-center rounded-2xl border border-border bg-background/70 px-2 py-2 text-center text-xs font-extrabold text-primary transition-colors hover:bg-accent has-[:checked]:border-primary has-[:checked]:bg-accent has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary">
                      <input
                        className="sr-only"
                        type="radio"
                        name="delivery-point"
                        value={point}
                        checked={deliveryPoint === point}
                        onChange={() => setDeliveryPoint(point)}
                        aria-describedby={point === 'Otro' ? 'other-delivery-help' : undefined}
                      />
                      {point}
                      {point === 'Otro' && (
                        <span aria-hidden="true" className="pointer-events-none absolute bottom-[calc(100%+0.45rem)] left-1/2 z-10 w-64 -translate-x-1/2 translate-y-1 rounded-2xl bg-primary px-3 py-2 text-center text-xs font-bold leading-relaxed text-primary-foreground opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                          {otherPointMessage}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
                <span id="other-delivery-help" className="sr-only">{otherPointMessage}</span>
                {deliveryPoint === 'Otro' && <p className="mt-2 text-xs font-bold text-primary" aria-live="polite">{otherPointMessage}</p>}
              </fieldset>

              <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-3">
                <span className="text-base font-extrabold text-primary">Total</span>
                <span className="text-2xl font-black text-primary">{formatPrice(total)}</span>
              </div>
              <button
                type="button"
                onClick={() => window.open(checkoutUrl, '_blank', 'noopener,noreferrer')}
                disabled={!deliveryPoint}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-extrabold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ShoppingBag className="size-5" aria-hidden="true" />
                Finalizar pedido
              </button>
              <p className="mt-2 text-center text-xs font-semibold text-muted-foreground">Se abrirá WhatsApp con el resumen listo para enviar.</p>
            </footer>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="flex size-20 items-center justify-center rounded-full bg-accent text-primary">
              <ShoppingBag className="size-9" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-black text-primary">Tu carrito está esperando</h3>
            <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">Sumá una pieza tejida a mano y la vas a encontrar acá.</p>
            <a href="#productos" onClick={closeCart} className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-2.5 font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Ver productos
            </a>
          </div>
        )}
      </div>
    </dialog>
  )
}
