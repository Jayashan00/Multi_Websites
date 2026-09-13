import { createFileRoute } from '@tanstack/react-router'

import { ContactDetails } from '#/components/contact/ContactDetails'
import { ContactFormAndMap } from '#/components/contact/ContactFormAndMap'
import { ContactHero } from '#/components/contact/ContactHero'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact Us | Restaurant Name' },
      {
        name: 'description',
        content:
          'Contact Restaurant Name in Colombo for reservations, private dining, special requests, directions, and opening hours.',
      },
    ],
  }),
})

function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/contact" />

      <main id="main-content">
        <ContactHero />
        <ContactDetails />
        <ContactFormAndMap />
      </main>

      <SiteFooter />
    </>
  )
}
