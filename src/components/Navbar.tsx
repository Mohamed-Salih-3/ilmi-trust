import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDonate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'scholars', label: 'Scholars' },
    { id: 'initiatives', label: 'Our Initiatives' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const handleAdmissionClick = () => {
    onNavigate('alim-law-admission');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white text-[#29231B] border-b border-[#E8DFC9] shadow-[0_2px_10px_rgba(41,35,27,0.04)] w-full">
      {/* Main 3-zone Header Contract */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Single Brand element */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 sm:gap-3.5 text-left group shrink min-w-0 focus:outline-none"
        >
          {/* Official ILMI Trust Logo */}
          <img
            src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1793941609/logocurrent_tgknsw.webp"
            alt="ILMI Trust Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
            width={56}
            height={56}
          />
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#29231B] group-hover:text-[#B08A3C] transition-colors leading-none">
                ILMI TRUST
              </span>
            </div>
            <p className="text-[8.5px] sm:text-[10px] tracking-normal sm:tracking-widest uppercase text-[#51483C] font-sans font-medium truncate max-w-[150px] xs:max-w-[210px] sm:max-w-none mt-0.5">
              Islamic Literacy Movement of India
            </p>
          </div>
        </button>

        {/* Zone 2: Navigation Links with Uiverse.io SVG Animated Outline Hover Effect */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`nav-outline-btn whitespace-nowrap shrink-0 ${
                  isActive 
                    ? 'text-[#29231B] font-semibold' 
                    : 'text-[#51483C]'
                }`}
              >
                <span className="relative z-10">{link.label}</span>

                {/* SVG Animated Outline (Uiverse.io SelfMadeSystem technique adapted to ILMI Trust) */}
                <svg
                  className="nav-outline-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    className="nav-outline-rect"
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="3"
                    pathLength="100"
                  />
                </svg>

                {/* Subtle Permanent Champagne Gold Indicator for Active Page */}
                {isActive && (
                  <span className="nav-active-indicator" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA button & Mobile Menu Button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={handleAdmissionClick}
            className="hidden xs:inline-flex btn-17 btn-17-primary btn-header-cta text-[11px] sm:text-xs tracking-wider whitespace-nowrap shrink-0 !py-2 sm:!py-2.5 !px-3 sm:!px-5 shadow-xs"
          >
            <span className="text-container">
              <span className="text">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden md:inline">ADMISSIONS OPEN – APPLY NOW</span>
                <span className="md:hidden">APPLY NOW</span>
              </span>
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#29231B] hover:text-[#B08A3C] focus:outline-none focus:ring-1 focus:ring-[#B08A3C] rounded-sm shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8DFC9] px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2.5 px-3 rounded text-sm transition-colors ${
                    isActive
                      ? 'bg-[#F7F3EA] text-[#29231B] font-semibold border-l-2 border-[#D8C18A]'
                      : 'text-[#51483C] hover:text-[#29231B] hover:bg-[#F7F3EA]/60 active:bg-[#F7F3EA] active:text-[#29231B]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#E8DFC9]">
            <button
              onClick={handleAdmissionClick}
              className="w-full btn-17 btn-17-primary btn-header-cta !py-3 !px-4 text-xs tracking-wider shadow-sm"
            >
              <span className="text-container">
                <span className="text">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>ADMISSIONS OPEN – APPLY NOW</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
