import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

type FieldVariant = 'boxed' | 'underline'

type SharedFieldProps = {
  containerClassName?: string
  controlClassName?: string
  error?: string
  hint?: string
  label: string
  optional?: boolean
  variant?: FieldVariant
}

const controlClasses: Record<FieldVariant, string> = {
  boxed:
    'mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100',
  underline:
    'mt-2 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-amber-600 focus:ring-0',
}

function FieldLabel({
  children,
  label,
  optional,
  variant,
}: {
  children: ReactNode
  label: string
  optional?: boolean
  variant: FieldVariant
}) {
  return (
    <>
      <span
        className={
          variant === 'underline'
            ? 'text-xs font-bold tracking-wide text-stone-600 uppercase'
            : 'text-sm font-medium text-stone-700'
        }
      >
        {label}{' '}
        {optional ? (
          <span className="font-normal text-stone-400">(optional)</span>
        ) : null}
      </span>
      {children}
    </>
  )
}

function FieldMessage({
  error,
  hint,
  id,
}: {
  error?: string
  hint?: string
  id: string
}) {
  const message = error ?? hint
  if (!message) return null

  return (
    <span
      className={`mt-2 block text-xs leading-5 ${
        error ? 'text-red-700' : 'text-stone-500'
      }`}
      id={id}
    >
      {message}
    </span>
  )
}

export type InputFieldProps = SharedFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>

export function InputField({
  containerClassName = '',
  controlClassName = '',
  error,
  hint,
  id,
  label,
  name,
  optional,
  variant = 'boxed',
  ...props
}: InputFieldProps) {
  const controlId = id ?? name
  const messageId = `${controlId}-message`

  return (
    <label className={`block ${containerClassName}`} htmlFor={controlId}>
      <FieldLabel label={label} optional={optional} variant={variant}>
        <input
          aria-describedby={error || hint ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className={`${controlClasses[variant]} ${controlClassName}`}
          id={controlId}
          name={name}
          {...props}
        />
      </FieldLabel>
      <FieldMessage error={error} hint={hint} id={messageId} />
    </label>
  )
}

export type SelectFieldProps = SharedFieldProps &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
    children: ReactNode
  }

export function SelectField({
  children,
  containerClassName = '',
  controlClassName = '',
  error,
  hint,
  id,
  label,
  name,
  optional,
  variant = 'boxed',
  ...props
}: SelectFieldProps) {
  const controlId = id ?? name
  const messageId = `${controlId}-message`

  return (
    <label className={`block ${containerClassName}`} htmlFor={controlId}>
      <FieldLabel label={label} optional={optional} variant={variant}>
        <select
          aria-describedby={error || hint ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className={`${controlClasses[variant]} ${controlClassName}`}
          id={controlId}
          name={name}
          {...props}
        >
          {children}
        </select>
      </FieldLabel>
      <FieldMessage error={error} hint={hint} id={messageId} />
    </label>
  )
}

export type TextareaFieldProps = SharedFieldProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>

export function TextareaField({
  containerClassName = '',
  controlClassName = '',
  error,
  hint,
  id,
  label,
  name,
  optional,
  variant = 'boxed',
  ...props
}: TextareaFieldProps) {
  const controlId = id ?? name
  const messageId = `${controlId}-message`

  return (
    <label className={`block ${containerClassName}`} htmlFor={controlId}>
      <FieldLabel label={label} optional={optional} variant={variant}>
        <textarea
          aria-describedby={error || hint ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className={`${controlClasses[variant]} min-h-28 resize-y ${controlClassName}`}
          id={controlId}
          name={name}
          {...props}
        />
      </FieldLabel>
      <FieldMessage error={error} hint={hint} id={messageId} />
    </label>
  )
}
