import { MapPin } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'

const points = [
  { name: 'Parque Brown', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+Brown+Buenos+Aires' },
  { name: 'Coto de Lugano', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Coto+Villa+Lugano+Buenos+Aires' },
]

export function MeetingPoints() {
  return (
    <section aria-labelledby="encuentro-title" id="encuentro" className="scroll-mt-20 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle id="encuentro-title">PUNTOS DE ENCUENTRO</SectionTitle>
        <ul className="grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <Reveal as="li" key={point.name} delay={i * 120}>
              <a
                href={point.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-primary/40 bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-lg"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="size-8" aria-hidden="true" />
                </span>
                <span className="text-2xl font-black text-primary">{point.name}</span>
                <span className="text-sm font-semibold text-muted-foreground underline-offset-4 group-hover:underline">
                  Ver en el mapa
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
