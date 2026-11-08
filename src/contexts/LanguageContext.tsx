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

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About Us',
    product: 'Products',
    media: 'Factory & Media',
    blog: 'Articles',
    glossary: 'Glossary',
    pricing: 'Pricing & FOB',
    faq: 'FAQ',
    getSample: 'Get Sample',
    getQuoteBtn: 'Get Quotation',
    requestSampleBtn: 'Request Free Sample',
    requestSampleEmail: 'Sample via Email',
    requestSampleWhatsApp: 'Sample via WhatsApp',
    downloadCatalog: 'Download Catalog (PDF)',
    downloadNIB: 'Download NIB Certificate',
    viewNIB: 'View NIB Certificate',

    // Hero (Slide I)
    heroTitle: 'Do you need activated carbon?',
    heroSubtitle: 'Our activated carbon quality is always trusted.',
    heroDescription: 'Premium coconut shell & palm shell activated carbon manufactured to international ASTM standards for water treatment, gas purification, food decolorization, and gold extraction.',
    supplierText: 'Indonesian Activated Carbon Manufacturer & Exporter',

    // About Us (Slide II)
    whoWeAre: 'Who Are We?',
    aboutSubtitle: 'Committed to High-Quality Activated Carbon Solutions',
    aboutUsText: 'We are committed to delivering high-quality activated carbon products through standardized production processes, prioritizing quality, consistency, and precision in specifications. Driven by dedication to innovation and customer satisfaction, we provide reliable activated carbon solutions to meet the needs of diverse industrial sectors.',
    globalPartner: 'Distributor for local and global markets, ready to partner for your long-term business success.',
    globalReachTitle: 'Serving Global & Domestic Industries',
    globalReachSubtitle: 'Exporting premium Indonesian activated carbon across Asia, the Middle East, Europe, and the Americas.',

    // Vision & Mission (Slide III)
    vision: 'Our Vision',
    visionText: 'To be the preferred activated carbon supply partner for your long-term industrial needs with the finest quality, distributed worldwide.',
    mission: 'Our Mission',
    missionPoint1: 'Deliver premium-grade activated carbon products that meet strict export market standards and customer technical specifications.',
    missionPoint2: 'Ensure consistent adsorption quality and on-time shipment to cultivate lasting trust with international buyers.',
    missionPoint3: 'Provide responsive, flexible customer support to fulfill client needs across various industries, both locally and globally.',

    // Products (Slide IV)
    ourProducts: 'ACTIVATED CARBON PRODUCTS',
    productsSubtitle: 'Engineered for high adsorption capacity, low attrition, and precise pore distribution.',
    granularCarbon: 'Granular Activated Carbon (GAC)',
    powderedCarbon: 'Powdered Activated Carbon (PAC)',
    pelletCarbon: 'Pelletized Activated Carbon (Pellet)',
    waterTreatmentCarbon: 'Water Treatment & Air/Gas Purification',
    foodGradeCarbon: 'Food & Pharmaceutical Grade Activated Carbon',
    industrialCarbon: 'Industrial Grade & Gold Recovery Carbon',
    viewDetails: 'View Specifications',
    iodineRating: 'Iodine Number',
    meshSizes: 'Available Mesh',
    rawMaterial: 'Raw Material',
    applications: 'Key Applications',

    // Why Choose Us (Slide V)
    whyUs: 'Why Choose CocoBlim?',
    whyChoose1Title: 'Premium Quality & Custom Specs',
    whyChoose1Text: 'Iodine numbers from 900 to 1200 mg/g, customized mesh sizing (8x30, 12x40, 325 mesh), and certified testing for every batch.',
    whyChoose2Title: 'Trusted Global Reputation',
    whyChoose2Text: 'Direct factory supplier in West Java, Indonesia with transparent FOB pricing and reliable international port logistics.',
    whyChoose3Title: 'Engineered Industrial Solutions',
    whyChoose3Text: 'Tailored grades for gold mining (CIP/CIL), municipal drinking water, solvent recovery, and food decolorization.',
    whyChoose4Title: 'Best Customer Service',
    whyChoose4Text: 'Rapid response time, free laboratory testing samples, and dedicated export documentation assistance.',

    // Factory (Slide VI)
    ourFactory: 'OUR PRODUCTION FACILITY',
    factoryTitle: 'Modern Activation Kilns in Bogor, West Java',
    factoryDescription: 'Our facility in Tanjungsari, Bogor features high-temperature rotary steam activation kilns, precision crushing, automated multi-deck sieving, and rigorous in-house laboratory testing to ensure zero defect export quality.',

    // Articles (Slide VII)
    latestArticles: 'Activated Carbon Insights & Guides',
    readMore: 'Read All Articles',

    // CTA & Ready to Start (Slide VIII)
    readyTitle: 'Ready to Start Your Activated Carbon Order?',
    readySubtitle: 'Get a customized FOB quotation, request free laboratory samples, or download our technical catalog.',
    instantQuote: 'Get Instant Quotation',
    freeSampleOffer: 'Free Samples Available',
    freeSampleDesc: 'We provide free product samples for your laboratory test. Courier freight is covered by the buyer.',

    // Contact & Footer (Slide IX)
    contactUs: 'Contact Us',
    phone: '+62 857-7106-0462',
    email: 'blim00coco@gmail.com',
    address: 'C552+685, Tanjungrasa, Kec. Tanjungsari, Kabupaten Bogor, Jawa Barat 16840',
    businessHours: 'Mon - Fri: 08:00 - 17:00 (GMT+7)',
    quickLinks: 'Quick Links',
    allRightsReserved: 'All rights reserved.',

    // Pricing & Terms
    pricingTitle: 'FOB Price List & Specifications',
    pricingNote: 'Prices are FOB Indonesian Port (Tanjung Priok), inclusive of custom export packaging and loading onboard vessel.',
    moqLabel: 'Minimum Order Quantity (MOQ)',
    moqValue: '1 x 20ft Container (approx. 15 Metric Tons)',
    paymentTerms: 'Payment Terms: T/T (50% Deposit upon PO, 50% Balance before port dispatch) or L/C At Sight.'
  },

  id: {
    // Navbar
    home: 'Beranda',
    about: 'Tentang Kami',
    product: 'Produk',
    media: 'Pabrik & Media',
    blog: 'Artikel',
    glossary: 'Glosarium',
    pricing: 'Daftar Harga FOB',
    faq: 'FAQ',
    getSample: 'Minta Sampel',
    getQuoteBtn: 'Dapatkan Penawaran',
    requestSampleBtn: 'Minta Sampel Gratis',
    requestSampleEmail: 'Sampel via Email',
    requestSampleWhatsApp: 'Sampel via WhatsApp',
    downloadCatalog: 'Unduh Katalog (PDF)',
    downloadNIB: 'Unduh Sertifikat NIB',
    viewNIB: 'Lihat Sertifikat NIB',

    // Hero (Slide I)
    heroTitle: 'Anda membutuhkan karbon aktif?',
    heroSubtitle: 'Kualitas karbon aktif kami selalu dapat dipercaya.',
    heroDescription: 'Produsen karbon aktif berkualitas tinggi dari tempurung kelapa dan cangkang sawit untuk pengolahan air, pemurnian gas, industri makanan, dan ekstraksi tambang emas.',
    supplierText: 'Produsen & Eksportir Karbon Aktif Indonesia Terpercaya',

    // About Us (Slide II)
    whoWeAre: 'Siapakah Kita?',
    aboutSubtitle: 'Komitmen Menghadirkan Karbon Aktif Berkualitas Tinggi',
    aboutUsText: 'Kami berkomitmen menghadirkan produk karbon aktif berkualitas tinggi melalui proses produksi yang terstandar, dengan mengutamakan kualitas, konsistensi, dan ketepatan spesifikasi. Didukung oleh dedikasi terhadap inovasi dan kepuasan pelanggan, kami menyediakan solusi karbon aktif yang andal untuk memenuhi kebutuhan berbagai sektor industri.',
    globalPartner: 'Distributor untuk pasar lokal dan global yang siap bermitra untuk jangka panjang bisnis Anda.',
    globalReachTitle: 'Melayani Industri Domestik & Internasional',
    globalReachSubtitle: 'Menyuplai karbon aktif Indonesia ke pasar Asia, Timur Tengah, Eropa, dan Amerika.',

    // Vision & Mission (Slide III)
    vision: 'Visi Kami',
    visionText: 'Perusahaan penyedia karbon aktif untuk kebutuhan industri jangka panjang Anda dengan kualitas terbaik, didistribusikan untuk seluruh dunia.',
    mission: 'Misi Kami',
    missionPoint1: 'Memberikan produk karbon aktif berkualitas tinggi yang memenuhi standar dan spesifikasi yang dibutuhkan oleh pasar ekspor.',
    missionPoint2: 'Memastikan kualitas yang konsisten dan pengiriman tepat waktu dalam membangun kepercayaan jangka panjang dengan pembeli global.',
    missionPoint3: 'Mengutamakan layanan yang responsif dan fleksibel dalam memenuhi kebutuhan pelanggan di berbagai industri, baik lokal maupun internasional.',

    // Products (Slide IV)
    ourProducts: 'PRODUK KARBON AKTIF',
    productsSubtitle: 'Didesain dengan daya serap tinggi, ketahanan abrasi maksimal, dan distribusi pori presisi.',
    granularCarbon: 'Granular Activated Carbon (GAC)',
    powderedCarbon: 'Powdered Activated Carbon (PAC)',
    pelletCarbon: 'Pelletized Activated Carbon (Pellet)',
    waterTreatmentCarbon: 'Karbon Aktif Pemurnian Air & Gas',
    foodGradeCarbon: 'Karbon Aktif Food & Pharmaceutical Grade',
    industrialCarbon: 'Karbon Aktif Tambang Emas & Industri Berat',
    viewDetails: 'Lihat Spesifikasi',
    iodineRating: 'Angka Iodin',
    meshSizes: 'Pilihan Mesh',
    rawMaterial: 'Bahan Baku',
    applications: 'Aplikasi Utama',

    // Why Choose Us (Slide V)
    whyUs: 'Kenapa Memilih CocoBlim?',
    whyChoose1Title: 'Kualitas Premium Sesuai Kebutuhan',
    whyChoose1Text: 'Angka iodin 900 hingga 1200 mg/g, ukuran mesh presisi (8x30, 12x40, 325 mesh), dan sertifikat analisis (COA) di setiap pengiriman.',
    whyChoose2Title: 'Reputasi Terpercaya',
    whyChoose2Text: 'Produsen langsung dengan pabrik di Bogor, Jawa Barat. Harga FOB transparan dan jalur logistik pelabuhan ekspor teruji.',
    whyChoose3Title: 'Solusi untuk Industri Anda',
    whyChoose3Text: 'Formulasi khusus untuk ekstraksi emas CIP/CIL, instalasi PDAM/WWTP, recovery pelarut, dan dekolorisasi makanan/sirup.',
    whyChoose4Title: 'Layanan Terbaik & Responsif',
    whyChoose4Text: 'Respon cepat tim admin, sampel gratis untuk uji lab, serta dukungan penuh dokumen ekspor dan legalitas.',

    // Factory (Slide VI)
    ourFactory: 'PABRIK KAMI',
    factoryTitle: 'Fasilitas Produksi Terstandar di Tanjungsari, Bogor',
    factoryDescription: 'Pabrik kami di Tanjungsari, Kabupaten Bogor dilengkapi tungku aktivasi uap suhu tinggi, mesin penghancur dan pengayak bertingkat, serta laboratorium internal untuk memastikan kualitas terbaik.',

    // Articles (Slide VII)
    latestArticles: 'Artikel & Panduan Karbon Aktif',
    readMore: 'Lihat Semua Artikel',

    // CTA & Ready to Start (Slide VIII)
    readyTitle: 'Siap Memulai Kebutuhan Karbon Aktif Anda?',
    readySubtitle: 'Dapatkan penawaran harga FOB, minta sampel uji lab gratis, atau unduh katalog spesifikasi resmi kami.',
    instantQuote: 'Dapatkan Penawaran Harga',
    freeSampleOffer: 'Sampel Gratis Tersedia',
    freeSampleDesc: 'Sampel gratis untuk pengujian laboratorium Anda. Ongkos kirim ditanggung oleh pihak pembeli.',

    // Contact & Footer (Slide IX)
    contactUs: 'Hubungi Kami',
    phone: '0857-7106-0462',
    email: 'blim00coco@gmail.com',
    address: 'C552+685, Tanjungrasa, Kec. Tanjungsari, Kabupaten Bogor, Jawa Barat 16840',
    businessHours: 'Senin - Jumat: 08:00 - 17:00 WIB',
    quickLinks: 'Tautan Cepat',
    allRightsReserved: 'Hak cipta dilindungi.',

    // Pricing & Terms
    pricingTitle: 'Daftar Harga FOB & Spesifikasi',
    pricingNote: 'Daftar harga di atas adalah harga FOB, sudah termasuk semua biaya packaging custom/bawaan pabrik dan harga barang sudah sampai di atas kapal.',
    moqLabel: 'Minimal Pemesanan (MOQ)',
    moqValue: '1 x 20 feet container (sekitar 15 Metric Ton)',
    paymentTerms: 'Metode Pembayaran: T/T (50% DP saat PO turun, 50% pelunasan saat barang dimuat ke kontainer) atau L/C.'
  },

  ar: {
    // Navbar
    home: 'الرئيسية',
    about: 'من نحن',
    product: 'المنتجات',
    media: 'المصنع والإعلام',
    blog: 'المقالات',
    glossary: 'المصطلحات',
    pricing: 'قائمة الأسعار FOB',
    faq: 'الأسئلة الشائعة',
    getSample: 'طلب عينة',
    getQuoteBtn: 'طلب عرض سعر',
    requestSampleBtn: 'طلب عينة مجانية',
    requestSampleEmail: 'عينة عبر البريد',
    requestSampleWhatsApp: 'عينة عبر واتساب',
    downloadCatalog: 'تحميل الكتالوج (PDF)',
    downloadNIB: 'تحميل شهادة الترخيص',
    viewNIB: 'عرض شهادة الترخيص',

    // Hero (Slide I)
    heroTitle: 'هل تحتاج إلى الكربون المنشط؟',
    heroSubtitle: 'جودة الكربون المنشط لدينا جديرة بالثقة دائماً.',
    heroDescription: 'مصنع إندونيسي رائد لإنتاج الكربون المنشط من قشور جوز الهند والنخيل لتنقية المياه والهواء ومعالجة الأغذية واستخلاص الذهب في المناجم.',
    supplierText: 'المورد الإندونيسي الموثوق للكربون المنشط',

    // About Us (Slide II)
    whoWeAre: 'من نحن؟',
    aboutSubtitle: 'ملتزمون بتقديم حلول كربون منشط عالية الجودة',
    aboutUsText: 'نحن ملتزمون بتقديم منتجات الكربون المنشط عالية الجودة من خلال عمليات إنتاج موحدة، مع إعطاء الأولوية للجودة والاتساق ودقة المواصفات. مدعومين بالتفاني في الابتكار ورضا العملاء، نقدم حلول كربون منشط موثوقة لتلبية احتياجات مختلف القطاعات الصناعية.',
    globalPartner: 'موزع للأسواق المحلية والدولية، مستعدون لشراكة طويلة الأمد لنجاح أعمالكم.',
    globalReachTitle: 'خدمة الصناعات العالمية والمحلية',
    globalReachSubtitle: 'تصدير الكربون المنشط الإندونيسي الفاخر إلى آسيا والشرق الأوسط وأوروبا والأمريكتين.',

    // Vision & Mission (Slide III)
    vision: 'رؤيتنا',
    visionText: 'أن نكون الشركة الرائدة في توفير الكربون المنشط لاحتياجاتكم الصناعية طويلة الأجل بأعلى جودة وتوزيعها في جميع أنحاء العالم.',
    mission: 'رسالتنا',
    missionPoint1: 'تقديم منتجات كربون منشط عالية الجودة تلبي المعايير والمواصفات المطلوبة في أسواق التصدير العالمية.',
    missionPoint2: 'ضمان الجودة المتسقة والشحن في الوقت المحدد لبناء ثقة طويلة الأجل مع المشترين الدوليين.',
    missionPoint3: 'إعطاء الأولوية للخدمة السريعة والمرنة لتلبية احتياجات العملاء في مختلف الصناعات محلياً ودولياً.',

    // Products (Slide IV)
    ourProducts: 'منتجات الكربون المنشط',
    productsSubtitle: 'مصممة بقدرة امتصاص عالية ومقاومة فائقة للتفتت وتوزيع مسامي دقيق.',
    granularCarbon: 'الكربون المنشط الحبيبي (GAC)',
    powderedCarbon: 'الكربون المنشط المسحوق (PAC)',
    pelletCarbon: 'الكربون المنشط الأسطواني (Pellet)',
    waterTreatmentCarbon: 'كربون معالجة المياه وتنقية الغاز',
    foodGradeCarbon: 'كربون منشط بدرجة غذائية ودوائية',
    industrialCarbon: 'كربون منشط لاستخلاص الذهب والتعدين',
    viewDetails: 'عرض المواصفات الفنية',
    iodineRating: 'رقم اليود',
    meshSizes: 'المقاسات المتوفرة (Mesh)',
    rawMaterial: 'المادة الخام',
    applications: 'التطبيقات الرئيسية',

    // Why Choose Us (Slide V)
    whyUs: 'لماذا تختار كوكوبليم؟',
    whyChoose1Title: 'جودة متميزة حسب الطلب',
    whyChoose1Text: 'أرقام يود من 900 إلى 1200 ملغم/غم ومقاسات مش متعددة مع شهادات تحليل معملية لكل دفعة.',
    whyChoose2Title: 'سمعة دولية موثوقة',
    whyChoose2Text: 'مصنع مباشر في بوغور، إندونيسيا مع أسعار فوب شفافة وخدمات لوجستية موثوقة للموانئ.',
    whyChoose3Title: 'حلول صناعية متخصصة',
    whyChoose3Text: 'درجات مصممة لاستخلاص الذهب (CIP/CIL)، محطات مياه الشرب، ومعالجة المذيبات والزيوت.',
    whyChoose4Title: 'أفضل خدمة عملاء',
    whyChoose4Text: 'استجابة سريعة، عينات مجانية للاختبارات المعملية، ودعم كامل لوثائق التصدير.',

    // Factory (Slide VI)
    ourFactory: 'مصنعنا',
    factoryTitle: 'مرافق إنتاج حديثة في بوغور، جاوة الغربية',
    factoryDescription: 'يضم مصنعنا في تانجونغساري، بوغور أفران تنشيط دوارة بالبخار عالي الحرارة ومعدات طحن وتصنيف دقيقة ومختبراً مجهزاً لضمان جودة التصدير.',

    // Articles (Slide VII)
    latestArticles: 'مقالات وأدلة الكربون المنشط',
    readMore: 'قراءة جميع المقالات',

    // CTA & Ready to Start (Slide VIII)
    readyTitle: 'هل أنت مستعد لبدء طلبك؟',
    readySubtitle: 'احصل على عرض سعر فوب مخصص، أو اطلب عينات اختبار معملية مجانية، أو حمّل الكتالوج الفني.',
    instantQuote: 'طلب عرض سعر فوري',
    freeSampleOffer: 'عينات مجانية متوفرة',
    freeSampleDesc: 'نقدم عينات مجانية للاختبار المعملي، ويتحمل المشتري تكلفة شحن البريد السريع.',

    // Contact & Footer (Slide IX)
    contactUs: 'اتصل بنا',
    phone: '+62 857-7106-0462',
    email: 'blim00coco@gmail.com',
    address: 'C552+685, Tanjungrasa, Tanjungsari, Bogor, West Java, Indonesia',
    businessHours: 'الإثنين - الجمعة: 08:00 - 17:00 (GMT+7)',
    quickLinks: 'روابط سريعة',
    allRightsReserved: 'جميع الحقوق محفوظة.',

    // Pricing & Terms
    pricingTitle: 'قائمة الأسعار فوب (FOB) والمواصفات',
    pricingNote: 'الأسعار تشمل التعبئة والتغليف والتحميل على ظهر السفينة في الموانئ الإندونيسية (FOB).',
    moqLabel: 'الحد الأدنى للطلب (MOQ)',
    moqValue: 'حاوية 20 قدم (حوالي 15 طناً مترياً)',
    paymentTerms: 'طرق الدفع: تحويل بنكي T/T (50% دفعة مقدمة و 50% قبل الشحن) أو اعتماد مستندي L/C.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const { detectedLanguage } = useAutoLanguageDetection();

  // Auto detect user preferred language on initial load
  useEffect(() => {
    if (detectedLanguage) {
      setLanguage(detectedLanguage);
    }
  }, [detectedLanguage]);

  const t = (key: string): string => {
    const langDict = translations[language] || translations.en;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
