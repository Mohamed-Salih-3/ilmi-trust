import React from 'react';
import { PageId } from '../types';
import { SCHOLAR_DATA } from '../data/trustData';
import { Languages, CheckCircle2, Quote, Sparkles, Heart } from 'lucide-react';

interface ScholarsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const ScholarsPage: React.FC<ScholarsPageProps> = ({ onNavigate, onOpenDonate }) => {
  return (
    <div className="bg-[#F7F3EA] text-[#29231B] selection:bg-[#B08A3C]/20 selection:text-[#29231B]">
      
      {/* Editorial Header Banner */}
      <section className="bg-[#29231B] text-[#F7F3EA] py-20 lg:py-28 border-b-2 border-[#B08A3C]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C18A] block">
              Spiritual & Academic Leadership
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F3EA]">
              Our Leadership & Scholars
            </h1>
            <p className="text-base sm:text-xl text-[#D8C18A] font-serif italic pt-1 max-w-2xl leading-relaxed">
              Guiding the Ummah through Ilm, Khidmah and Rahmah.
            </p>
          </div>
        </div>
      </section>

      {/* Main Scholar Monograph Profile */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E8DFC9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Editorial Portrait & Verification Badge (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              
{/* Scholar Portrait Presentation */}
<div className="relative rounded-sm overflow-hidden border-2 border-[#B08A3C] shadow-2xl bg-[#29231B]">

  <div className="relative aspect-[3/4] overflow-hidden bg-[#29231B]">
    <img
      src="https://res.cloudinary.com/blvpou2j/image/upload/v1794926161/img21.png"
      alt="Maulana Shamsudeen Qasimi"
      className="w-full h-full object-cover object-[60%_center]"
      loading="lazy"
    />
  </div>

  <div className="p-4 bg-[#1F1A14] border-t border-[#B08A3C]/30 text-center">
    <span className="text-[10px] uppercase tracking-widest text-[#D8C18A] font-mono font-bold">
      Sole Founder & Chief Patron · ILMI Trust Registered
    </span>
  </div>

</div>


              {/* Language Fluency */}
              <div className="bg-[#F7F3EA] border border-[#E8DFC9] p-6 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29231B]">
                  <Languages className="w-4 h-4 text-[#B08A3C]" />
                  <span>Languages Spoken & Written</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SCHOLAR_DATA.languages.map((lang) => (
                    <span 
                      key={lang}
                      className="px-3 py-1.5 bg-white border border-[#E8DFC9] text-xs font-semibold text-[#29231B] rounded-xs shadow-2xs"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Makkah Masjid Affiliation */}
              <div className="bg-[#F7F3EA] border border-[#E8DFC9] p-6 rounded-sm space-y-2 text-xs text-[#51483C]">
                <span className="font-bold text-[#29231B] uppercase tracking-wider block">
                  Historic Makkah Masjid Secretariat
                </span>
                <p className="leading-relaxed">
                  Serving as the Chief Imam of the historical Makkah Masjid on Anna Salai in Chennai, providing Friday Khutbahs, religious guidance, arbitration, and spiritual leadership to the community across Tamil Nadu and South India.
                </p>
              </div>

            </div>

            {/* Right Column: Editorial Biography & Values (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block">
                  Founder & Spiritual Patron
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#29231B] mt-2">
                  Maulana Shamsudeen Qasimi
                </h2>
                <p className="text-sm sm:text-base text-[#48634A] font-medium mt-1">
                  Chief Imam, Makkah Masjid · Founder, ILMI Trust & Azhagiya Kadan IAS Academy
                </p>
                <div className="w-16 h-0.5 bg-[#B08A3C] mt-4" />
              </div>

              {/* Biography Narrative */}
              <div className="prose prose-stone max-w-none text-[#51483C] leading-relaxed space-y-5 text-base sm:text-lg">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[#B08A3C] first-letter:float-left first-letter:mr-4 first-letter:mt-1">
                  {SCHOLAR_DATA.biography[0]}
                </p>
                <p>{SCHOLAR_DATA.biography[1]}</p>
                <p>{SCHOLAR_DATA.biography[2]}</p>
                <p>{SCHOLAR_DATA.biography[3]}</p>
                <p className="text-[#29231B] font-medium italic border-l-2 border-[#B08A3C] pl-4 py-1">
                  {SCHOLAR_DATA.biography[4]}
                </p>
              </div>

              {/* Core Values */}
              <div className="space-y-4 pt-6 border-t border-[#E8DFC9]">
                <h3 className="font-serif text-2xl font-bold text-[#29231B]">
                  Core Values of Maulana's Mission
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {SCHOLAR_DATA.coreValues.map((val) => (
                    <div key={val.title} className="bg-[#F7F3EA] p-5 rounded-sm border border-[#E8DFC9]">
                      <h4 className="font-serif text-base font-bold text-[#29231B] mb-1">
                        {val.title}
                      </h4>
                      <p className="text-xs text-[#51483C] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-4 pt-6 border-t border-[#E8DFC9]">
                <h3 className="font-serif text-2xl font-bold text-[#29231B]">
                  Key Institutional Achievements
                </h3>

                <div className="space-y-3">
                  {SCHOLAR_DATA.keyAchievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#51483C]">
                      <CheckCircle2 className="w-5 h-5 text-[#48634A] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Quotation */}
              <div className="bg-[#29231B] text-[#F7F3EA] p-8 rounded-sm border border-[#B08A3C]/40 space-y-3 shadow-lg">
                <Quote className="w-6 h-6 text-[#D8C18A]" />
                <p className="font-serif text-lg sm:text-xl italic text-[#F7F3EA]/90 leading-relaxed">
                  "Nurturing educated, ethical individuals is a form of Sadaqah Jariyah—ongoing charity that benefits generations to come."
                </p>
                <span className="text-xs text-[#D8C18A] font-semibold block text-right font-mono tracking-wider">
                  — Maulana Shamsudeen Qasimi
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Support Action Section */}
      <section className="py-20 bg-[#F7F3EA] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-5">
          <h3 className="font-serif text-3xl font-bold text-[#29231B]">
            Support Maulana's Vision for Jamia Darul Ilmi
          </h3>
          <p className="text-base text-[#51483C] max-w-xl mx-auto leading-relaxed">
            Help establish the permanent educational complex to cultivate the next generation of scholars, advocates, and civil servants.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDonate}
              className="btn-17 btn-17-primary text-xs tracking-widest !py-4 !px-8 shadow-md mx-auto"
            >
              <span className="text-container">
                <span className="text">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Support Our Mission / Donate Now</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
