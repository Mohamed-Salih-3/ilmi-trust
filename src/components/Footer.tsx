import React from 'react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data/trustData';
import { Facebook, Youtube, Twitter, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleInitiativeClick = (id: string) => {
    onNavigate('initiatives');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const coreInitiatives = [
    { id: 'ias-academy', name: 'Azhagiya Kadan IAS Academy (Civil Services)' },
    { id: 'women-rehab', name: 'Madrasathun Niswan (Women Rehabilitation)' },
    { id: 'scholarships', name: 'Educational Scholarships (300+ Students)' },
    { id: 'madrasa-muttukadu', name: 'Madrasa Muttukadu (Islamic Learning)' },
    { id: 'family-counselling', name: 'Family Counselling & Guidance' },
    { id: 'medical-aid', name: 'Medical Aid & Free Clinic' },
    { id: 'scheme-100', name: 'Scheme 100' },
    { id: 'alim-law-course', name: 'Alim & Law Dual Course' },
    { id: 'old-age-home', name: 'Old Age Home & Guidance Center' },
  ];

  return (
    <footer className="bg-[#29231B] text-[#F7F3EA] border-t-2 border-[#B08A3C] pt-12 sm:pt-14 pb-8 relative overflow-hidden">
      {/* Subtle geometric pattern backdrop */}
      <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Three-Column Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10">
          
          {/* LEFT COLUMN – ILMI TRUST BRAND (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Original ILMI Trust Logo */}
              <div className="w-12 h-12 rounded-sm bg-white p-1 border border-[#B08A3C]/50 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1793941609/logocurrent_tgknsw.webp"
                  alt="ILMI Trust Logo"
                  className="w-full h-full object-contain"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F3EA] tracking-wide leading-tight">
                  ILMI TRUST
                </h3>
                <p className="text-[9px] xs:text-[10px] sm:text-[11px] tracking-normal xs:tracking-[0.12em] sm:tracking-[0.16em] uppercase text-[#D8C18A] font-sans font-medium">
                  ISLAMIC LITERACY MOVEMENT OF INDIA · EST. 1997
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C8BFAF] leading-relaxed font-sans max-w-md">
              We are committed to building Jamia Darul Ilmi as a centre for authentic Islamic learning, character building, academic empowerment and community relief for future generations, InshaAllah.
            </p>
          </div>

          {/* CENTRE COLUMN – CORE INITIATIVES (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-xs font-bold text-[#D8C18A] tracking-[0.2em] uppercase">
              CORE INITIATIVES
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {coreInitiatives.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleInitiativeClick(item.id)}
                    className="text-left text-[#F7F3EA] hover:text-[#B08A3C] transition-colors leading-snug cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN – SOCIAL CONNECT (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold text-[#D8C18A] tracking-[0.2em] uppercase">
              CONNECT WITH US
            </h4>
            <p className="text-xs text-[#C8BFAF] leading-relaxed">
              Follow our official channels for ongoing institutional updates and announcements.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {CONTACT_INFO.socials.facebook && (
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ILMI Trust on Facebook"
                  className="w-9 h-9 rounded-full bg-[#1F1A14] border border-[#B08A3C]/30 flex items-center justify-center text-[#F7F3EA] hover:text-[#29231B] hover:bg-[#B08A3C] hover:border-[#B08A3C] transition-all shadow-xs"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {CONTACT_INFO.socials.youtube && (
                <a
                  href={CONTACT_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ILMI Trust on YouTube"
                  className="w-9 h-9 rounded-full bg-[#1F1A14] border border-[#B08A3C]/30 flex items-center justify-center text-[#F7F3EA] hover:text-[#29231B] hover:bg-[#B08A3C] hover:border-[#B08A3C] transition-all shadow-xs"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {CONTACT_INFO.socials.twitter && (
                <a
                  href={CONTACT_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ILMI Trust on Twitter / X"
                  className="w-9 h-9 rounded-full bg-[#1F1A14] border border-[#B08A3C]/30 flex items-center justify-center text-[#F7F3EA] hover:text-[#29231B] hover:bg-[#B08A3C] hover:border-[#B08A3C] transition-all shadow-xs"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {CONTACT_INFO.whatsappUrl && (
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact ILMI Trust on WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#1F1A14] border border-[#B08A3C]/30 flex items-center justify-center text-[#F7F3EA] hover:text-[#29231B] hover:bg-[#B08A3C] hover:border-[#B08A3C] transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* COPYRIGHT BOTTOM BAR */}
        <div className="pt-6 border-t border-[#B08A3C]/20 text-center">
          <p className="text-xs text-[#D8C18A]/75 font-sans tracking-wide">
            © 2026 ILMI Trust – Islamic Literacy Movement of India. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
