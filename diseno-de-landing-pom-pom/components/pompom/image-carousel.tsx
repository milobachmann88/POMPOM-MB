'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Slide = { src: string; alt: string }

export function ImageCarousel({ slides, label }: { slides: Slide[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const goTo = (next: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = (next + slides.length) % slides.length
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  return (
    <div className="group/carousel relative" role="region" aria-roledescription="carrusel" aria-label={label}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex aspect-square snap-x snap-mandatory overflow-x-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="relative w-full shrink-0 snap-center"
            role="group"
            aria-roledescription="imagen"
            aria-label={`${i + 1} de ${slides.length}`}
          >
            <Image
              src={slide.src || '/placeholder.svg'}
              alt={slide.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Imagen anterior"
        className="absolute top-1/2 left-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary shadow transition-all hover:scale-110 focus-visible:opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Imagen siguiente"
        className="absolute top-1/2 right-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-primary shadow transition-all hover:scale-110 focus-visible:opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-card/80 px-2.5 py-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            aria-current={i === index}
            className={cn(
              'h-2 rounded-full bg-primary transition-all',
              i === index ? 'w-5' : 'w-2 opacity-40 hover:opacity-70',
            )}
          />
        ))}
      </div>
    </div>
  )
}
