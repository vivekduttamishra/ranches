
import React from 'react';
import { Users, Layout, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Features: React.FC = () => {
  const values = [
    {
      icon: <Users className="text-brand-green" size={32} />,
      title: "Strong Resident Bond",
      description: "A multicultural community where neighbors are family. Diverse celebrations throughout the year."
    },
    {
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      title: "AOA Governance",
      description: "Transparent management by elected resident volunteers ensuring fiscal responsibility and upkeep."
    },
    {
      icon: <Layout className="text-blue-500" size={32} />,
      title: "Modern Infrastructure",
      description: "Regularly upgraded facilities, from high-speed elevators to STP and Organic Waste Converters."
    },
    {
      icon: <HeartHandshake className="text-emerald-500" size={32} />,
      title: "Supportive Services",
      description: "In-house maintenance team, security staff, and housekeeping that keep Ranches running 24/7."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="brand-green font-bold tracking-[0.3em] uppercase text-xs">Our Association</h2>
            <p className="text-4xl md:text-6xl font-outfit font-bold text-gray-900 leading-tight">Driven by Residents, For Residents.</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mahaveer Ranches AOA is committed to maintaining the highest standards of safety, cleanliness, and social harmony. We focus on continuous improvement through community participation and transparent communication.
            </p>
            <div className="flex items-center space-x-4">
               <div className="p-1 bg-green-50 rounded-full"><ShieldCheck className="text-brand-green" /></div>
               <span className="text-sm font-bold text-gray-700">Registered under Karnataka Apartment Ownership Act</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-50"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
