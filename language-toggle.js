// Language toggle functionality with localStorage - DECLARE FIRST
let currentLanguage = localStorage.getItem('language') || 'id';
console.log('Script loaded, currentLanguage initialized as:', currentLanguage);

// Language data - DECLARE BEFORE FUNCTIONS
const languageData = {
    // Indonesian translations
    id: {
        nav: {
            home: 'Beranda',
            about: 'Tentang Kami',
            products: 'Produk Kami',
            gallery: 'Galeri',
            contact: 'Kontak'
        },
        hero: {
            title: 'Mitra Ekspor Terpercaya dari Indonesia ke Dunia.',
            subtitle: 'Sebagai pejuang yang tak kenal lelah, kami membantu UMKM dan industri lokal menaklukkan pasar internasional dengan semangat dan dedikasi yang mendalam.',
            exploreBtn: 'Jelajahi Produk Kami',
            contactBtn: 'Hubungi Kami'
        },
        about: {
            title: 'Tentang Global Vanabric',
            description: 'Global Vanabric adalah perusahaan ekspor terkemuka yang menghubungkan produk berkualitas Indonesia ke pasar global. Kami mengkhususkan diri dalam ekspor arang briket premium dan hasil laut, terutama udang vanamei, dengan standar internasional yang ketat.',
            subtitle: 'Mengapa Memilih Kami?',
            features: {
                feature1: {
                    title: 'Produk Berkualitas Standar Internasional',
                    desc: 'Semua produk kami memenuhi standar kualitas internasional dengan sertifikasi ISO dan sertifikat ekspor yang lengkap.'
                },
                feature2: {
                    title: 'Pengalaman Ekspor ke 14 Negara',
                    desc: 'Lebih dari 5 tahun pengalaman ekspor ke berbagai negara di Eropa, Amerika, dan Asia dengan jaringan distribusi yang luas.'
                },
                feature3: {
                    title: 'Ramah Lingkungan & Berkelanjutan',
                    desc: 'Menggunakan bahan baku yang ramah lingkungan dan menerapkan praktik produksi yang berkelanjutan untuk masa depan yang lebih baik.'
                },
                feature4: {
                    title: 'Kolaborasi dengan Platinum Pro',
                    desc: 'Bermitra dengan Platinum Pro untuk memastikan kualitas produk terbaik dan layanan pelanggan yang unggul.'
                },
                feature5: {
                    title: 'Variasi Produk Sesuai Kebutuhan',
                    desc: 'Menawarkan berbagai jenis briket arang dan produk laut dengan kustomisasi sesuai kebutuhan pasar target.'
                },
                feature6: {
                    title: 'QC Ketat untuk Kepuasan Pelanggan',
                    desc: 'Proses quality control yang ketat di setiap tahap produksi untuk memastikan kepuasan pelanggan dan reputasi yang baik.'
                }
            },
            stats: {
                experience: 'Tahun Pengalaman',
                countries: 'Negara Tujuan',
                clients: 'Klien Puas'
            }
        },
        products: {
            title: 'Produk Kami',
            subtitle: 'Briket arang premium yang dibuat untuk pasar internasional'
        },
        gallery: {
            title: 'Galeri',
            subtitle: 'Proses produksi, pengemasan, dan operasi ekspor kami'
        },
        contact: {
            title: 'Hubungi Kami',
            subtitle: 'Siap untuk ekspor? Mari diskusikan kebutuhan ekspor Anda',
            form: {
                name: 'Nama Lengkap',
                email: 'Email',
                phone: 'Nomor Telepon',
                message: 'Pesan',
                send: 'Kirim Pesan'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            products: 'Our Products',
            gallery: 'Gallery',
            contact: 'Contact'
        },
        hero: {
            title: 'Your Trusted Export Partner from Indonesia to the World.',
            subtitle: 'As tireless champions, we help local SMEs and industries conquer international markets with passion and profound dedication.',
            exploreBtn: 'Explore Our Products',
            contactBtn: 'Get In Touch'
        },
        about: {
            title: 'About Global Vanabric',
            description: 'Global Vanabric is a leading export company that connects quality Indonesian products to global markets. We specialize in premium charcoal briquettes and seafood exports, especially vannamei shrimp, with strict international standards.',
            subtitle: 'Why Choose Us?',
            features: {
                feature1: {
                    title: 'International Quality Standards',
                    desc: 'All our products meet international quality standards with complete ISO certification and export certificates.'
                },
                feature2: {
                    title: 'Export Experience to 14 Countries',
                    desc: 'Over 5 years of export experience to various countries in Europe, America, and Asia with extensive distribution networks.'
                },
                feature3: {
                    title: 'Environmentally Friendly & Sustainable',
                    desc: 'Using environmentally friendly raw materials and implementing sustainable production practices for a better future.'
                },
                feature4: {
                    title: 'Collaboration with Platinum Pro',
                    desc: 'Partnering with Platinum Pro to ensure the best product quality and superior customer service.'
                },
                feature5: {
                    title: 'Product Variety According to Needs',
                    desc: 'Offering various types of charcoal briquettes and seafood products with customization according to target market needs.'
                },
                feature6: {
                    title: 'Strict QC for Customer Satisfaction',
                    desc: 'Strict quality control process at every production stage to ensure customer satisfaction and good reputation.'
                }
            },
            stats: {
                experience: 'Years Experience',
                countries: 'Target Countries',
                clients: 'Happy Clients'
            }
        },
        products: {
            title: 'Our Products',
            subtitle: 'Premium charcoal briquettes crafted for international markets'
        },
        gallery: {
            title: 'Gallery',
            subtitle: 'Our production process, packaging, and export operations'
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Ready to export? Let\'s discuss your export needs',
            form: {
                name: 'Full Name',
                email: 'Email',
                phone: 'Phone Number',
                message: 'Message',
                send: 'Send Message'
            }
        }
    }
};

console.log('Language data loaded successfully:', Object.keys(languageData));

function toggleLanguage() {
    try {
        console.log('=== TOGGLE LANGUAGE FUNCTION CALLED ===');
        console.log('Toggle button clicked!');
        console.log('Current language before toggle:', currentLanguage);
        console.log('Type of currentLanguage:', typeof currentLanguage);
        
        currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
        localStorage.setItem('language', currentLanguage);
        
        console.log('Language changed to:', currentLanguage);
        console.log('localStorage saved:', localStorage.getItem('language'));
        
        // Show feedback to user
        const languageName = currentLanguage === 'id' ? 'Indonesian' : 'English';
        console.log('Switched to:', languageName);
        
        updateLanguage();
        updateLanguageIndicator();
        
        // Force re-render of Lucide icons
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);
        
        console.log('=== TOGGLE LANGUAGE FUNCTION COMPLETED SUCCESSFULLY ===');
    } catch (error) {
        console.error('Error in toggleLanguage function:', error);
        alert('Error switching language: ' + error.message);
    }
}

function updateLanguageIndicator() {
    try {
        console.log('Updating language indicator...');
        
        const languageText = document.getElementById('language-text');
        const languageTextAlt = document.getElementById('language-text-alt');
        const flagIndonesia = document.getElementById('flag-indonesia');
        const flagEnglish = document.getElementById('flag-english');
        
        console.log('Found languageText element:', languageText);
        console.log('Found languageTextAlt element:', languageTextAlt);
        console.log('Found flagIndonesia element:', flagIndonesia);
        console.log('Found flagEnglish element:', flagEnglish);
        
        if (currentLanguage === 'id') {
            // Set Indonesian as active
            languageText.textContent = 'ID';
            languageText.className = 'font-medium text-secondary text-sm';
            flagIndonesia.className = 'text-xl flag-active';
            flagIndonesia.title = 'Bahasa Indonesia (Aktif)';
            
            // Set English as inactive
            languageTextAlt.textContent = 'EN';
            languageTextAlt.className = 'text-gray-400 text-sm';
            flagEnglish.className = 'text-xl flag-inactive';
            flagEnglish.title = 'English (Klik untuk beralih)';
            
            console.log('Set to Indonesian');
        } else {
            // Set English as active
            languageText.textContent = 'ID';
            languageText.className = 'text-gray-400 text-sm';
            flagIndonesia.className = 'text-xl flag-inactive';
            flagIndonesia.title = 'Bahasa Indonesia (Click to switch)';
            
            // Set English as active
            languageTextAlt.textContent = 'EN';
            languageTextAlt.className = 'font-medium text-secondary text-sm';
            flagEnglish.className = 'text-xl flag-active';
            flagEnglish.title = 'English (Active)';
            
            console.log('Set to English');
        }
    } catch (error) {
        console.error('Error in updateLanguageIndicator:', error);
    }
}

function updateLanguage() {
    try {
        console.log('Updating language to:', currentLanguage);
        console.log('Language data available:', typeof languageData);
        console.log('Available languages:', Object.keys(languageData));
    
    // Update navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    console.log('Found nav links:', navLinks.length);
    
    if (languageData && languageData[currentLanguage] && languageData[currentLanguage].nav) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#home') {
                link.textContent = languageData[currentLanguage].nav.home;
                console.log('Updated home to:', languageData[currentLanguage].nav.home);
            }
            if (href === '#about') {
                link.textContent = languageData[currentLanguage].nav.about;
                console.log('Updated about to:', languageData[currentLanguage].nav.about);
            }
            if (href === '#products') {
                link.textContent = languageData[currentLanguage].nav.products;
                console.log('Updated products to:', languageData[currentLanguage].nav.products);
            }
            if (href === '#gallery') {
                link.textContent = languageData[currentLanguage].nav.gallery;
                console.log('Updated gallery to:', languageData[currentLanguage].nav.gallery);
            }
            if (href === '#contact') {
                link.textContent = languageData[currentLanguage].nav.contact;
                console.log('Updated contact to:', languageData[currentLanguage].nav.contact);
            }
        });
    } else {
        console.error('Language data not available for:', currentLanguage);
    }

    // Update hero section
    if (languageData && languageData[currentLanguage] && languageData[currentLanguage].hero) {
        const heroTitle = document.querySelector('#home h1');
        const heroSubtitle = document.querySelector('#home p');
        
        if (heroTitle) {
            heroTitle.textContent = languageData[currentLanguage].hero.title;
            console.log('Updated hero title to:', languageData[currentLanguage].hero.title);
        } else {
            console.log('Hero title not found!');
        }
        
        if (heroSubtitle) {
            heroSubtitle.textContent = languageData[currentLanguage].hero.subtitle;
            console.log('Updated hero subtitle to:', languageData[currentLanguage].hero.subtitle);
        } else {
            console.log('Hero subtitle not found!');
        }
    }
    
    // Update button texts
    if (languageData && languageData[currentLanguage] && languageData[currentLanguage].hero) {
        const exploreBtnText = document.querySelector('a[href="#products"] span span');
        const contactBtnText = document.querySelector('a[href="#contact"] span span');
        
        if (exploreBtnText) {
            exploreBtnText.textContent = languageData[currentLanguage].hero.exploreBtn;
            console.log('Updated explore button to:', languageData[currentLanguage].hero.exploreBtn);
        } else {
            console.log('Explore button text not found!');
        }
        
        if (contactBtnText) {
            contactBtnText.textContent = languageData[currentLanguage].hero.contactBtn;
            console.log('Updated contact button to:', languageData[currentLanguage].hero.contactBtn);
        } else {
            console.log('Contact button text not found!');
        }
    }

    // Update section titles and subtitles
    const productsTitle = document.querySelector('#products h2');
    const productsSubtitle = document.querySelector('#products p');
    const galleryTitle = document.querySelector('#gallery h2');
    const gallerySubtitle = document.querySelector('#gallery p');
    const contactTitle = document.querySelector('#contact h2');
    const contactSubtitle = document.querySelector('#contact p');

    if (productsTitle) {
        productsTitle.textContent = languageData[currentLanguage].products.title;
        console.log('Updated products title to:', languageData[currentLanguage].products.title);
    }
    if (productsSubtitle) {
        productsSubtitle.textContent = languageData[currentLanguage].products.subtitle;
        console.log('Updated products subtitle to:', languageData[currentLanguage].products.subtitle);
    }
    if (galleryTitle) galleryTitle.textContent = languageData[currentLanguage].gallery.title;
    if (gallerySubtitle) {
        gallerySubtitle.textContent = languageData[currentLanguage].gallery.subtitle;
        console.log('Updated gallery subtitle to:', languageData[currentLanguage].gallery.subtitle);
    }
    if (contactTitle) contactTitle.textContent = languageData[currentLanguage].contact.title;
    if (contactSubtitle) contactSubtitle.textContent = languageData[currentLanguage].contact.subtitle;

    // Update About section content
    const aboutTitle = document.querySelector('#about-title');
    const aboutDescription = document.querySelector('#about-description');
    const aboutSubtitle = document.querySelector('#about h3');
    
    if (aboutTitle) aboutTitle.textContent = languageData[currentLanguage].about.title;
    if (aboutDescription) aboutDescription.textContent = languageData[currentLanguage].about.description;
    if (aboutSubtitle) aboutSubtitle.textContent = languageData[currentLanguage].about.subtitle;

    // Update features
    for (let i = 1; i <= 6; i++) {
        const featureTitle = document.querySelector(`#feature-${i}-title`);
        const featureDesc = document.querySelector(`#feature-${i}-desc`);
        
        if (featureTitle) featureTitle.textContent = languageData[currentLanguage].about.features[`feature${i}`].title;
        if (featureDesc) featureDesc.textContent = languageData[currentLanguage].about.features[`feature${i}`].desc;
    }

    // Update stats labels
    const statsExperience = document.querySelector('#stats-experience');
    const statsCountries = document.querySelector('#stats-countries');
    const statsClients = document.querySelector('#stats-clients');
    
    if (statsExperience) statsExperience.textContent = languageData[currentLanguage].about.stats.experience;
    if (statsCountries) statsCountries.textContent = languageData[currentLanguage].about.stats.countries;
    if (statsClients) statsClients.textContent = languageData[currentLanguage].about.stats.clients;

    // Update form labels and button
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const phoneLabel = document.querySelector('label[for="phone"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const submitButton = document.querySelector('button[type="submit"]');

    if (nameLabel) nameLabel.textContent = languageData[currentLanguage].contact.form.name;
    if (emailLabel) emailLabel.textContent = languageData[currentLanguage].contact.form.email;
    if (phoneLabel) phoneLabel.textContent = languageData[currentLanguage].contact.form.phone;
    if (messageLabel) messageLabel.textContent = languageData[currentLanguage].contact.form.message;
    if (submitButton) submitButton.textContent = languageData[currentLanguage].contact.form.send;

    // Update contact info section
    const contactInfoTitle = document.querySelector('#contact h3');
    const contactAddressTitle = document.querySelector('#contact h4');
    const contactEmailTitle = document.querySelector('#contact h4:nth-of-type(2)');
    const contactPhoneTitle = document.querySelector('#contact h4:nth-of-type(3)');
    const readyToExportTitle = document.querySelector('#contact .bg-gradient-to-br h3');
    const readyToExportText = document.querySelector('#contact .bg-gradient-to-br p');
    const whatsappButton = document.querySelector('#contact .bg-gradient-to-br a');

    if (contactInfoTitle) contactInfoTitle.textContent = languageData[currentLanguage].contact.form.name === 'Nama Lengkap' ? 'Kirim Pesan kepada Kami' : 'Send us a Message';
    if (contactAddressTitle) contactAddressTitle.textContent = languageData[currentLanguage].contact.form.name === 'Nama Lengkap' ? 'Alamat Kantor' : 'Office Address';
    if (contactEmailTitle) contactEmailTitle.textContent = 'Email';
    if (contactPhoneTitle) contactPhoneTitle.textContent = languageData[currentLanguage].contact.form.phone;
    if (readyToExportTitle) readyToExportTitle.textContent = languageData[currentLanguage].contact.form.name === 'Nama Lengkap' ? 'Siap untuk Ekspor?' : 'Ready to Export?';
    if (readyToExportText) readyToExportText.textContent = languageData[currentLanguage].contact.subtitle;
    if (whatsappButton) whatsappButton.textContent = languageData[currentLanguage].contact.form.name === 'Nama Lengkap' ? 'Hubungi Kami via WhatsApp' : 'Contact Us via WhatsApp';

    // Update footer links
    const footerQuickLinks = document.querySelectorAll('footer a[href^="#"]');
    footerQuickLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') {
            link.textContent = languageData[currentLanguage].nav.home;
        }
        if (href === '#about') {
            link.textContent = languageData[currentLanguage].nav.about;
        }
        if (href === '#products') {
            link.textContent = languageData[currentLanguage].nav.products;
        }
        if (href === '#gallery') {
            link.textContent = languageData[currentLanguage].nav.gallery;
        }
        if (href === '#contact') {
            link.textContent = languageData[currentLanguage].nav.contact;
        }
    });
    
    console.log('=== UPDATE LANGUAGE COMPLETED SUCCESSFULLY ===');
    } catch (error) {
        console.error('Error in updateLanguage:', error);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded!');
    console.log('Initial language from localStorage:', localStorage.getItem('language'));
    console.log('Current language variable:', currentLanguage);
    
    // Ensure currentLanguage is set
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'id');
        currentLanguage = 'id';
    }
    
    updateLanguage();
    updateLanguageIndicator();
    
    console.log('Initialization complete!');
}); 