import React from 'react';
import { PageId } from '../types';
import { HERO_DATA } from '../data/trustData';
import { ArrowRight, Heart, CheckCircle2, Sparkles, Building, Landmark } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDonate }) => {
  return (
    <div className="bg-[#F7F3EA] text-[#29231B] selection:bg-[#B08A3C]/20 selection:text-[#29231B]">
      
      {/* Editorial Header Banner */}
      <section className="bg-[#29231B] text-[#F7F3EA] py-20 lg:py-28 border-b-2 border-[#B08A3C]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C18A] block">
              Institutional Heritage & Foundation
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F3EA]">
              About ILMI Trust
            </h1>
            <p className="text-base sm:text-xl text-[#D8C18A] font-serif italic pt-1 max-w-2xl leading-relaxed">
              A Journey of Knowledge, Faith and Community Service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & History Monograph */}
      <section className="py-24 sm:py-32 bg-white border-b border-[#E8DFC9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-16">
          
          {/* Institutional History Header */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C]">
              Over a Quarter Century of Sincere Service
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#29231B] leading-tight">
              Our History & Origins
            </h2>
            <div className="w-16 h-0.5 bg-[#B08A3C]" />
          </div>

          {/* Core Historical Narrative with Editorial Styling */}
          <div className="prose prose-stone max-w-none text-[#51483C] leading-relaxed space-y-6 text-base sm:text-lg">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[#B08A3C] first-letter:float-left first-letter:mr-4 first-letter:mt-1">
              Alhamdulillah, with the grace of Allah, Azhagiya Kadan Trust was established by Maulana Shamsudeen Qasimi in 1997.
            </p>

            <p>
              In 2014, the respected Imam of Baitul Muqaddas, Sheikh Ali Al-Abbas, renamed it as <strong className="text-[#29231B] font-serif">Ilmi Trust</strong>. By Allah's help, the trust has been operating quietly and sincerely, without much publicity.
            </p>

            <p>
              The success of the trust's constructive initiatives — including the IAS Academy — gained nationwide attention through coverage in leading media outlets such as <span className="italic text-[#29231B]">The Hindu</span>, <span className="italic text-[#29231B]">NDTV</span>, and <span className="italic text-[#29231B]">Headlines Today</span>.
            </p>

            <p>
              As a result, several organizations from across India, including Jamiat Ulama-i-Hind, urged us to expand our services to various regions of the country.
            </p>

            <p>
              Responding to these requests, and with the aim of widening the trust's educational mission, a movement titled <span className="font-semibold text-[#29231B]">Islamic Literacy Movement of India (ILMI TRUST)</span> was launched, inaugurated by the esteemed Chief Imam of Bait-ul-Muqaddas.
            </p>

            <blockquote className="my-8 p-6 bg-[#F7F3EA] border-l-4 border-[#B08A3C] rounded-sm text-[#29231B] font-serif text-lg italic leading-relaxed">
              "Some highlights of the ongoing work that has been underway for over a quarter of a century are presented to your attention."
            </blockquote>
          </div>

          {/* Media Coverage Strip */}
          <div className="bg-[#F7F3EA] border border-[#E8DFC9] p-6 rounded-sm space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#51483C] font-bold block font-mono">
              Nationwide Independent Media & Leadership Recognition:
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-base font-serif font-bold text-[#29231B]">
              <span className="border-b border-[#B08A3C]/40 pb-0.5">The Hindu</span>
              <span className="text-[#B08A3C]/50">·</span>
              <span className="border-b border-[#B08A3C]/40 pb-0.5">NDTV</span>
              <span className="text-[#B08A3C]/50">·</span>
              <span className="border-b border-[#B08A3C]/40 pb-0.5">Headlines Today</span>
              <span className="text-[#B08A3C]/50">·</span>
              <span className="border-b border-[#B08A3C]/40 pb-0.5">Jamiat Ulama-i-Hind</span>
            </div>
          </div>

          {/* Two-Column Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="bg-[#F7F3EA] border border-[#E8DFC9] p-8 sm:p-10 rounded-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08A3C] block mb-2">
                Our Mission
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#29231B] mb-3">
                Knowledge, Empowerment & Relief
              </h3>
              <p className="text-sm sm:text-base text-[#51483C] leading-relaxed">
                To promote Islamic literacy, educational development, social welfare and community empowerment through sustainable initiatives.
              </p>
            </div>

            <div className="bg-[#29231B] text-[#F7F3EA] p-8 sm:p-10 rounded-sm border border-[#B08A3C]/40">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C18A] block mb-2">
                Our Vision
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F3EA] mb-3">
                Building a Strong Foundation
              </h3>
              <p className="text-sm sm:text-base text-[#F7F3EA]/85 leading-relaxed">
                To Build a Strong Foundation in Deen & Education.
              </p>
            </div>
          </div>

          {/* Jamia Darul Ilmi Feature Section */}
          <div className="pt-10 border-t border-[#E8DFC9]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-6">
                <div className="rounded-sm overflow-hidden border border-[#E8DFC9] shadow-lg">
                  <img
                    src={HERO_DATA.masterplanImage}
                    alt="Jamia Darul Ilmi University Campus Visualization"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08A3C]">
                  Flagship Institution
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#29231B]">
                  About Our Madarasa – Jamia Darul Ilmi
                </h3>
                <p className="text-sm sm:text-base text-[#51483C] leading-relaxed">
                  We are committed to building a Madarasa that will serve as a center for Islamic learning, character building, and spiritual growth for future generations, InshaAllah.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('initiatives')}
                    className="btn-17 btn-17-secondary text-xs tracking-wider !py-2.5 !px-5"
                  >
                    <span className="text-container">
                      <span className="text">
                        <span>View Educational Programs</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline of History */}
          <div className="pt-12 border-t border-[#E8DFC9]">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block mb-2">
              Chronicle of Milestones
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#29231B] mb-10">
              Key Dates in Our Evolution
            </h3>

            <div className="space-y-10 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#B08A3C]/30">
              
              <div className="relative pl-10">
                <div className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-[#B08A3C] border-2 border-white shadow-xs" />
                <span className="font-mono text-xs font-bold text-[#B08A3C]">1997</span>
                <h4 className="font-serif text-xl font-bold text-[#29231B]">Foundation of Azhagiya Kadan Trust</h4>
                <p className="text-sm text-[#51483C] mt-1.5 leading-relaxed">
                  Established by Maulana Shamsudeen Qasimi to introduce community welfare, educational empowerment and essential relief aid for families in need.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-[#B08A3C] border-2 border-white shadow-xs" />
                <span className="font-mono text-xs font-bold text-[#B08A3C]">2012</span>
                <h4 className="font-serif text-xl font-bold text-[#29231B]">Launch of Azhagiya Kadan IAS Academy</h4>
                <p className="text-sm text-[#51483C] mt-1.5 leading-relaxed">
                  Inauguration of civil services coaching with 28 students in Chennai, producing successful UPSC and state administrative candidates.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-[#B08A3C] border-2 border-white shadow-xs" />
                <span className="font-mono text-xs font-bold text-[#B08A3C]">2014</span>
                <h4 className="font-serif text-xl font-bold text-[#29231B]">Renamed ILMI Trust by Baitul Muqaddas Imam</h4>
                <p className="text-sm text-[#51483C] mt-1.5 leading-relaxed">
                  Inaugurated as the Islamic Literacy Movement of India by Sheikh Ali Al-Abbas, Chief Imam of Bait-ul-Muqaddas (Masjid Al-Aqsa).
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-[#48634A] border-2 border-white shadow-xs" />
                <span className="font-mono text-xs font-bold text-[#48634A]">2025 & Beyond</span>
                <h4 className="font-serif text-xl font-bold text-[#29231B]">Jamia Darul Ilmi Campus & Land Acquisition</h4>
                <p className="text-sm text-[#51483C] mt-1.5 leading-relaxed">
                  Active acquisition of land and architectural execution for the comprehensive educational campus and dual Alim & Law university academy.
                </p>
              </div>

            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#29231B] text-[#F7F3EA] p-8 sm:p-12 rounded-sm border border-[#B08A3C]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <h4 className="font-serif text-2xl font-bold text-[#F7F3EA]">
                Join Us in Continuing This Quarter-Century Mission
              </h4>
              <p className="text-xs sm:text-sm text-[#F7F3EA]/80">
                Your partnership empowers scholars, educates orphans, and alleviates suffering.
              </p>
            </div>
            <button
              onClick={onOpenDonate}
              className="btn-17 btn-17-primary text-xs tracking-widest !py-3.5 !px-8 shadow-md shrink-0"
            >
              <span className="text-container">
                <span className="text">
                  <span>Support Our Mission</span>
                </span>
              </span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
