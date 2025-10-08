'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pricingProducts, companyInfo } from '@/data/pricingData';

const PriceListDownload: React.FC = () => {
  const { language, t } = useLanguage();

  const generatePriceListHTML = () => {
    const getProductName = (product: any) => {
      switch (language) {
        case 'id': return product.nameId;
        case 'ar': return product.nameAr;
        default: return product.name;
      }
    };

    const getProductDescription = (product: any) => {
      switch (language) {
        case 'id': return product.descriptionId;
        case 'ar': return product.descriptionAr;
        default: return product.description;
      }
    };

    return `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CocoBlim - Price List</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: #f8f9fa;
            ${language === 'ar' ? 'direction: rtl;' : ''}
        }
        .container { 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header { 
            text-align: center; 
            margin-bottom: 30px; 
            padding: 20px;
            background: linear-gradient(135deg, #059669, #047857);
            color: white;
            border-radius: 10px;
        }
        .logo { 
            font-size: 2.5em; 
            font-weight: bold; 
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .tagline { 
            font-size: 1.1em; 
            opacity: 0.9; 
            margin-bottom: 5px;
        }
        .company-type { 
            font-size: 1em; 
            opacity: 0.8; 
        }
        .products-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
            gap: 20px; 
            margin: 30px 0;
        }
        .product-card { 
            border: 2px solid #e5e7eb; 
            border-radius: 12px; 
            padding: 20px; 
            background: #fff;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .product-card:hover { 
            border-color: #059669; 
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .product-name { 
            font-size: 1.3em; 
            font-weight: bold; 
            color: #1f2937; 
            margin-bottom: 8px;
        }
        .product-description { 
            color: #6b7280; 
            margin-bottom: 15px; 
            font-size: 0.95em;
        }
        .price-info { 
            background: linear-gradient(135deg, #ecfdf5, #d1fae5); 
            padding: 15px; 
            border-radius: 8px; 
            margin-bottom: 10px;
            border-left: 4px solid #059669;
        }
        .price { 
            font-size: 1.4em; 
            font-weight: bold; 
            color: #047857; 
            margin-bottom: 5px;
        }
        .moq { 
            font-size: 0.9em; 
            color: #374151; 
            font-weight: 500;
        }
        .category-badge { 
            display: inline-block; 
            background: #059669; 
            color: white; 
            padding: 4px 12px; 
            border-radius: 20px; 
            font-size: 0.8em; 
            font-weight: 500;
            margin-bottom: 10px;
        }
        .footer { 
            text-align: center; 
            margin-top: 40px; 
            padding: 20px; 
            background: #f3f4f6; 
            border-radius: 10px;
            border-top: 3px solid #059669;
        }
        .contact-info { 
            margin: 10px 0; 
            font-size: 1em;
        }
        .contact-info strong { 
            color: #047857; 
        }
        .port-info { 
            font-style: italic; 
            color: #6b7280; 
            margin-top: 15px;
        }
        .print-date { 
            font-size: 0.8em; 
            color: #9ca3af; 
            margin-top: 20px;
        }
        @media print {
            body { background: white; }
            .container { box-shadow: none; }
            .product-card:hover { transform: none; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">${companyInfo.name}</div>
            <div class="tagline">${companyInfo.tagline}</div>
            <div class="company-type">${companyInfo.description}</div>
        </div>
        
        <div class="products-grid">
            ${pricingProducts.map(product => `
                <div class="product-card">
                    <div class="category-badge">${product.category}</div>
                    <div class="product-name">${getProductName(product)}</div>
                    <div class="product-description">${getProductDescription(product)}</div>
                    <div class="price-info">
                        <div class="price">FOB PRICE: ${product.currency} ${product.fobPrice.toLocaleString()} / ${product.unit}</div>
                        <div class="moq">MOQ: ${product.moq} ${product.moqUnit}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="footer">
            <div class="contact-info">
                <strong>${language === 'id' ? 'Kontak' : language === 'ar' ? 'جهة الاتصال' : 'Contact'}:</strong> ${companyInfo.contact.name}
            </div>
            <div class="contact-info">
                <strong>${language === 'id' ? 'Telepon' : language === 'ar' ? 'الهاتف' : 'Phone'}:</strong> ${companyInfo.contact.phone}
            </div>
            <div class="contact-info">
                <strong>${language === 'id' ? 'Website' : language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}:</strong> ${companyInfo.contact.website}
            </div>
            <div class="port-info">
                <strong>${language === 'id' ? 'Pelabuhan' : language === 'ar' ? 'الميناء' : 'Port'}:</strong> ${companyInfo.port}
            </div>
            <div class="print-date">
                ${language === 'id' ? 'Dicetak pada' : language === 'ar' ? 'طُبع في' : 'Generated on'}: ${new Date().toLocaleDateString(language === 'id' ? 'id-ID' : language === 'ar' ? 'ar-SA' : 'en-US')}
            </div>
        </div>
    </div>
</body>
</html>`;
  };

  const downloadPriceList = () => {
    const htmlContent = generatePriceListHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CocoBlim-Price-List-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const printPriceList = () => {
    const htmlContent = generatePriceListHTML();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={downloadPriceList}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {language === 'id' ? 'Unduh Daftar Harga' : language === 'ar' ? 'تحميل قائمة الأسعار' : 'Download Price List'}
      </button>
      
      <button
        onClick={printPriceList}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        {language === 'id' ? 'Cetak Daftar Harga' : language === 'ar' ? 'طباعة قائمة الأسعار' : 'Print Price List'}
      </button>
    </div>
  );
};

export default PriceListDownload;
