
import React from 'react';

export const Amenities: React.FC = () => {
  const list = [
    { 
      title: "Infinity Pool", 
      subtitle: "Day view from the residential towers", 
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      description: "Crystal clear water with a panoramic view of the skyline."
    },
    { 
      title: "Festive Plaza", 
      subtitle: "Aura of lights at night", 
      image: "https://images.unsplash.com/photo-1493246318656-5bbd4cfb293b?auto=format&fit=crop&w=800&q=80",
      description: "Stunning night lighting that transforms the community for celebrations."
    },
    { 
      title: "Grand Clubhouse", 
      subtitle: "20,000 sq.ft of pure luxury", 
      image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
      description: "The heartbeat of social life at Mahaveer Ranches."
    },
    { 
      title: "Indoor Badminton", 
      subtitle: "Olympic standard synthetic court", 
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      description: "Stay active regardless of the weather."
    },
    { 
      title: "Sky Jogging Track", 
      subtitle: "Run with the clouds", 
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "Unique rooftop track with a fresh breeze and great views."
    },
    { 
      title: "Central Courtyard", 
      subtitle: "Greenery in the heart of Choodasandra", 
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      description: "Thoughtfully landscaped gardens for serene evening walks."
    },
  ];

  return (
    <section className="py-32 bg-white" id="amenities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-brand-green font-bold tracking-[0.4em] uppercase text-xs">Modern Infrastructure</h2>
            <p className="text-5xl md:text-8xl font-outfit font-bold text-gray-900 leading-tight tracking-tighter">Luxury is <br />in the Detail.</p>
          </div>
          <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-sm border-l-4 border-brand-green/20 pl-6">
            Managed with pride by our dedicated committee, every facility at Ranches is kept in pristine condition for the residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {list.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[550px] rounded-[56px] overflow-hidden shadow-3xl bg-gray-50 border border-gray-100"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/20 to-transparent"></div>
              
              <div className="absolute bottom-12 left-10 right-10">
                <div className="bg-brand-green/10 backdrop-blur-md inline-block px-3 py-1 rounded-lg border border-brand-green/20 mb-4">
                  <p className="text-brand-green font-bold text-[10px] uppercase tracking-widest">{item.subtitle}</p>
                </div>
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
