
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const Connect: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Page Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-3 text-blue-500 bg-blue-50 px-6 py-2 rounded-full">
            <MessageSquare size={20} />
            <span className="font-bold tracking-[0.2em] uppercase text-xs">Stay in Touch</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-outfit font-bold text-gray-900 tracking-tighter">Connect.</h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you're a potential resident or a proud owner, our AOA committee is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form Column - Now First/Top */}
          <div className="lg:col-span-7 order-1">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl border border-gray-100">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-green transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Flat / Unit No.</label>
                    <input type="text" placeholder="A-101 (Optional)" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-green transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-green transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message Topic</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-green appearance-none transition-all">
                    <option>General Inquiry</option>
                    <option>Maintenance Request</option>
                    <option>Booking Amenities</option>
                    <option>AOA Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-green transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-brand-green text-white py-6 rounded-2xl font-bold text-lg shadow-xl hover:bg-green-700 transition-all active:scale-95 flex items-center justify-center space-x-3">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details Column - Now Below Form */}
          <div className="lg:col-span-5 order-2 space-y-10 lg:pt-8">
             <div className="bg-white/50 backdrop-blur-sm rounded-[40px] p-10 space-y-10 border border-white">
                <h3 className="text-2xl font-outfit font-bold text-gray-900 mb-2">Office Details</h3>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">AOA Office Location</p>
                    <p className="text-lg font-bold text-gray-800 leading-tight">Site No. 95, Hosa Rd, Bengaluru 560100</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Official Support</p>
                    <p className="text-lg font-bold text-gray-800">aoa@mahaveerranches.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Helpline</p>
                    <p className="text-lg font-bold text-gray-800">+91 080-2345-6789</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-400 italic">Office Hours: Monday - Saturday, 10 AM - 6 PM</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
