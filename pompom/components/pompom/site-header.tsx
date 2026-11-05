'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from './cart-context'
import { YarnIcon } from './icons'

const links = [
  { href: '#productos', label: 'Productos' },
  { href: '#pedidos', label: 'Pedidos' },
  { href: '#encuentro', label: 'Entregas' },
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const { count, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <a href="#inicio" className="group flex shrink-0 items-center gap-2" aria-label="PomPom, ir al inicio">
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
                  className="rounded-full px-3 py-2 text-sm font-bold text-primary transition-colors hover:bg-card/70 lg:px-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contacto"
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:px-5"
          >
            Encargar
          </a>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Abrir carrito, ${count} ${count === 1 ? 'producto' : 'productos'}`}
            className="relative flex size-11 items-center justify-center rounded-full border-2 border-primary/20 bg-card text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            {count > 0 && (
              <span aria-hidden="true" className="absolute -top-1 -right-1 flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-black leading-none text-primary-foreground">
                {count > 99 ? '99+' : count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
