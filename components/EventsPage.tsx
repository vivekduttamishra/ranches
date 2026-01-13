
import React from 'react';
import { Calendar, MapPin, Ticket, Sparkles } from 'lucide-react';
import { ALL_EVENTS } from '../data/events';

interface EventsPageProps {
  onEventClick: (id: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onEventClick }) => {
  return (
    <section className="py-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 text-orange-500 bg-orange-50 px-6 py-2 rounded-full">
              <Sparkles size={20} />
              <span className="font-bold tracking-[0.2em] uppercase text-xs">Happening Soon</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-outfit font-bold text-gray-900 tracking-tighter">Events.</h2>
          </div>
          <p className="text-xl text-gray-500 max-w-sm font-medium italic">Building memories together, one celebration at a time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ALL_EVENTS.map((evt) => (
            <div 
              key={evt.id} 
              className="bg-white rounded-[48px] overflow-hidden shadow-xl border border-gray-100 group cursor-pointer transform hover:-translate-y-1 transition-all"
              onClick={() => onEventClick(evt.id)}
            >
              <div className="p-10 md:p-14 space-y-8">
                <div className="flex justify-between items-start">
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    evt.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                    evt.color === 'yellow' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' :
                    evt.color === 'green' ? 'bg-green-50 text-green-600 border-green-100' :
                    'bg-orange-50 text-orange-600 border-orange-100'
                  } border`}>
                    {evt.type}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">{evt.date.split(',')[0]}</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{evt.date.split(',')[1]}</p>
                  </div>
                </div>

                <h3 className="text-4xl font-outfit font-bold text-gray-900 group-hover:text-brand-green transition-colors">{evt.title}</h3>
                
                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                  {evt.description}
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar size={18} className="text-brand-green" />
                    <span className="font-bold text-sm uppercase tracking-wide">{evt.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin size={18} className="text-brand-green" />
                    <span className="font-bold text-sm uppercase tracking-wide">{evt.location}</span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:bg-brand-green transition-all shadow-lg active:scale-95">
                  <Ticket size={20} />
                  <span>View Details & Register</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
