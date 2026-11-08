import { activatedCarbonProducts } from './activatedCarbonProducts';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  detailedDescription: string;
  image: string;
}

export const products: Product[] = activatedCarbonProducts.map(item => ({
  id: item.id,
  name: item.name,
  slug: item.slug,
  description: item.shortDesc,
  detailedDescription: item.description,
  image: item.image,
}));
