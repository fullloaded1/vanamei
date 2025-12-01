'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface MapProps {
  className?: string;
}

export default function InteractiveMap({ className = '' }: MapProps) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapAnimation = useScrollAnimation();

  const factoryAddress = "Cocoblim Factory, Jl. Mangga Bolong, RT.1/RW.18, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7234567890123!2d106.8123456789!3d-6.2987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edacb64fb4e5%3A0x65f048da508f9ff3!2sCocoblim%20Factory!5e0!3m2!1sen!2sid!4v1696123456789!5m2!1sen!2sid";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Cocoblim+Factory,+Jl.+Mangga+Bolong,+RT.1/RW.18,+Srengseng+Sawah,+Kec.+Jagakarsa,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12630";

  const handleGetDirections = () => {
    window.open(directionsUrl, '_blank');
  };

  const handleViewInMaps = () => {
    window.open("https://www.google.com/maps?q=cocoblim+factory,+Jl.+Mangga+Bolong,+RT.1/RW.18,+Srengseng+Sawah,+Kec.+Jagakarsa,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12630", '_blank');
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div 
          ref={mapAnimation.ref}
          className={`transition-all duration-1000 ease-out ${
            mapAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-800 delay-200 ease-out ${
            mapAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Factory
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Located in the heart of Jakarta Selatan, our modern facility is equipped with state-of-the-art technology for premium coconut product manufacturing.
            </p>
          </div>

          {/* Map Container */}
          <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-400 ease-out ${
            mapAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
            
            {/* Map Loading Overlay */}
            {!isMapLoaded && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading interactive map...</p>
                </div>
              </div>
            )}

            {/* Interactive Map */}
            <div className="relative h-96 md:h-[500px]">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-2xl"
                onLoad={() => setIsMapLoaded(true)}
                title="Cocoblim Factory Location"
              />
              
              {/* Map Overlay with Factory Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-1 animate-pulse"></div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Cocoblim Factory</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Premium coconut charcoal manufacturing facility
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons & Info Panel */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Address & Contact Info */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">Factory Address</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {factoryAddress}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span className="text-gray-600">Operating Hours: Mon-Fri 8AM-6PM</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-600">Factory Tours Available by Appointment</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg">Quick Actions</h3>
                  
                  <button
                    onClick={handleGetDirections}
                    className="w-full bg-green-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>Get Directions</span>
                  </button>
                  
                  <button
                    onClick={handleViewInMaps}
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>View in Google Maps</span>
                  </button>

                  <a
                    href="https://wa.me/6285771060462?text=Hi, I would like to schedule a factory visit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z"/>
                    </svg>
                    <span>Schedule Visit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 transition-all duration-700 delay-600 ease-out ${
            mapAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Strategic Location</h3>
                <p className="text-sm text-gray-600">
                  Easy access from major highways and close to Jakarta's business district
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Modern Facility</h3>
                <p className="text-sm text-gray-600">
                  State-of-the-art equipment and quality control systems
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Flexible Hours</h3>
                <p className="text-sm text-gray-600">
                  Factory tours and meetings available by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
