
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

interface CommunityCarouselProps {
  onEventClick: () => void;
}

const SLIDES = [
  {
    title: "Makar Sankranti",
    date: "Jan 14",
    subtitle: "A sky full of colors: Kite flying festival at the main lawns.",
    image: "https://images.unsplash.com/photo-1590422955512-1f4863f6e522?auto=format&fit=crop&w=1200&q=80",
    tag: "Cultural",
    link: "/events/sankranti-2026"
  },
  {
    title: "Lohri Night",
    date: "Jan 13",
    subtitle: "Community bonfire, dhol, and traditional festivities for all residents.",
    image: "https://images.unsplash.com/photo-1574092524457-3f82e66699da?auto=format&fit=crop&w=1200&q=80",
    tag: "Festivity",
    link: "/events/lohri-2026"
  },
  {
    title: "Republic Day 2026",
    date: "Jan 26",
    subtitle: "Celebrating the spirit of India with flag hoisting and cultural parade.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
    tag: "National Day",
    link: "/events/republic-day-2026"
  },
  {
    title: "Saraswati Pooja",
    date: "Jan 23",
    subtitle: "Invoking the goddess of knowledge in our beautifully lit clubhouse.",
    image: "https://images.unsplash.com/photo-1614700166444-48677a561172?auto=format&fit=crop&w=1200&q=80",
    tag: "Tradition",
    link: "/events/saraswati-pooja-2026"
  }
];

export const CommunityCarousel: React.FC<CommunityCarouselProps> = ({ onEventClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-3 text-brand-green">
              <Sparkles className="animate-pulse" size={32} />
              <span className="font-bold tracking-[0.4em] uppercase text-xs">Vibrant Together</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-outfit font-bold text-gray-900 leading-tight">Celebrating <br />Community.</h2>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button onClick={prev} className="p-5 rounded-2xl bg-white text-gray-400 hover:text-brand-green transition-all border border-gray-100">
              <ChevronLeft size={28} />
            </button>
            <button onClick={next} className="p-5 rounded-2xl bg-brand-green text-white hover:shadow-xl transition-all">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[750px] rounded-[64px] overflow-hidden shadow-3xl bg-gray-900">
          {SLIDES.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-40 scale-110 pointer-events-none'}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent"></div>
              
              <div className="absolute bottom-20 left-10 md:left-24 right-10 max-w-4xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-brand-green text-white px-5 py-2 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg">
                    {slide.tag}
                  </div>
                  <div className="bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-xl text-sm font-bold border border-white/20">
                    {slide.date}
                  </div>
                </div>
                
                <h3 className="text-5xl md:text-8xl font-outfit font-bold text-white mb-8 leading-tight tracking-tighter">
                  {slide.title}
                </h3>
                
                <p className="text-xl md:text-3xl text-white/70 font-medium max-w-2xl mb-12 leading-relaxed">
                  {slide.subtitle}
                </p>

                <button 
                  onClick={onEventClick}
                  className="inline-flex items-center space-x-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-green hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
                >
                  <span>Event Details</span>
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
