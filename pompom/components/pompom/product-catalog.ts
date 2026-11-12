
export type ProductCategory = 'personajes' | 'tapices' | string

export type Product = {
  id: string | number
  name: string
  category: ProductCategory
  image: string
  imageAlt: string
  price: number
  material: string
  size: string
  colors: string[]
}

export interface ProductoResponseDto {
  id: number
  nombre: string
  descripcion: string | null
  imagen: string
  imageAlt: string | null
  categoria: string | null
  personalizado: boolean | null
  precio: number
  material: string | null
  tamano: string | null
  colores: string | null // Viene como JSON desde Kotlin
  stock: number
  activo: boolean
}

export let PRODUCT_CATALOG: Product[] = []

export const PRODUCT_CATEGORIES: Record<string, { title: string; intro: string }> = {
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

const URL = "http://127.0.0.1:8080/api/productos"

export async function obtenerProductos(): Promise<Product[]> {
  try {
    const respuesta = await fetch(URL)
    if (!respuesta.ok) {
      throw new Error("Error al obtener los productos")
    }
    const rawData = await respuesta.json()

    const listaProductos: ProductoResponseDto[] = Array.isArray(rawData) 
      ? rawData 
      : (rawData.content || [])

    const productosMapeados = listaProductos.map((dto) => {
      let parsedColors: string[] = []
      try {
        parsedColors = dto.colores ? JSON.parse(dto.colores) : []
      } catch (e) {
        parsedColors = []
      }

      return {
        id: dto.id,
        name: dto.nombre,
        category: dto.categoria || 'personajes',
        image: dto.imagen,
        imageAlt: dto.imageAlt || dto.nombre,
        price: Number(dto.precio),
        material: dto.material || '',
        size: dto.tamano || '',
        colors: parsedColors,
      }
    })
    PRODUCT_CATALOG = productosMapeados
    return productosMapeados
  } catch (error) {
    console.error("Fallo la conexión con el backend:", error)
    return []
  }
}