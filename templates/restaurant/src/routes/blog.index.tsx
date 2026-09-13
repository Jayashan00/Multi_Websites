import { createFileRoute } from '@tanstack/react-router'

import { BlogHero } from '#/components/blog/BlogHero'
import { BlogListing } from '#/components/blog/BlogListing'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: 'Restaurant Journal | Restaurant Name' },
      {
        name: 'description',
        content:
          'Explore stories from our kitchen, chefs, ingredients, and restaurant life in the Restaurant Name journal.',
      },
    ],
  }),
})

function BlogPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/blog" />

      <main id="main-content">
        <BlogHero />
        <BlogListing />
      </main>

      <SiteFooter />
    </>
  )
}
