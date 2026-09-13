import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'
import { ChefProfiles } from '#/components/team/ChefProfiles'
import { StaffDetails } from '#/components/team/StaffDetails'
import { TeamHero } from '#/components/team/TeamHero'

export const Route = createFileRoute('/team')({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: 'Chef & Team | Restaurant Name' },
      {
        name: 'description',
        content:
          'Meet the chefs and restaurant team behind Restaurant Name, including their experience and specialties.',
      },
    ],
  }),
})

function TeamPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/team" />

      <main id="main-content">
        <TeamHero />
        <ChefProfiles />
        <StaffDetails />
      </main>

      <SiteFooter />
    </>
  )
}
