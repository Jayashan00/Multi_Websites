import { formatReservationDate, tableOptions } from './reservationData'
import type { ReservationDraft } from './reservationData'

type ReservationConfirmationProps = {
  details: ReservationDraft
  onModify: () => void
  onNewReservation: () => void
}

export function ReservationConfirmation({
  details,
  onModify,
  onNewReservation,
}: ReservationConfirmationProps) {
  const table = tableOptions.find((option) => option.id === details.tableId)
  const confirmationDetails = [
    ['Guest name', details.name],
    ['Date & time', `${formatReservationDate(details.date)} · ${details.time}`],
    ['Party', `${details.guests} ${details.guests === 1 ? 'guest' : 'guests'}`],
    ['Table', table ? `${table.id} · ${table.area}` : 'Not selected'],
  ]

  return (
    <section
      className="relative overflow-hidden bg-[#fbf8f2] px-5 py-20 text-stone-950 sm:px-8 lg:py-28"
      id="confirmation"
    >
      <div
        aria-hidden="true"
        className="hero-glow absolute top-10 left-1/2 size-96 -translate-x-1/2 rounded-full bg-amber-300/25 blur-3xl"
      />
      <div className="review-enter relative mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-stone-200 bg-white shadow-[0_28px_80px_rgba(41,37,36,0.12)]">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative flex min-h-96 flex-col items-center justify-center overflow-hidden bg-stone-950 p-8 text-center text-white sm:p-12">
            <img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
              src="/images/offer-table.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/20" />
            <div className="relative">
              <span className="deal-pulse mx-auto grid size-20 place-items-center rounded-full bg-amber-400 text-3xl font-semibold text-stone-950">
                &#10003;
              </span>
              <p className="mt-7 text-xs font-bold tracking-[0.2em] text-amber-300 uppercase">
                Preview complete
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold">
                Your table request is ready.
              </h2>
              <p className="mt-5 text-sm leading-7 text-stone-300">
                Everything looks good. Review the details before a future
                backend sends this request to the restaurant.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.17em] text-amber-700 uppercase">
                  Reservation details
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">
                  Please review your visit
                </h3>
              </div>
              <span className="rounded-full bg-stone-100 px-4 py-2 text-[0.65rem] font-bold tracking-wider text-stone-500 uppercase">
                UI preview
              </span>
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {confirmationDetails.map(([label, value]) => (
                <div className="rounded-2xl bg-[#fbf8f2] p-4" key={label}>
                  <dt className="text-xs text-stone-400">{label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-stone-800">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {details.requests ? (
              <div className="mt-3 rounded-2xl border border-stone-200 p-4">
                <p className="text-xs text-stone-400">Special request</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">
                  {details.requests}
                </p>
              </div>
            ) : null}

            <div
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-6 text-amber-900"
              role="status"
            >
              Frontend preview only &mdash; no booking has been submitted or
              stored.
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-full bg-stone-950 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-stone-950"
                onClick={onModify}
                type="button"
              >
                Modify details
              </button>
              <button
                className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 transition-all duration-300 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                onClick={onNewReservation}
                type="button"
              >
                Start again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
