import { useState } from 'react'

import { useOrderCart } from '#/components/order/OrderCartContext'
import { Button, ButtonArrow } from '#/components/ui/Button'
import { InputField, TextareaField } from '#/components/ui/FormFields'

export function CustomerDetailsForm() {
  const [fulfilment, setFulfilment] = useState<'Delivery' | 'Pickup'>(
    'Delivery',
  )
  const [previewComplete, setPreviewComplete] = useState(false)
  const { itemCount } = useOrderCart()

  return (
    <form
      className="reveal-on-scroll rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_55px_rgba(41,37,36,0.07)] sm:p-8 lg:p-10"
      onSubmit={(event) => {
        event.preventDefault()
        setPreviewComplete(true)
      }}
    >
      <div>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-9 bg-amber-600" />
          <p className="text-xs font-bold tracking-[0.17em] text-amber-700 uppercase">
            Customer information
          </p>
        </div>
        <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Where should we send your order?
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-500">
          Enter your contact information and choose how you would like to
          receive your food.
        </p>
      </div>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-stone-800">
          Order type
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {(['Delivery', 'Pickup'] as const).map((option) => (
            <label
              className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                fulfilment === option
                  ? 'border-amber-400 bg-amber-50 shadow-sm'
                  : 'border-stone-200 hover:border-stone-400'
              }`}
              key={option}
            >
              <input
                checked={fulfilment === option}
                className="sr-only"
                name="fulfilment"
                onChange={() => setFulfilment(option)}
                type="radio"
                value={option}
              />
              <span className="flex items-center justify-between gap-4">
                <span>
                  <span className="block font-semibold">{option}</span>
                  <span className="mt-1 block text-xs text-stone-500">
                    {option === 'Delivery'
                      ? 'Delivered to your address'
                      : 'Collect from the restaurant'}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`grid size-6 place-items-center rounded-full border text-xs ${
                    fulfilment === option
                      ? 'border-amber-500 bg-amber-400 text-stone-950'
                      : 'border-stone-300 text-transparent'
                  }`}
                >
                  ✓
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <InputField
          autoComplete="given-name"
          label="First name"
          name="firstName"
          placeholder="First name"
          required
          type="text"
        />
        <InputField
          autoComplete="family-name"
          label="Last name"
          name="lastName"
          placeholder="Last name"
          required
          type="text"
        />
        <InputField
          autoComplete="email"
          label="Email address"
          name="email"
          placeholder="name@example.com"
          required
          type="email"
        />
        <InputField
          autoComplete="tel"
          label="Phone number"
          name="phone"
          placeholder="+94 -- --- ----"
          required
          type="tel"
        />
        {fulfilment === 'Delivery' ? (
          <>
            <InputField
              autoComplete="street-address"
              containerClassName="review-enter sm:col-span-2"
              label="Delivery address"
              name="address"
              placeholder="Street address"
              required
              type="text"
            />
            <InputField
              autoComplete="address-level2"
              containerClassName="review-enter"
              label="City"
              name="city"
              placeholder="City"
              required
              type="text"
            />
            <InputField
              autoComplete="postal-code"
              containerClassName="review-enter"
              label="Postal code"
              name="postalCode"
              optional
              placeholder="Postal code"
              type="text"
            />
          </>
        ) : null}
        <TextareaField
          containerClassName="sm:col-span-2"
          label="Order notes"
          name="notes"
          optional
          placeholder="Allergies, special instructions, or collection notes"
        />
      </div>

      <fieldset className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <legend className="px-2 text-sm font-semibold">
          Payment preference
        </legend>
        <div className="mt-1 grid gap-3 sm:grid-cols-2">
          {['Pay on delivery', 'Pay at restaurant'].map((method, index) => (
            <label
              className="flex cursor-pointer items-center gap-3 rounded-xl bg-white p-4 text-sm shadow-sm"
              key={method}
            >
              <input
                className="accent-amber-500"
                defaultChecked={index === 0}
                name="payment"
                type="radio"
                value={method}
              />
              {method}
            </label>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-stone-500">
          Online payment is not connected. This is a frontend checkout preview
          only.
        </p>
      </fieldset>

      {previewComplete ? (
        <div
          className="review-enter mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
          role="status"
        >
          Checkout UI validated successfully. No order was submitted because
          backend processing is excluded.
        </div>
      ) : null}

      <Button
        className="mt-6 justify-between !py-3 !pr-3 !pl-6 disabled:bg-stone-200 disabled:text-stone-400"
        disabled={itemCount === 0}
        fullWidth
        type="submit"
      >
        <span>
          {itemCount > 0 ? 'Review frontend order' : 'Your cart is empty'}
        </span>
        <ButtonArrow />
      </Button>
    </form>
  )
}
