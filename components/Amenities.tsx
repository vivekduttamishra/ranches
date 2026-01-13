
import React from 'react';

export const Amenities: React.FC = () => {
  const list = [
    { 
      title: "Crystal Clear Pool", 
      subtitle: "Daytime Serenity", 
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      description: "A sprawling blue pool overlooking the grand residential blocks, surrounded by lush palm trees."
    },
    { 
      title: "Festive Courtyard", 
      subtitle: "The Night of Lights", 
      image: "https://images.unsplash.com/photo-1574092524457-3f82e66699da?auto=format&fit=crop&w=800&q=80",
      description: "Stunning festive illumination that transforms our building into a vibrant palette of purple and blue lights."
    },
    { 
      title: "Grand Clubhouse", 
      subtitle: "Social Hub", 
      image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
      description: "20,000 sq.ft of premium indoor amenities for all age groups."
    }
  ];

  return (
    <section className="py-32 bg-white" id="amenities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-brand-green font-bold tracking-[0.4em] uppercase text-xs">A Closer Look</h2>
            <p className="text-5xl md:text-8xl font-outfit font-bold text-gray-900 leading-tight tracking-tighter">Your Private <br />Urban Oasis.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {list.map((item, index) => (
            <div key={index} className="group relative h-[550px] rounded-[56px] overflow-hidden shadow-3xl bg-gray-50 border border-gray-100">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-12 left-10 right-10">
                <p className="text-brand-green font-bold text-[10px] uppercase tracking-widest mb-2">{item.subtitle}</p>
                <p className="text-white font-bold text-4xl tracking-tighter mb-4">{item.title}</p>
                <p className="text-white/60 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                  {item.description}
                </p>
                <div className="w-16 h-1 bg-brand-green rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
