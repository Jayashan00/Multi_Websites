import { useState } from 'react'

const inputClasses =
  'mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'

export function CateringInquiryForm() {
  const [previewComplete, setPreviewComplete] = useState(false)

  return (
    <section
      className="relative overflow-hidden bg-[#f7f2e9] text-stone-950"
      id="catering-inquiry"
    >
      <div
        aria-hidden="true"
        className="absolute top-20 -right-52 size-[34rem] rounded-full border border-amber-200/70"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal-on-scroll grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold tracking-[0.19em] text-amber-700 uppercase">
                Start the conversation
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl">
              Tell us what you are imagining.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600">
            Share the essentials and preview your inquiry. Our current frontend
            does not transmit or store these details.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="reveal-on-scroll relative min-h-[38rem] overflow-hidden rounded-[2rem] bg-stone-950 text-white shadow-[0_20px_60px_rgba(41,37,36,0.14)] lg:sticky lg:top-5">
            <img
              alt="A private table prepared for a catered celebration"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              src="/images/offer-table.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/15" />
            <div className="absolute right-7 bottom-7 left-7">
              <p className="text-[0.62rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                Let’s make it memorable
              </p>
              <h3 className="mt-3 font-serif text-4xl font-semibold">
                Every gathering begins with a conversation.
              </h3>
              <div className="mt-7 border-t border-white/15 pt-6 text-sm">
                <a
                  className="block font-semibold text-white transition-colors hover:text-amber-300"
                  href="tel:+94112345678"
                >
                  +94 11 234 5678
                </a>
                <a
                  className="mt-2 block text-stone-400 transition-colors hover:text-amber-300"
                  href="mailto:events@restaurantname.lk"
                >
                  events@restaurantname.lk
                </a>
              </div>
            </div>
          </aside>

          <form
            className="reveal-on-scroll reveal-delay-1 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(41,37,36,0.08)] sm:p-8 lg:p-10"
            onSubmit={(event) => {
              event.preventDefault()
              setPreviewComplete(true)
            }}
          >
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-amber-700 uppercase">
                Event details
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold">
                Build your inquiry
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-500">
                Required fields help prepare a complete future catering request.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-stone-700">
                Full name
                <input
                  autoComplete="name"
                  className={inputClasses}
                  name="name"
                  placeholder="Your full name"
                  required
                  type="text"
                />
              </label>
              <label className="text-sm font-medium text-stone-700">
                Phone number
                <input
                  autoComplete="tel"
                  className={inputClasses}
                  name="phone"
                  placeholder="+94 -- --- ----"
                  required
                  type="tel"
                />
              </label>
              <label className="text-sm font-medium text-stone-700 sm:col-span-2">
                Email address
                <input
                  autoComplete="email"
                  className={inputClasses}
                  name="email"
                  placeholder="name@example.com"
                  required
                  type="email"
                />
              </label>
              <label className="text-sm font-medium text-stone-700">
                Event type
                <select
                  className={inputClasses}
                  defaultValue=""
                  name="eventType"
                  required
                >
                  <option disabled value="">
                    Select an event
                  </option>
                  <option>Wedding</option>
                  <option>Corporate event</option>
                  <option>Private party</option>
                  <option>Birthday</option>
                  <option>Cocktail reception</option>
                  <option>Outdoor event</option>
                </select>
              </label>
              <label className="text-sm font-medium text-stone-700">
                Preferred package
                <select
                  className={inputClasses}
                  defaultValue=""
                  name="package"
                  required
                >
                  <option disabled value="">
                    Select a package
                  </option>
                  <option>Essential Gathering</option>
                  <option>Signature Celebration</option>
                  <option>Grand Occasion</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="text-sm font-medium text-stone-700">
                Preferred date
                <input
                  className={inputClasses}
                  name="date"
                  required
                  type="date"
                />
              </label>
              <label className="text-sm font-medium text-stone-700">
                Estimated guests
                <input
                  className={inputClasses}
                  min="1"
                  name="guests"
                  placeholder="Number of guests"
                  required
                  type="number"
                />
              </label>
              <label className="text-sm font-medium text-stone-700">
                Estimated budget
                <select className={inputClasses} defaultValue="" name="budget">
                  <option disabled value="">
                    Select a range
                  </option>
                  <option>Below LKR 250,000</option>
                  <option>LKR 250,000 – 500,000</option>
                  <option>LKR 500,000 – 1,000,000</option>
                  <option>Above LKR 1,000,000</option>
                </select>
              </label>
              <label className="text-sm font-medium text-stone-700">
                Event location
                <input
                  className={inputClasses}
                  name="location"
                  placeholder="Venue or city"
                  type="text"
                />
              </label>
              <label className="text-sm font-medium text-stone-700 sm:col-span-2">
                Event details{' '}
                <span className="font-normal text-stone-400">(optional)</span>
                <textarea
                  className={`${inputClasses} min-h-32 resize-y`}
                  name="details"
                  placeholder="Tell us about the occasion, menu preferences, dietary needs, and service requirements"
                />
              </label>
            </div>

            {previewComplete ? (
              <div
                className="review-enter mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
                role="status"
              >
                Your catering inquiry UI is complete. No information was sent or
                stored because backend processing is excluded.
              </div>
            ) : null}

            <button
              className="group mt-7 flex w-full items-center justify-between rounded-full bg-stone-950 py-3 pr-3 pl-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-stone-950"
              type="submit"
            >
              <span>Prepare catering inquiry</span>
              <span className="grid size-9 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-stone-400">
              Frontend demonstration only. No inquiry will be submitted.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
