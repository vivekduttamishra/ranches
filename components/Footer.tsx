
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="flex items-center cursor-pointer">
               <img 
                 src="/logo.png" 
                 alt="Mahaveer Ranches" 
                 className="h-16 w-auto brightness-0 invert opacity-90"
                 onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                 }}
               />
               <div className="flex flex-col ml-3">
                  <span className="text-white font-outfit font-bold text-2xl leading-none tracking-tight uppercase">MAHAVEER</span>
                  <span className="brand-green font-outfit font-bold text-3xl leading-none italic">Ranches</span>
               </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg font-medium max-w-md">
              The Official portal for Mahaveer Ranches Apartment Owners Association. Representing over 1000+ vibrant families in Choodasandra, Hosa Road.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all transform hover:-translate-y-1 border border-white/10">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Society Info</h4>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
              <li><Link to="/" className="hover:text-brand-green transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-green transition-colors">Gallery</Link></li>
              <li><Link to="/events" className="hover:text-brand-green transition-colors">Events</Link></li>
              <li><Link to="/notices" className="hover:text-brand-green transition-colors">Notices</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-bold mb-4 uppercase tracking-[0.2em] text-xs">AOA Office</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-brand-green shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed font-medium">Site No. 95, Hosa Rd, Choodasandra, Bengaluru 560100</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-brand-green shrink-0" size={20} />
                <p className="text-sm font-medium">+91 080-2345-6789</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-brand-green shrink-0" size={20} />
                <p className="text-sm font-medium">aoa@mahaveerranches.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <p>© 2026 Mahaveer Ranches Apartment Owners Association.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Resident Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
