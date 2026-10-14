import { AboutSection } from '@/components/pompom/about-section'
import { Hero } from '@/components/pompom/hero'
import { MeetingPoints } from '@/components/pompom/meeting-points'
import { OrderSteps } from '@/components/pompom/order-steps'
import { ProductsSection } from '@/components/pompom/products-section'
import { SiteFooter } from '@/components/pompom/site-footer'
import { SiteHeader } from '@/components/pompom/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductsSection />
        <OrderSteps />
        <MeetingPoints />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  )
}
