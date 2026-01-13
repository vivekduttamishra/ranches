
import React from 'react';
import { MapPin, ExternalLink, Mail, Globe } from 'lucide-react';

export const Location: React.FC = () => {
  const address = "Site No. 95, Hosa Rd, Sai Sree Layout, Choodasandra, Bengaluru, Karnataka 560100";
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 space-y-10">
              <div className="space-y-4">
                <h2 className="brand-green font-bold tracking-widest uppercase text-sm">The Neighborhood</h2>
                <h3 className="text-4xl font-outfit font-bold text-gray-900">Prime Connectivity</h3>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="bg-green-50 p-4 rounded-2xl h-fit">
                    <MapPin className="text-brand-green" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Address</h4>
                    <p className="text-gray-600 leading-relaxed max-w-xs">{address}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-brand-green font-bold mt-3 hover:underline"
                    >
                      <span>Get Directions</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-orange-50 p-4 rounded-2xl h-fit">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                    <p className="text-gray-600">info@mahaveerranches.com</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-blue-50 p-4 rounded-2xl h-fit">
                    <Globe className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Official Website</h4>
                    <p className="text-gray-600">www.mahaveerranches.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 lg:h-auto relative">
              <div className="absolute inset-0 bg-gray-200">
                 {/* Map Placeholder with branding overlay */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.349319349836!2d77.67498427506277!3d12.88527268742215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae134015555555%3A0xe54d24a99f19379!2sMahaveer%20Ranches!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin" 
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
