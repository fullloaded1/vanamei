# Auto Language Detection Feature

## Overview
Fitur deteksi bahasa otomatis yang mendeteksi lokasi pengunjung dan menyesuaikan bahasa website secara otomatis berdasarkan negara asal.

## How It Works

### 1. Detection Methods
- **Primary**: IP Geolocation API (ipapi.co) untuk mendapatkan negara pengunjung
- **Fallback**: Browser language detection jika API gagal

### 2. Language Mapping
- **Indonesia (ID)**: Bahasa Indonesia
- **Arab Countries**: Arabic (SA, AE, QA, KW, BH, OM, JO, LB, SY, IQ, YE, EG, LY, TN, DZ, MA, SD, PS)
- **Other Countries**: English (default)

### 3. User Preference Priority
1. **Manual Selection**: Jika user pernah memilih bahasa secara manual, preferensi tersebut akan disimpan dan digunakan
2. **Auto Detection**: Hanya berjalan pada kunjungan pertama tanpa preferensi tersimpan
3. **Local Storage**: Preferensi bahasa disimpan di `coconut-language` key

## Files Modified/Created

### New Files:
- `src/hooks/useAutoLanguageDetection.ts` - Hook untuk deteksi lokasi dan bahasa
- `src/components/LanguageDetectionInfo.tsx` - Debug component (development only)
- `AUTO-LANGUAGE-DETECTION.md` - Dokumentasi ini

### Modified Files:
- `src/contexts/LanguageContext.tsx` - Integrasi auto detection
- `src/app/layout.tsx` - Menambahkan debug component

## Usage

### Automatic Detection
Fitur berjalan otomatis saat website dibuka. Tidak perlu konfigurasi tambahan.

### Manual Override
User tetap bisa mengubah bahasa melalui language selector di navbar. Pilihan manual akan disimpan dan digunakan untuk kunjungan berikutnya.

### Clear Preferences
Untuk reset ke auto detection, hapus `coconut-language` dari localStorage:
```javascript
localStorage.removeItem('coconut-language');
```

## Development

### Debug Info
Dalam development mode, informasi deteksi bahasa akan ditampilkan di pojok kanan bawah:
- Current language
- Detected language
- Detection status
- Country information

### Testing Different Countries
Untuk testing, Anda bisa:
1. Gunakan VPN untuk simulasi negara berbeda
2. Ubah browser language setting
3. Clear localStorage dan refresh page

## API Dependency

### Primary API: ipapi.co
- **Free tier**: 1000 requests/month
- **Fallback**: Browser language detection
- **Error handling**: Graceful fallback ke English

### Alternative APIs (if needed):
- `ip-api.com` (15,000 requests/hour)
- `ipgeolocation.io` (1000 requests/month)
- `freegeoip.app` (15,000 requests/hour)

## Browser Support
- Modern browsers dengan fetch API support
- Fallback ke navigator.language untuk older browsers
- localStorage support required untuk preference saving

## Performance
- Lightweight implementation
- Single API call per session
- Cached results in localStorage
- No impact on page load speed

## Privacy
- Hanya menggunakan IP geolocation, tidak menyimpan data personal
- Preferensi bahasa disimpan lokal di browser
- Tidak ada tracking atau analytics tambahan
