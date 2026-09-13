export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: 'Behind the Plate' | 'Ingredients' | 'People' | 'Journal'
  image: string
  imageAlt: string
  imagePosition?: string
  date: string
  readTime: string
  author: string
  featured?: boolean
  content: Array<{
    heading?: string
    paragraphs: Array<string>
    quote?: string
  }>
}

export const blogPosts: Array<BlogPost> = [
  {
    slug: 'the-art-of-seasonal-dining',
    title: 'The quiet art of cooking with the season',
    excerpt:
      'A look inside the decisions, ingredients, and small rituals that shape our newest tasting menu.',
    category: 'Behind the Plate',
    image: '/images/dish-seafood.jpg',
    imageAlt: 'Seasonal seafood dish presented on a ceramic plate',
    date: 'July 28, 2026',
    readTime: '6 min read',
    author: 'Chef Dilan Perera',
    featured: true,
    content: [
      {
        paragraphs: [
          'Seasonal cooking begins long before a plate reaches the dining room. It starts in early conversations with growers and fishers, in tasting the first harvest, and in understanding what each ingredient wants to become.',
          'For our latest menu, the kitchen looked toward the coast and the gardens surrounding Colombo. The result is a collection of dishes that feels bright, generous, and unmistakably connected to this moment of the year.',
        ],
      },
      {
        heading: 'Let the ingredient lead',
        paragraphs: [
          'Our process is deliberately simple: begin with flavour, protect its character, then build contrast around it. A delicate catch may meet a sharp citrus dressing; a sweet root vegetable may be balanced with smoke and spice.',
          'Restraint is often the most difficult part. The aim is not to show every technique we know, but to use only the ones that make the ingredient more expressive.',
        ],
        quote:
          'The best seasonal dishes feel inevitable—as if the ingredients could not have arrived together in any other way.',
      },
      {
        heading: 'A menu that keeps moving',
        paragraphs: [
          'No seasonal menu is ever truly finished. Availability changes, flavours develop, and our guests teach us something every evening. We make small adjustments throughout the service, keeping the menu alive while preserving its original idea.',
          'That movement is what makes cooking with the season so rewarding. Every plate is part of a short chapter—and an invitation to return for the next one.',
        ],
      },
    ],
  },
  {
    slug: 'a-morning-at-the-market',
    title: 'A morning at the market with our kitchen team',
    excerpt:
      'From first light to first service: how the market inspires the dishes we cook that evening.',
    category: 'Ingredients',
    image: '/images/category-breakfast.jpg',
    imageAlt: 'Fresh breakfast ingredients arranged on a table',
    date: 'July 16, 2026',
    readTime: '4 min read',
    author: 'Amaya Silva',
    content: [
      {
        paragraphs: [
          'The city is still waking when our kitchen team reaches the market. This is where menu ideas become tangible: ripe fruit is tasted, herbs are lifted to the light, and the day’s best produce begins to suggest a dish.',
          'We arrive with a plan, but the market always has the final word. A particularly fragrant bundle of leaves or an unexpected catch can reshape an evening special in minutes.',
        ],
      },
      {
        heading: 'Choosing with care',
        paragraphs: [
          'Freshness matters, but relationships matter too. Working closely with trusted suppliers gives us a clearer understanding of origin, growing conditions, and the people behind every ingredient.',
        ],
        quote:
          'A good menu is written in the kitchen. A memorable one begins at the market.',
      },
      {
        heading: 'Back to the pass',
        paragraphs: [
          'By late morning, the kitchen is alive with preparation. The ingredients we carried in are sorted, tasted, and transformed. Hours later, that early market energy reaches the dining room one plate at a time.',
        ],
      },
    ],
  },
  {
    slug: 'meet-chef-amaya-silva',
    title: 'Meet Chef Amaya Silva: precision with warmth',
    excerpt:
      'The pastry chef behind our most expressive desserts shares her approach to flavour and craft.',
    category: 'People',
    image: '/images/chef-amaya-silva.png',
    imageAlt: 'Portrait of pastry chef Amaya Silva',
    imagePosition: 'center 14%',
    date: 'July 4, 2026',
    readTime: '5 min read',
    author: 'Restaurant Journal',
    content: [
      {
        paragraphs: [
          'Chef Amaya Silva approaches pastry with equal measures of precision and instinct. Her desserts are carefully constructed, yet never feel rigid. They are playful, generous, and grounded in familiar Sri Lankan flavours.',
          'We sat down with Amaya between services to talk about her path into pastry and the ideas that continue to shape her work.',
        ],
      },
      {
        heading: 'Finding balance',
        paragraphs: [
          'For Amaya, dessert is about balance rather than sweetness. Acidity, temperature, texture, and aroma all have a role. A dish may begin with one nostalgic flavour, then slowly evolve through testing and collaboration.',
        ],
        quote:
          'I want the last course to feel like a new beginning, not simply the end of dinner.',
      },
      {
        heading: 'A generous kitchen',
        paragraphs: [
          'She credits the team around her for making experimentation possible. Ideas move freely between sections, and a garnish or spice discovered during savoury prep may inspire the next dessert special.',
        ],
      },
    ],
  },
  {
    slug: 'setting-the-table-for-celebration',
    title: 'Setting the table for life’s meaningful moments',
    excerpt:
      'Why thoughtful details turn a private dinner into a celebration guests carry with them.',
    category: 'Journal',
    image: '/images/offer-table.jpg',
    imageAlt: 'Elegant restaurant table prepared for a celebration',
    date: 'June 22, 2026',
    readTime: '3 min read',
    author: 'Guest Experience Team',
    content: [
      {
        paragraphs: [
          'Celebration lives in the details: the table chosen for the evening, the welcome waiting when guests arrive, and the rhythm of service that lets everyone remain present.',
          'Our guest experience team plans these moments with care, working quietly behind the scenes so the evening feels completely natural.',
        ],
      },
      {
        heading: 'Personal, never predictable',
        paragraphs: [
          'No two gatherings should feel the same. We begin by listening—learning who is coming, why the moment matters, and which details will make it feel personal.',
        ],
        quote: 'Hospitality is the art of making preparation feel effortless.',
      },
      {
        heading: 'Memories beyond the table',
        paragraphs: [
          'The food may begin the conversation, but the feeling of being cared for is what remains. That is the standard we bring to every birthday, anniversary, and spontaneous gathering.',
        ],
      },
    ],
  },
  {
    slug: 'from-coast-to-kitchen',
    title: 'From coast to kitchen: choosing seafood well',
    excerpt:
      'Our chefs explain what responsible sourcing means and why freshness is only the beginning.',
    category: 'Ingredients',
    image: '/images/special-salmon.jpg',
    imageAlt: 'Chef-prepared salmon with seasonal accompaniments',
    date: 'June 10, 2026',
    readTime: '5 min read',
    author: 'Chef Ruwan Fernando',
    content: [
      {
        paragraphs: [
          'Choosing seafood responsibly asks more than whether a catch is fresh. We consider season, method, distance, and the health of the waters it came from.',
          'These choices require flexibility in the kitchen, but they also lead to better cooking. When we work with what the coast can provide naturally, the menu becomes more varied and more honest.',
        ],
      },
      {
        heading: 'Respect through technique',
        paragraphs: [
          'Once an ingredient reaches us, careful handling is a form of respect. Temperature, timing, and seasoning are kept precise so the natural character remains clear on the plate.',
        ],
        quote:
          'Responsible sourcing and beautiful flavour should always belong to the same conversation.',
      },
      {
        heading: 'Questions worth asking',
        paragraphs: [
          'We encourage guests to ask where ingredients come from. Transparency creates better expectations and helps turn a dining choice into support for a healthier food system.',
        ],
      },
    ],
  },
  {
    slug: 'the-making-of-a-signature-dessert',
    title: 'The making of a signature dessert',
    excerpt:
      'Sketches, tastings, and many tiny adjustments behind one of our guests’ favourite final courses.',
    category: 'Behind the Plate',
    image: '/images/special-dessert.jpg',
    imageAlt: 'Restaurant signature dessert with delicate garnish',
    date: 'May 29, 2026',
    readTime: '4 min read',
    author: 'Pastry Team',
    content: [
      {
        paragraphs: [
          'A signature dish rarely arrives as a single flash of inspiration. More often, it begins as a small idea scribbled after service and grows through patient repetition.',
          'Our most-loved dessert followed that path, moving from a familiar childhood flavour toward something lighter, more layered, and distinctly our own.',
        ],
      },
      {
        heading: 'Testing every contrast',
        paragraphs: [
          'Each version changed one element: a colder centre, a sharper fruit note, a thinner crisp. Tasted alone, the adjustments seemed tiny. Together, they transformed the entire experience.',
        ],
        quote:
          'Great pastry is measured in details guests may never see, but will always feel.',
      },
      {
        heading: 'When a dish becomes yours',
        paragraphs: [
          'The final step happens in the dining room. As guests respond and return for the dish, it begins to belong to the restaurant rather than only to the person who first imagined it.',
        ],
      },
    ],
  },
]

export const blogCategories = [
  'All Stories',
  'Behind the Plate',
  'Ingredients',
  'People',
  'Journal',
] as const

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
