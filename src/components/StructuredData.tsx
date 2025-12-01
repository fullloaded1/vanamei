export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CocoBlim",
    "alternateName": "PT CocoBlim Indonesia",
    "url": "https://cocoblim.com",
    "logo": "https://cocoblim.com/images/CocoBlim_logo_baru_-removebg-preview.png",
    "description": "Produsen arang kelapa premium di Jakarta, Indonesia. Menyediakan briket shisha, arang kayu keras, tempurung kelapa berkualitas tinggi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Mangga Bolong, RT.1/RW.18, Srengseng Sawah",
      "addressLocality": "Jagakarsa",
      "addressRegion": "Jakarta Selatan",
      "postalCode": "12630",
      "addressCountry": "ID"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-851-4492-0078",
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "0857-7106-0462",
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"]
      }
    ],
    "sameAs": [
      "https://wa.me/6285144920078",
      "https://wa.me/6285771060462"
    ],
    "foundingDate": "2024",
    "industry": "Manufacturing",
    "numberOfEmployees": "10-50",
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Briket Shisha Premium",
          "description": "Arang briket shisha berkualitas tinggi tanpa bahan kimia"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Arang Kayu Keras",
          "description": "Arang kayu keras dengan rasa smoky alami"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Arang Tempurung Kelapa",
          "description": "Arang tempurung kelapa berkualitas premium"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Sawdust Briquette",
          "description": "Briket serbuk gergaji tahan lama"
        }
      }
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CocoBlim Factory",
    "image": "https://cocoblim.com/images/factory/2.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Mangga Bolong, RT.1/RW.18, Srengseng Sawah",
      "addressLocality": "Jagakarsa",
      "addressRegion": "Jakarta Selatan",
      "postalCode": "12630",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2987654321,
      "longitude": 106.8123456789
    },
    "telephone": "+62-851-4492-0078, 0857-7106-0462",
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "servesCuisine": "Industrial Manufacturing"
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
