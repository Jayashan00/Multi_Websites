import { useId } from 'react'
import Icon from './Icon'

function Wrapper({ id, label, error, hint, required, children, className = '' }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="label">
          {label}
          {required && <span className="ml-0.5 text-emergency-500" aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-emergency-600" role="alert">
          <Icon name="alert" size={13} strokeWidth={2.2} />
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>
      ) : null}
    </div>
  )
}

export function Input({ label, error, hint, className, required, ...rest }) {
  const id = useId()
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <input
        id={id}
        aria-invalid={!!error}
        className={`field ${error ? 'field-error' : ''}`}
        {...rest}
      />
    </Wrapper>
  )
}

export function Textarea({ label, error, hint, className, required, rows = 5, ...rest }) {
  const id = useId()
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <textarea
        id={id}
        rows={rows}
        aria-invalid={!!error}
        className={`field resize-y ${error ? 'field-error' : ''}`}
        {...rest}
      />
    </Wrapper>
  )
}

export function Select({ label, error, hint, className, required, options = [], placeholder, ...rest }) {
  const id = useId()
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <div className="relative">
        <select
          id={id}
          aria-invalid={!!error}
          className={`field appearance-none pr-11 ${error ? 'field-error' : ''} ${
            rest.value ? '' : 'text-ink-muted/70'
          }`}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) =>
            typeof o === 'string' ? (
              <option key={o} value={o}>{o}</option>
            ) : (
              <option key={o.value} value={o.value} disabled={o.disabled}>
                {o.label}
              </option>
            ),
          )}
        </select>
        <Icon
          name="chevronDown"
          size={17}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted"
        />
      </div>
    </Wrapper>
  )
}

export function Radio({ name, value, checked, onChange, label, sub, disabled }) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition ${
        disabled
          ? 'cursor-not-allowed border-clinic-100 bg-paper/60 opacity-55'
          : checked
            ? 'border-clinic-400 bg-clinic-50/70 shadow-glow'
            : 'border-clinic-100 bg-white hover:border-clinic-200'
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
      />
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${
          checked ? 'border-clinic-500 bg-clinic-500' : 'border-clinic-200 bg-white'
        }`}
      >
        {checked && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight text-ink">{label}</span>
        {sub && <span className="mt-0.5 block font-mono text-xs text-ink-muted">{sub}</span>}
      </span>
    </label>
  )
}

export function Checkbox({ checked, onChange, label, name }) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} className="sr-only" />
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition ${
          checked ? 'border-mint-500 bg-mint-500 text-white' : 'border-clinic-200 bg-white'
        }`}
      >
        {checked && <Icon name="check" size={13} strokeWidth={3} />}
      </span>
      <span className="text-sm leading-relaxed text-ink-soft">{label}</span>
    </label>
  )
}
