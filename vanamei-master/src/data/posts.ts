export interface PostContent {
  title: string;
  summary: string;
  content: string;
}

export interface Post {
  id: string;
  slug: string;
  thumbnail: string;
  publishedDate: string;
  category: string;
  readTime: string;
  views: string;
  comments: string;
  content: {
    en: PostContent;
    id: PostContent;
    ar: PostContent;
  };
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'cara-memilih-arang-berkualitas',
    thumbnail: '/images/blog/charcoal-quality-guide.jpg',
    publishedDate: '25 Jan 2024',
    category: 'QUALITY GUIDE',
    readTime: '7 menit baca',
    views: '2.8k views',
    comments: '15 comments',
    content: {
      en: {
        title: 'How to Choose Quality Charcoal: Complete Guide from CocoBlim',
        summary: 'Complete guide to selecting high-quality charcoal. Tips from CocoBlim experts to get the best charcoal for BBQ, hookah, and industrial needs.',
        content: 'Choosing quality charcoal is crucial for optimal results in BBQ, hookah, and industrial applications. At CocoBlim, we understand that not all charcoal is created equal. Here are key factors to consider when selecting premium charcoal: First, examine the raw material source - coconut shell charcoal offers superior heat output and longer burning time compared to wood charcoal. Second, check the ash content - quality charcoal should have less than 3% ash content for cleaner burning. Third, consider the fixed carbon content - higher percentages (above 75%) indicate better quality and heat efficiency. Fourth, evaluate the moisture content - properly processed charcoal should have minimal moisture for consistent performance. At CocoBlim, all our charcoal products meet international standards with rigorous quality control processes to ensure you get the best charcoal for your specific needs.'
      },
      id: {
        title: 'Cara Memilih Arang Berkualitas: Panduan & Tips dari CocoBlim',
        summary: 'Panduan lengkap memilih arang kelapa berkualitas tinggi. Tips dari ahli CocoBlim untuk mendapatkan arang terbaik untuk BBQ, hookah, dan keperluan industri.',
        content: 'Memilih arang berkualitas sangat penting untuk hasil optimal dalam BBQ, hookah, dan aplikasi industri. Di CocoBlim, kami memahami bahwa tidak semua arang diciptakan sama. Berikut adalah faktor-faktor kunci yang perlu dipertimbangkan saat memilih arang premium: Pertama, periksa sumber bahan baku - arang tempurung kelapa menawarkan output panas yang superior dan waktu pembakaran yang lebih lama dibandingkan arang kayu. Kedua, periksa kandungan abu - arang berkualitas harus memiliki kandungan abu kurang dari 3% untuk pembakaran yang lebih bersih. Ketiga, pertimbangkan kandungan karbon tetap - persentase yang lebih tinggi (di atas 75%) menunjukkan kualitas yang lebih baik dan efisiensi panas. Keempat, evaluasi kandungan kelembaban - arang yang diproses dengan benar harus memiliki kelembaban minimal untuk performa yang konsisten. Di CocoBlim, semua produk arang kami memenuhi standar internasional dengan proses kontrol kualitas yang ketat untuk memastikan Anda mendapatkan arang terbaik untuk kebutuhan spesifik Anda.'
      },
      ar: {
        title: 'كيفية اختيار الفحم عالي الجودة: دليل شامل من كوكوبليم',
        summary: 'دليل شامل لاختيار فحم جوز الهند عالي الجودة. نصائح من خبراء كوكوبليم للحصول على أفضل فحم للشواء والشيشة والاحتياجات الصناعية.',
        content: 'اختيار الفحم عالي الجودة أمر بالغ الأهمية للحصول على نتائج مثلى في الشواء والشيشة والتطبيقات الصناعية. في كوكوبليم، نفهم أن ليس كل الفحم متساوٍ في الجودة. إليك العوامل الرئيسية التي يجب مراعاتها عند اختيار الفحم المتميز: أولاً، افحص مصدر المواد الخام - فحم قشر جوز الهند يوفر إنتاج حراري متفوق ووقت احتراق أطول مقارنة بفحم الخشب. ثانياً، تحقق من محتوى الرماد - الفحم عالي الجودة يجب أن يحتوي على أقل من 3% رماد للاحتراق الأنظف. ثالثاً، اعتبر محتوى الكربون الثابت - النسب الأعلى (فوق 75%) تشير إلى جودة أفضل وكفاءة حرارية. رابعاً، قيّم محتوى الرطوبة - الفحم المعالج بشكل صحيح يجب أن يحتوي على رطوبة قليلة للأداء المتسق. في كوكوبليم، جميع منتجات الفحم لدينا تلبي المعايير الدولية مع عمليات مراقبة الجودة الصارمة لضمان حصولك على أفضل فحم لاحتياجاتك المحددة.'
      }
    }
  },
  {
    id: '2',
    slug: 'mengapa-arang-kelapa-semakin-diminati',
    thumbnail: '/images/blog/coconut-charcoal-demand.jpg',
    publishedDate: '20 Jan 2024',
    category: 'INDUSTRY NEWS',
    readTime: '6 menit baca',
    views: '3.5k views',
    comments: '28 comments',
    content: {
      en: {
        title: 'Why Coconut Charcoal (Coconut Charcoal) is Increasingly in Demand in Global Markets',
        summary: 'Learn why Indonesian coconut charcoal demand is increasing in global markets. From unique characteristics to export potential that makes it increasingly popular.',
        content: 'The global demand for coconut charcoal has experienced significant growth in recent years, with Indonesia leading as the primary supplier. This surge in popularity stems from several key factors that make coconut charcoal superior to traditional alternatives. First, environmental sustainability - coconut charcoal is produced from coconut shell waste, contributing to circular economy principles and reducing agricultural waste. Second, superior performance characteristics - coconut charcoal burns longer, produces higher heat output, and generates minimal ash compared to wood charcoal. Third, versatility in applications - from premium shisha and BBQ to industrial uses and activated carbon production. Fourth, consistent quality - Indonesian coconut shells provide uniform raw materials due to optimal growing conditions. At CocoBlim, we have witnessed this growing demand firsthand, with orders increasing by 150% over the past two years from markets across the Middle East, Europe, and Asia. The future looks bright for Indonesian coconut charcoal as global awareness of sustainable alternatives continues to grow.'
      },
      id: {
        title: 'Mengapa Arang Kelapa (Coconut Charcoal) Semakin Diminati di Pasar Global',
        summary: 'Pelajari mengapa permintaan arang kelapa Indonesia meningkat pesat di pasar global. Dari karakteristik unik hingga potensi ekspor yang menjanjikan.',
        content: 'Permintaan global untuk arang kelapa mengalami pertumbuhan signifikan dalam beberapa tahun terakhir, dengan Indonesia memimpin sebagai pemasok utama. Lonjakan popularitas ini berasal dari beberapa faktor kunci yang membuat arang kelapa unggul dibandingkan alternatif tradisional. Pertama, keberlanjutan lingkungan - arang kelapa diproduksi dari limbah tempurung kelapa, berkontribusi pada prinsip ekonomi sirkular dan mengurangi limbah pertanian. Kedua, karakteristik performa superior - arang kelapa terbakar lebih lama, menghasilkan output panas yang lebih tinggi, dan menghasilkan abu minimal dibandingkan arang kayu. Ketiga, fleksibilitas dalam aplikasi - dari shisha premium dan BBQ hingga penggunaan industri dan produksi karbon aktif. Keempat, kualitas konsisten - tempurung kelapa Indonesia menyediakan bahan baku yang seragam karena kondisi pertumbuhan yang optimal. Di CocoBlim, kami telah menyaksikan permintaan yang terus meningkat ini secara langsung, dengan pesanan meningkat 150% selama dua tahun terakhir dari pasar di Timur Tengah, Eropa, dan Asia. Masa depan terlihat cerah untuk arang kelapa Indonesia karena kesadaran global tentang alternatif berkelanjutan terus berkembang.'
      },
      ar: {
        title: 'لماذا يزداد الطلب على فحم جوز الهند في الأسواق العالمية',
        summary: 'تعرف على سبب زيادة الطلب على فحم جوز الهند الإندونيسي في الأسواق العالمية. من الخصائص الفريدة إلى إمكانات التصدير الواعدة.',
        content: 'شهد الطلب العالمي على فحم جوز الهند نمواً كبيراً في السنوات الأخيرة، مع قيادة إندونيسيا كمورد رئيسي. هذا الارتفاع في الشعبية ينبع من عدة عوامل رئيسية تجعل فحم جوز الهند متفوقاً على البدائل التقليدية. أولاً، الاستدامة البيئية - يُنتج فحم جوز الهند من نفايات قشور جوز الهند، مما يساهم في مبادئ الاقتصاد الدائري ويقلل من النفايات الزراعية. ثانياً، خصائص الأداء المتفوقة - فحم جوز الهند يحترق لفترة أطول، وينتج حرارة أعلى، ويولد رماداً أقل مقارنة بفحم الخشب. ثالثاً، التنوع في التطبيقات - من الشيشة المتميزة والشواء إلى الاستخدامات الصناعية وإنتاج الكربون المنشط. رابعاً، الجودة المتسقة - قشور جوز الهند الإندونيسية توفر مواد خام موحدة بسبب ظروف النمو المثالية. في كوكوبليم، شهدنا هذا الطلب المتزايد بشكل مباشر، مع زيادة الطلبات بنسبة 150% خلال العامين الماضيين من أسواق الشرق الأوسط وأوروبا وآسيا. المستقبل يبدو مشرقاً لفحم جوز الهند الإندونيسي مع استمرار نمو الوعي العالمي بالبدائل المستدامة.'
      }
    }
  },
  {
    id: '3',
    slug: 'keunggulan-arang-cocoblim',
    thumbnail: '/images/blog/cocoblim-advantages.jpg',
    publishedDate: '15 Jan 2024',
    category: 'COMPANY PROFILE',
    readTime: '5 menit baca',
    views: '2.1k views',
    comments: '11 comments',
    content: {
      en: {
        title: 'CocoBlim Charcoal Advantages: From Raw Materials to Cleaner Burning',
        summary: 'Discover CocoBlim charcoal advantages from quality raw materials, modern production process to cleaner burning for the best BBQ and hookah.',
        content: 'CocoBlim stands out in the competitive charcoal market through several key advantages that ensure superior product quality and customer satisfaction. Our primary advantage lies in raw material selection - we source only premium coconut shells from mature coconuts across Java, ensuring optimal carbon content and density. Our modern production facilities utilize advanced carbonization technology that maintains consistent temperature control, resulting in uniform quality across all batches. Quality control is paramount - every batch undergoes rigorous testing for ash content, fixed carbon percentage, and moisture levels to meet international standards. Environmental responsibility drives our operations - we convert agricultural waste into valuable products while maintaining zero-waste production processes. Our strategic location in Java provides access to three major international ports (Jakarta, Semarang, Surabaya), enabling efficient logistics and competitive pricing. Customer service excellence includes multilingual support, flexible packaging options, and reliable delivery schedules. These combined advantages have made CocoBlim the preferred choice for discerning customers worldwide seeking premium Indonesian charcoal products.'
      },
      id: {
        title: 'Keunggulan Arang CocoBlim: Dari Bahan Baku hingga Api yang Lebih Bersih',
        summary: 'Temukan keunggulan arang kelapa CocoBlim dari bahan baku berkualitas, proses produksi modern hingga pembakaran bersih untuk BBQ dan hookah terbaik.',
        content: 'CocoBlim menonjol di pasar arang yang kompetitif melalui beberapa keunggulan utama yang memastikan kualitas produk superior dan kepuasan pelanggan. Keunggulan utama kami terletak pada pemilihan bahan baku - kami hanya menggunakan tempurung kelapa premium dari kelapa matang di seluruh Jawa, memastikan kandungan karbon dan kepadatan optimal. Fasilitas produksi modern kami menggunakan teknologi karbonisasi canggih yang mempertahankan kontrol suhu konsisten, menghasilkan kualitas seragam di semua batch. Kontrol kualitas adalah yang utama - setiap batch menjalani pengujian ketat untuk kandungan abu, persentase karbon tetap, dan tingkat kelembaban untuk memenuhi standar internasional. Tanggung jawab lingkungan mendorong operasi kami - kami mengubah limbah pertanian menjadi produk bernilai sambil mempertahankan proses produksi zero-waste. Lokasi strategis kami di Jawa memberikan akses ke tiga pelabuhan internasional utama (Jakarta, Semarang, Surabaya), memungkinkan logistik efisien dan harga kompetitif. Keunggulan layanan pelanggan mencakup dukungan multibahasa, opsi kemasan fleksibel, dan jadwal pengiriman yang dapat diandalkan. Keunggulan gabungan ini telah menjadikan CocoBlim pilihan utama bagi pelanggan yang cerdas di seluruh dunia yang mencari produk arang premium Indonesia.'
      },
      ar: {
        title: 'مزايا فحم كوكوبليم: من المواد الخام إلى الاحتراق الأنظف',
        summary: 'اكتشف مزايا فحم جوز الهند كوكوبليم من المواد الخام عالية الجودة، عملية الإنتاج الحديثة إلى الاحتراق الأنظف لأفضل شواء وشيشة.',
        content: 'تتميز كوكوبليم في سوق الفحم التنافسي من خلال عدة مزايا رئيسية تضمن جودة المنتج المتفوقة ورضا العملاء. تكمن ميزتنا الأساسية في اختيار المواد الخام - نحن نستخدم فقط قشور جوز الهند المتميزة من جوز الهند الناضج في جميع أنحاء جاوة، مما يضمن محتوى الكربون والكثافة المثلى. تستخدم مرافق الإنتاج الحديثة لدينا تكنولوجيا الكربنة المتقدمة التي تحافظ على التحكم المتسق في درجة الحرارة، مما ينتج عنه جودة موحدة عبر جميع الدفعات. مراقبة الجودة أمر بالغ الأهمية - تخضع كل دفعة لاختبارات صارمة لمحتوى الرماد ونسبة الكربون الثابت ومستويات الرطوبة لتلبية المعايير الدولية. المسؤولية البيئية تقود عملياتنا - نحول النفايات الزراعية إلى منتجات قيمة مع الحفاظ على عمليات الإنتاج الخالية من النفايات. موقعنا الاستراتيجي في جاوة يوفر الوصول إلى ثلاثة موانئ دولية رئيسية (جاكرتا، سيمارانغ، سورابايا)، مما يمكن من اللوجستيات الفعالة والأسعار التنافسية. تشمل التميز في خدمة العملاء الدعم متعدد اللغات وخيارات التعبئة المرنة وجداول التسليم الموثوقة. هذه المزايا المجتمعة جعلت كوكوبليم الخيار المفضل للعملاء المميزين في جميع أنحاء العالم الذين يسعون للحصول على منتجات الفحم الإندونيسية المتميزة.'
      }
    }
  },
  {
    id: '4',
    slug: 'panduan-lengkap-arang-cocoblim',
    thumbnail: '/images/blog/complete-guide-cocoblim.jpg',
    publishedDate: '10 Jan 2024',
    category: 'COMPLETE GUIDE',
    readTime: '8 menit baca',
    views: '1.9k views',
    comments: '7 comments',
    content: {
      en: {
        title: 'Complete Guide to CocoBlim Charcoal Products: Types, Quality, and Applications',
        summary: 'Complete guide to CocoBlim charcoal product range. Learn about types, quality specifications, and best applications for each product variant.',
        content: 'CocoBlim offers a comprehensive range of premium charcoal products designed to meet diverse market needs across multiple industries. Our product portfolio includes six main categories: Coconut Briquette Shisha - engineered specifically for premium hookah experiences with 90-120 minute burning time and minimal ash production. Hardwood Charcoal - crafted from selected tamarind and sono wood, perfect for traditional restaurants and BBQ applications requiring authentic smoky flavors. Coconut Shell Charcoal - natural pieces ideal for industrial applications and as raw material for activated carbon production. Granulated/Meshed Charcoal - specialized activated carbon for water treatment and air purification systems. Sawdust Briquette Charcoal - compressed sawdust briquettes offering consistent burning for commercial cooking. Activated Carbon - high-grade activated carbon for industrial filtration and chemical processing. Each product undergoes strict quality control with specifications meeting international standards including ash content below 3%, fixed carbon above 75%, and optimal moisture levels. Our flexible packaging options range from 5kg consumer packs to 1-ton jumbo bags, accommodating both retail and industrial customers worldwide.'
      },
      id: {
        title: 'Panduan Lengkap Produk Arang CocoBlim: Jenis, Kualitas, dan Aplikasi',
        summary: 'Panduan lengkap rangkaian produk arang CocoBlim. Pelajari jenis, spesifikasi kualitas, dan aplikasi terbaik untuk setiap varian produk.',
        content: 'CocoBlim menawarkan rangkaian lengkap produk arang premium yang dirancang untuk memenuhi kebutuhan pasar yang beragam di berbagai industri. Portofolio produk kami mencakup enam kategori utama: Arang Briket Shisha - direkayasa khusus untuk pengalaman hookah premium dengan waktu pembakaran 90-120 menit dan produksi abu minimal. Arang Kayu Keras - dibuat dari kayu asam jawa dan sono pilihan, sempurna untuk restoran tradisional dan aplikasi BBQ yang membutuhkan rasa smoky autentik. Arang Tempurung Kelapa - potongan natural ideal untuk aplikasi industri dan sebagai bahan baku produksi karbon aktif. Arang Granula/Meshed - karbon aktif khusus untuk sistem pengolahan air dan pemurnian udara. Arang Sawdust Briquette - briket serbuk gergaji terkompresi menawarkan pembakaran konsisten untuk memasak komersial. Activated Carbon - karbon aktif bermutu tinggi untuk filtrasi industri dan pemrosesan kimia. Setiap produk menjalani kontrol kualitas ketat dengan spesifikasi memenuhi standar internasional termasuk kandungan abu di bawah 3%, karbon tetap di atas 75%, dan tingkat kelembaban optimal. Opsi kemasan fleksibel kami berkisar dari kemasan konsumen 5kg hingga jumbo bag 1 ton, mengakomodasi pelanggan ritel dan industri di seluruh dunia.'
      },
      ar: {
        title: 'دليل شامل لمنتجات فحم كوكوبليم: الأنواع والجودة والتطبيقات',
        summary: 'دليل شامل لمجموعة منتجات فحم كوكوبليم. تعرف على الأنواع ومواصفات الجودة وأفضل التطبيقات لكل نوع من المنتجات.',
        content: 'تقدم كوكوبليم مجموعة شاملة من منتجات الفحم المتميزة المصممة لتلبية احتياجات السوق المتنوعة عبر صناعات متعددة. تشمل محفظة منتجاتنا ست فئات رئيسية: قوالب فحم جوز الهند للشيشة - مهندسة خصيصاً لتجارب الشيشة المتميزة مع وقت احتراق 90-120 دقيقة وإنتاج رماد أقل. فحم الخشب الصلب - مصنوع من أخشاب التمر الهندي وسونو المختارة، مثالي للمطاعم التقليدية وتطبيقات الشواء التي تتطلب نكهات مدخنة أصيلة. فحم قشر جوز الهند - قطع طبيعية مثالية للتطبيقات الصناعية وكمادة خام لإنتاج الكربون المنشط. الفحم المحبب/المشبك - كربون منشط متخصص لأنظمة معالجة المياه وتنقية الهواء. قوالب فحم نشارة الخشب - قوالب نشارة الخشب المضغوطة تقدم احتراقاً متسقاً للطبخ التجاري. الكربون المنشط - كربون منشط عالي الجودة للترشيح الصناعي والمعالجة الكيميائية. كل منتج يخضع لمراقبة جودة صارمة مع مواصفات تلبي المعايير الدولية بما في ذلك محتوى الرماد أقل من 3%، والكربون الثابت أكثر من 75%، ومستويات الرطوبة المثلى. خيارات التعبئة المرنة لدينا تتراوح من عبوات المستهلك 5 كيلو إلى أكياس جامبو 1 طن، لتناسب عملاء التجزئة والصناعة في جميع أنحاء العالم.'
      }
    }
  }
];

// Helper function to get post content based on language
export const getPostContent = (post: Post, language: 'en' | 'id' | 'ar') => {
  return post.content[language];
};
