import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'
import { MenuCatalog } from '#/components/menu/MenuCatalog'
import { MenuHero } from '#/components/menu/MenuHero'

export const Route = createFileRoute('/menu')({
  component: MenuPage,
  head: () => ({
    meta: [
      {
        title: 'Our Menu | Restaurant Name',
      },
      {
        name: 'description',
        content:
          'Explore breakfast, lunch, dinner, desserts, and beverages from Restaurant Name.',
      },
    ],
  }),
})

function MenuPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/menu" />

      <main id="main-content">
        <MenuHero />
        <MenuCatalog />
      </main>

      <SiteFooter />
    </>
  )
}
