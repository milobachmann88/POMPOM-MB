import { InstagramIcon, WhatsappIcon, YarnIcon } from './icons'
import { Reveal } from './reveal'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from './site-config'

const contacts = [
  { title: 'INSTAGRAM', detail: INSTAGRAM_HANDLE, href: INSTAGRAM_URL, Icon: InstagramIcon },
  { title: 'WHATSAPP', detail: 'Escribime un mensaje', href: WHATSAPP_URL, Icon: WhatsappIcon },
]

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-20 px-5 pt-20 pb-10 md:pt-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {contacts.map(({ title, detail, href, Icon }, i) => (
            <Reveal key={title} delay={i * 120}>
              <section aria-labelledby={`${title}-title`} className="flex flex-col items-center text-center">
                <h2 id={`${title}-title`} className="title-white mb-5 text-3xl font-black tracking-wider md:text-4xl">
                  {title}
                </h2>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full flex-col items-center gap-3 rounded-3xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary hover:shadow-xl"
                >
                  <span className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-card group-hover:text-primary">
                    <Icon className="size-10" />
                  </span>
                  <span className="text-lg font-extrabold text-primary transition-colors group-hover:text-primary-foreground">
                    {detail}
                  </span>
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </a>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-white/50 pt-8 text-center">
          <span className="flex items-center gap-2 text-primary">
            <YarnIcon className="size-6" />
            <span className="font-script text-3xl">PomPom</span>
          </span>
          <p className="text-sm font-semibold text-primary/80">Hecho a mano con amor · {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
