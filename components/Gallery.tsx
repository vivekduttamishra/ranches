
import React from 'react';
import { Camera, Layers } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80", title: "Residential View", category: "Architecture" },
    { url: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80", title: "Clubhouse Lounge", category: "Interiors" },
    { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80", title: "Infinity Pool", category: "Amenities" },
    { url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80", title: "Central Gardens", category: "Landscape" },
    { url: "https://images.unsplash.com/photo-1574092524457-3f82e66699da?auto=format&fit=crop&w=1200&q=80", title: "Night Festivities", category: "Community" },
    { url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80", title: "Children's Park", category: "Landscape" },
    { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80", title: "Poolside Evening", category: "Amenities" },
    { url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80", title: "Sports Complex", category: "Amenities" },
  ];

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-3 text-brand-green bg-green-50 px-6 py-2 rounded-full">
            <Camera size={20} />
            <span className="font-bold tracking-[0.2em] uppercase text-xs">Visual Tour</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-outfit font-bold text-gray-900 tracking-tighter">Gallery.</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Capturing the moments and spaces that make Mahaveer Ranches the most desired community on Hosa Road.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid group relative rounded-[40px] overflow-hidden shadow-xl bg-gray-100 transform hover:scale-[1.02] transition-all duration-500">
              <img src={img.url} alt={img.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-brand-green font-bold text-xs uppercase tracking-widest mb-1">{img.category}</p>
                <h4 className="text-white text-2xl font-bold">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
