export interface CharcoalProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}

export const charcoalProducts: CharcoalProduct[] = [
  {
    id: '1',
    name: 'charcoalBriketShisha',
    slug: 'arang-briket-shisha',
    description: 'descBriketShisha',
    features: ['kualitasPremium', 'tanpaBahanKimia', 'terbakarLebihLama'],
    image: '/images/charcoal/ARANG BRIKET SHISHA.jpg',
    category: 'Briquette'
  },
  {
    id: '2',
    name: 'charcoalKayuKeras',
    slug: 'arang-kayu-keras',
    description: 'descKayuKeras',
    features: ['rasaSmoky', 'bahanBakuTerbaik', 'semuaUkuranSiap'],
    image: '/images/charcoal/ARANG KAYU KERAS.jpg',
    category: 'Hardwood'
  },
  {
    id: '3',
    name: 'charcoalTempurungKelapa',
    slug: 'arang-tempurung-kelapa',
    description: 'descTempurungKelapa',
    features: ['bahanBakuTerbaik', 'semuaUkuranSiap'],
    image: '/images/charcoal/ARANG TEMPURUNG KELAPA.jpg',
    category: 'Coconut Shell'
  },
  {
    id: '4',
    name: 'charcoalGranulaMeshed',
    slug: 'arang-granula-meshed',
    description: 'descGranulaMeshed',
    features: ['semuaUkuranSiap'],
    image: '/images/charcoal/ARANG GRANULAMESHED.jpg',
    category: 'Granulated'
  },
  {
    id: '5',
    name: 'charcoalSawdustBriquette',
    slug: 'arang-sawdust-briquette',
    description: 'descSawdustBriquette',
    features: ['bahanBakuTerbaik', 'tahanLama'],
    image: '/images/charcoal/ARANG SAWDUST BRIQUETTE.jpg',
    category: 'Briquette'
  },
  {
    id: '6',
    name: 'charcoalActivatedCarbon',
    slug: 'arang-activated-carbon',
    description: 'descActivatedCarbon',
    features: ['kualitasTinggi', 'untukIndustri'],
    image: '/images/charcoal/ARANG ACTIVATED CARBON.jpg',
    category: 'Industrial'
  }
];
