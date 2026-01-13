
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  onMemberClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMemberClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Events', path: '/events' },
    { label: 'Notices', path: '/notices' },
    { label: 'Connect', path: '/connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Mahaveer Ranches Logo" 
              className="h-20 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-text')) {
                  const span = document.createElement('span');
                  span.className = 'fallback-text brand-green font-outfit font-bold text-2xl italic';
                  span.innerText = 'Mahaveer Ranches';
                  parent.appendChild(span);
                }
              }}
            />
          </Link>

          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-xs tracking-[0.2em] font-bold uppercase transition-all border-b-2 py-1 ${
                    isActive 
                      ? 'text-brand-green border-brand-green' 
                      : 'text-gray-600 border-transparent hover:text-brand-green hover:border-brand-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={onMemberClick}
              className="flex items-center space-x-2 bg-brand-green text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg text-[10px] tracking-widest ml-4"
            >
              <User size={14} />
              <span>RESIDENT PORTAL</span>
            </button>
          </nav>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-brand-green">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-6 py-8 space-y-4">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block w-full text-left text-lg font-bold py-2 ${isActive ? 'text-brand-green' : 'text-gray-800'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-gray-50">
              <button onClick={() => { onMemberClick(); setIsOpen(false); }} className="flex w-full items-center justify-center space-x-2 bg-brand-green text-white px-6 py-5 rounded-2xl font-bold text-sm tracking-widest">
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
