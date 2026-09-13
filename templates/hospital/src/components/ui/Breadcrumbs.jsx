import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function Breadcrumbs({ items = [], light = false }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.12em] ${
        light ? 'text-clinic-100' : 'text-ink-muted'
      }`}>
        <li>
          <Link to="/" className={`transition hover:${light ? 'text-white' : 'text-clinic-500'}`}>
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <Icon name="chevronRight" size={12} className="opacity-45" />
              {last || !item.to ? (
                <span aria-current={last ? 'page' : undefined} className={light ? 'text-white' : 'text-clinic-600'}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className={`transition hover:${light ? 'text-white' : 'text-clinic-500'}`}>
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
