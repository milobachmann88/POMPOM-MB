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
      { src: '/images/imagenes-pompom/kitty.jpeg', alt: 'Amigurumi de Hello Kitty' },
      { src: '/images/imagenes-pompom/luffy.jpeg', alt: 'Amigurumi de Luffy (One Piece)' },
      { src: '/images/imagenes-pompom/spiderman.jpg', alt: 'Amigurumi de Spiderman' },
    ],
  },
  {
    id: 'tapices',
    title: 'TAPICES',
    description: 'Tapices tejidos para darle calidez a cualquier rincón.',
    slides: [
      { src: '/images/imagenes-pompom/tapizluna.jpeg', alt: 'Tapiz a crochet con carita de gato' },
      { src: '/images/imagenes-pompom/tapizconejito.jpeg', alt: 'Tapiz a crochet con corazón y flores' },
      { src: '/images/imagenes-pompom/tapizlibelula.jpeg', alt: 'Tapiz con frutillas y margaritas' },
    ],
  },
  {
    id: 'personalizados',
    title: 'PERSONALIZADOS',
    description: 'Tu idea, tu mascota o tu persona favorita, hecha a crochet.',
    slides: [
      { src: '/images/imagenes-pompom/yo.jpeg', alt: 'Muñequita personalizada a crochet' },
      { src: '/images/imagenes-pompom/ezra.jpeg', alt: 'Gato como personaje de anime' },
      { src: '/images/imagenes-pompom/corazon.png', alt: 'Corazón multicolor' },
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
