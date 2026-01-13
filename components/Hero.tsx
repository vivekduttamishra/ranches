
import React from 'react';
import { Calendar, Users, ShieldCheck, ArrowDownCircle } from 'lucide-react';

interface HeroProps {
  onActionClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-12 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6da634 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-brand-green/5 text-brand-green px-6 py-2.5 rounded-full font-bold text-xs tracking-[0.2em] uppercase border border-brand-green/20">
              <ShieldCheck size={16} />
              <span>Registered AOA Portal</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-outfit font-bold tracking-tighter text-gray-900 leading-[0.9]">
                1000+ Families. <br /> 
                <span className="text-gray-400">One Grand</span> <br />
                <span className="brand-green italic">Community.</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Mahaveer Ranches is a thriving community of over <span className="text-brand-green font-bold">1000+ premium apartments</span> on Hosa Road. Managed with excellence, lived with joy.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <button
                onClick={onActionClick}
                className="px-10 py-5 bg-brand-green text-white rounded-2xl font-bold text-lg shadow-2xl shadow-green-200 hover:bg-green-700 hover:-translate-y-1 transition-all flex items-center space-x-3 active:scale-95 group"
              >
                <span>Explore Life at Ranches</span>
                <ArrowDownCircle size={24} className="group-hover:translate-y-1 transition-transform" />
              </button>
              
              <div className="flex items-center space-x-6 px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900 leading-none">1000+</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Units</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900 leading-none">5k+</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Residents</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green/20 to-orange-400/20 rounded-[48px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-white p-4 rounded-[48px] shadow-3xl border border-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" 
                  alt="Mahaveer Ranches Building View" 
                  className="w-full h-[600px] object-cover rounded-[36px]"
                />
                
                {/* Community Event Marquee */}
                <div className="absolute bottom-8 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-[32px] shadow-2xl border border-brand-green/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-brand-green">
                      <Calendar size={18} />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Upcoming Calendar</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">2026</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-800 border-b border-gray-100 pb-2">
                      <span className="text-sm font-bold">Lohri Celebrations</span>
                      <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded font-bold uppercase">Jan 13</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-800 border-b border-gray-100 pb-2">
                      <span className="text-sm font-bold">Makar Sankranti</span>
                      <span className="text-[10px] bg-brand-green/10 text-brand-green px-2 py-0.5 rounded font-bold uppercase">Jan 14</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-800 border-b border-gray-100 pb-2">
                      <span className="text-sm font-bold">Saraswati Pooja</span>
                      <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold uppercase">Jan 23</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-800">
                      <span className="text-sm font-bold">Republic Day 2026</span>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold uppercase">Jan 26</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
