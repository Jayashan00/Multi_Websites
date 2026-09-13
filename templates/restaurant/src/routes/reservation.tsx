import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'
import { ReservationExperience } from '#/components/reservation/ReservationExperience'
import { ReservationHero } from '#/components/reservation/ReservationHero'

export const Route = createFileRoute('/reservation')({
  component: ReservationPage,
  head: () => ({
    meta: [
      { title: 'Table Reservation | Restaurant Name' },
      {
        name: 'description',
        content:
          'Choose a date, time, guest count, and table using the Restaurant Name reservation interface.',
      },
    ],
  }),
})

function ReservationPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/reservation" />

      <main id="main-content">
        <ReservationHero />
        <ReservationExperience />
      </main>

      <SiteFooter />
    </>
  )
}
