export interface TechnicalSpec {
  label: string;
  labelId: string;
  labelAr: string;
  value: string;
}

export interface ActivatedCarbonProduct {
  id: string;
  name: string;
  nameId: string;
  nameAr: string;
  slug: string;
  category: 'Granular' | 'Powder' | 'Pellet' | 'Specialty';
  shortDesc: string;
  shortDescId: string;
  shortDescAr: string;
  description: string;
  descriptionId: string;
  descriptionAr: string;
  image: string;
  rawMaterial: string;
  rawMaterialId: string;
  iodineRange: string;
  meshSizes: string[];
  applications: string[];
  applicationsId: string[];
  specifications: TechnicalSpec[];
  packaging: string[];
  featured?: boolean;
}

export const activatedCarbonProducts: ActivatedCarbonProduct[] = [
  {
    id: 'gac-01',
    name: 'Granular Activated Carbon (GAC)',
    nameId: 'Karbon Aktif Granular (GAC)',
    nameAr: 'الكربون المنشط الحبيبي (GAC)',
    slug: 'granular-activated-carbon',
    category: 'Granular',
    shortDesc: 'High hardness granular carbon from selected coconut shell for water & air filtration.',
    shortDescId: 'Karbon aktif butiran berkekuatan mekanik tinggi dari tempurung kelapa pilihan untuk filtrasi air & udara.',
    shortDescAr: 'كربون حبيبي عالي الصلابة من قشر جوز الهند المختار لتنقية المياه والهواء.',
    description: 'Our Granular Activated Carbon (GAC) is manufactured from premium coconut shell charcoal through high-temperature steam activation. Characterized by high mechanical hardness, low dust, and a predominant microporous structure, it is ideal for continuous fixed-bed adsorbers.',
    descriptionId: 'Karbon Aktif Granular (GAC) kami diproduksi dari arang tempurung kelapa premium melalui aktivasi uap suhu tinggi. Memiliki kekerasan mekanik tinggi, kadar debu sangat rendah, dan struktur mikropori dominan yang sangat ideal untuk sistem adsorpsi filter continue.',
    descriptionAr: 'يتم تصنيع الكربون المنشط الحبيبي (GAC) من فحم قشر جوز الهند الفاخر من خلال التنشيط بالبخار بدرجة حرارة عالية. يتميز بصلابة ميكانيكية عالية ومقاومة للتآكل.',
    image: '/images/products/granular-activated-carbon.jpg',
    rawMaterial: '100% Coconut Shell (Tempurung Kelapa)',
    rawMaterialId: '100% Tempurung Kelapa Pilihan',
    iodineRange: '900 - 1200 mg/g',
    meshSizes: ['8x30 mesh', '12x40 mesh', '4x8 mesh', '20x50 mesh'],
    applications: [
      'Municipal & Industrial Water Treatment',
      'VOC Removal & Gas Phase Purification',
      'Beverage & Potable Water Filtration',
      'Catalyst Carrier & Chemical Processing'
    ],
    applicationsId: [
      'Pengolahan Air Bersih & Limbah Industri',
      'Pemurnian Udara & Penyerapan Gas VOC',
      'Filtrasi Air Minum & Industri Minuman',
      'Penyangga Katalis Industri Kimia'
    ],
    specifications: [
      { label: 'Iodine Number', labelId: 'Angka Iodin', labelAr: 'رقم اليود', value: '900 - 1200 mg/g' },
      { label: 'Hardness Number', labelId: 'Kekerasan (Hardness)', labelAr: 'الصلابة', value: '≥ 98%' },
      { label: 'Moisture Content', labelId: 'Kadar Air', labelAr: 'نسبة الرطوبة', value: '≤ 5%' },
      { label: 'Total Ash Content', labelId: 'Kadar Abu', labelAr: 'نسبة الرماد', value: '≤ 3 - 5%' },
      { label: 'Apparent Density', labelId: 'Kerapatan Curah', labelAr: 'الكثافة الظاهرية', value: '0.45 - 0.55 g/cm³' },
      { label: 'pH Range', labelId: 'Rentang pH', labelAr: 'الرقم الهيدروجيني', value: '8.0 - 11.0' }
    ],
    packaging: ['25 kg Woven PP Bag with PE liner', '500 kg / 700 kg Jumbo Bag (Sling)', 'Custom / Private Label Available'],
    featured: true
  },
  {
    id: 'pac-02',
    name: 'Powdered Activated Carbon (PAC)',
    nameId: 'Karbon Aktif Serbuk (PAC)',
    nameAr: 'الكربون المنشط المسحوق (PAC)',
    slug: 'powdered-activated-carbon',
    category: 'Powder',
    shortDesc: 'Ultra-fine activated carbon for rapid kinetic adsorption, decolorization and deodorization.',
    shortDescId: 'Karbon aktif serbuk ultra-halus untuk laju adsorpsi cepat, dekolorisasi, dan penghilangan bau.',
    shortDescAr: 'كربون منشط مسحوق فائق النعومة للامتصاص السريع وإزالة الألوان والروائح.',
    description: 'Powdered Activated Carbon (PAC) offers an immense surface area and rapid adsorption kinetics. Widely utilized in batch processes for liquid-phase purification, color removal in food & edible oils, and odor elimination.',
    descriptionId: 'Karbon Aktif Serbuk (PAC) menghadirkan luas permukaan yang sangat besar dan laju adsorpsi kilat. Sangat ideal untuk proses batch pengolahan air minum darurat, pemurnian cairan, dekolorisasi minyak makan/sirup, dan penetralisir bau.',
    descriptionAr: 'يوفر الكربون المنشط المسحوق (PAC) مساحة سطحية هائلة ومعدل امتصاص فائق السرعة، ومثالي لعمليات المعالجة بالدفعات لإزالة الألوان والروائح.',
    image: '/images/products/powdered-activated-carbon.jpg',
    rawMaterial: 'Coconut Shell & Palm Shell',
    rawMaterialId: 'Tempurung Kelapa & Cangkang Sawit',
    iodineRange: '900 - 1150 mg/g',
    meshSizes: ['200 mesh', '325 mesh (90% passing)', 'Custom fine mesh'],
    applications: [
      'Sugar & Glucose Decolorization',
      'Edible Oil Bleaching & Refining',
      'Waste Water Decolorization',
      'Pharmaceutical Active Ingredient Purification'
    ],
    applicationsId: [
      'Dekolorisasi Gula, Sirup & Glukosa',
      'Pemurnian & Bleaching Minyak Nabati',
      'Pengolahan Warna Air Limbah Tekstil',
      'Pemurnian Bahan Baku Farmasi'
    ],
    specifications: [
      { label: 'Iodine Number', labelId: 'Angka Iodin', labelAr: 'رقم اليود', value: '900 - 1150 mg/g' },
      { label: 'Methylene Blue', labelId: 'Metilen Biru', labelAr: 'الميثيلين الأزرق', value: '≥ 180 - 220 mg/g' },
      { label: 'Mesh Fineness', labelId: 'Kehalusan Mesh', labelAr: 'درجة النعومة', value: '≥ 90% passing 325 mesh' },
      { label: 'Moisture Content', labelId: 'Kadar Air', labelAr: 'نسبة الرطوبة', value: '≤ 8%' },
      { label: 'Ash Content', labelId: 'Kadar Abu', labelAr: 'نسبة الرمad', value: '≤ 5%' }
    ],
    packaging: ['20 kg / 25 kg Multi-layer Kraft Paper Bag', '500 kg Bulk Bag', 'Custom Private Label'],
    featured: true
  },
  {
    id: 'pellet-03',
    name: 'Pelletized Activated Carbon (Pellet)',
    nameId: 'Karbon Aktif Pelet / Silinder',
    nameAr: 'الكربون المنشط الحبيبي الأسطواني (Pellet)',
    slug: 'pelletized-activated-carbon',
    category: 'Pellet',
    shortDesc: 'Extruded cylindrical pellets with low pressure drop for air purification and solvent recovery.',
    shortDescId: 'Pelet silinder ter-ekstrusi dengan hambatan aliran rendah untuk pemurnian udara & pemulihan pelarut.',
    shortDescAr: 'حبيبات أسطوانية مبثوقة مع انخفاض منخفض في الضغط لتنقية الهواء واستعادة المذيبات.',
    description: 'Pelletized (Extruded) activated carbon combines high mechanical resistance with superior aerodynamic gas flow. Its uniform cylindrical geometry ensures low flow resistance and minimal dust formation in gas phase filtration beds.',
    descriptionId: 'Karbon aktif pelet silinder (ekstrusi) menggabungkan ketahanan mekanik tinggi dengan aerodinamika aliran gas superior. Bentuk silinder yang seragam memastikan resistensi aliran udara rendah dan meminimalkan terbentuknya debu pada filter gas.',
    descriptionAr: 'يجمع الكربون الأسطواني المبثوق بين المقاومة الميكانيكية العالية والتدفق الأيروديناميكي الفائق للغازات.',
    image: '/images/products/pellet-activated-carbon.jpg',
    rawMaterial: 'Selected Carbonaceous Matrix + Steam Activation',
    rawMaterialId: 'Matriks Karbon Pilihan + Aktivasi Uap',
    iodineRange: '900 - 1100 mg/g',
    meshSizes: ['Diameter: 3mm', 'Diameter: 4mm', 'Diameter: 2mm (Custom)'],
    applications: [
      'Industrial Odor Control & Gas Scrubbing',
      'Solvent Vapor Recovery (SVR)',
      'Biogas & Natural Gas Desulfurization (H2S Removal)',
      'Automotive Cabin & Canister Filters'
    ],
    applicationsId: [
      'Pengendalian Bau Industri & Gas Scrubbing',
      'Pemulihan Uap Pelarut Industri Kimia',
      'Desulfurisasi Biogas & Gas Alam (H2S Removal)',
      'Filter Kabin Otomotif & Tabung Emisi'
    ],
    specifications: [
      { label: 'Pellet Diameter', labelId: 'Diameter Pelet', labelAr: 'قطر الحبيبة', value: '3.0 mm / 4.0 mm' },
      { label: 'Iodine Number', labelId: 'Angka Iodin', labelAr: 'رقم اليود', value: '900 - 1100 mg/g' },
      { label: 'CTC Adsorption', labelId: 'Adsorpsi CTC', labelAr: 'امتصاص CTC', value: '55% - 70%' },
      { label: 'Hardness Number', labelId: 'Kekerasan (Hardness)', labelAr: 'الصلابة', value: '≥ 95%' },
      { label: 'Moisture', labelId: 'Kadar Air', labelAr: 'الرطوبة', value: '≤ 5%' }
    ],
    packaging: ['25 kg Heavy Duty Woven Bag', '500 kg Big Bags on Pallets'],
    featured: true
  },
  {
    id: 'water-04',
    name: 'Water Treatment & Air/Gas Purification Carbon',
    nameId: 'Karbon Aktif Pemurnian Air & Pengolahan Gas',
    nameAr: 'كربون معالجة المياه وتنقية الغاز والهواء',
    slug: 'water-treatment-air-gas-purification',
    category: 'Specialty',
    shortDesc: 'Engineered grade for chlorine removal, organics adsorption, and odor neutralization.',
    shortDescId: 'Formulasi khusus penghilangan klorin, adsorpsi senyawa organik, dan netralisasi bau.',
    shortDescAr: 'درجة هندسية لإزالة الكلور والمركبات العضوية وتنقية الهواء من الروائح.',
    description: 'Specifically engineered for municipal drinking water systems, wastewater polishers, and gas purification towers. Delivers high adsorption capacity for micro-pollutants, chlorine, chloramines, trihalomethanes (THMs), and volatile organics.',
    descriptionId: 'Diformulasikan secara khusus untuk instalasi pengolahan air minum PDAM, pemolesan air limbah industri (WWTP), dan menara purifikasi gas. Memiliki daya serap unggul terhadap polutan mikro, klorin aktif, kloramin, dan senyawa organik volatil.',
    descriptionAr: 'مصمم خصيصاً لأنظمة مياه الشرب البلدية ومحطات معالجة مياه الصرف وأبراج تنقية الغاز.',
    image: '/images/products/water-treatment-carbon.jpg',
    rawMaterial: '100% Coconut Shell',
    rawMaterialId: '100% Tempurung Kelapa Alami',
    iodineRange: '1000 - 1200 mg/g',
    meshSizes: ['8x30 mesh', '12x40 mesh', '12x30 mesh'],
    applications: [
      'Municipal Potable Water Plants (PDAM)',
      'Industrial Effluent Polishing',
      'Aquarium & Aquaculture Water Purification',
      'Exhaust Air Filtration & Chimney Scrubber'
    ],
    applicationsId: [
      'Instalasi Pengolahan Air Bersih / PDAM',
      'Pemolesan Akhir Air Limbah Industri (WWTP)',
      'Purifikasi Air Akuakultur & Tambak',
      'Filtrasi Cerobong Udara & Scrubber Emisi'
    ],
    specifications: [
      { label: 'Iodine Number', labelId: 'Angka Iodin', labelAr: 'رقم اليود', value: '1000 - 1200 mg/g' },
      { label: 'Dechlorination Half Length', labelId: 'Panjang Paruh Deklorinasi', labelAr: 'طول نصف إزالة الكلور', value: '< 3.0 cm' },
      { label: 'Ash Content', labelId: 'Kadar Abu', labelAr: 'نسبة الرماد', value: '≤ 3%' },
      { label: 'Moisture', labelId: 'Kadar Air', labelAr: 'الرطوبة', value: '≤ 4%' },
      { label: 'Abrasion Resistance', labelId: 'Ketahanan Abrasi', labelAr: 'مقاومة التآكل', value: '≥ 98%' }
    ],
    packaging: ['25 kg Bag', '700 kg Jumbo Bag'],
    featured: true
  },
  {
    id: 'food-05',
    name: 'Food & Pharmaceutical Grade Activated Carbon',
    nameId: 'Karbon Aktif Food & Pharmaceutical Grade',
    nameAr: 'كربون منشط بدرجة غذائية ودوائية (Food Grade)',
    slug: 'food-grade-activated-carbon',
    category: 'Specialty',
    shortDesc: 'Ultra-pure, acid-washed activated carbon meeting international food safety & pharma standards.',
    shortDescId: 'Karbon aktif ultra murni (acid-washed) berstandar keamanan pangan internasional dan farmasi.',
    shortDescAr: 'كربون منشط فائق النقاء مغسول بالحمض ومطابق لمعايير الأغذية والأدوية.',
    description: 'Food & Pharmaceutical grade activated carbon undergoes special purification and optional acid-washing to achieve minimal heavy metal traces and ultra-low ash. It provides clean decolorization for sugar, monosodium glutamate (MSG), citric acid, vitamins, and beverages.',
    descriptionId: 'Varian berstandar Food & Pharmaceutical Grade ini melalui proses pemurnian khusus dan pencucian asam (acid-washed) untuk memastikan kadar logam berat dan abu mendekati nol. Sangat higienis untuk dekolorisasi gula rafinasi, MSG, asam sitrat, dan farmasi.',
    descriptionAr: 'يخضع لعمليات تنقية وغسيل بالحمض للوصول إلى أدنى نسبة رماد ومعادن ثقيلة، آمن للأغذية والأدوية.',
    image: '/images/products/food-grade-carbon.jpg',
    rawMaterial: 'Virgin Coconut Shell Charcoal (Acid Washed)',
    rawMaterialId: 'Arang Tempurung Kelapa Murni (Acid Washed)',
    iodineRange: '1050 - 1200 mg/g',
    meshSizes: ['325 mesh powder', '12x40 mesh granular', 'Custom specs'],
    applications: [
      'Refined Sugar & High Fructose Corn Syrup (HFCS)',
      'Edible Oil Bleaching & Palm Oil Refining',
      'Alcoholic Beverages & Wine Clarification',
      'Pharmaceutical Active Ingredients & Dialysis'
    ],
    applicationsId: [
      'Dekolorisasi Gula Rafinasi & Sirup Jagung',
      'Bleaching Minyak Goreng & Minyak Sawit',
      'Klarifikasi Minuman Fermentasi & Jus Buah',
      'Bahan Baku Farmasi & Cairan Dialisis'
    ],
    specifications: [
      { label: 'Iodine Number', labelId: 'Angka Iodin', labelAr: 'رقم اليود', value: '≥ 1050 - 1200 mg/g' },
      { label: 'Heavy Metals (Pb, As)', labelId: 'Logam Berat', labelAr: 'المعادن الثقيلة', value: '< 10 ppm (Undetectable)' },
      { label: 'Acid Soluble Ash', labelId: 'Abu Larut Asam', labelAr: 'الرماد القابل للذوبان', value: '< 1%' },
      { label: 'pH', labelId: 'pH', labelAr: 'الرقم الهيدروجيني', value: '6.0 - 7.5 (Neutral)' }
    ],
    packaging: ['25 kg Food-Grade Sealed Kraft Bag with Aluminum Liner', 'Custom Export Pallets'],
    featured: false
  },
  {
    id: 'ind-06',
    name: 'Industrial Grade & Gold Recovery Activated Carbon',
    nameId: 'Karbon Aktif Khusus Tambang Emas & Industri Berat',
    nameAr: 'كربون منشط لاستخراج الذهب والتطبيقات الصناعية',
    slug: 'industrial-grade-gold-recovery-carbon',
    category: 'Specialty',
    shortDesc: 'Extremely high platelet hardness carbon engineered for CIP / CIL gold extraction circuits.',
    shortDescId: 'Kekerasan platelet ekstrem yang dirancang khusus untuk sirkuit ekstraksi emas CIP / CIL.',
    shortDescAr: 'صلابة صفائحية فائقة القوة مصممة خصيصاً لعمليات استخلاص الذهب CIP و CIL.',
    description: 'Engineered specifically for the precious metal recovery industry. Our gold-extraction grade coconut shell activated carbon boasts exceptionally high platelet hardness (≥ 99%) to withstand rigorous agitator shearing in Carbon-in-Pulp (CIP) and Carbon-in-Leach (CIL) circuits without gold-bearing carbon loss.',
    descriptionId: 'Diformulasikan khusus untuk industri ekstraksi logam mulia (tambang emas). Memiliki kekerasan partikel sangat tinggi (≥ 99%) agar tidak rapuh saat diaduk dalam tangki Carbon-in-Pulp (CIP) dan Carbon-in-Leach (CIL), mencegah hilangnya emas akibat abrasi.',
    descriptionAr: 'مصمم خصيصاً لصناعة استخلاص الذهب في مناجم التعدين عبر طرق CIP و CIL بصلابة استثنائية لمنع فقدان الذهب.',
    image: '/images/products/industrial-grade-carbon.jpg',
    rawMaterial: 'Old Hard-Shell Coconut (Kelapa Tua Pilihan)',
    rawMaterialId: 'Tempurung Kelapa Tua Keras Pilihan',
    iodineRange: '1000 - 1150 mg/g',
    meshSizes: ['6x12 mesh', '8x16 mesh', '6x16 mesh'],
    applications: [
      'Gold & Silver Cyanide Leach Recovery (CIP/CIL/CIC)',
      'Precious Metal Refining & Plating Baths',
      'Heavy Metal Adsorption in Industrial Effluent',
      'Chemical Synthesis Catalytic Support'
    ],
    applicationsId: [
      'Ekstraksi Sianida Emas & Perak (CIP / CIL / CIC)',
      'Pemurnian Logam Mulia & Elektroplating',
      'Penjerapan Logam Berat Air Limbah Kimia',
      'Penyangga Katalis Reaktor Sintesis Kimia'
    ],
    specifications: [
      { label: 'Platelet Hardness (Ball-pan)', labelId: 'Kekerasan (Ball-pan)', labelAr: 'صلابة الكرة', value: '≥ 99.0%' },
      { label: 'Gold Adsorption Rate (K-value)', labelId: 'Laju Adsorpsi Emas (K)', labelAr: 'معدل امتصاص الذهب', value: '≥ 28 kg Au / t carbon' },
      { label: 'Gold Loading Capacity (R-value)', labelId: 'Kapasitas Muat Emas (R)', labelAr: 'سعة تحميل الذهب', value: '≥ 55%' },
      { label: 'Attrition Resistance', labelId: 'Ketahanan Aus', labelAr: 'مقاومة التفتت', value: '< 1.0% loss' },
      { label: 'Iodine Number', labelId: 'Angka Iodin', labelAr: 'رقم اليود', value: '1000 - 1150 mg/g' }
    ],
    packaging: ['25 kg Heavy Duty Polypropylene Bag', '500 kg / 700 kg Sling Jumbo Bags on ISPM-15 Treated Pallets'],
    featured: true
  }
];

export const getActivatedCarbonBySlug = (slug: string) => {
  return activatedCarbonProducts.find(p => p.slug === slug);
};

