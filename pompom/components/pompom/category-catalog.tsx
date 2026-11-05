'use client'

import { ArrowLeft, Heart } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'
import { ProductCard } from './product-card'
import { PRODUCT_CATALOG, PRODUCT_CATEGORIES, type ProductCategory } from './product-catalog'

export function CategoryCatalog({ category, onBack }: { category: ProductCategory; onBack: () => void }) {
  const collection = PRODUCT_CATEGORIES[category]
  const products = PRODUCT_CATALOG.filter((product) => product.category === category)

  return (
    <div className="animate-in fade-in duration-300">
      <button
        type="button"
        onClick={onBack}
        className="mb-7 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-primary/30 bg-card/75 px-5 py-2 text-sm font-extrabold text-primary transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Volver a categorías
      </button>

      <SectionTitle id={`${category}-catalog-title`}>{collection.title}</SectionTitle>
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-lg font-bold text-primary">{collection.intro}</p>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">Modelos de muestra · precios de referencia en pesos argentinos</p>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <Reveal as="li" key={product.id} delay={Math.min(index, 5) * 65}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-bold text-primary/80">
        <Heart className="size-4 fill-primary/70" aria-hidden="true" />
        Cada pieza se teje a mano; puede tener pequeñas variaciones que la hacen única.
      </p>
    </div>
  )
}
