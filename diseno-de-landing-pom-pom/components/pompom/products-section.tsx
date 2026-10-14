import { ImageCarousel } from './image-carousel'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'

const products = [
  {
    title: 'PERSONAJES',
    description: 'Amigurumis tiernos para regalar, coleccionar o acompañar.',
    slides: [
      { src: '/images/personajes-1.png', alt: 'Amigurumi de conejita rosa tejida a crochet' },
      { src: '/images/personajes-2.png', alt: 'Amigurumi de gatito blanco y rosa' },
      { src: '/images/personajes-3.png', alt: 'Amigurumis de osito y ranita en tonos pastel' },
    ],
  },
  {
    title: 'TAPICES',
    description: 'Tapices tejidos para darle calidez a cualquier rincón.',
    slides: [
      { src: '/images/tapices-1.png', alt: 'Tapiz a crochet con corazón y flores' },
      { src: '/images/tapices-2.png', alt: 'Tapiz a crochet con carita de gato' },
      { src: '/images/tapices-3.png', alt: 'Detalle de tapiz con frutillas y margaritas' },
    ],
  },
  {
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
  return (
    <section aria-labelledby="productos-title" id="productos" className="scroll-mt-20 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle id="productos-title">PRODUCTOS</SectionTitle>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal
              as="li"
              key={product.title}
              delay={i * 120}
              className={i === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full' : undefined}
            >
              <article className="h-full rounded-3xl bg-card p-3 shadow-[0_10px_30px_-12px_rgb(199_52_99/0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgb(199_52_99/0.45)]">
                <ImageCarousel slides={product.slides} label={`Galería de ${product.title.toLowerCase()}`} />
                <div className="px-3 pt-5 pb-4 text-center">
                  <h3 className="text-xl font-black tracking-widest text-primary">{product.title}</h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{product.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
