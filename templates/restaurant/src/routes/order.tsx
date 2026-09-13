import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'
import { OrderCatalog } from '#/components/order/OrderCatalog'
import { OrderHero } from '#/components/order/OrderHero'

export const Route = createFileRoute('/order')({
  component: OrderPage,
  head: () => ({
    meta: [
      { title: 'Order Online | Restaurant Name' },
      {
        name: 'description',
        content:
          'Select food, update your cart, and continue to the Restaurant Name checkout interface.',
      },
    ],
  }),
})

function OrderPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/order" />

      <main id="main-content">
        <OrderHero />
        <OrderCatalog />
      </main>

      <SiteFooter />
    </>
  )
}
