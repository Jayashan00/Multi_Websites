import { createFileRoute, notFound } from '@tanstack/react-router'

import { BlogDetailsLayout } from '#/components/blog/BlogDetailsLayout'
import { getBlogPost } from '#/components/blog/blogData'
import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug)

    if (!post) {
      throw notFound()
    }

    return post
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? 'Journal'} | Restaurant Name` },
      {
        name: 'description',
        content: loaderData?.excerpt ?? 'A story from Restaurant Name.',
      },
    ],
  }),
  component: BlogDetailPage,
})

function BlogDetailPage() {
  const post = Route.useLoaderData()

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/blog" />

      <main id="main-content">
        <BlogDetailsLayout post={post} />
      </main>

      <SiteFooter />
    </>
  )
}
