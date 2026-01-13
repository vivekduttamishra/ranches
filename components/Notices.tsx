
import React from 'react';
import { Bell, AlertCircle, FileText, Download } from 'lucide-react';
import { NOTICES_DATA } from '../data/notices';

export const Notices: React.FC = () => {
  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-3 text-brand-green bg-green-50 px-6 py-2 rounded-full">
            <Bell size={20} />
            <span className="font-bold tracking-[0.2em] uppercase text-xs">Official Announcements</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-outfit font-bold text-gray-900 tracking-tighter">Notices.</h2>
        </div>

        <div className="space-y-6">
          {NOTICES_DATA.map((note) => (
            <div key={note.id} className="bg-gray-50 rounded-[32px] p-8 md:p-12 hover:bg-green-50 transition-colors border border-gray-100 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl ${note.priority === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-brand-green/10 text-brand-green'}`}>
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{note.id}</span>
                    <p className="text-sm font-bold text-gray-900">{note.category}</p>
                  </div>
                </div>
                <div className="text-gray-400 text-sm font-bold tracking-widest uppercase">{note.date}</div>
              </div>

              <h3 className="text-2xl md:text-3xl font-outfit font-bold text-gray-900 mb-4 group-hover:text-brand-green transition-colors">{note.title}</h3>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">{note.excerpt}</p>

              <button className="inline-flex items-center space-x-2 text-brand-green font-bold text-sm uppercase tracking-widest hover:underline">
                <FileText size={18} />
                <span>Read Full Announcement</span>
                <Download size={14} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
