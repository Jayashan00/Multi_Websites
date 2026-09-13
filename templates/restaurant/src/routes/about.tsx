import { createFileRoute } from '@tanstack/react-router'

import { AboutHero } from '#/components/about/AboutHero'
import { AboutImageSections } from '#/components/about/AboutImageSections'
import { AwardsAchievements } from '#/components/about/AwardsAchievements'
import { RestaurantFacilities } from '#/components/about/RestaurantFacilities'
import { RestaurantStory } from '#/components/about/RestaurantStory'
import { VisionMission } from '#/components/about/VisionMission'
import { ChefIntroduction } from '#/components/home/ChefIntroduction'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: 'About Us | Restaurant Name',
      },
      {
        name: 'description',
        content:
          'Learn about our restaurant story, values, facilities, culinary team, and achievements.',
      },
    ],
  }),
})

function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/about" />

      <main id="main-content">
        <AboutHero />

        <RestaurantStory />

        <VisionMission />

        <RestaurantFacilities />

        <ChefIntroduction />

        <AwardsAchievements />

        <AboutImageSections />
      </main>

      <SiteFooter />
    </>
  )
}
