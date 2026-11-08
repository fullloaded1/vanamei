export interface IodinePricing {
  id: string;
  iodine: number;
  grade: string;
  priceUSD: number;
  priceFormatted: string;
  unit: string;
  rawMaterialId: string;
  rawMaterialEn: string;
  bestForId: string;
  bestForEn: string;
}

export const iodinePricingList: IodinePricing[] = [
  {
    id: 'iodine-900',
    iodine: 900,
    grade: 'Iodine 900',
    priceUSD: 1750,
    priceFormatted: '1,750',
    unit: 'Per MT (Metric Ton)',
    rawMaterialId: 'Tempurung Kelapa / Sawit',
    rawMaterialEn: 'Coconut Shell / Palm Shell',
    bestForId: 'Pengolahan air limbah, filter bau umum, dekolorisasi standar',
    bestForEn: 'Wastewater treatment, general odor filtration, standard decolorization'
  },
  {
    id: 'iodine-1000',
    iodine: 1000,
    grade: 'Iodine 1000',
    priceUSD: 1900,
    priceFormatted: '1,900',
    unit: 'Per MT (Metric Ton)',
    rawMaterialId: '100% Tempurung Kelapa Pilihan',
    rawMaterialEn: '100% Selected Coconut Shell',
    bestForId: 'Filtrasi air minum, VOC gas scrubber, industri minuman',
    bestForEn: 'Drinking water filtration, VOC gas scrubber, beverage industry'
  },
  {
    id: 'iodine-1100',
    iodine: 1100,
    grade: 'Iodine 1100',
    priceUSD: 2000,
    priceFormatted: '2,000',
    unit: 'Per MT (Metric Ton)',
    rawMaterialId: '100% Tempurung Kelapa Premium',
    rawMaterialEn: '100% Premium Coconut Shell',
    bestForId: 'Pemurnian udara tinggi, recovery pelarut, food grade',
    bestForEn: 'High-purity air purification, solvent recovery, food grade'
  },
  {
    id: 'iodine-1200',
    iodine: 1200,
    grade: 'Iodine 1200',
    priceUSD: 2100,
    priceFormatted: '2,100',
    unit: 'Per MT (Metric Ton)',
    rawMaterialId: 'Tempurung Kelapa Tua Terpilih',
    rawMaterialEn: 'Mature High-Density Coconut Shell',
    bestForId: 'Ekstraksi emas (CIP/CIL), farmasi, dekolorisasi ultra-murni',
    bestForEn: 'Gold recovery (CIP/CIL), pharmaceutical, ultra-pure decolorization'
  }
];

export interface PricingProduct {
  id: string;
  name: string;
  nameId: string;
  nameAr: string;
  description: string;
  descriptionId: string;
  descriptionAr: string;
  fobPrice: number;
  currency: string;
  unit: string;
  moq: number;
  moqUnit: string;
  image: string;
  category: string;
  grade?: string;
}

export const pricingProducts: PricingProduct[] = iodinePricingList.map(item => ({
  id: item.id,
  name: `Activated Carbon ${item.grade}`,
  nameId: `Karbon Aktif ${item.grade}`,
  nameAr: `كربون منشط ${item.grade}`,
  description: `FOB Price: $${item.priceUSD} USD / MT. Suitable for: ${item.bestForEn}`,
  descriptionId: `Harga FOB: $${item.priceUSD} USD / MT. Aplikasi: ${item.bestForId}`,
  descriptionAr: `السعر فوب: ${item.priceUSD}$ لكل طن متري`,
  fobPrice: item.priceUSD,
  currency: 'USD',
  unit: 'MT',
  moq: 15,
  moqUnit: 'MT (1x20ft Container)',
  image: '/images/products/granular-activated-carbon.jpg',
  category: 'Activated Carbon',
  grade: item.grade
}));

export const companyInfo = {
  name: 'CocoBlim Activated Carbon',
  tagline: 'Premium Indonesian Activated Carbon Manufacturer & Exporter',
  description: 'Manufactured from 100% Selected Coconut Shell & Palm Shell',
  port: 'FOB Tanjung Priok, Jakarta / Port Indonesia',
  contact: {
    name: 'CocoBlim Export & Sales Team',
    phone: '+62 857-7106-0462',
    email: 'blim00coco@gmail.com',
    website: 'https://cocoblim.com',
    address: 'C552+685, Tanjungrasa, Kec. Tanjungsari, Kabupaten Bogor, Jawa Barat 16840'
  }
};
