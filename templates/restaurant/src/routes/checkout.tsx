import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '#/components/layout/SiteFooter'
import { SiteHeader } from '#/components/layout/SiteHeader'
import { CheckoutOrderReview } from '#/components/order/CheckoutOrderReview'
import { CustomerDetailsForm } from '#/components/order/CustomerDetailsForm'

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: 'Checkout | Restaurant Name' },
      {
        name: 'description',
        content:
          'Review your order and enter customer details in the Restaurant Name checkout interface.',
      },
    ],
  }),
})

const checkoutSteps = ['Order', 'Details', 'Confirm']

function CheckoutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader activePath="/order" />

      <main id="main-content">
        <section className="relative overflow-hidden bg-stone-950 text-white">
          <div
            aria-hidden="true"
            className="hero-glow absolute -top-48 -right-36 size-[30rem] rounded-full bg-amber-400/15 blur-3xl"
          />
          <div className="hero-copy relative mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 lg:pt-40 lg:pb-20">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-amber-300 uppercase">
              <span aria-hidden="true" className="h-px w-9 bg-amber-400" />
              Order online / Checkout
            </div>
            <div className="mt-6 flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
              <div>
                <h1 className="font-serif text-5xl leading-tight font-medium tracking-[-0.04em] sm:text-6xl">
                  Complete your
                  <span className="block text-amber-300 italic">
                    order details.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-stone-300">
                  Review your selection and tell us how to prepare your order.
                </p>
              </div>

              <ol className="flex max-w-md items-center gap-2 sm:gap-3">
                {checkoutSteps.map((step, index) => (
                  <li className="flex items-center gap-2 sm:gap-3" key={step}>
                    {index > 0 ? (
                      <span
                        aria-hidden="true"
                        className="h-px w-3 bg-stone-700 sm:w-6"
                      />
                    ) : null}
                    <span
                      className={`grid size-9 place-items-center rounded-full border text-xs font-bold ${
                        index === 1
                          ? 'border-amber-400 bg-amber-400 text-stone-950'
                          : 'border-stone-700 text-stone-400'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="hidden text-xs text-stone-400 sm:block">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf8f2] text-stone-950">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_23rem] lg:py-24">
            <CustomerDetailsForm />
            <CheckoutOrderReview />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
