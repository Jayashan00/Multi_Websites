import { createFileRoute } from '@tanstack/react-router'

import { GalleryCollection } from '#/components/gallery/GalleryCollection'
import { GalleryHero } from '#/components/gallery/GalleryHero'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: 'Food Gallery | Restaurant Name' },
      {
        name: 'description',
        content:
          'Explore signature dishes and restaurant interiors in the Restaurant Name gallery.',
      },
    ],
  }),
})

function GalleryPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/gallery" />

      <main id="main-content">
        <GalleryHero />
        <GalleryCollection />
      </main>

      <SiteFooter />
    </>
  )
}
