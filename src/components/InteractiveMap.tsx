'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPinIcon, WhatsAppIcon } from '@/components/Icons';

interface MapProps {
  className?: string;
}

export default function InteractiveMap({ className = '' }: MapProps) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapAnimation = useScrollAnimation();

  const factoryAddress = "C552+685, Tanjungrasa, Kec. Tanjungsari, Kabupaten Bogor, Jawa Barat 16840";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=C552%2B685,+Tanjungrasa,+Kec.+Tanjungsari,+Kabupaten+Bogor,+Jawa+Barat+16840";
  const googleMapsUrl = "https://maps.google.com/maps?q=C552%2B685,+Tanjungrasa,+Tanjungsari,+Bogor&t=&z=13&ie=UTF8&iwloc=&output=embed";

  const handleGetDirections = () => {
    window.open(directionsUrl, '_blank');
  };

  const handleViewInMaps = () => {
    window.open("https://maps.google.com/?q=C552%2B685,+Tanjungrasa,+Tanjungsari,+Bogor", '_blank');
  };

  return (
    <section className={`py-20 bg-zinc-950 text-white border-t border-zinc-850 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={mapAnimation.ref}
          className={`transition-all duration-1000 ease-out ${
            mapAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              Factory Location & Logistics Hub
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Lokasi Fasilitas Pabrik Resmi
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Fasilitas manufaktur dan aktivasi uap karbon aktif berlokasi strategis di Tanjungsari, Kabupaten Bogor, terhubung dengan jalur logistik tol menuju Pelabuhan Internasional Tanjung Priok Jakarta.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
            {/* Map Loading Overlay */}
            {!isMapLoaded && (
              <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-500 mx-auto mb-3"></div>
                  <p className="text-zinc-400 text-xs">Memuat peta lokasi pabrik Bogor...</p>
                </div>
              </div>
            )}

            {/* Embedded Interactive Map */}
            <div className="relative h-96 md:h-[460px] bg-zinc-950">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
                title="Lokasi Pabrik Karbon Aktif CocoBlim Bogor"
              />
              
              {/* Map Overlay Badge */}
              <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 rounded-2xl p-4 shadow-xl max-w-xs text-white">
                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mt-1.5 animate-ping"></div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Pabrik Karbon Aktif CocoBlim</h3>
                    <p className="text-xs text-emerald-400 font-mono mt-0.5">Tanjungsari, Bogor Regency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Details Bar */}
            <div className="p-6 md:p-8 bg-zinc-900/90 border-t border-zinc-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Address Details */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">Alamat Presisi Pabrik</span>
                  <p className="text-zinc-200 text-sm md:text-base font-semibold leading-relaxed">
                    {factoryAddress}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Operasional: Senin - Sabtu 08:00 - 17:00 WIB
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      Kunjungan Lab: Terbuka dengan Reservasi
                    </span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleGetDirections}
                    className="flex-1 bg-zinc-800 hover:bg-zinc-750 text-white px-4 py-3 rounded-xl text-xs font-bold transition-all border border-zinc-700 flex items-center justify-center gap-2"
                  >
                    <MapPinIcon className="w-4 h-4 text-emerald-400" />
                    <span>Rute Google Maps</span>
                  </button>
                  <a
                    href="https://wa.me/6285771060462?text=Halo%20CocoBlim,%20saya%20ingin%20jadwalkan%20kunjungan%20ke%20pabrik%20Tanjungsari%20Bogor."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-4 py-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-zinc-950" />
                    <span>Jadwalkan Kunjungan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
