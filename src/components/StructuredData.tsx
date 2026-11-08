export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CocoBlim Activated Carbon",
    "alternateName": "CocoBlim Indonesia",
    "url": "https://cocoblim.com",
    "logo": "https://cocoblim.com/images/CocoBlim_logo_baru_-removebg-preview.png",
    "description": "Produsen dan eksportir karbon aktif berkualitas tinggi dari tempurung kelapa dan cangkang sawit di Indonesia. Melayani pasar industri water treatment, pemurnian gas, industri makanan, dan tambang emas CIP/CIL.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C552+685, Tanjungrasa, Kec. Tanjungsari",
      "addressLocality": "Kabupaten Bogor",
      "addressRegion": "Jawa Barat",
      "postalCode": "16840",
      "addressCountry": "ID"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-857-7106-0462",
        "email": "blim00coco@gmail.com",
        "contactType": "sales and export inquiries",
        "availableLanguage": ["Indonesian", "English", "Arabic"]
      }
    ],
    "sameAs": [
      "https://wa.me/6285771060462"
    ],
    "foundingDate": "2024",
    "industry": "Activated Carbon Manufacturing & Chemical Filtration",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Indonesia"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Japan"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Granular Activated Carbon (GAC)",
          "description": "Karbon aktif butiran dari tempurung kelapa murni dengan angka iodin 900 - 1200 mg/g untuk pengolahan air PDAM dan limbah industri."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Powdered Activated Carbon (PAC)",
          "description": "Karbon aktif serbuk halus 200 - 325 mesh kinetika adsorpsi cepat untuk dekolorisasi cairan dan pemurnian air limbah."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Pelletized Activated Carbon (Extruded)",
          "description": "Karbon aktif pelet silinder diameter 3mm dan 4mm dengan pressure drop rendah untuk pemurnian gas dan VOC abatement."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Gold Recovery Activated Carbon (CIP/CIL)",
          "description": "Karbon aktif khusus ekstraksi emas tambang dengan hardness ekstra tinggi ≥ 98.5% tahan abrasi mekanis."
        }
      }
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pabrik Karbon Aktif CocoBlim Bogor",
    "image": "https://cocoblim.com/images/factory/2.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C552+685, Tanjungrasa, Kec. Tanjungsari",
      "addressLocality": "Kabupaten Bogor",
      "addressRegion": "Jawa Barat",
      "postalCode": "16840",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.5517,
      "longitude": 107.0583
    },
    "telephone": "+62-857-7106-0462",
    "email": "blim00coco@gmail.com",
    "openingHours": "Mo-Sa 08:00-17:00",
    "priceRange": "$$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
    </>
  );
}
