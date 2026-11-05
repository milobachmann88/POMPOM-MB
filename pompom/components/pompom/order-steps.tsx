import { Reveal } from './reveal'
import { SectionTitle } from './section-title'

const steps = [
  'Contactarse por medio de Instagram o Whatsapp.',
  'Describir tu pedido e incluir fotos de referencia.',
  'Pagar una seña del 50%.',
  'Esperar el tiempo estimado de realización.',
  'Coordinar punto de encuentro para la entrega.',
]

export function OrderSteps() {
  return (
    <section aria-labelledby="pedidos-title" id="pedidos" className="scroll-mt-20 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle id="pedidos-title">¿CÓMO ENCARGAR UN PEDIDO?</SectionTitle>
        <ol className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 90}>
              <div className="flex items-center gap-4 rounded-2xl bg-card/90 p-4 shadow-sm transition-all duration-300 hover:translate-x-1 hover:bg-card hover:shadow-md md:gap-6 md:p-5">
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-black text-primary-foreground"
                >
                  {i + 1}
                </span>
                <p className="text-lg font-semibold leading-snug text-primary">{step}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
