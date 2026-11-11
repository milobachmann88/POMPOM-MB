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
    id: 'coraline',
    name: 'Coraline',
    category: 'personajes',
    image: '/images/imagenes-pompom/coraline.jpeg',
    imageAlt: 'Coraline',
    price: 20000,
    material: 'Lana acrílica y botones de plástico',
    size: '20 cm',
    colors: ['Wybie', 'Otra madre', 'Bobinsky'],
  },
  {
    id: 'harry',
    name: 'Harry Potter',
    category: 'personajes',
    image: '/images/imagenes-pompom/harry.jpeg',
    imageAlt: 'Harry Potter',
    price: 22000,
    material: 'Lana acrílica y ojos de plástico ',
    size: '25 cm',
    colors: ['Ron', 'Hermione', 'Draco'],
  },
  {
    id: 'spiderman',
    name: 'Spider-Man',
    category: 'personajes',
    image: '/images/imagenes-pompom/spiderman.jpg',
    imageAlt: 'Spiderman',
    price: 20000,
    material: 'Lana acrílica',
    size: '20 cm',
    colors: ['Venom', 'Gwen', 'Miles'],
  },
  {
    id: 'pucca',
    name: 'Pucca',
    category: 'personajes',
    image: '/images/imagenes-pompom/pucca.jpeg',
    imageAlt: 'Pucca',
    price: 18000,
    material: 'Lana acrílica',
    size: '18 cm',
    colors: ['Garu', 'Ring', 'Tobe'],
  },
  {
    id: 'luffy',
    name: 'Luffy (One Piece)',
    category: 'personajes',
    image: '/images/imagenes-pompom/luffy.jpeg',
    imageAlt: 'Luffy de One Piece',
    price: 20000,
    material: 'Lana acrílica y ojos de plástico',
    size: '19 cm',
    colors: ['Ace', 'Nami', 'Chopper'],
  },
  {
    id: 'snoopy',
    name: 'Snoopy',
    category: 'personajes',
    image: '/images/imagenes-pompom/snupi.jpeg',
    imageAlt: 'Snoopy',
    price: 20000,
    material: 'Lana de algodón',
    size: '16 cm',
    colors: ['Woodstock', 'Charlie Brown', 'Lucy'],
  },
  {
    id: 'silksong',
    name: 'Hornet',
    category: 'personajes',
    image: '/images/imagenes-pompom/silksong.png',
    imageAlt: 'Hornet (Silksong)',
    price: 25000,
    material: 'Lana acrílica',
    size: '25 cm',
    colors: ['Hollow Knight', 'Zote', 'Grimm'],
  },
  {
    id: 'chancho',
    name: 'Pato (Gravity Falls)',
    category: 'personajes',
    image: '/images/imagenes-pompom/chancho.jpg',
    imageAlt: 'Cerdito',
    price: 25000,
    material: 'Lana acrílica y ojos de plástico',
    size: '30 cm',
    colors: ['Mabel', 'Dipper', 'Bill'],
  },
  {
    id: 'tapiz-loto',
    name: 'Flor de loto fileteado',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizloto.jpeg',
    imageAlt: 'Tapiz de flor de loto',
    price: 60000,
    material: 'Hilo de algodón 100%',
    size: ' 120 × 70 cm',
    colors: ['Rojo', 'Negro', 'Verde'],
  },
  {
    id: 'tapiz-cisne',
    name: 'Cisne',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizcisne.jpeg',
    imageAlt: 'Tapiz de cisne',
    price: 38000,
    material: 'Hilo de algodón 100%',
    size: '35 × 35 cm',
    colors: ['Violeta', 'Verde', 'Negro'],
  },
  {
    id: 'tapiz-conejo',
    name: 'Conejito',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizconejito.jpeg',
    imageAlt: 'Tapiz de conejito',
    price: 15000,
    material: 'Hilo de algodón 100%',
    size: '15 × 15 cm',
    colors: ['Celeste', 'Naranja', 'Mostaza', 'Rojo'],
  },
  {
    id: 'tapiz-estrella',
    name: 'Estrella',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizestrella.png',
    imageAlt: 'Tapiz con forma de estrella',
    price: 45000,
    material: 'Hilo de algodón 100%',
    size: '70 × 60 cm',
    colors: ['Rosa', 'Verde', 'Azul'],
  },
  {
    id: 'tapiz-flor',
    name: 'Flor',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizflor.jpeg',
    imageAlt: 'Tapiz de flor',
    price: 20000,
    material: 'Hilo de algodón 100%',
    size: '15 × 20 cm',
    colors: ['Lila', 'Verde agua', 'Azul'],
  },
  {
    id: 'tapiz-gato',
    name: 'Gatito Ghibli',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizgatito.jpeg',
    imageAlt: 'Tapiz de gato',
    price: 38000,
    material: 'Hilo de algodón 100%',
    size: '35 × 60 cm',
    colors: ['Celeste', 'Lila', 'Amarillo', 'Verde'],
  },
  {
    id: 'tapiz-libelula',
    name: 'Libélula mágica',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizlibelula.jpeg',
    imageAlt: 'Tapiz de libelula',
    price: 25000,
    material: 'Hilo de algodón 100%',
    size: '25 × 30 cm',
    colors: ['Rosa viejo', 'Azul noche', 'Violeta'],
  },
  {
    id: 'tapiz-luna',
    name: 'Luna',
    category: 'tapices',
    image: '/images/imagenes-pompom/tapizluna.jpeg',
    imageAlt: 'Tapiz de luna',
    price: 25000,
    material: 'Hilo de algodón 100%',
    size: '30 × 30 cm',
    colors: ['Rosa', 'Rojo', 'Negro'],
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
