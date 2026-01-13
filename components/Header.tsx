
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  onMemberClick: () => void;
  onNavigate: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onMemberClick, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'Events', view: 'events' },
    { label: 'Notices', view: 'notices' },
    { label: 'Connect', view: 'connect' },
  ];

  const handleNav = (view: View) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b-2 border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => handleNav('home')}>
            <div className="relative h-16 w-auto flex items-center">
              <svg className="h-14 w-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55 45C60 40 70 30 75 20C78 15 85 25 80 35C75 45 65 55 55 60L45 75C42 78 35 85 30 80C25 75 35 65 45 60L55 45Z" fill="url(#bird_grad_head)" />
                <path d="M55 45C60 35 75 25 85 15C88 12 92 18 90 25C85 35 75 45 55 45Z" fill="url(#bird_grad_head)" opacity="0.8" />
                <path d="M55 45C50 35 40 25 30 15C27 12 23 18 25 25C30 35 40 45 55 45Z" fill="url(#bird_grad_head)" opacity="0.6" />
                <defs>
                  <linearGradient id="bird_grad_head" x1="25" y1="15" x2="90" y2="85" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="ml-1 flex flex-col">
                <div className="flex flex-col">
                  <span className="text-gray-400 font-sans font-bold text-[8px] tracking-[0.4em] uppercase leading-none mb-0.5">Mahaveer</span>
                  <span className="brand-green font-outfit font-bold text-3xl leading-none italic tracking-tighter">Ranches</span>
                </div>
                <span className="text-gray-900 font-bold text-[8px] uppercase tracking-[0.1em] mt-1">Live Large. Live Now.</span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className={`text-xs tracking-[0.2em] font-bold uppercase transition-all border-b-2 py-1 ${
                  currentView === item.view 
                    ? 'text-brand-green border-brand-green' 
                    : 'text-gray-600 border-transparent hover:text-brand-green hover:border-brand-green'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onMemberClick}
              className="flex items-center space-x-2 bg-brand-green text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg text-[10px] tracking-widest"
            >
              <User size={14} />
              <span>RESIDENT PORTAL</span>
            </button>
          </nav>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-green bg-green-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className={`block w-full text-left text-lg font-bold py-2 ${
                  currentView === item.view ? 'text-brand-green' : 'text-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-50">
              <button
                onClick={() => { onMemberClick(); setIsOpen(false); }}
                className="flex w-full items-center justify-center space-x-2 bg-brand-green text-white px-6 py-5 rounded-2xl font-bold text-sm tracking-widest"
              >
                <User size={20} />
                <span>RESIDENT PORTAL</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
