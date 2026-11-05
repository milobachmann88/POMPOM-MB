'use client'

import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { CategoryCatalog } from './category-catalog'
import { CustomOrderSection } from './custom-order-section'
import { ImageCarousel } from './image-carousel'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'
import type { ProductCategory } from './product-catalog'

type ActiveView = ProductCategory | 'personalizados' | null

const collections: {
  id: ProductCategory | 'personalizados'
  title: string
  description: string
  slides: { src: string; alt: string }[]
}[] = [
  {
    id: 'personajes',
    title: 'PERSONAJES',
    description: 'Amigurumis tiernos para regalar, coleccionar o acompañar.',
    slides: [
      { src: '/images/personajes-1.png', alt: 'Amigurumi de conejita rosa tejida a crochet' },
      { src: '/images/personajes-2.png', alt: 'Amigurumi de gatito blanco y rosa' },
      { src: '/images/personajes-3.png', alt: 'Amigurumis de osito y ranita en tonos pastel' },
    ],
  },
  {
    id: 'tapices',
    title: 'TAPICES',
    description: 'Tapices tejidos para darle calidez a cualquier rincón.',
    slides: [
      { src: '/images/tapices-1.png', alt: 'Tapiz a crochet con carita de gato' },
      { src: '/images/tapices-2.png', alt: 'Tapiz a crochet con corazón y flores' },
      { src: '/images/tapices-3.png', alt: 'Tapiz con frutillas y margaritas' },
    ],
  },
  {
    id: 'personalizados',
    title: 'PERSONALIZADOS',
    description: 'Tu idea, tu mascota o tu persona favorita, hecha a crochet.',
    slides: [
      { src: '/images/personalizados-1.png', alt: 'Muñequita personalizada a crochet' },
      { src: '/images/personalizados-2.png', alt: 'Réplica a crochet de un perrito' },
      { src: '/images/personalizados-3.png', alt: 'Pareja de muñecos a crochet para aniversario' },
    ],
  },
]

export function ProductsSection() {
  const [activeView, setActiveView] = useState<ActiveView>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  const openView = (view: ActiveView) => {
    setActiveView(view)
    requestAnimationFrame(() => sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <section ref={sectionRef} aria-label="Catálogo de productos PomPom" id="productos" className="scroll-mt-20 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        {activeView === null ? (
          <>
            <SectionTitle id="productos-title">PRODUCTOS</SectionTitle>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {collections.map((collection, index) => (
                <Reveal
                  as="li"
                  key={collection.id}
                  delay={index * 120}
                  className={index === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full' : undefined}
                >
                  <article className="h-full rounded-3xl bg-card p-3 shadow-[0_10px_30px_-12px_rgb(199_52_99/0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgb(199_52_99/0.45)]">
                    <ImageCarousel
                      slides={collection.slides}
                      label={`Galería de ${collection.title.toLowerCase()}`}
                      selectLabel={`Ver productos de ${collection.title.toLowerCase()}`}
                      onSelect={() => openView(collection.id)}
                    />
                    <div className="px-3 pt-5 pb-4 text-center">
                      <h3 className="text-xl font-black tracking-widest text-primary">{collection.title}</h3>
                      <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{collection.description}</p>
                      <button
                        type="button"
                        onClick={() => openView(collection.id)}
                        className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {collection.id === 'personalizados' ? 'Diseñar mi encargo' : 'Explorar productos'}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </>
        ) : activeView === 'personalizados' ? (
          <CustomOrderSection onBack={() => setActiveView(null)} />
        ) : (
          <CategoryCatalog category={activeView} onBack={() => setActiveView(null)} />
        )}
      </div>
    </section>
  )
}
