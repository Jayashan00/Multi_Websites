export type GalleryCategory = 'Food' | 'Interiors'

export type GalleryItem = {
  id: number
  title: string
  category: GalleryCategory
  image: string
  alt: string
}

export const galleryItems: Array<GalleryItem> = [
  {
    id: 1,
    title: 'Signature steak',
    category: 'Food',
    image: '/images/dish-steak.jpg',
    alt: 'Restaurant signature steak dish',
  },
  {
    id: 2,
    title: 'Coastal seafood',
    category: 'Food',
    image: '/images/dish-seafood.jpg',
    alt: 'Freshly prepared seafood dish',
  },
  {
    id: 3,
    title: 'Handmade pasta',
    category: 'Food',
    image: '/images/dish-pasta.jpg',
    alt: 'Handmade pasta served at the restaurant',
  },
  {
    id: 4,
    title: 'Wood-fired pizza',
    category: 'Food',
    image: '/images/special-pizza.jpg',
    alt: 'Wood-fired pizza with fresh toppings',
  },
  {
    id: 5,
    title: 'Chef’s salmon',
    category: 'Food',
    image: '/images/special-salmon.jpg',
    alt: 'Chef prepared salmon special',
  },
  {
    id: 6,
    title: 'Dessert course',
    category: 'Food',
    image: '/images/special-dessert.jpg',
    alt: 'Elegant restaurant dessert course',
  },
  {
    id: 7,
    title: 'Main dining room',
    category: 'Interiors',
    image: '/images/restaurant-interior.jpg',
    alt: 'Warmly lit restaurant main dining room',
  },
  {
    id: 8,
    title: 'Evening atmosphere',
    category: 'Interiors',
    image: '/images/hero-dining.jpg',
    alt: 'Restaurant prepared for evening dining',
  },
  {
    id: 9,
    title: 'Private table setting',
    category: 'Interiors',
    image: '/images/offer-table.jpg',
    alt: 'Private restaurant table prepared for guests',
  },
]
