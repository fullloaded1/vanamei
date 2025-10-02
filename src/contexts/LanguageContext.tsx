'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    storyText: 'The initial idea of CocoBlim was to utilize coconut waste and sawdust that are abundant in various regions in Indonesia.',
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
    descKayuKeras: 'Our hardwood charcoal is made from selected wood starting from Tamarind Wood, premium quality wood.',
    descTempurungKelapa: 'Coconut shell charcoal is a material that can be used for various industrial applications.',
    descGranulaMeshed: 'Meshed charcoal or known as granular activated carbon can be used for water treatment and filtration.',
    descSawdustBriquette: 'Sawdust briquette charcoal is made from compressed sawdust with high quality standards.',
    descActivatedCarbon: 'Activated carbon charcoal for industrial needs and water filtration applications.',
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
    storyText: 'Ide awal CocoBlim adalah untuk memanfaatkan limbah kelapa dan serbuk gergaji yang melimpah di berbagai daerah di Indonesia.',
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
    descKayuKeras: 'Arang kayu keras kami terbuat dari kayu pilihan mulai dari Kayu Asam Jawa, kayu berkualitas premium.',
    descTempurungKelapa: 'Arang tempurung kelapa merupakan bahan yang dapat digunakan untuk berbagai keperluan industri.',
    descGranulaMeshed: 'Arang meshed atau dikenal dengan karbon aktif granular dapat digunakan untuk pengolahan air dan filtrasi.',
    descSawdustBriquette: 'Arang sawdust briquette terbuat dari serbuk gergaji yang dipadatkan dengan standar kualitas tinggi.',
    descActivatedCarbon: 'Arang activated carbon untuk keperluan industri dan aplikasi filtrasi air.',
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
    storyText: 'الفكرة الأولى لكوكوبليم كانت الاستفادة من نفايات جوز الهند ونشارة الخشب الوفيرة في مختلف المناطق في إندونيسيا.',
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
    descKayuKeras: 'فحم الخشب الصلب مصنوع من الأخشاب المختارة بدءاً من خشب التمر الهندي، خشب عالي الجودة.',
    descTempurungKelapa: 'فحم قشر جوز الهند مادة يمكن استخدامها لمختلف التطبيقات الصناعية.',
    descGranulaMeshed: 'الفحم المشبك أو المعروف بالكربون المنشط الحبيبي يمكن استخدامه لمعالجة المياه والترشيح.',
    descSawdustBriquette: 'قوالب فحم نشارة الخشب مصنوعة من نشارة الخشب المضغوطة بمعايير جودة عالية.',
    descActivatedCarbon: 'الكربون المنشط للاحتياجات الصناعية وتطبيقات ترشيح المياه.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[typeof language]];
    return translation || translations.en[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
