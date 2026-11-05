import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'

export function AboutSection() {
  return (
    <section aria-labelledby="quien-soy-title" id="quien-soy" className="scroll-mt-20 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle id="quien-soy-title">¿QUIÉN SOY?</SectionTitle>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-card shadow-[0_20px_40px_-15px_rgb(199_52_99/0.45)] transition-transform duration-500 hover:rotate-1">
              <Image
                src="/images/creadora.png"
                alt="La creadora de PomPom tejiendo a crochet"
                fill
                sizes="(min-width: 768px) 384px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="rounded-3xl bg-card p-8 shadow-sm md:p-10">
              <Heart className="mb-4 size-8 fill-accent text-primary" aria-hidden="true" />
              <p className="text-pretty text-lg leading-relaxed font-semibold text-primary md:text-xl">
                Soy una persona creativa que valora los regalos detallados y pensados con amor, por eso quiero
                transmitir ese sentimiento a través de mis creaciones, para que nunca falte el cariño.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
