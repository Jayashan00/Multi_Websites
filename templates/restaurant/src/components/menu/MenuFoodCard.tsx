import { ButtonArrow, ButtonLink } from '#/components/ui/Button'
import { Card } from '#/components/ui/Card'

export type MenuCategory =
  'Breakfast' | 'Lunch' | 'Dinner' | 'Desserts' | 'Beverages'

type MenuFoodCardProps = {
  item: {
    id: number
    category: MenuCategory
    name: string
    description: string
    price: string
    image: string
    imageAlt: string
  }
  animationDelay?: number
}

export function MenuFoodCard({ item, animationDelay = 0 }: MenuFoodCardProps) {
  return (
    <Card
      as="article"
      className="menu-card-enter group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_12px_40px_rgba(41,37,36,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_24px_60px_rgba(41,37,36,0.13)]"
      style={{ animationDelay: `${animationDelay}ms` }}
      variant="plain"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        <img
          alt={item.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          src={item.image}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-stone-950/35 via-transparent to-transparent"
        />
        <span className="absolute top-5 left-5 rounded-full border border-white/25 bg-stone-950/65 px-3.5 py-2 text-[0.62rem] font-bold tracking-[0.14em] text-white uppercase backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[0.62rem] font-bold tracking-[0.15em] text-amber-700 uppercase">
              Signature selection
            </p>
            <h2 className="mt-2 font-serif text-2xl leading-tight font-semibold text-stone-900">
              {item.name}
            </h2>
          </div>
          <span className="shrink-0 font-serif text-lg font-semibold text-stone-900">
            {item.price}
          </span>
        </div>

        <p className="mt-4 min-h-12 text-sm leading-6 text-stone-500">
          {item.description}
        </p>

        <ButtonLink
          aria-label={`Order ${item.name}`}
          className="mt-6 justify-between !py-2.5 !pr-2.5 !pl-5"
          fullWidth
          href="/order"
        >
          <span>Order this dish</span>
          <ButtonArrow />
        </ButtonLink>
      </div>
    </Card>
  )
}
