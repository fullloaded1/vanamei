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

export const pricingProducts: PricingProduct[] = [
  {
    id: '1',
    name: 'Coconut Charcoal Briquette',
    nameId: 'Briket Arang Tempurung Kelapa',
    nameAr: 'فحم جوز الهند المضغوط',
    description: 'Grade A (100% Coconut Charcoal)',
    descriptionId: 'Grade A (100% Arang Tempurung Kelapa)',
    descriptionAr: 'درجة أ (100% فحم جوز الهند)',
    fobPrice: 1800,
    currency: 'USD',
    unit: 'Ton',
    moq: 18,
    moqUnit: 'MT',
    image: '/images/charcoal/ARANG BRIKET SHISHA.jpg',
    category: 'Briquette',
    grade: 'Grade A'
  },
  {
    id: '2',
    name: 'Sawdust Charcoal',
    nameId: 'Arang Serbuk Gergaji',
    nameAr: 'فحم نشارة الخشب',
    description: 'Premium quality sawdust charcoal briquettes',
    descriptionId: 'Briket arang serbuk gergaji kualitas premium',
    descriptionAr: 'قوالب فحم نشارة الخشب عالية الجودة',
    fobPrice: 1100,
    currency: 'USD',
    unit: 'Ton',
    moq: 18,
    moqUnit: 'MT',
    image: '/images/charcoal/SAWDUST.jpeg',
    category: 'Briquette'
  },
  {
    id: '3',
    name: 'Coconut Shell Charcoal',
    nameId: 'Arang Tempurung Kelapa',
    nameAr: 'فحم قشر جوز الهند',
    description: 'Natural coconut shell charcoal',
    descriptionId: 'Arang tempurung kelapa alami',
    descriptionAr: 'فحم قشر جوز الهند الطبيعي',
    fobPrice: 850,
    currency: 'USD',
    unit: 'Ton',
    moq: 18,
    moqUnit: 'MT',
    image: '/images/charcoal/ARANG TEMPURUNG KELAPA.jpg',
    category: 'Coconut Shell'
  },
  {
    id: '4',
    name: 'Hardwood Charcoal',
    nameId: 'Arang Kayu Keras',
    nameAr: 'فحم الخشب الصلب',
    description: 'Premium hardwood charcoal',
    descriptionId: 'Arang kayu keras premium',
    descriptionAr: 'فحم الخشب الصلب المتميز',
    fobPrice: 1000,
    currency: 'USD',
    unit: 'Ton',
    moq: 18,
    moqUnit: 'MT',
    image: '/images/charcoal/ARANG KAYU KERAS.jpg',
    category: 'Hardwood'
  }
];

export const companyInfo = {
  name: 'CocoBlim',
  tagline: 'Cleaner Heat, Greener Growth',
  description: 'Premium Indonesian Charcoal Exporter',
  port: 'Tanjung Priok / Suarabaya',
  contact: {
    name: 'Mujahid Mubarok',
    phone: '0857-7106-0462',
    website: 'cocoblim.com'
  }
};
