export type OrderCategory =
  'Breakfast' | 'Lunch' | 'Dinner' | 'Desserts' | 'Beverages'

export type OrderMenuItem = {
  id: number
  category: OrderCategory
  name: string
  description: string
  price: number
  image: string
  imageAlt: string
}

export const orderCategories: Array<OrderCategory> = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Desserts',
  'Beverages',
]

export const orderMenuItems: Array<OrderMenuItem> = [
  {
    id: 1,
    category: 'Breakfast',
    name: 'Ceylon Sunrise',
    description:
      'Farm eggs, coconut sambol, grilled sourdough, avocado, and roasted tomato.',
    price: 2850,
    image: '/images/category-breakfast.jpg',
    imageAlt: 'Ceylon breakfast with eggs, fruit, and fresh accompaniments',
  },
  {
    id: 2,
    category: 'Breakfast',
    name: 'Coconut French Toast',
    description:
      'Brioche, coconut custard, seasonal fruit, kithul syrup, and toasted cashew.',
    price: 2450,
    image: '/images/special-dessert.jpg',
    imageAlt: 'Coconut French toast with fruit and a sweet garnish',
  },
  {
    id: 3,
    category: 'Lunch',
    name: 'Wild Mushroom Tagliatelle',
    description:
      'Fresh pasta, roasted mushrooms, parmesan, garden herbs, and truffle cream.',
    price: 3950,
    image: '/images/dish-pasta.jpg',
    imageAlt: 'Tagliatelle with mushrooms, parmesan, and garden herbs',
  },
  {
    id: 4,
    category: 'Lunch',
    name: 'Garden Harvest Bowl',
    description:
      'Market vegetables, red rice, avocado, spiced chickpeas, and lime dressing.',
    price: 3250,
    image: '/images/category-lunch.jpg',
    imageAlt: 'Colourful lunch bowl with fresh vegetables and grains',
  },
  {
    id: 5,
    category: 'Dinner',
    name: 'Pepper-Crusted Tenderloin',
    description:
      'Grass-fed beef, smoked potato, charred shallot, greens, and pepper jus.',
    price: 8900,
    image: '/images/dish-steak.jpg',
    imageAlt: 'Pepper-crusted steak with vegetables and rich sauce',
  },
  {
    id: 6,
    category: 'Dinner',
    name: 'Lagoon Seafood Plate',
    description:
      'Daily coastal catch, shellfish bisque, seasonal greens, and herb oil.',
    price: 6750,
    image: '/images/dish-seafood.jpg',
    imageAlt: 'Fresh seafood plate with seasonal vegetables and herb oil',
  },
  {
    id: 7,
    category: 'Dinner',
    name: 'Fire-Roasted Garden Pizza',
    description:
      'Wood-fired dough, roasted vegetables, buffalo mozzarella, and basil.',
    price: 4200,
    image: '/images/special-pizza.jpg',
    imageAlt: 'Wood-fired pizza with vegetables, mozzarella, and basil',
  },
  {
    id: 8,
    category: 'Desserts',
    name: 'Cacao & Caramel',
    description:
      'Dark chocolate, salted caramel, vanilla ice cream, and almond praline.',
    price: 2400,
    image: '/images/category-dessert.jpg',
    imageAlt: 'Chocolate and caramel dessert with vanilla ice cream',
  },
  {
    id: 9,
    category: 'Desserts',
    name: 'Tropical Pavlova',
    description:
      'Crisp meringue, mango, passion fruit, vanilla cream, and lime.',
    price: 2200,
    image: '/images/special-dessert.jpg',
    imageAlt: 'Tropical pavlova with mango and passion fruit',
  },
  {
    id: 10,
    category: 'Beverages',
    name: 'Ceylon Citrus Cooler',
    description:
      'Fresh lime, orange, Ceylon tea, mint, and lightly sparkling water.',
    price: 1250,
    image: '/images/category-beverage.jpg',
    imageAlt: 'Refreshing citrus drink with mint and fresh fruit',
  },
]

export function formatLkr(value: number) {
  return `LKR ${value.toLocaleString('en-US')}`
}
