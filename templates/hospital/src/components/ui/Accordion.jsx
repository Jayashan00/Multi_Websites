import { useId, useState } from 'react'
import Icon from './Icon'

export function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <div
      className={`overflow-hidden rounded-xl2 border transition-colors duration-300 ${
        open ? 'border-clinic-200 bg-white shadow-card' : 'border-clinic-100 bg-white/70'
      }`}
    >
      <h3>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors ${
              open ? 'bg-mint-500 text-white' : 'bg-clinic-50 text-clinic-500'
            }`}
          >
            <Icon name={open ? 'minus' : 'plus'} size={16} strokeWidth={2.4} />
          </span>
          <span className="flex-1 font-display text-[15px] font-semibold leading-snug sm:text-base">
            {question}
          </span>
        </button>
      </h3>
      <div
        id={id}
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-[4.25rem] text-[14.5px] leading-[1.8] text-ink-muted sm:px-6 sm:pb-6 sm:pl-[4.75rem]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Accordion({ items = [], className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((it, i) => (
        <AccordionItem key={it.q ?? i} question={it.q} answer={it.a} defaultOpen={i === 0} />
      ))}
    </div>
  )
}
