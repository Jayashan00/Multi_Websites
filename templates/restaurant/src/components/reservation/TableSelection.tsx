import { tableOptions } from './reservationData'

type TableSelectionProps = {
  guestCount: number
  selectedTableId: string
  onSelect: (tableId: string) => void
}

export function TableSelection({
  guestCount,
  selectedTableId,
  onSelect,
}: TableSelectionProps) {
  return (
    <fieldset className="mt-10">
      <legend className="sr-only">Select a table</legend>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-amber-700 uppercase">
            Step 02
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold">
            Choose your setting
          </h3>
          <p className="mt-2 text-sm leading-6 text-stone-500">
            Tables that cannot seat your party are shown as unavailable.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-[0.68rem] font-medium text-stone-500">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-amber-400" /> Selected
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-white ring-1 ring-stone-300" />
            Available
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-stone-300" /> Unavailable
          </span>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-100/80 p-4 sm:p-6">
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-1/2 border-t border-dashed border-stone-300"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-8 left-1/2 border-l border-dashed border-stone-300"
        />
        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tableOptions.map((table, index) => {
            const isSelected = selectedTableId === table.id
            const isAvailable = table.seats >= guestCount

            return (
              <button
                aria-pressed={isSelected}
                className={`menu-card-enter group relative min-h-32 overflow-hidden border p-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:min-h-36 ${
                  table.shape === 'round' ? 'rounded-[2.5rem]' : 'rounded-2xl'
                } ${
                  isSelected
                    ? 'border-amber-400 bg-amber-400 text-stone-950 shadow-[0_16px_35px_rgba(217,119,6,0.2)]'
                    : isAvailable
                      ? 'border-stone-200 bg-white hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg'
                      : 'cursor-not-allowed border-stone-200 bg-stone-200/70 text-stone-400 opacity-70'
                }`}
                disabled={!isAvailable}
                key={table.id}
                onClick={() => onSelect(table.id)}
                style={{ animationDelay: `${index * 55}ms` }}
                type="button"
              >
                <span className="flex items-start justify-between gap-2">
                  <span className="font-serif text-xl font-semibold">
                    {table.id}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[0.6rem] font-bold ${
                      isSelected
                        ? 'bg-stone-950 text-white'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {table.seats} seats
                  </span>
                </span>
                <span className="absolute right-4 bottom-4 left-4">
                  <span className="block text-xs font-medium">
                    {table.area}
                  </span>
                  <span
                    className={`mt-1 block text-[0.62rem] ${
                      isSelected ? 'text-stone-700' : 'text-stone-400'
                    }`}
                  >
                    {isSelected
                      ? 'Your selection'
                      : isAvailable
                        ? 'Tap to select'
                        : `Needs ${guestCount} seats`}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </fieldset>
  )
}
