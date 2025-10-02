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
    name: 'ARANG BRIKET SHISHA',
    slug: 'arang-briket-shisha',
    description: 'Arang briket shisha kami terbuat dari kayu pilihan mulai dari Kayu Asam Jawa, Kayu',
    features: ['KUALITAS PREMIUM', 'TANPA BAHAN KIMIA', 'TERBAKAR LEBIH LAMA'],
    image: '/images/charcoal/ARANG BRIKET SHISHA.jpg',
    category: 'Briquette'
  },
  {
    id: '2',
    name: 'ARANG KAYU KERAS',
    slug: 'arang-kayu-keras',
    description: 'Arang kayu keras kami terbuat dari kayu pilihan mulai dari Kayu Asam Jawa, Kayu',
    features: ['RASA SMOKY', 'BAHAN BAKU TERBAIK', 'SEMUA UKURAN SIAP'],
    image: '/images/charcoal/ARANG KAYU KERAS.jpg',
    category: 'Hardwood'
  },
  {
    id: '3',
    name: 'ARANG TEMPURUNG KELAPA',
    slug: 'arang-tempurung-kelapa',
    description: 'Arang tempurung kelapa merupakan bahan yang dapat digunakan untuk',
    features: ['BAHAN BAKU TERBAIK', 'SEMUA UKURAN SIAP'],
    image: '/images/charcoal/ARANG TEMPURUNG KELAPA.jpg',
    category: 'Coconut Shell'
  },
  {
    id: '4',
    name: 'ARANG GRANULA/MESHED',
    slug: 'arang-granula-meshed',
    description: 'Arang meshed atau dikenal dengan karbon aktif granular dapat digunakan',
    features: ['SEMUA UKURAN SIAP'],
    image: '/images/charcoal/ARANG GRANULAMESHED.jpg',
    category: 'Granulated'
  },
  {
    id: '5',
    name: 'ARANG SAWDUST BRIQUETTE',
    slug: 'arang-sawdust-briquette',
    description: 'Arang sawdust briquette terbuat dari serbuk gergaji yang dipadatkan',
    features: ['BAHAN BAKU TERBAIK', 'TAHAN LAMA'],
    image: '/images/charcoal/ARANG SAWDUST BRIQUETTE.jpg',
    category: 'Briquette'
  },
  {
    id: '6',
    name: 'ARANG ACTIVATED CARBON',
    slug: 'arang-activated-carbon',
    description: 'Arang activated carbon untuk keperluan industri dan filtrasi air',
    features: ['KUALITAS TINGGI', 'UNTUK INDUSTRI'],
    image: '/images/charcoal/ARANG ACTIVATED CARBON.jpg',
    category: 'Industrial'
  }
];
