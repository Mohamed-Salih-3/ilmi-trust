import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageId, InitiativeItem } from '../types';
import { INITIATIVES_DATA } from '../data/trustData';
import { 
  Heart, 
  Phone, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface InitiativesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const InitiativesPage: React.FC<InitiativesPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Education', 'Welfare', 'Healthcare', 'Institutional'];

  const filteredInitiatives = selectedCategory === 'All'
    ? INITIATIVES_DATA
    : INITIATIVES_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#F7F3EA] text-[#29231B] selection:bg-[#B08A3C]/20 selection:text-[#29231B]">
      
      {/* Editorial Header Banner */}
      <section className="bg-[#29231B] text-[#F7F3EA] py-20 lg:py-28 border-b-2 border-[#B08A3C]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C18A] block">
              Program Monograph & Catalog
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F3EA]">
              Our Initiatives
            </h1>
            <p className="text-base sm:text-xl text-[#D8C18A] font-serif italic pt-1 max-w-2xl leading-relaxed">
              Empowering the Ummah through Education, Welfare & Faith
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Category Selector Ribbon */}
      <section className="py-6 bg-white border-b border-[#E8DFC9] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs text-[#51483C]">
            <span className="font-bold text-[#29231B]">{filteredInitiatives.length} Verified Initiatives</span>
            <span className="mx-2">·</span>
            <span>All figures documented exactly from trust financial records</span>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#29231B] text-[#D8C18A] shadow-xs'
                    : 'bg-[#F7F3EA] text-[#51483C] hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Full-Width Editorial Project Showcase */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-28 lg:space-y-36">
          {filteredInitiatives.map((item, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={item.id}
                id={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Visual Image Column (6 cols) with subtle reveal */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7' : ''}`}>
                  <div className="relative rounded-sm overflow-hidden border border-[#E8DFC9] shadow-xl group bg-white">
                    <img
                      src={item.image || '/src/assets/images/jamia_darul_ilmi_campus_1793880039067.jpg'}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#29231B]/70 via-transparent to-transparent opacity-80" />

                    {/* Category Label */}
                    <div className="absolute top-4 left-4 bg-[#29231B]/90 backdrop-blur-xs text-[#D8C18A] px-3.5 py-1 rounded-xs text-[11px] font-mono tracking-wider border border-[#B08A3C]/30">
                      {item.category}
                    </div>

                    {/* Numeric Accent */}
                    <div className="absolute bottom-4 right-4 text-white/90 font-mono text-xs tracking-widest uppercase">
                      INSPECT RECORD #{item.number}
                    </div>
                  </div>
                </div>

                {/* Narrative & Financial Details Column (6 cols) */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#B08A3C]/40 tabular-nums">
                      0{item.number}
                    </span>
                    <div className="w-12 h-px bg-[#B08A3C]/30" />
                    <span className="text-xs uppercase tracking-widest text-[#48634A] font-bold">
                      {item.category}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#29231B] leading-tight">
                    {item.title}
                  </h2>

                  {/* Detailed Description */}
                  <div className="space-y-3 text-sm sm:text-base text-[#51483C] leading-relaxed">
                    {item.fullDesc.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Highlights / Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-2 pt-1 text-xs text-[#51483C]">
                      <span className="font-bold text-[#29231B] uppercase tracking-wider block">
                        Program Highlights:
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#48634A] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlighted Financial Information Panel */}
                  {item.financialRequirements && item.financialRequirements.length > 0 && (
                    <div className="bg-white border border-[#E8DFC9] p-5 rounded-sm space-y-2 shadow-xs">
                      <span className="text-[10px] uppercase tracking-wider text-[#B08A3C] font-mono font-bold block">
                        Verified Financial Breakdown
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.financialRequirements.map((req, rIdx) => (
                          <div key={rIdx} className="border-l-2 border-[#B08A3C] pl-3 py-0.5">
                            <span className="text-xs text-[#51483C] block">{req.label}</span>
                            <span className="font-serif text-lg sm:text-xl font-bold text-[#29231B] tabular-nums block mt-0.5">
                              {req.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status / Urgency Note */}
                  {item.urgencyOrStatus && (
                    <div className="p-3.5 bg-amber-50/90 border border-amber-200 rounded-sm text-xs text-[#51483C] flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-[#B08A3C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#29231B]">Status Notice: </span>
                        <span>{item.urgencyOrStatus}</span>
                      </div>
                    </div>
                  )}

                  {/* Contact Phone for admissions if present */}
                  {item.contact && (
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#29231B]">
                      <span className="text-[#51483C]">Admissions Contact:</span>
                      {item.contact.map((c) => (
                        <a
                          key={c}
                          href={`tel:${c.replace(/\s+/g, '')}`}
                          className="inline-flex items-center gap-1.5 text-[#B08A3C] hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>{c}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Action CTA */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenDonate(item.id)}
                      className="btn-17 btn-17-primary text-xs tracking-wider !py-3 !px-6 shadow-xs"
                    >
                      <span className="text-container">
                        <span className="text">
                          <Heart className="w-3.5 h-3.5 fill-current" />
                          <span>Sponsor This Initiative</span>
                        </span>
                      </span>
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="btn-17 btn-17-secondary text-xs tracking-wider !py-3 !px-5"
                    >
                      <span className="text-container">
                        <span className="text">
                          <span>Inquire with Secretariat</span>
                        </span>
                      </span>
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Kind Appeal Full Section */}
      <section className="py-24 bg-[#29231B] text-[#F7F3EA] border-t-2 border-[#B08A3C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C18A]">
            Kind Appeal for Land & Capital Support
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EA]">
            Total Estimated Annual Expense: ₹3 Crores
          </h2>

          <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto" />

          <p className="text-base sm:text-lg text-[#F7F3EA]/85 leading-relaxed font-sans max-w-2xl mx-auto">
            "We request your kind support and prayers to continue these noble initiatives for the betterment of our Ummah. There has been a slight delay in our activities because we do not yet own any land. We are currently in the process of purchasing land, so we request your support. Jazakumullahu Khaira."
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDonate('jamia-construction')}
              className="btn-17 btn-17-primary text-xs tracking-widest !py-4 !px-8 shadow-lg"
            >
              <span className="text-container">
                <span className="text">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Contribute to Land & Construction</span>
                </span>
              </span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-17 btn-17-secondary-dark text-xs tracking-widest !py-4 !px-8"
            >
              <span className="text-container">
                <span className="text">
                  <span>Contact Our Trustees</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
