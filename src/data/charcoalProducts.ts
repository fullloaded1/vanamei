import { activatedCarbonProducts } from './activatedCarbonProducts';

export interface CharcoalProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  category: string;
  iodine?: string;
  rawMaterial?: string;
}

export const charcoalProducts: CharcoalProduct[] = activatedCarbonProducts.map(p => ({
  id: p.id,
  name: p.name,
  slug: p.slug,
  description: p.shortDesc,
  features: p.meshSizes.slice(0, 3),
  image: p.image,
  category: p.category,
  iodine: p.iodineRange,
  rawMaterial: p.rawMaterial
}));
