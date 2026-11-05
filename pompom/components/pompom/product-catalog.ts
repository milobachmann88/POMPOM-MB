export type ProductCategory = 'personajes' | 'tapices'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  image: string
  imageAlt: string
  price: number
  material: string
  size: string
  colors: string[]
}

export const PRODUCT_CATALOG: Product[] = [
  {
    id: 'conejita-rosa',
    name: 'Conejita rosa',
    category: 'personajes',
    image: '/images/personajes-1.png',
    imageAlt: 'Conejita rosa tejida a crochet con suéter a rayas',
    price: 18500,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '17 cm',
    colors: ['Rosa', 'Marfil', 'Amarillo suave'],
  },
  {
    id: 'gatito-lazo',
    name: 'Gatito con lazo',
    category: 'personajes',
    image: '/images/personajes-2.png',
    imageAlt: 'Gatito blanco tejido a crochet con detalles rosas',
    price: 19500,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '16 cm',
    colors: ['Marfil', 'Rosa', 'Gris perla'],
  },
  {
    id: 'osito-abrazo',
    name: 'Osito abrazo',
    category: 'personajes',
    image: '/images/personajes-3.png',
    imageAlt: 'Osito tejido a crochet junto a una ranita verde',
    price: 22000,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '20 cm',
    colors: ['Caramelo', 'Beige', 'Celeste'],
  },
  {
    id: 'ranita-sonrisa',
    name: 'Ranita sonrisa',
    category: 'personajes',
    image: '/images/personajes-3.png',
    imageAlt: 'Ranita menta tejida a crochet con moño rosa',
    price: 21500,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '18 cm',
    colors: ['Menta', 'Rosa', 'Marfil'],
  },
  {
    id: 'conejita-rayas',
    name: 'Conejita de campo',
    category: 'personajes',
    image: '/images/personajes-1.png',
    imageAlt: 'Conejita artesanal de tonos rosados, tejida a crochet',
    price: 20500,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '19 cm',
    colors: ['Rosa viejo', 'Crema', 'Lavanda'],
  },
  {
    id: 'gatita-nube',
    name: 'Gatita nube',
    category: 'personajes',
    image: '/images/personajes-2.png',
    imageAlt: 'Gatita blanca a crochet con orejas y patitas rosadas',
    price: 19000,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '16 cm',
    colors: ['Blanco', 'Rosa', 'Lila'],
  },
  {
    id: 'osito-invierno',
    name: 'Osito de invierno',
    category: 'personajes',
    image: '/images/personajes-3.png',
    imageAlt: 'Osito tejido a mano con bufanda celeste',
    price: 23500,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '21 cm',
    colors: ['Beige', 'Celeste', 'Miel'],
  },
  {
    id: 'ranita-jardin',
    name: 'Ranita de jardín',
    category: 'personajes',
    image: '/images/personajes-3.png',
    imageAlt: 'Ranita verde tejida a crochet con mejillas rosadas',
    price: 22500,
    material: 'Hilo de algodón 100% y vellón siliconado',
    size: '19 cm',
    colors: ['Menta', 'Verde salvia', 'Rosa'],
  },
  {
    id: 'tapiz-gatito',
    name: 'Gatito soñador',
    category: 'tapices',
    image: '/images/tapices-2.png',
    imageAlt: 'Tapiz rosa tejido a crochet con una carita de gato',
    price: 32500,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '30 × 40 cm',
    colors: ['Rosa', 'Fucsia', 'Marfil'],
  },
  {
    id: 'tapiz-corazon',
    name: 'Corazón florido',
    category: 'tapices',
    image: '/images/tapices-1.png',
    imageAlt: 'Tapiz de crochet con corazón rosa y flores pequeñas',
    price: 35000,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '35 × 45 cm',
    colors: ['Rosa', 'Verde salvia', 'Crema'],
  },
  {
    id: 'tapiz-frutillas',
    name: 'Jardín de frutillas',
    category: 'tapices',
    image: '/images/tapices-3.png',
    imageAlt: 'Tapiz tejido con frutillas rojas y margaritas blancas',
    price: 38000,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '40 × 55 cm',
    colors: ['Rosa', 'Rojo', 'Verde', 'Marfil'],
  },
  {
    id: 'tapiz-gato-rosa',
    name: 'Michi de pared',
    category: 'tapices',
    image: '/images/tapices-2.png',
    imageAlt: 'Tapiz colgante con gato tejido a crochet en tonos rosados',
    price: 33000,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '30 × 40 cm',
    colors: ['Rosa viejo', 'Marfil', 'Bordó'],
  },
  {
    id: 'tapiz-mini-corazon',
    name: 'Corazón de hogar',
    category: 'tapices',
    image: '/images/tapices-2.png',
    imageAlt: 'Tapiz artesanal con un corazón de crochet rodeado de flores',
    price: 29500,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '28 × 36 cm',
    colors: ['Durazno', 'Rosa', 'Beige'],
  },
  {
    id: 'tapiz-margaritas',
    name: 'Margaritas de verano',
    category: 'tapices',
    image: '/images/tapices-3.png',
    imageAlt: 'Tapiz de crochet con margaritas y pequeñas frutillas',
    price: 36500,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '38 × 50 cm',
    colors: ['Natural', 'Rosa', 'Amarillo', 'Verde'],
  },
  {
    id: 'tapiz-floral',
    name: 'Rincón en flor',
    category: 'tapices',
    image: '/images/tapices-1.png',
    imageAlt: 'Tapiz decorativo de crochet con flores en colores pastel',
    price: 34500,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '34 × 44 cm',
    colors: ['Rosa claro', 'Verde salvia', 'Marfil'],
  },
  {
    id: 'tapiz-frutilla-mini',
    name: 'Dulce frutilla',
    category: 'tapices',
    image: '/images/tapices-3.png',
    imageAlt: 'Tapiz tejido a mano decorado con frutillas y flores',
    price: 31000,
    material: 'Hilo de algodón 100% con flecos de algodón',
    size: '30 × 42 cm',
    colors: ['Rosa', 'Rojo', 'Verde salvia'],
  },
]

export const PRODUCT_CATEGORIES: Record<ProductCategory, { title: string; intro: string }> = {
  personajes: {
    title: 'PERSONAJES',
    intro: 'Amigurumis tejidos a mano, listos para encontrar un nuevo hogar.',
  },
  tapices: {
    title: 'TAPICES',
    intro: 'Piezas decorativas tejidas para sumar calidez a tus rincones.',
  },
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount)
}
