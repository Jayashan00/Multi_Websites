import { useState } from 'react'

import { Button, ButtonArrow, ButtonLink } from '#/components/ui/Button'
import {
  InputField,
  SelectField,
  TextareaField,
} from '#/components/ui/FormFields'

export function ContactFormAndMap() {
  const [messagePrepared, setMessagePrepared] = useState(false)

  return (
    <section className="bg-white text-stone-950">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid overflow-hidden rounded-[2rem] border border-stone-200 shadow-[0_24px_80px_rgba(41,37,36,0.09)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal-on-scroll p-6 sm:p-10 lg:p-12">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
              Send an enquiry
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              What can we do for you?
            </h2>

            <form
              className="mt-9 grid gap-x-7 gap-y-6 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault()
                setMessagePrepared(true)
              }}
            >
              <InputField
                autoComplete="name"
                label="Your name"
                name="name"
                placeholder="Full name"
                required
                type="text"
                variant="underline"
              />
              <InputField
                autoComplete="email"
                label="Email"
                name="email"
                placeholder="name@example.com"
                required
                type="email"
                variant="underline"
              />
              <InputField
                autoComplete="tel"
                label="Phone"
                name="phone"
                optional
                placeholder="+94 -- --- ----"
                type="tel"
                variant="underline"
              />
              <SelectField
                defaultValue=""
                label="Enquiry type"
                name="subject"
                required
                variant="underline"
              >
                <option disabled value="">
                  Choose one
                </option>
                <option>General enquiry</option>
                <option>Reservation</option>
                <option>Private dining</option>
                <option>Dietary or accessibility request</option>
                <option>Feedback</option>
              </SelectField>
              <TextareaField
                containerClassName="sm:col-span-2"
                label="Message"
                name="message"
                placeholder="Tell us a little more"
                required
                variant="underline"
              />

              {messagePrepared ? (
                <p
                  className="review-enter rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 sm:col-span-2"
                  role="status"
                >
                  Your message is ready. Online delivery is not connected yet,
                  so please email or call us to complete your enquiry.
                </p>
              ) : null}

              <div className="flex flex-col gap-4 pt-1 sm:col-span-2 sm:flex-row sm:items-center">
                <Button
                  className="justify-between !py-3 !pr-3 !pl-6 sm:min-w-52"
                  type="submit"
                >
                  Send message
                  <ButtonArrow />
                </Button>
                <p className="text-xs leading-5 text-stone-400">
                  Frontend preview - details are not transmitted.
                </p>
              </div>
            </form>
          </div>

          <aside className="reveal-on-scroll reveal-delay-1 flex min-h-[36rem] flex-col bg-stone-950 text-white">
            <div className="relative min-h-[23rem] flex-1 bg-stone-200">
              <iframe
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Colombo%2003%20Sri%20Lanka&output=embed"
                title="Map showing the restaurant location in Colombo 03"
              />
            </div>
            <div className="p-7 sm:p-8">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.18em] text-amber-300 uppercase">
                    Opening hours
                  </p>
                  <p className="mt-3 font-serif text-2xl font-semibold">
                    Plan your visit
                  </p>
                </div>
                <a
                  aria-label="Open restaurant location in Google Maps"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-amber-400 font-bold text-stone-950 transition-transform hover:-translate-y-0.5"
                  href="https://maps.google.com/?q=Colombo+03+Sri+Lanka"
                  rel="noreferrer"
                  target="_blank"
                >
                  &nearr;
                </a>
              </div>
              <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                <div className="flex justify-between gap-5">
                  <dt className="text-stone-400">Monday - Friday</dt>
                  <dd className="text-right text-stone-200">
                    11:30 AM - 11:00 PM
                  </dd>
                </div>
                <div className="flex justify-between gap-5">
                  <dt className="text-stone-400">Saturday - Sunday</dt>
                  <dd className="text-right text-stone-200">
                    10:00 AM - 11:30 PM
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        <div className="reveal-on-scroll mt-10 flex flex-col gap-6 rounded-[1.75rem] bg-amber-400 p-7 text-stone-950 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase">
              Prefer to book now?
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold">
              Reserve your table online.
            </h2>
          </div>
          <ButtonLink
            className="justify-between !py-3 !pr-3 !pl-6 sm:min-w-52"
            href="/reservation"
          >
            Book a table
            <ButtonArrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
