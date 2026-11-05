export const INSTAGRAM_HANDLE = '@tejidos.de.gatito'
export const INSTAGRAM_URL = 'https://www.instagram.com/tejidos.de.gatito/'
export const WHATSAPP_URL =
  'https://wa.me/5491126667990?text=' + encodeURIComponent('¡Hola PomPom! Quiero hacer un pedido.')

export function createWhatsAppMessageLink(message: string) {
  const baseUrl = WHATSAPP_URL.split('?')[0]
  return `${baseUrl}?text=${encodeURIComponent(message)}`
}
