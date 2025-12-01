'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAutoLanguageDetection } from '../hooks/useAutoLanguageDetection';

type Language = 'en' | 'id' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    product: 'Product',
    media: 'Media',
    blog: 'Blog',
    glossary: 'Glossary',
    getSample: 'Get Sample',
    getQuoteBtn: 'Get Quote',
    requestSampleBtn: 'Request a Sample',
    requestSampleEmail: 'Sample via Email',
    requestSampleWhatsApp: 'Sample via WhatsApp',
    downloadCatalog: 'Download Our Catalog',
    downloadNIB: 'Download NIB Certificate',
    viewNIB: 'View NIB Certificate',
    // NIB Section
    nibCertification: 'Business License Certification',
    nibDescription: 'CocoBlim is a legally registered business entity in Indonesia with official NIB (Nomor Induk Berusaha) certification, ensuring our credibility and compliance with Indonesian business regulations.',
    officialBusinessLicense: 'Official Business License',
    verified: 'Verified',
    nibCertificateTitle: 'NIB Certificate - CocoBlim',
    nibCertificateDescription: 'Our NIB certificate validates our legal status as a registered business entity in Indonesia, authorized to conduct international trade and export activities.',
    legalBusinessEntity: 'Legal Business Entity',
    governmentApproved: 'Government Approved',
    internationalTrade: 'International Trade Authorized',
    qualityAssurance: 'Quality Assurance Certified',
    // Hero
    heroTitle: 'Do you need charcoal?',
    heroSubtitle: 'Our charcoal quality is always trusted.',
    supplierText: 'Trusted Indonesian charcoal supplier',
    // Benefits
    whyUs: 'Why Us?',
    benefit1Title: '01. Fast and precise',
    benefit1Text: 'We will fulfill your charcoal needs with quick response. Our team is very competent, solid, and can communicate well in Indonesian and English.',
    benefit2Title: '02. Low cost',
    benefit2Text: 'We are a charcoal supplier in Indonesia that has nearly 10 charcoal factories, which work with us on the island of Java. The ease of logistics distribution on Java Island can help us speed up delivery of your needs through 3 International Ports, namely Jakarta, Semarang, and Surabaya.',
    benefit3Title: '03. Quality is priority',
    benefit3Text: 'We always prioritize the quality of our charcoal products. Our priority is to select the best raw materials to produce competitive Indonesian charcoal products, both coconut shell charcoal and high-quality briquettes.',
    // Understanding Section
    understandingTitle: 'We understand your charcoal needs',
    understandingText1: 'Indonesia is the world\'s best coconut producer and has many types of hardwood that meet international standards. We can ensure that our charcoal products are processed with the best materials.',
    understandingText2: 'We understand global market needs and standards, and are committed to providing the best service.',
    // About Section
    story: 'Story',
    storyText: 'CocoBlim is committed to utilizing coconut waste and quality wood from all regions in Indonesia for the international market.',
    vision: 'Vision',
    visionText: 'To become a charcoal supply company that can meet local and global market needs, and prioritize the quality of charcoal products.',
    mission: 'Mission',
    missionText: 'Always quick in responding to client needs and continue to innovate to meet charcoal market needs.',
    // Contact Info
    phone: '+62 851 4492 0078',
    email: 'info@cocoblim.com',
    address: 'Depok, West Java, Indonesia',
    // Charcoal Products
    charcoalBriketShisha: 'COCONUT BRIQUETTE SHISHA',
    charcoalKayuKeras: 'HARDWOOD CHARCOAL',
    charcoalTempurungKelapa: 'COCONUT SHELL CHARCOAL',
    charcoalGranulaMeshed: 'GRANULATED/MESHED CHARCOAL',
    charcoalSawdustBriquette: 'SAWDUST BRIQUETTE CHARCOAL',
    charcoalActivatedCarbon: 'ACTIVATED CARBON',
    // Product Features
    kualitasPremium: 'PREMIUM QUALITY',
    tanpaBahanKimia: 'NO CHEMICALS',
    terbakarLebihLama: 'BURNS LONGER',
    rasaSmoky: 'SMOKY FLAVOR',
    bahanBakuTerbaik: 'BEST RAW MATERIALS',
    semuaUkuranSiap: 'ALL SIZES READY',
    kualitasTinggi: 'HIGH QUALITY',
    untukIndustri: 'FOR INDUSTRY',
    tahanLama: 'LONG LASTING',
    // Product Descriptions
    descBriketShisha: 'Our coconut briquette shisha is made from selected coconut shells processed with modern technology to produce the best quality.',
    // Briket Shisha Specifications
    specifications: 'Specifications',
    ashContent: 'Ash Content: ≤ 2.5%',
    fixedCarbon: 'Fixed Carbon: ≥ 75%',
    burningTime: 'Burning Time: 90–120 minutes',
    calorificValue: 'Calorific Value: ≥ 7,000 kcal/kg',
    descKayuKeras: 'Our hardwood charcoal is made from selected wood starting from Tamarind Wood, premium quality wood.',
    descTempurungKelapa: 'Coconut shell charcoal is a material that can be used for various industrial applications.',
    descGranulaMeshed: 'Meshed charcoal or known as granular activated carbon can be used for water treatment and filtration.',
    descSawdustBriquette: 'Sawdust briquette charcoal is made from compressed sawdust with high quality standards.',
    descActivatedCarbon: 'Activated carbon charcoal for industrial needs and water filtration applications.',
    // Products Section
    ourProducts: 'OUR PRODUCTS',
    // Factory Section
    ourFactory: 'OUR FACTORY',
    factoryTitle: 'State-of-the-Art Production Facility',
    factoryDescription: 'Our modern factory is equipped with advanced technology and follows strict quality control standards to ensure the highest quality charcoal products for our international clients.',
    // Product Detail Page
    productSpecifications: 'Product Specifications',
    applications: 'Applications',
    packaging: 'Packaging Options',
    contactForOrder: 'Contact us for orders and inquiries',
    getQuote: 'Get Quote',
    backToProducts: 'Back to Products',
    // Common Labels
    rawMaterial: 'Raw Material',
    shape: 'Shape',
    size: 'Size',
    moisture: 'Moisture Content',
    volatileMatter: 'Volatile Matter',
    hardness: 'Hardness',
    iodineNumber: 'Iodine Number',
    meshSize: 'Mesh Size',
    keyFeatures: 'Key Features',
    requestSample: 'Request Sample',
    requestQuote: 'Request Quote',
    // Contact Page
    contactUs: 'Contact Us',
    contactSubtitle: 'Have questions or want to request a sample? Reach out to us!',
    sendMessage: 'Send Us a Message',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    sendMessageBtn: 'Send Message',
    contactInformation: 'Contact Information',
    addressLabel: 'Address',
    phoneWhatsapp: 'Phone / WhatsApp',
    ourLocation: 'Our Location',
    thankYouMessage: 'Thank you for your message! We will get back to you soon.',
    // Product Specifications Data
    selectedCoconutShells: 'Selected Coconut Shells',
    selectedHardwood: 'Selected Hardwood (Tamarind, Sono)',
    naturalPieces: 'Natural Pieces',
    smallPieces: 'Small Pieces',
    cubeShape: 'Cube 25x25x25mm',
    activatedCoconutShells: 'Activated Coconut Shells',
    // Applications
    premiumShishaHookah: 'Premium Shisha & Hookah',
    bbqGrilling: 'BBQ & Grilling',
    restaurantsCafes: 'Restaurants & Cafes',
    exportQuality: 'Export Quality',
    traditionalRestaurants: 'Traditional Restaurants',
    foodIndustry: 'Food Industry',
    exportMarket: 'Export Market',
    activatedCarbonRaw: 'Raw Material for Activated Carbon',
    metallurgyIndustry: 'Metallurgy Industry',
    waterTreatment: 'Water Treatment',
    industrialFuel: 'Industrial Fuel',
    waterPurification: 'Water Purification',
    airPurification: 'Air Purification',
    goldRecovery: 'Gold Recovery',
    chemicalProcessing: 'Chemical Processing',
    // Packaging
    per10kgCarton: '10kg per carton',
    per20kgCarton: '20kg per carton',
    customPackaging: 'Custom packaging available',
    per5kgSack: '5kg per sack',
    per10kgSack: '10kg per sack',
    per20kgSack: '20kg per sack',
    bulkPackaging: 'Bulk packaging',
    per25kgSack: '25kg per sack',
    per50kgSack: '50kg per sack',
    jumbo1ton: 'Jumbo bag 1 ton',
    bulkShipment: 'Bulk shipment',
    per15kgPack: '15kg (inner plastic bag + outer PP woven bag/carton)',
    per5kgPack: '5kg (inner plastic bag + outer PP woven bag/carton)',
    // Pricing Section
    pricing: 'FOB Pricing',
    pricingDescription: 'Competitive FOB prices for premium Indonesian charcoal products. All prices are per metric ton with minimum order quantities.',
    pricingNote: 'Important Pricing Information',
    // Blog Section
    blogTitle: 'Blog',
    blogSubtitle: 'Stay updated with the latest news and insights on coconut products and sustainable practices.',
    latestArticles: 'Latest Articles',
    articlesSubtitle: 'Insights and updates from the world of coconut products.',
    readMore: 'Read More',
    publishedOn: 'Published on',
    completeGuide: 'Complete Guide',
    industryNews: 'Industry News',
    companyProfile: 'Company Profile',
    backToBlog: 'Back to Blog',
    qualityguide: 'Quality Guide',
    industrynews: 'Industry News',
    companyprofile: 'Company Profile',
    completeguide: 'Complete Guide',
  },
  id: {
    // Navbar
    home: 'Beranda',
    about: 'Tentang',
    product: 'Produk',
    media: 'Media',
    blog: 'Blog',
    glossary: 'Glosarium',
    getSample: 'Dapatkan Sampel',
    getQuoteBtn: 'Dapatkan Penawaran Harga',
    requestSampleBtn: 'Minta Sampel Produk',
    requestSampleEmail: 'Sampel via Email',
    requestSampleWhatsApp: 'Sampel via WhatsApp',
    downloadCatalog: 'Unduh Katalog Kami',
    downloadNIB: 'Unduh Sertifikat NIB',
    viewNIB: 'Lihat Sertifikat NIB',
    // NIB Section
    nibCertification: 'Sertifikasi Izin Usaha',
    nibDescription: 'CocoBlim adalah badan usaha yang terdaftar secara legal di Indonesia dengan sertifikasi NIB (Nomor Induk Berusaha) resmi, memastikan kredibilitas dan kepatuhan kami terhadap regulasi bisnis Indonesia.',
    officialBusinessLicense: 'Izin Usaha Resmi',
    verified: 'Terverifikasi',
    nibCertificateTitle: 'Sertifikat NIB - CocoBlim',
    nibCertificateDescription: 'Sertifikat NIB kami memvalidasi status legal sebagai badan usaha terdaftar di Indonesia, berwenang untuk melakukan perdagangan internasional dan kegiatan ekspor.',
    legalBusinessEntity: 'Badan Usaha Legal',
    governmentApproved: 'Disetujui Pemerintah',
    internationalTrade: 'Berwenang Perdagangan Internasional',
    qualityAssurance: 'Bersertifikat Jaminan Kualitas',
    // Hero
    heroTitle: 'Anda membutuhkan arang?',
    heroSubtitle: 'Kualitas arang kami selalu dapat dipercaya.',
    supplierText: 'CocoBlim - Supplier arang Indonesia yang dapat dipercaya',
    // Benefits
    whyUs: 'Why Us?',
    benefit1Title: '01. Cepat dan tepat',
    benefit1Text: 'Kami akan memenuhi kebutuhan arang anda dengan respon yang cepat. Tim kami sangat kompeten, solid, dan dapat berkomunikasi dengan baik dalam Bahasa Indonesia dan Inggris.',
    benefit2Title: '02. Biaya rendah',
    benefit2Text: 'Kami adalah pemasok arang di Indonesia yang memiliki hampir 10 pabrik arang, yang bekerja sama dengan kami di pulau Jawa. Kemudahan distribusi logistik di Pulau Jawa dapat membantu kami untuk mempercepat pengiriman kebutuhan Anda melalui 3 Pelabuhan Internasional, yaitu Jakarta, Semarang, dan Surabaya.',
    benefit3Title: '03. Kualitas adalah prioritas',
    benefit3Text: 'Kami selalu memprioritaskan kualitas arang kami. Prioritas kami adalah memilih bahan baku terbaik untuk menghasilkan arang Indonesia yang kompetitif, baik arang tempurung kelapa ataupun arang briket berkualitas tinggi.',
    // Understanding Section
    understandingTitle: 'Kami mengerti kebutuhan arang anda',
    understandingText1: 'Indonesia merupakan penghasil kelapa terbaik di dunia dan memiliki banyak jenis kayu keras yang menyamai standar internasional. Kami dapat memastikan bahwa produk arang kami diproses dengan bahan-bahan terbaik.',
    understandingText2: 'Kami memahami kebutuhan dan standard pasar global, dan berkomitmen untuk memberikan layanan terbaik.',
    // About Section
    story: 'Story',
    storyText: 'CocoBlim berkomitmen terhadap pemanfaatan limbah kelapa dan kayu berkualitas dari seluruh wilayah di Indonesia untuk pasar internasional.',
    vision: 'Visi',
    visionText: 'Menjadi perusahaan pemasok arang yang mampu memenuhi kebutuhan pasar lokal, dunia, dan mengutamakan kualitas produk-produk arang.',
    mission: 'Misi',
    missionText: 'Selalu cepat dalam merespon kebutuhan klien dan terus berinovasi untuk memenuhi kebutuhan pasar arang.',
    // Contact Info
    phone: '+62 851 4492 0078',
    email: 'info@cocoblim.com',
    address: 'Depok, Jawa Barat, Indonesia',
    // Charcoal Products
    charcoalBriketShisha: 'ARANG BRIKET SHISHA',
    charcoalKayuKeras: 'ARANG KAYU KERAS',
    charcoalTempurungKelapa: 'ARANG TEMPURUNG KELAPA',
    charcoalGranulaMeshed: 'ARANG GRANULA/MESHED',
    charcoalSawdustBriquette: 'ARANG SAWDUST BRIQUETTE',
    charcoalActivatedCarbon: 'ARANG ACTIVATED CARBON',
    // Product Features
    kualitasPremium: 'KUALITAS PREMIUM',
    tanpaBahanKimia: 'TANPA BAHAN KIMIA',
    terbakarLebihLama: 'TERBAKAR LEBIH LAMA',
    rasaSmoky: 'RASA SMOKY',
    bahanBakuTerbaik: 'BAHAN BAKU TERBAIK',
    semuaUkuranSiap: 'SEMUA UKURAN SIAP',
    kualitasTinggi: 'KUALITAS TINGGI',
    untukIndustri: 'UNTUK INDUSTRI',
    tahanLama: 'TAHAN LAMA',
    // Product Descriptions
    descBriketShisha: 'Arang briket shisha kami terbuat dari tempurung kelapa pilihan yang diproses dengan teknologi modern untuk menghasilkan kualitas terbaik.',
    // Briket Shisha Specifications
    specifications: 'Spesifikasi',
    ashContent: 'Ash Content: ≤ 2.5%',
    fixedCarbon: 'Fixed Carbon: ≥ 75%',
    burningTime: 'Burning Time: 90–120 menit',
    calorificValue: 'Calorific Value: ≥ 7.000 kcal/kg',
    descKayuKeras: 'Arang kayu keras kami terbuat dari kayu pilihan mulai dari Kayu Asam Jawa, kayu berkualitas premium.',
    descTempurungKelapa: 'Arang tempurung kelapa merupakan bahan yang dapat digunakan untuk berbagai keperluan industri.',
    descGranulaMeshed: 'Arang meshed atau dikenal dengan karbon aktif granular dapat digunakan untuk pengolahan air dan filtrasi.',
    descSawdustBriquette: 'Arang sawdust briquette terbuat dari serbuk gergaji yang dipadatkan dengan standar kualitas tinggi.',
    descActivatedCarbon: 'Arang activated carbon untuk keperluan industri dan aplikasi filtrasi air.',
    // Products Section
    ourProducts: 'PRODUK KAMI',
    // Factory Section
    ourFactory: 'PABRIK KAMI',
    factoryTitle: 'Fasilitas Produksi Berteknologi Tinggi',
    factoryDescription: 'Pabrik modern kami dilengkapi dengan teknologi canggih dan mengikuti standar kontrol kualitas ketat untuk memastikan produk arang berkualitas tinggi untuk klien internasional.',
    // Product Detail Page
    productSpecifications: 'Spesifikasi Produk',
    applications: 'Aplikasi',
    packaging: 'Pilihan Kemasan',
    contactForOrder: 'Hubungi kami untuk pemesanan dan inquiry',
    getQuote: 'Minta Penawaran',
    backToProducts: 'Kembali ke Produk',
    // Common Labels
    rawMaterial: 'Bahan Baku',
    shape: 'Bentuk',
    size: 'Ukuran',
    moisture: 'Kadar Air',
    volatileMatter: 'Volatile Matter',
    hardness: 'Kekerasan',
    iodineNumber: 'Iodine Number',
    meshSize: 'Ukuran Mesh',
    keyFeatures: 'Fitur Utama',
    requestSample: 'Minta Sampel',
    requestQuote: 'Minta Penawaran',
    // Contact Page
    contactUs: 'Hubungi Kami',
    contactSubtitle: 'Ada pertanyaan atau ingin meminta sampel? Hubungi kami!',
    sendMessage: 'Kirim Pesan',
    nameLabel: 'Nama',
    emailLabel: 'Email',
    messageLabel: 'Pesan',
    sendMessageBtn: 'Kirim Pesan',
    contactInformation: 'Informasi Kontak',
    addressLabel: 'Alamat',
    phoneWhatsapp: 'Telepon / WhatsApp',
    ourLocation: 'Lokasi Kami',
    thankYouMessage: 'Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.',
    // Product Specifications Data
    selectedCoconutShells: 'Tempurung Kelapa Pilihan',
    selectedHardwood: 'Kayu Keras Pilihan (Asam Jawa, Sono)',
    naturalPieces: 'Potongan Natural',
    smallPieces: 'Potongan Kecil',
    cubeShape: 'Kubus 25x25x25mm',
    activatedCoconutShells: 'Tempurung Kelapa Activated',
    // Applications
    premiumShishaHookah: 'Shisha dan Hookah Premium',
    bbqGrilling: 'BBQ dan Grilling',
    restaurantsCafes: 'Restoran dan Cafe',
    exportQuality: 'Export Quality',
    traditionalRestaurants: 'Restoran Tradisional',
    foodIndustry: 'Industri Makanan',
    exportMarket: 'Export Market',
    activatedCarbonRaw: 'Bahan Baku Activated Carbon',
    metallurgyIndustry: 'Industri Metalurgi',
    waterTreatment: 'Water Treatment',
    industrialFuel: 'Fuel Industrial',
    waterPurification: 'Pemurnian Air',
    airPurification: 'Pemurnian Udara',
    goldRecovery: 'Pemulihan Emas',
    chemicalProcessing: 'Proses Kimia',
    // Packaging
    per10kgCarton: '10kg per karton',
    per20kgCarton: '20kg per karton',
    customPackaging: 'Custom packaging tersedia',
    per5kgSack: '5kg per karung',
    per10kgSack: '10kg per karung',
    per20kgSack: '20kg per karung',
    bulkPackaging: 'Bulk packaging',
    per25kgSack: '25kg per karung',
    per50kgSack: '50kg per karung',
    jumbo1ton: 'Jumbo bag 1 ton',
    bulkShipment: 'Bulk shipment',
    per15kgPack: '15kg (kantong plastik dalam + karung PP luar/karton)',
    per5kgPack: '5kg (kantong plastik dalam + karung PP luar/karton)',
    // Pricing Section
    pricing: 'Harga FOB',
    pricingDescription: 'Harga FOB yang kompetitif untuk produk arang premium Indonesia. Semua harga per metrik ton dengan kuantitas pesanan minimum.',
    pricingNote: 'Informasi Harga Penting',
    // Blog Section
    blogTitle: 'Blog',
    blogSubtitle: 'Tetap update dengan berita terbaru dan wawasan tentang produk kelapa dan praktik berkelanjutan.',
    latestArticles: 'Artikel Terbaru',
    articlesSubtitle: 'Wawasan dan update dari dunia produk kelapa.',
    readMore: 'Baca Selengkapnya',
    publishedOn: 'Diterbitkan pada',
    completeGuide: 'Panduan Lengkap',
    industryNews: 'Berita Industri',
    companyProfile: 'Profil Perusahaan',
    backToBlog: 'Kembali ke Blog',
    qualityguide: 'Panduan Kualitas',
    industrynews: 'Berita Industri',
    companyprofile: 'Profil Perusahaan',
    completeguide: 'Panduan Lengkap',
  },
  ar: {
    // Navbar
    home: 'الرئيسية',
    about: 'حولنا',
    product: 'المنتجات',
    media: 'الوسائط',
    blog: 'المدونة',
    glossary: 'المصطلحات',
    getSample: 'احصل على عينة',
    getQuoteBtn: 'احصل على عرض سعر',
    requestSampleBtn: 'اطلب عينة منتج',
    requestSampleEmail: 'عينة عبر البريد الإلكتروني',
    requestSampleWhatsApp: 'عينة عبر واتساب',
    downloadCatalog: 'تحميل الكتالوج',
    downloadNIB: 'تحميل شهادة NIB',
    viewNIB: 'عرض شهادة NIB',
    // NIB Section
    nibCertification: 'شهادة ترخيص الأعمال',
    nibDescription: 'كوكوبليم هي كيان تجاري مسجل قانونياً في إندونيسيا مع شهادة NIB (رقم الهوية التجارية) الرسمية، مما يضمن مصداقيتنا والامتثال للوائح التجارية الإندونيسية.',
    officialBusinessLicense: 'ترخيص الأعمال الرسمي',
    verified: 'موثق',
    nibCertificateTitle: 'شهادة NIB - كوكوبليم',
    nibCertificateDescription: 'تؤكد شهادة NIB الخاصة بنا وضعنا القانوني ككيان تجاري مسجل في إندونيسيا، مخول للقيام بالتجارة الدولية وأنشطة التصدير.',
    legalBusinessEntity: 'كيان تجاري قانوني',
    governmentApproved: 'معتمد من الحكومة',
    internationalTrade: 'مخول للتجارة الدولية',
    qualityAssurance: 'معتمد لضمان الجودة',
    // Hero
    heroTitle: 'هل تحتاج إلى فحم؟',
    heroSubtitle: 'جودة فحمنا موثوقة دائماً.',
    supplierText: 'كوكوبليم - مورد الفحم الإندونيسي الموثوق',
    // Benefits
    whyUs: 'لماذا نحن؟',
    benefit1Title: '01. سريع ودقيق',
    benefit1Text: 'سنلبي احتياجاتك من الفحم بسرعة. فريقنا مؤهل جداً وقوي ويمكنه التواصل بشكل جيد باللغتين الإندونيسية والإنجليزية.',
    benefit2Title: '02. تكلفة منخفضة',
    benefit2Text: 'نحن مورد فحم في إندونيسيا لدينا ما يقرب من 10 مصانع فحم تعمل معنا في جزيرة جاوة. سهولة التوزيع اللوجستي في جزيرة جاوة يمكن أن تساعدنا في تسريع تسليم احتياجاتك من خلال 3 موانئ دولية وهي جاكرتا وسيمارانغ وسورابايا.',
    benefit3Title: '03. الجودة هي الأولوية',
    benefit3Text: 'نحن نعطي الأولوية دائماً لجودة منتجات الفحم لدينا. أولويتنا هي اختيار أفضل المواد الخام لإنتاج منتجات فحم إندونيسية تنافسية، سواء فحم قشر جوز الهند أو قوالب الفحم عالية الجودة.',
    // Understanding Section
    understandingTitle: 'نحن نفهم احتياجاتك من الفحم',
    understandingText1: 'إندونيسيا هي أفضل منتج لجوز الهند في العالم ولديها أنواع كثيرة من الأخشاب الصلبة التي تلبي المعايير الدولية. يمكننا ضمان أن منتجات الفحم لدينا تتم معالجتها بأفضل المواد.',
    understandingText2: 'نحن نفهم احتياجات ومعايير السوق العالمية، ونلتزم بتقديم أفضل خدمة.',
    // About Section
    story: 'القصة',
    storyText: 'كوكوبليم ملتزمة بالاستفادة من نفايات جوز الهند والأخشاب عالية الجودة من جميع المناطق في إندونيسيا للسوق الدولية.',
    vision: 'الرؤية',
    visionText: 'أن نصبح شركة توريد فحم قادرة على تلبية احتياجات السوق المحلية والعالمية، وإعطاء الأولوية لجودة منتجات الفحم.',
    mission: 'المهمة',
    missionText: 'الاستجابة السريعة دائماً لاحتياجات العملاء والاستمرار في الابتكار لتلبية احتياجات سوق الفحم.',
    // Contact Info
    phone: '+62 851 4492 0078',
    email: 'info@cocoblim.com',
    address: 'ديبوك، جاوة الغربية، إندونيسيا',
    // Charcoal Products
    charcoalBriketShisha: 'فحم جوز الهند للشيشة',
    charcoalKayuKeras: 'فحم الخشب الصلب',
    charcoalTempurungKelapa: 'فحم قشر جوز الهند',
    charcoalGranulaMeshed: 'فحم محبب/مشبك',
    charcoalSawdustBriquette: 'قوالب فحم نشارة الخشب',
    charcoalActivatedCarbon: 'الكربون المنشط',
    // Product Features
    kualitasPremium: 'جودة ممتازة',
    tanpaBahanKimia: 'بدون مواد كيميائية',
    terbakarLebihLama: 'يحترق لفترة أطول',
    rasaSmoky: 'نكهة مدخنة',
    bahanBakuTerbaik: 'أفضل المواد الخام',
    semuaUkuranSiap: 'جميع الأحجام جاهزة',
    kualitasTinggi: 'جودة عالية',
    untukIndustri: 'للصناعة',
    tahanLama: 'يدوم طويلاً',
    // Product Descriptions
    descBriketShisha: 'فحم جوز الهند للشيشة مصنوع من قشور جوز الهند المختارة المعالجة بالتكنولوجيا الحديثة لإنتاج أفضل جودة.',
    // Briket Shisha Specifications
    specifications: 'المواصفات',
    ashContent: 'محتوى الرماد: ≤ 2.5%',
    fixedCarbon: 'الكربون الثابت: ≥ 75%',
    burningTime: 'وقت الاحتراق: 90–120 دقيقة',
    calorificValue: 'القيمة الحرارية: ≥ 7,000 سعرة حرارية/كغ',
    descKayuKeras: 'فحم الخشب الصلب مصنوع من الأخشاب المختارة بدءاً من خشب التمر الهندي، خشب عالي الجودة.',
    descTempurungKelapa: 'فحم قشر جوز الهند مادة يمكن استخدامها لمختلف التطبيقات الصناعية.',
    descGranulaMeshed: 'الفحم المشبك أو المعروف بالكربون المنشط الحبيبي يمكن استخدامه لمعالجة المياه والترشيح.',
    descSawdustBriquette: 'قوالب فحم نشارة الخشب مصنوعة من نشارة الخشب المضغوطة بمعايير جودة عالية.',
    descActivatedCarbon: 'الكربون المنشط للاحتياجات الصناعية وتطبيقات ترشيح المياه.',
    // Products Section
    ourProducts: 'منتجاتنا',
    // Factory Section
    ourFactory: 'مصنعنا',
    factoryTitle: 'مرفق إنتاج متطور',
    factoryDescription: 'مصنعنا الحديث مجهز بتكنولوجيا متقدمة ويتبع معايير مراقبة الجودة الصارمة لضمان أعلى جودة من منتجات الفحم لعملائنا الدوليين.',
    // Product Detail Page
    productSpecifications: 'مواصفات المنتج',
    applications: 'التطبيقات',
    packaging: 'خيارات التعبئة',
    contactForOrder: 'اتصل بنا للطلبات والاستفسارات',
    getQuote: 'احصل على عرض سعر',
    backToProducts: 'العودة إلى المنتجات',
    // Common Labels
    rawMaterial: 'المواد الخام',
    shape: 'الشكل',
    size: 'الحجم',
    moisture: 'محتوى الرطوبة',
    volatileMatter: 'المادة المتطايرة',
    hardness: 'الصلابة',
    iodineNumber: 'رقم اليود',
    meshSize: 'حجم الشبكة',
    keyFeatures: 'الميزات الرئيسية',
    requestSample: 'طلب عينة',
    requestQuote: 'طلب عرض سعر',
    // Contact Page
    contactUs: 'اتصل بنا',
    contactSubtitle: 'هل لديك أسئلة أو تريد طلب عينة؟ تواصل معنا!',
    sendMessage: 'أرسل لنا رسالة',
    nameLabel: 'الاسم',
    emailLabel: 'البريد الإلكتروني',
    messageLabel: 'الرسالة',
    sendMessageBtn: 'إرسال الرسالة',
    contactInformation: 'معلومات الاتصال',
    addressLabel: 'العنوان',
    phoneWhatsapp: 'الهاتف / واتساب',
    ourLocation: 'موقعنا',
    thankYouMessage: 'شكراً لك على رسالتك! سنتواصل معك قريباً.',
    // Product Specifications Data
    selectedCoconutShells: 'قشور جوز الهند المختارة',
    selectedHardwood: 'الأخشاب الصلبة المختارة (التمر الهندي، سونو)',
    naturalPieces: 'قطع طبيعية',
    smallPieces: 'قطع صغيرة',
    cubeShape: 'مكعب 25x25x25 مم',
    activatedCoconutShells: 'قشور جوز الهند المنشطة',
    // Applications
    premiumShishaHookah: 'الشيشة والنرجيلة الممتازة',
    bbqGrilling: 'الشواء والطبخ',
    restaurantsCafes: 'المطاعم والمقاهي',
    exportQuality: 'جودة التصدير',
    traditionalRestaurants: 'المطاعم التقليدية',
    foodIndustry: 'صناعة الأغذية',
    exportMarket: 'السوق التصديرية',
    activatedCarbonRaw: 'مادة خام للكربون المنشط',
    metallurgyIndustry: 'صناعة المعادن',
    waterTreatment: 'معالجة المياه',
    industrialFuel: 'الوقود الصناعي',
    waterPurification: 'تنقية المياه',
    airPurification: 'تنقية الهواء',
    goldRecovery: 'استخراج الذهب',
    chemicalProcessing: 'المعالجة الكيميائية',
    // Packaging
    per10kgCarton: '10 كيلو لكل كرتون',
    per20kgCarton: '20 كيلو لكل كرتون',
    customPackaging: 'التعبئة المخصصة متاحة',
    per5kgSack: '5 كيلو لكل كيس',
    per10kgSack: '10 كيلو لكل كيس',
    per20kgSack: '20 كيلو لكل كيس',
    bulkPackaging: 'التعبئة بالجملة',
    per25kgSack: '25 كيلو لكل كيس',
    per50kgSack: '50 كيلو لكل كيس',
    jumbo1ton: 'كيس جامبو 1 طن',
    bulkShipment: 'الشحن بالجملة',
    per15kgPack: '15 كيلو (كيس بلاستيك داخلي + كيس PP خارجي/كرتون)',
    per5kgPack: '5 كيلو (كيس بلاستيك داخلي + كيس PP خارجي/كرتون)',
    // Pricing Section
    pricing: 'أسعار FOB',
    pricingDescription: 'أسعار FOB تنافسية لمنتجات الفحم الإندونيسية المتميزة. جميع الأسعار لكل طن متري مع الحد الأدنى لكميات الطلب.',
    pricingNote: 'معلومات التسعير المهمة',
    // Blog Section
    blogTitle: 'المدونة',
    blogSubtitle: 'ابق محدثاً مع آخر الأخبار والرؤى حول منتجات جوز الهند والممارسات المستدامة.',
    latestArticles: 'أحدث المقالات',
    articlesSubtitle: 'رؤى وتحديثات من عالم منتجات جوز الهند.',
    readMore: 'اقرأ المزيد',
    publishedOn: 'نُشر في',
    completeGuide: 'دليل شامل',
    industryNews: 'أخبار الصناعة',
    companyProfile: 'ملف الشركة',
    backToBlog: 'العودة إلى المدونة',
    qualityguide: 'دليل الجودة',
    industrynews: 'أخبار الصناعة',
    companyprofile: 'ملف الشركة',
    completeguide: 'دليل شامل',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { detectedLanguage, isDetecting } = useAutoLanguageDetection();
  const [language, setLanguage] = useState<Language>('id');
  const [hasAutoDetected, setHasAutoDetected] = useState(false);

  // Auto-detect language on first visit
  useEffect(() => {
    if (!isDetecting && !hasAutoDetected) {
      // Check if user has manually selected a language before
      const savedLanguage = localStorage.getItem('coconut-language');
      
      if (!savedLanguage) {
        // No saved preference, use detected language
        setLanguage(detectedLanguage);
        localStorage.setItem('coconut-language', detectedLanguage);
        console.log(`Auto-detected language: ${detectedLanguage}`);
      } else {
        // Use saved preference
        setLanguage(savedLanguage as Language);
        console.log(`Using saved language: ${savedLanguage}`);
      }
      
      setHasAutoDetected(true);
    }
  }, [detectedLanguage, isDetecting, hasAutoDetected]);

  // Save language preference when manually changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('coconut-language', lang);
    console.log(`Language manually changed to: ${lang}`);
  };

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[typeof language]];
    return translation || translations.en[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
