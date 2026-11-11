import { Product, ProductCategory } from '@/components/pompom/product-catalog'
import { ProductoResponseDto } from '@/components/pompom/product-catalog'

export function mapProductoToProduct(dto: ProductoResponseDto): Product {
  // Normalizamos la categoría que viene de la BD (ej. 'personajes' o 'tapices')
  const rawCategory = dto.categoria?.toLowerCase() || 'personajes'
  const validCategory: ProductCategory = rawCategory.includes('tapiz') ? 'tapices' : 'personajes'

  return {
    id: String(dto.id),
    name: dto.nombre,
    category: validCategory,
    // Como la BD no guarda la ruta de la imagen ni material/size (por ahora), 
    // usamos la convención del ID o fallbacks estéticos:
    image: `/images/imagenes-pompom/${dto.id}.jpeg`, 
    imageAlt: dto.nombre,
    price: Number(dto.precio), // Aseguramos que sea número para calcular precios/formatos
    material: 'Lana acrílica',   // Estético del frontend
    size: dto.descripcion || 'Estándar', // Podés usar la descripción de la BD como medida si coincide
    colors: [],                  // Variantes o colores adicionales
  }
}