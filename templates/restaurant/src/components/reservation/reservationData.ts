export type ReservationDraft = {
  date: string
  time: string
  guests: number
  tableId: string
  name: string
  phone: string
  email: string
  requests: string
}

export type ReservationUpdate = (updates: Partial<ReservationDraft>) => void

export const tableOptions = [
  { id: 'T01', seats: 2, area: 'Window', shape: 'round' },
  { id: 'T02', seats: 2, area: 'Main dining', shape: 'round' },
  { id: 'T03', seats: 4, area: 'Main dining', shape: 'square' },
  { id: 'T04', seats: 4, area: 'Window', shape: 'square' },
  { id: 'T05', seats: 6, area: 'Private area', shape: 'long' },
  { id: 'T06', seats: 6, area: 'Main dining', shape: 'long' },
  { id: 'T07', seats: 8, area: 'Private area', shape: 'long' },
  { id: 'T08', seats: 4, area: 'Terrace', shape: 'round' },
] as const

export const initialReservation: ReservationDraft = {
  date: '',
  time: '',
  guests: 2,
  tableId: '',
  name: '',
  phone: '',
  email: '',
  requests: '',
}

export function formatReservationDate(date: string) {
  if (!date) return 'Choose a date'

  return new Intl.DateTimeFormat('en-LK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}
