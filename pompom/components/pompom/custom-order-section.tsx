'use client'

import { useState, type FormEvent } from 'react'
import { ArrowLeft, Check, Palette, Ruler, Sparkles } from 'lucide-react'
import { InstagramIcon, WhatsappIcon } from './icons'
import { SectionTitle } from './section-title'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL, createWhatsAppMessageLink } from './site-config'

const sizes = ['Pequeño', 'Mediano', 'Grande']
const orderTypes = ['Persona', 'Animal', 'Almohadón', 'Tapiz', 'Flores']
const colorOptions = ['Rosa', 'Marfil', 'Lavanda', 'Menta', 'Celeste', 'Amarillo', 'Beige', 'Otro']

export function CustomOrderSection({ onBack }: { onBack: () => void }) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [sent, setSent] = useState(false)

  const toggleValue = (values: string[], value: string, update: (next: string[]) => void) => {
    update(values.includes(value) ? values.filter((item) => item !== value) : [...values, value])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = [
      '¡Hola PomPom! Quiero consultar por un encargo personalizado.',
      `Nombre y apellido: ${String(formData.get('name') ?? '')}`,
      `Correo electrónico: ${String(formData.get('email') ?? '')}`,
      `Teléfono / WhatsApp: ${String(formData.get('phone') ?? '')}`,
      `Tamaño: ${selectedSize || 'A definir'}`,
      `Tipo de encargo: ${selectedTypes.length ? selectedTypes.join(', ') : 'A definir'}`,
      `Colores: ${selectedColors.length ? selectedColors.join(', ') : 'A definir'}`,
      `Comentarios / detalles: ${String(formData.get('details') ?? '').trim() || 'Sin comentarios adicionales'}`,
    ].join('\n')

    window.open(createWhatsAppMessageLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

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

      <SectionTitle id="custom-order-title">PERSONALIZADOS</SectionTitle>
      <div className="mx-auto mb-9 max-w-2xl text-center">
        <p className="font-script text-4xl leading-tight text-primary md:text-5xl">Tu idea, tejida a mano</p>
        <p className="mt-3 text-base font-semibold leading-relaxed text-muted-foreground">
          Contame qué imaginás y armamos juntas una pieza especial, hecha con mucho amor.
        </p>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-3xl border-2 border-dashed border-primary/30 bg-card/75 p-6 shadow-sm md:p-8">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent text-primary">
            <Sparkles className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-xl font-black text-primary">¿Querés charlarlo primero?</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Escribime por WhatsApp o Instagram para conversar sobre tu idea, los tiempos y cada detalle.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 items-center gap-3 rounded-2xl bg-primary px-4 py-3 font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <WhatsappIcon className="size-6" />
              Consultar por WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 items-center gap-3 rounded-2xl bg-accent px-4 py-3 font-extrabold text-primary transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <InstagramIcon className="size-6" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
          <p className="mt-5 text-xs font-semibold leading-relaxed text-muted-foreground">
            Los campos con asterisco son obligatorios. Las opciones de tamaño, tipo y color nos ayudan a empezar.
          </p>
        </aside>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-card p-5 shadow-[0_12px_36px_-16px_rgb(199_52_99/0.35)] md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="custom-name" className="mb-1.5 block text-sm font-extrabold text-primary">Nombre y apellido <span aria-hidden="true">*</span></label>
              <input id="custom-name" name="name" type="text" autoComplete="name" required className="min-h-12 w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" placeholder="Tu nombre completo" />
            </div>
            <div>
              <label htmlFor="custom-email" className="mb-1.5 block text-sm font-extrabold text-primary">Correo electrónico <span aria-hidden="true">*</span></label>
              <input id="custom-email" name="email" type="email" autoComplete="email" required className="min-h-12 w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" placeholder="hola@correo.com" />
            </div>
            <div>
              <label htmlFor="custom-phone" className="mb-1.5 block text-sm font-extrabold text-primary">Teléfono / WhatsApp <span aria-hidden="true">*</span></label>
              <input id="custom-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className="min-h-12 w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" placeholder="+54 9 ..." />
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-2 flex items-center gap-2 text-sm font-extrabold text-primary"><Ruler className="size-4" aria-hidden="true" />Tamaño aproximado <span className="font-semibold text-muted-foreground">(opcional)</span></legend>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <label key={size} className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-bold transition-colors ${selectedSize === size ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background/70 text-primary hover:bg-accent'}`}>
                  <input className="sr-only" type="radio" name="size" value={size} checked={selectedSize === size} onChange={() => setSelectedSize(size)} />
                  {size}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="mb-2 flex items-center gap-2 text-sm font-extrabold text-primary"><Check className="size-4" aria-hidden="true" />Tipo de encargo <span className="font-semibold text-muted-foreground">(opcional)</span></legend>
            <div className="flex flex-wrap gap-2">
              {orderTypes.map((type) => {
                const checked = selectedTypes.includes(type)
                return (
                  <label key={type} className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-bold transition-colors ${checked ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background/70 text-primary hover:bg-accent'}`}>
                    <input className="sr-only" type="checkbox" value={type} checked={checked} onChange={() => toggleValue(selectedTypes, type, setSelectedTypes)} />
                    {type}
                  </label>
                )
              })}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="mb-2 flex items-center gap-2 text-sm font-extrabold text-primary"><Palette className="size-4" aria-hidden="true" />Colores preferidos <span className="font-semibold text-muted-foreground">(hasta 3, opcional)</span></legend>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => {
                const checked = selectedColors.includes(color)
                const limitReached = selectedColors.length >= 3 && !checked
                return (
                  <label key={color} className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-bold transition-colors ${limitReached ? 'cursor-not-allowed border-border/60 bg-background/40 text-muted-foreground/60' : 'cursor-pointer'} ${checked ? 'border-primary bg-primary text-primary-foreground' : !limitReached ? 'border-border bg-background/70 text-primary hover:bg-accent' : ''}`}>
                    <input className="sr-only" type="checkbox" value={color} checked={checked} disabled={limitReached} onChange={() => toggleValue(selectedColors, color, setSelectedColors)} />
                    {color}
                  </label>
                )
              })}
            </div>
            <p className="mt-2 text-xs font-semibold text-muted-foreground" aria-live="polite">{selectedColors.length} de 3 colores seleccionados</p>
          </fieldset>

          <div className="mt-5">
            <label htmlFor="custom-details" className="mb-1.5 block text-sm font-extrabold text-primary">Comentarios / detalles del pedido <span className="font-semibold text-muted-foreground">(opcional)</span></label>
            <textarea id="custom-details" name="details" rows={4} className="w-full resize-y rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" placeholder="Contame tu idea, colores, referencias o cualquier detalle que quieras sumar..." />
          </div>

          <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-extrabold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <WhatsappIcon className="size-5" />
            Enviar encargo
          </button>
          <p role="status" aria-live="polite" className="mt-3 min-h-5 text-center text-sm font-bold text-primary">{sent ? 'Se abrió WhatsApp con los detalles de tu encargo listos para enviar.' : ''}</p>
        </form>
      </div>
    </div>
  )
}
