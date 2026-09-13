import { useEffect, useState } from 'react'

import { ReservationConfirmation } from './ReservationConfirmation'
import { ReservationForm } from './ReservationForm'
import { ReservationSummary } from './ReservationSummary'
import { initialReservation, tableOptions } from './reservationData'
import type { ReservationDraft } from './reservationData'

export function ReservationExperience() {
  const [details, setDetails] = useState<ReservationDraft>(initialReservation)
  const [isPrepared, setIsPrepared] = useState(false)

  useEffect(() => {
    if (!isPrepared) return

    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById('confirmation')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [isPrepared])

  function updateReservation(updates: Partial<ReservationDraft>) {
    setDetails((current) => {
      const next = { ...current, ...updates }
      const selectedTable = tableOptions.find(
        (table) => table.id === next.tableId,
      )

      if (selectedTable && selectedTable.seats < next.guests) {
        next.tableId = ''
      }

      return next
    })
  }

  if (isPrepared) {
    return (
      <ReservationConfirmation
        details={details}
        onModify={() => setIsPrepared(false)}
        onNewReservation={() => {
          setDetails(initialReservation)
          setIsPrepared(false)
        }}
      />
    )
  }

  return (
    <section
      className="relative overflow-hidden bg-[#fbf8f2] text-stone-950"
      id="reservation-form"
    >
      <div
        aria-hidden="true"
        className="absolute top-20 -right-48 size-[30rem] rounded-full border border-amber-200/60"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.19em] text-amber-700 uppercase">
                Plan your visit
              </p>
            </div>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight font-semibold tracking-[-0.035em] sm:text-5xl">
              A memorable evening begins with the right table.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Tell us when you are joining, choose your preferred setting, and
            preview your reservation details instantly.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_23rem]">
          <ReservationForm
            details={details}
            onConfirm={() => setIsPrepared(true)}
            onUpdate={updateReservation}
          />
          <ReservationSummary details={details} />
        </div>
      </div>
    </section>
  )
}
