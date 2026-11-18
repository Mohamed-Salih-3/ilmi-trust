/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ScholarsPage } from './pages/ScholarsPage';
import { InitiativesPage } from './pages/InitiativesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AlimLawAdmissionPage } from './pages/AlimLawAdmissionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateCause, setDonateCause] = useState<string | undefined>(undefined);

  // Synchronize with URL hash or path for browser history & external linking
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#', '').replace(/\/$/, '') as PageId;
      const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'scholars', 'initiatives', 'gallery', 'contact', 'alim-law-admission'];
      
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (validPages.includes(path)) {
        setCurrentPage(path);
      } else if (!path || path === 'home') {
        setCurrentPage('home');
      }
    };

    // On initial mount
    handleUrlChange();

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDonate = (cause?: string) => {
    setDonateCause(cause);
    setIsDonateOpen(true);
  };

  const handleCloseDonate = () => {
    setIsDonateOpen(false);
    setDonateCause(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#29231B] font-sans selection:bg-[#B08A3C]/20 selection:text-[#29231B] w-full max-w-full overflow-x-hidden">
      {/* Institutional Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate()}
      />

      {/* Main Multi-page Dynamic Router Surface */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenDonate={handleOpenDonate} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} onOpenDonate={handleOpenDonate} />
        )}
        {currentPage === 'scholars' && (
          <ScholarsPage onNavigate={handleNavigate} onOpenDonate={handleOpenDonate} />
        )}
        {currentPage === 'initiatives' && (
          <InitiativesPage onNavigate={handleNavigate} onOpenDonate={handleOpenDonate} />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} onOpenDonate={handleOpenDonate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} onOpenDonate={handleOpenDonate} />
        )}
        {currentPage === 'alim-law-admission' && (
          <AlimLawAdmissionPage onNavigate={handleNavigate} onOpenDonate={handleOpenDonate} />
        )}
      </main>

      {/* Global Institutional Four-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate()}
      />

      {/* Global Donation & Sadaqah Jariyah Modal */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={handleCloseDonate}
        defaultCause={donateCause}
      />
    </div>
  );
}
