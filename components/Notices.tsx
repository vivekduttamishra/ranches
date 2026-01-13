
import React from 'react';
import { Bell, AlertCircle, FileText, Download } from 'lucide-react';

export const Notices: React.FC = () => {
  const announcements = [
    {
      id: "N-2026-001",
      title: "Republic Day Preparation & Traffic Advisory",
      date: "Jan 10, 2026",
      category: "Maintenance",
      priority: "High",
      excerpt: "Please note the temporary traffic changes for the upcoming Republic Day event flag hoisting area."
    },
    {
      id: "N-2026-002",
      title: "Clubhouse Renovation Schedule",
      date: "Jan 05, 2026",
      category: "Facility",
      priority: "Normal",
      excerpt: "The Badminton court will be closed for periodic maintenance on Jan 15th and 16th."
    },
    {
      id: "N-2026-003",
      title: "Annual AOA General Meeting Minutes",
      date: "Dec 20, 2025",
      category: "Governance",
      priority: "Normal",
      excerpt: "Minutes of the meeting held on Dec 15th are now available for resident review."
    }
  ];

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
          {announcements.map((note) => (
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
