'use client'

import Image from 'next/image'
import { Plus, ShoppingBag } from 'lucide-react'
import { formatPrice, type Product } from './product-catalog'
import { useCart } from './cart-context'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const detailsId = `${product.id}-details`
  const detailText = `Material: ${product.material}. Tamaño: ${product.size}. Colores disponibles: ${product.colors.join(', ')}.`

  return (
    <article className="group/card h-full overflow-hidden rounded-3xl bg-card shadow-[0_10px_30px_-16px_rgb(199_52_99/0.38)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_-14px_rgb(199_52_99/0.45)]">
      <div className="group/photo relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1280px) 260px, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover/photo:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 bottom-3 hidden translate-y-2 rounded-2xl bg-card/95 p-3 text-left text-xs leading-relaxed text-primary opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100 md:block"
        >
          <p><span className="font-extrabold">Material:</span> {product.material}</p>
          <p><span className="font-extrabold">Tamaño:</span> {product.size}</p>
          <p><span className="font-extrabold">Colores:</span> {product.colors.join(', ')}</p>
        </div>
      </div>

      <div className="flex h-full flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-black leading-tight text-primary">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-sm font-extrabold text-primary">
            {formatPrice(product.price)}
          </span>
        </div>

        <p id={detailsId} className="sr-only">{detailText}</p>

        <dl className="mt-3 grid gap-1 rounded-2xl bg-background/70 p-3 text-xs leading-relaxed text-muted-foreground md:hidden">
          <div><dt className="inline font-extrabold text-primary">Material: </dt><dd className="inline">{product.material}</dd></div>
          <div><dt className="inline font-extrabold text-primary">Tamaño: </dt><dd className="inline">{product.size}</dd></div>
          <div><dt className="inline font-extrabold text-primary">Colores: </dt><dd className="inline">{product.colors.join(', ')}</dd></div>
        </dl>

        <button
          type="button"
          aria-describedby={detailsId}
          onClick={() => addItem(product.id)}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-extrabold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          Agregar al carrito
          <Plus className="size-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
