import { formatReservationDate, tableOptions } from './reservationData'
import type { ReservationDraft } from './reservationData'

type ReservationSummaryProps = {
  details: ReservationDraft
}

export function ReservationSummary({ details }: ReservationSummaryProps) {
  const table = tableOptions.find((option) => option.id === details.tableId)
  const summaryItems = [
    ['Date', formatReservationDate(details.date)],
    ['Time', details.time || 'Choose a time'],
    [
      'Guests',
      `${details.guests} ${details.guests === 1 ? 'guest' : 'guests'}`,
    ],
    ['Table', table ? `${table.id} · ${table.area}` : 'Choose a table'],
  ]

  return (
    <aside className="reveal-on-scroll reveal-delay-1 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(41,37,36,0.08)] lg:sticky lg:top-5">
      <div className="relative min-h-48 overflow-hidden bg-stone-950 p-7 text-white">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          src="/images/restaurant-interior.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-transparent" />
        <div className="relative flex min-h-34 flex-col justify-end">
          <p className="text-xs font-bold tracking-[0.17em] text-amber-300 uppercase">
            Your evening
          </p>
          <h2 className="mt-2 font-serif text-3xl">Reservation summary</h2>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <dl className="divide-y divide-stone-200 border-y border-stone-200">
          {summaryItems.map(([label, value]) => (
            <div
              className="flex items-start justify-between gap-5 py-4 text-sm"
              key={label}
            >
              <dt className="text-stone-500">{label}</dt>
              <dd className="max-w-[65%] text-right font-semibold text-stone-800">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 rounded-2xl bg-[#fbf8f2] p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Opening hours</p>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
          </div>
          <p className="mt-3 text-xs leading-6 text-stone-500">
            Mon &ndash; Fri&nbsp;&nbsp;11:30 AM &ndash; 11:00 PM
            <br />
            Sat &ndash; Sun&nbsp;&nbsp;10:00 AM &ndash; 11:30 PM
          </p>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <span
            aria-hidden="true"
            className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-400 text-xs font-bold"
          >
            i
          </span>
          <p className="text-xs leading-5 text-amber-900">
            Your table is held only after the restaurant confirms your request.
            This page is currently a UI preview.
          </p>
        </div>
      </div>
    </aside>
  )
}
