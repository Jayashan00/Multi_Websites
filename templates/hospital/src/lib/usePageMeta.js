import { useEffect } from 'react'

/**
 * Tiny per-page metadata hook: keeps <title> and the description/OG tags in
 * sync as the visitor moves between routes. Avoids pulling in react-helmet
 * for what is a handful of DOM writes.
 */
export function usePageMeta({ title, description, image }) {
  useEffect(() => {
    if (title) document.title = title

    const set = (selector, attr, value) => {
      if (!value) return
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [key, val] = selector.replace(/meta\[|\]/g, '').split('=')
        el.setAttribute(key, val.replace(/"/g, ''))
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:image"]', 'content', image)
    set('meta[name="twitter:title"]', 'content', title)
    set('meta[name="twitter:description"]', 'content', description)
  }, [title, description, image])
}

export default usePageMeta
