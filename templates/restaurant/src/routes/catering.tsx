import { createFileRoute } from '@tanstack/react-router'

import { CateringHero } from '#/components/catering/CateringHero'
import { CateringInquiryForm } from '#/components/catering/CateringInquiryForm'
import { CateringPackages } from '#/components/catering/CateringPackages'
import { EventTypes } from '#/components/catering/EventTypes'
import { ServiceInformation } from '#/components/catering/ServiceInformation'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'

export const Route = createFileRoute('/catering')({
  component: CateringPage,
  head: () => ({
    meta: [
      { title: 'Catering Services | Restaurant Name' },
      {
        name: 'description',
        content:
          'Explore catering packages, event types, service information, and the catering inquiry interface from Restaurant Name.',
      },
    ],
  }),
})

function CateringPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/catering" />

      <main id="main-content">
        <CateringHero />
        <CateringPackages />
        <EventTypes />
        <ServiceInformation />
        <CateringInquiryForm />
      </main>

      <SiteFooter />
    </>
  )
}
