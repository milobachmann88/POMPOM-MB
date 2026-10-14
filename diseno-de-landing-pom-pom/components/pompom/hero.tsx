import { Heart } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pt-20 pb-24 md:pt-28 md:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-card/40 blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-secondary/50 blur-3xl" />
      <div className="relative mx-auto flex max-w-3xl animate-in flex-col items-center text-center duration-1000 fade-in slide-in-from-bottom-6 motion-reduce:animate-none">
        <h1 className="title-white font-script text-7xl leading-none md:text-9xl">PomPom</h1>
        <p className="mt-6 text-xl font-extrabold tracking-wide text-primary md:text-2xl">
          Amigurumis y Tapices a Crochet
        </p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-card/70 px-5 py-2 text-base font-semibold text-primary">
          Hecho a mano con amor
          <Heart className="size-4 fill-primary" aria-hidden="true" />
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#productos"
            className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Ver productos
          </a>
          <a
            href="#pedidos"
            className="rounded-full border-2 border-primary bg-card/60 px-8 py-3 font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-card"
          >
            Cómo encargar
          </a>
        </div>
      </div>
    </section>
  )
}
