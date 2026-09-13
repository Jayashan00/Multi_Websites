import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'
import { ComboOffers } from '#/components/offers/ComboOffers'
import { DiscountCards } from '#/components/offers/DiscountCards'
import { OffersHero } from '#/components/offers/OffersHero'
import { PromotionalBanner } from '#/components/offers/PromotionalBanner'
import { SeasonalOffers } from '#/components/offers/SeasonalOffers'

export const Route = createFileRoute('/offers')({
  component: OffersPage,
  head: () => ({
    meta: [
      { title: 'Offers & Promotions | Restaurant Name' },
      {
        name: 'description',
        content:
          'Explore Restaurant Name promotional banners, dining discounts, combo offers, and seasonal experiences.',
      },
    ],
  }),
})

function OffersPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/offers" />

      <main id="main-content">
        <OffersHero />
        <PromotionalBanner />
        <DiscountCards />
        <ComboOffers />
        <SeasonalOffers />
      </main>

      <SiteFooter />
    </>
  )
}
