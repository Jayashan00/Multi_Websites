import type { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  icon?: ReactNode;
  className?: string;
};

type InputProps = BaseProps & {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 mt-1.5 text-sm text-red-400">
      <AlertCircle className="w-4 h-4 shrink-0" />
      {error}
    </p>
  );
}

export function TextField({
  id, label, error, required, icon, type = 'text', value, placeholder, onChange, onBlur, className = '',
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label-field">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">{icon}</span>}
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`input-field ${icon ? 'pl-11' : ''} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
        />
      </div>
      <ErrorText id={id} error={error} />
    </div>
  );
}

export function TextAreaField({
  id, label, error, required, value, placeholder, rows = 5, onChange, onBlur, className = '',
}: BaseProps & {
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (value: string) => void;
  onBlur?: () => void;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label-field">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`input-field resize-none ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
      />
      <ErrorText id={id} error={error} />
    </div>
  );
}

export function SelectField({
  id, label, error, required, value, options, onChange, className = '',
}: BaseProps & {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label-field">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`input-field ${error ? 'border-red-500' : ''}`}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ErrorText id={id} error={error} />
    </div>
  );
}