export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  detailedDescription: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Coconut Charcoal',
    slug: 'coconut-charcoal',
    description: 'High-quality charcoal for industrial and household use.',
    detailedDescription: 'Our coconut charcoal is made from premium coconut shells, offering high heat output and low ash content. Ideal for grilling, industrial furnaces, and water purification systems.',
    image: '/images/hero-placeholder.jpg',
  },
  {
    id: '2',
    name: 'Coconut Oil',
    slug: 'coconut-oil',
    description: 'Pure and natural oil for cooking and cosmetics.',
    detailedDescription: 'Extracted from fresh coconut meat, our coconut oil is 100% natural and unrefined. Perfect for cooking, skin care, and hair treatment due to its high lauric acid content.',
    image: '/images/hero-placeholder.jpg',
  },
  {
    id: '3',
    name: 'Coconut Fiber',
    slug: 'coconut-fiber',
    description: 'Durable fiber for various industrial applications.',
    detailedDescription: 'Our coconut fiber, or coir, is sourced from coconut husks and processed for durability. Used in manufacturing ropes, mats, geotextiles, and as a sustainable alternative in various industries.',
    image: '/images/hero-placeholder.jpg',
  },
  {
    id: '4',
    name: 'Coconut Shell Powder',
    slug: 'coconut-shell-powder',
    description: 'Finely ground powder for industrial use.',
    detailedDescription: 'Processed from coconut shells, this powder is used as a raw material in activated carbon production, as a filler in plastics, and in various chemical processes.',
    image: '/images/hero-placeholder.jpg',
  },
  {
    id: '5',
    name: 'Desiccated Coconut',
    slug: 'desiccated-coconut',
    description: 'Dried coconut meat for food industries.',
    detailedDescription: 'Our desiccated coconut is made from finely grated and dried coconut meat. Perfect for baking, confectionery, and culinary applications with its rich coconut flavor.',
    image: '/images/hero-placeholder.jpg',
  },
  {
    id: '6',
    name: 'Coconut Water Concentrate',
    slug: 'coconut-water-concentrate',
    description: 'Concentrated coconut water for beverages.',
    detailedDescription: 'Sourced from young green coconuts, our concentrate retains the natural electrolytes and refreshing taste. Ideal for beverage production and health drink formulations.',
    image: '/images/hero-placeholder.jpg',
  },
];
