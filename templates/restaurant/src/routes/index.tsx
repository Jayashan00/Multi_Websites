import { createFileRoute } from '@tanstack/react-router'

import { ChefIntroduction } from '#/components/home/ChefIntroduction'
import { ContactSection } from '#/components/home/ContactSection'
import { CustomerReviews } from '#/components/home/CustomerReviews'
import { FeaturedDishes } from '#/components/home/FeaturedDishes'
import { FoodCategories } from '#/components/home/FoodCategories'
import { GalleryPreview } from '#/components/home/GalleryPreview'
import { HeroSection } from '#/components/home/HeroSection'
import { RestaurantIntroduction } from '#/components/home/RestaurantIntroduction'
import { ReservationCallToAction } from '#/components/home/ReservationCallToAction'
import { SpecialOffers } from '#/components/home/SpecialOffers'
import { TodaysSpecials } from '#/components/home/TodaysSpecials'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/" />

      <main id="main-content">
        <HeroSection />
        <RestaurantIntroduction />
        <FeaturedDishes />
        <FoodCategories />
        <SpecialOffers />
        <TodaysSpecials />
        <ChefIntroduction />
        <CustomerReviews />
        <GalleryPreview />
        <ReservationCallToAction />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  )
}
