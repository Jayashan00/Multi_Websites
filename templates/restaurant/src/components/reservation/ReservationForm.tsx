import { useState } from 'react'

import { TableSelection } from './TableSelection'
import type { ReservationDraft, ReservationUpdate } from './reservationData'

const inputClasses =
  'mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'

type ReservationFormProps = {
  details: ReservationDraft
  onUpdate: ReservationUpdate
  onConfirm: () => void
}

export function ReservationForm({
  details,
  onUpdate,
  onConfirm,
}: ReservationFormProps) {
  const [tableError, setTableError] = useState(false)

  return (
    <form
      className="reveal-on-scroll overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(41,37,36,0.08)]"
      onSubmit={(event) => {
        event.preventDefault()
        if (!details.tableId) {
          setTableError(true)
          document.getElementById('table-selection')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
          return
        }

        setTableError(false)
        onConfirm()
      }}
    >
      <div className="border-b border-stone-200 bg-stone-950 px-6 py-6 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.17em] text-amber-300 uppercase">
              Reservation details
            </p>
            <h3 className="mt-2 font-serif text-2xl">Shape your experience</h3>
          </div>
          <p className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-stone-300">
            Takes about 2 minutes
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-amber-700 uppercase">
            Step 01
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold">
            When are you joining us?
          </h3>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <label className="text-sm font-medium text-stone-700">
            Reservation date
            <input
              className={inputClasses}
              name="date"
              onChange={(event) => onUpdate({ date: event.target.value })}
              required
              type="date"
              value={details.date}
            />
          </label>
          <label className="text-sm font-medium text-stone-700">
            Preferred time
            <select
              className={inputClasses}
              name="time"
              onChange={(event) => onUpdate({ time: event.target.value })}
              required
              value={details.time}
            >
              <option disabled value="">
                Select a time
              </option>
              {[
                '6:00 PM',
                '6:30 PM',
                '7:00 PM',
                '7:30 PM',
                '8:00 PM',
                '8:30 PM',
                '9:00 PM',
              ].map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-stone-700">
            Number of guests
            <select
              className={inputClasses}
              name="guests"
              onChange={(event) =>
                onUpdate({ guests: Number(event.target.value) })
              }
              value={details.guests}
            >
              {Array.from({ length: 8 }, (_, index) => index + 1).map(
                (guests) => (
                  <option key={guests} value={guests}>
                    {guests} {guests === 1 ? 'guest' : 'guests'}
                  </option>
                ),
              )}
            </select>
          </label>
        </div>

        <div id="table-selection">
          <TableSelection
            guestCount={details.guests}
            onSelect={(tableId) => {
              setTableError(false)
              onUpdate({ tableId })
            }}
            selectedTableId={details.tableId}
          />
        </div>
        {tableError ? (
          <p
            className="review-enter mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            role="alert"
          >
            Please choose an available table before continuing.
          </p>
        ) : null}

        <div className="mt-10 border-t border-stone-200 pt-9">
          <p className="text-xs font-bold tracking-[0.14em] text-amber-700 uppercase">
            Step 03
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold">
            Tell us who to welcome
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-stone-700">
              Full name
              <input
                autoComplete="name"
                className={inputClasses}
                name="name"
                onChange={(event) => onUpdate({ name: event.target.value })}
                placeholder="Your full name"
                required
                type="text"
                value={details.name}
              />
            </label>
            <label className="text-sm font-medium text-stone-700">
              Phone number
              <input
                autoComplete="tel"
                className={inputClasses}
                name="phone"
                onChange={(event) => onUpdate({ phone: event.target.value })}
                placeholder="+94 -- --- ----"
                required
                type="tel"
                value={details.phone}
              />
            </label>
            <label className="text-sm font-medium text-stone-700 sm:col-span-2">
              Email address
              <input
                autoComplete="email"
                className={inputClasses}
                name="email"
                onChange={(event) => onUpdate({ email: event.target.value })}
                placeholder="name@example.com"
                required
                type="email"
                value={details.email}
              />
            </label>
            <label className="text-sm font-medium text-stone-700 sm:col-span-2">
              Special requests{' '}
              <span className="font-normal text-stone-400">(optional)</span>
              <textarea
                className={`${inputClasses} min-h-28 resize-y`}
                name="requests"
                onChange={(event) => onUpdate({ requests: event.target.value })}
                placeholder="Celebration details, accessibility needs, dietary notes, or seating preferences"
                value={details.requests}
              />
            </label>
          </div>
        </div>

        <button
          className="group mt-7 flex w-full items-center justify-between rounded-full bg-stone-950 py-3 pr-3 pl-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-stone-950"
          type="submit"
        >
          <span>Prepare reservation</span>
          <span className="grid size-9 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </button>
        <p className="mt-4 text-center text-xs leading-5 text-stone-400">
          Frontend demonstration only. No reservation is sent to the restaurant.
        </p>
      </div>
    </form>
  )
}
