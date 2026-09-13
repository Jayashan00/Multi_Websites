export type Errors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;
const NAME_RE = /^[A-Za-z\u00C0-\u024F' -]{2,40}$/;

export const isEmail = (v: string) => EMAIL_RE.test(v.trim());
export const isPhone = (v: string) => PHONE_RE.test(v.trim());
export const isName = (v: string) => NAME_RE.test(v.trim());

export function validateRequired(label: string, value: string): string {
  return value.trim() ? '' : `${label} is required.`;
}

export function validateName(label: string, value: string): string {
  const required = validateRequired(label, value);
  if (required) return required;
  return isName(value) ? '' : `${label} must be 2-40 letters only.`;
}

export function validateEmail(value: string): string {
  const required = validateRequired('Email', value);
  if (required) return required;
  return isEmail(value) ? '' : 'Enter a valid email address.';
}

export function validatePhone(value: string): string {
  const required = validateRequired('Phone', value);
  if (required) return required;
  return isPhone(value) ? '' : 'Enter a valid phone number (7-20 digits).';
}

export function validateMessage(value: string, min = 10): string {
  const required = validateRequired('Message', value);
  if (required) return required;
  return value.trim().length >= min ? '' : `Message must be at least ${min} characters.`;
}

export function validateAge(dob: string, min = 16): string {
  if (!dob) return 'Date of birth is required.';
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return 'Enter a valid date.';
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  if (age < min) return `You must be at least ${min} years old to join.`;
  if (age > 100) return 'Enter a valid date of birth.';
  return '';
}

export const hasErrors = (errors: Errors) => Object.values(errors).some(Boolean);