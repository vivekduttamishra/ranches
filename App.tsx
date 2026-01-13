
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommunityCarousel } from './components/CommunityCarousel';
import { Features } from './components/Features';
import { Amenities } from './components/Amenities';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { MemberPortalModal } from './components/MemberPortalModal';
import { Gallery } from './components/Gallery';
import { EventsPage } from './components/EventsPage';
import { Notices } from './components/Notices';
import { Connect } from './components/Connect';

export type View = 'home' | 'gallery' | 'events' | 'notices' | 'connect';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: View) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'gallery':
        return <Gallery />;
      case 'events':
        return <EventsPage />;
      case 'notices':
        return <Notices />;
      case 'connect':
        return <Connect />;
      default:
        return (
          <>
            <Hero onActionClick={() => navigateTo('events')} />
            <div id="community">
              <Features />
              <CommunityCarousel onEventClick={() => navigateTo('events')} />
            </div>
            <div id="amenities">
              <Amenities />
            </div>
            <div id="aoa-info" className="py-24 bg-brand-green/5">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-outfit font-bold text-gray-900 mb-6 italic">"A community is not just about buildings, it's about the people who call it home."</h2>
                <p className="text-brand-green font-bold tracking-widest uppercase text-sm">- Managing Committee, MR-AOA</p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        currentView={currentView}
        onMemberClick={() => setIsLoginModalOpen(true)} 
        onNavigate={navigateTo}
      />
      
      <main className="flex-grow pt-24 md:pt-0">
        {renderContent()}
      </main>

      <Footer onNavigate={navigateTo} />

      {isLoginModalOpen && (
        <MemberPortalModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
