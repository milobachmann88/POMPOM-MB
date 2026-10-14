import { YarnIcon } from './icons'

const links = [
  { href: '#productos', label: 'Productos' },
  { href: '#pedidos', label: 'Pedidos' },
  { href: '#encuentro', label: 'Entregas' },
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="group flex items-center gap-2" aria-label="PomPom, ir al inicio">
          <span className="flex size-10 items-center justify-center rounded-full bg-card text-primary shadow-sm transition-transform duration-300 group-hover:rotate-12">
            <YarnIcon className="size-6" />
          </span>
          <span className="font-script text-3xl leading-none text-primary">PomPom</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-card/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:hidden"
        >
          Encargar
        </a>
      </div>
    </header>
  )
}
