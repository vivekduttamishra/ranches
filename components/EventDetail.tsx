
import React from 'react';
import { Calendar, MapPin, Clock, ArrowLeft, Share2, Info, Users, CheckCircle2 } from 'lucide-react';

interface EventDetailProps {
  eventId: string | null;
  onBack: () => void;
}

interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  agenda: string[];
  guidelines: string[];
}

const EVENTS_DB: Record<string, EventData> = {
  'republic-day-2026': {
    id: 'republic-day-2026',
    title: '77th Republic Day Celebration',
    date: 'Jan 26, 2026',
    time: '08:30 AM onwards',
    location: 'Main Flag Hoisting Area (Front Gate)',
    description: 'Join us for the flag hoisting ceremony followed by breakfast and patriotic cultural performances.',
    longDescription: 'Mahaveer Ranches celebrates the spirit of India. This year, we are focusing on "Viksit Bharat" with a grand parade by the children of the community, followed by a formal flag hoisting ceremony by the senior-most residents of our society.',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '08:30 AM - Assembly of Residents',
      '08:45 AM - Guard of Honor by Security Team',
      '09:00 AM - Flag Hoisting & National Anthem',
      '09:15 AM - Speech by AOA President',
      '09:30 AM - Cultural Performances by Kids',
      '10:30 AM - Community Breakfast'
    ],
    guidelines: [
      'Dress Code: Ethnic / White',
      'Please arrive by 08:20 AM to ensure smooth assembly',
      'Parking will be restricted near the front gate area from 07:00 AM',
      'Breakfast coupons available at the AOA office'
    ]
  },
  'sankranti-2026': {
    id: 'sankranti-2026',
    title: 'Makar Sankranti Kite Festival',
    date: 'Jan 14, 2026',
    time: '03:00 PM - 07:00 PM',
    location: 'Grand Lawn & Clubhouse Rooftop',
    description: 'A sky full of colors: Kite flying competition and traditional Sankranti feast.',
    longDescription: 'Experience the joy of Makar Sankranti with our annual kite flying festival. We provide the kites and the strings; you bring the skill! Enjoy traditional sweets like Til-Gul and Pongal served at our community stalls.',
    image: 'https://images.unsplash.com/photo-1590422955512-1f4863f6e522?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '03:00 PM - Kite Distribution',
      '03:30 PM - Competition Begins (Kids Category)',
      '04:30 PM - Pro Kite Flying Showcase',
      '05:30 PM - Award Ceremony',
      '06:00 PM - Traditional Feast & Music'
    ],
    guidelines: [
      'Eco-friendly cotton strings (Manjha) only',
      'Children must be accompanied by adults at the rooftop',
      'Traditional attire encouraged'
    ]
  },
  'lohri-2026': {
    id: 'lohri-2026',
    title: 'Lohri Bonfire Night',
    date: 'Jan 13, 2026',
    time: '06:30 PM onwards',
    location: 'Central Courtyard',
    description: 'The warmth of bonfire, traditional dhol, and community celebration.',
    longDescription: 'Let us celebrate the harvest festival together with the warmth of a community bonfire. We have arranged for a live Dhol troupe and authentic Punjabi snacks (Popcorn, Revari, Gajak) for all residents.',
    image: 'https://images.unsplash.com/photo-1574092524457-3f82e66699da?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '06:30 PM - Lighting of the Bonfire',
      '07:00 PM - Traditional Rituals & Offerings',
      '07:30 PM - Live Dhol & Bhangra Performances',
      '08:30 PM - Community Dinner'
    ],
    guidelines: [
      'Maintain safe distance from the central bonfire',
      'Avoid throwing plastic or non-combustible items into the fire',
      'Resident ID cards mandatory for dinner entry'
    ]
  },
  'saraswati-pooja-2026': {
    id: 'saraswati-pooja-2026',
    title: 'Saraswati Pooja & Cultural Meet',
    date: 'Jan 23, 2026',
    time: '10:00 AM - 01:00 PM',
    location: 'Clubhouse Temple Area',
    description: 'Celebrating Vasant Panchami with community pooja and cultural activities for students.',
    longDescription: 'Invoking the goddess of knowledge and arts. This year, we are hosting a special "Hatey Khori" ceremony for the toddlers of our community starting their education journey.',
    image: 'https://images.unsplash.com/photo-1614700166444-48677a561172?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '10:00 AM - Saraswati Vandana',
      '10:30 AM - Hatey Khori Ceremony',
      '11:30 AM - Pushpanjali (Offerings)',
      '12:30 PM - Distribution of Bhog/Prasadam'
    ],
    guidelines: [
      'Yellow attire is preferred',
      'Bring your books/pens for the blessings area',
      'Volunteers needed for prasadam distribution'
    ]
  }
};

export const EventDetail: React.FC<EventDetailProps> = ({ eventId, onBack }) => {
  const event = eventId ? EVENTS_DB[eventId] : null;

  if (!event) {
    return (
      <div className="py-32 bg-white min-h-screen text-center">
        <h2 className="text-2xl font-bold">Event not found</h2>
        <button onClick={onBack} className="mt-4 text-brand-green font-bold">Back to Events</button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>
        
        <div className="absolute top-10 left-10 z-10">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold hover:bg-white/40 transition-all border border-white/20"
          >
            <ArrowLeft size={20} />
            <span>All Events</span>
          </button>
        </div>

        <div className="absolute bottom-10 left-0 right-0 px-4 md:px-10 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
               <Calendar size={14} />
               <span>{event.date}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-outfit font-bold text-gray-900 tracking-tighter leading-tight drop-shadow-sm">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-8 space-y-16">
            <section className="space-y-6">
              <h2 className="text-3xl font-outfit font-bold text-gray-900 border-l-4 border-brand-green pl-6">About the Event</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {event.longDescription}
              </p>
            </section>

            <section className="bg-gray-50 rounded-[48px] p-10 md:p-14 space-y-10 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                <Clock className="text-brand-green" />
                <span>Event Agenda</span>
              </h3>
              <div className="grid gap-6">
                {event.agenda.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-brand-green mt-2 shrink-0"></div>
                    <p className="text-lg font-bold text-gray-800 tracking-tight">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
               <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                <Info className="text-brand-green" />
                <span>Important Guidelines</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.guidelines.map((guide, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 flex items-start space-x-4 shadow-sm">
                    <CheckCircle2 className="text-brand-green shrink-0" size={20} />
                    <p className="text-sm font-bold text-gray-600 leading-snug">{guide}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              
              {/* Event Logistics Card */}
              <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-gray-100 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-brand-green">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Time</p>
                      <p className="font-bold text-gray-800">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</p>
                      <p className="font-bold text-gray-800">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Audience</p>
                      <p className="font-bold text-gray-800">All Residents</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-100 hover:bg-green-700 transition-all active:scale-95">
                  Confirm Attendance
                </button>

                <button className="w-full bg-white text-gray-400 py-5 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 border border-gray-100 hover:text-brand-green hover:border-brand-green transition-all">
                  <Share2 size={18} />
                  <span>Share with Neighbors</span>
                </button>
              </div>

              {/* AOA Contact Help */}
              <div className="bg-gray-900 rounded-[40px] p-10 text-white space-y-4">
                <h4 className="font-bold text-xl">Need Help?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Contact the Event Committee for any queries regarding registration or volunteer opportunities.</p>
                <div className="pt-4">
                   <p className="text-brand-green font-bold">AOA Office Help Desk</p>
                   <p className="text-xs text-gray-500 tracking-widest">+91 080-2345-6789</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
