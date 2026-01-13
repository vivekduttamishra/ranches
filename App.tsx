
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommunityCarousel } from './components/CommunityCarousel';
import { Features } from './components/Features';
import { Amenities } from './components/Amenities';
import { Footer } from './components/Footer';
import { MemberPortalModal } from './components/MemberPortalModal';
import { Gallery } from './components/Gallery';
import { EventsPage } from './components/EventsPage';
import { Notices } from './components/Notices';
import { Connect } from './components/Connect';
import { EventDetail } from './components/EventDetail';

const Home: React.FC = () => (
  <>
    <Hero />
    <div id="community">
      <Features />
      <CommunityCarousel />
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

const App: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onMemberClick={() => setIsLoginModalOpen(true)} />
      
      <main className="flex-grow pt-24 md:pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>

      <Footer />

      {isLoginModalOpen && (
        <MemberPortalModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
