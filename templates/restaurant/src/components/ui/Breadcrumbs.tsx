type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  className?: string
  items: Array<BreadcrumbItem>
  tone?: 'dark' | 'light'
}

export function Breadcrumbs({
  className = '',
  items,
  tone = 'dark',
}: BreadcrumbsProps) {
  const toneClasses = tone === 'dark' ? 'text-amber-300' : 'text-amber-700'

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase ${toneClasses} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-10 ${tone === 'dark' ? 'bg-amber-400' : 'bg-amber-600'}`}
      />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li
            className="flex items-center gap-2"
            key={`${item.label}-${index}`}
          >
            {index > 0 ? (
              <span aria-hidden="true" className="opacity-50">
                /
              </span>
            ) : null}
            {item.href ? (
              <a
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                href={item.href}
              >
                {item.label}
              </a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
