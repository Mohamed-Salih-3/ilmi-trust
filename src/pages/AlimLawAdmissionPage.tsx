import React, { useRef } from 'react';
import { PageId } from '../types';
import { 
  GraduationCap, 
  Scale, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Heart, 
  Sparkles, 
  Calendar, 
  Phone, 
  Award,
  Building
} from 'lucide-react';
import { AdmissionEnquiryForm } from '../components/AdmissionEnquiryForm';
import { CONTACT_INFO } from '../data/trustData';

interface AlimLawAdmissionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const AlimLawAdmissionPage: React.FC<AlimLawAdmissionPageProps> = ({
  onNavigate,
  onOpenDonate,
}) => {
  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F7F3EA] text-[#29231B] selection:bg-[#B08A3C]/20 selection:text-[#29231B]">
      
      {/* Editorial Header Hero Banner */}
      <section className="relative bg-[#29231B] text-[#F7F3EA] py-20 lg:py-28 border-b-2 border-[#B08A3C] overflow-hidden">
        {/* Subtle geometric pattern backdrop */}
        <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />
        
        {/* Subtle Architectural Glow Backdrop */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
          <img
            src="/src/assets/images/vision_islamic_campus_1794207125383.jpg"
            alt="Jamia Darul Ilmi Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#29231B] via-[#29231B]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1F1A14] border border-[#B08A3C]/40 text-[#D8C18A] text-xs font-semibold tracking-widest uppercase">
              <Scale className="w-4 h-4 text-[#B08A3C]" />
              <span>Jamia Darul Ilmi Chennai · 5-Year Integrated Dual Course</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F3EA] leading-tight">
              Study Islam. Pursue Law. <br />
              <span className="text-[#D8C18A]">Serve the Community.</span>
            </h1>

            <div className="w-20 h-0.5 bg-[#B08A3C]" />

            <p className="text-base sm:text-lg text-[#F7F3EA]/85 leading-relaxed font-sans max-w-2xl">
              Muslim students who have passed 12th grade can pursue authentic Islamic scholarship (Alim course) alongside Law (LLB) at an affordable and subsidised fee.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={scrollToForm}
                className="btn-17 btn-17-primary text-[11px] sm:text-xs tracking-wider !py-3 sm:!py-3.5 !px-5 sm:!px-7 shadow-lg"
              >
                <span className="text-container">
                  <span className="text">
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>Apply Now – Admission Enquiry</span>
                  </span>
                </span>
              </button>

              <button
                onClick={() => onOpenDonate('alim-law-course')}
                className="btn-17 btn-17-secondary-dark text-[11px] sm:text-xs tracking-wider !py-3 sm:!py-3.5 !px-5 sm:!px-6"
              >
                <span className="text-container">
                  <span className="text">
                    <Heart className="w-4 h-4 text-[#B08A3C]" />
                    <span>Sponsor a Law Student</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Summary Quick Facts Grid */}
      <section className="py-6 sm:py-8 bg-white border-b border-[#E8DFC9] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="border-l-2 border-[#B08A3C] pl-3 sm:pl-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#51483C] font-semibold block">Programme</span>
              <span className="font-serif text-base sm:text-lg font-bold text-[#29231B] block mt-0.5">Alim & LLB Dual</span>
            </div>
            <div className="border-l-2 border-[#B08A3C] pl-3 sm:pl-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#51483C] font-semibold block">Academic Partner</span>
              <span className="font-serif text-base sm:text-lg font-bold text-[#29231B] block mt-0.5">Al-Ameen Law College</span>
            </div>
            <div className="border-l-2 border-[#B08A3C] pl-3 sm:pl-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#51483C] font-semibold block">Course Duration</span>
              <span className="font-serif text-base sm:text-lg font-bold text-[#29231B] block mt-0.5">5 Years Integrated</span>
            </div>
            <div className="border-l-2 border-[#B08A3C] pl-3 sm:pl-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#51483C] font-semibold block">Annual Support</span>
              <span className="font-serif text-base sm:text-lg font-bold text-[#29231B] block mt-0.5">Approx. ₹3,00,000/yr</span>
            </div>
          </div>
        </div>
      </section>


      {/* Tamil Admission Details */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E8DFC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08A3C]">
              Admissions Information
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#29231B] mt-3">
              சேர்க்கை விவரங்கள்
            </h2>

            <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto mt-5" />

            <p className="text-sm sm:text-base text-[#51483C] mt-5 leading-relaxed">
              மாணவர்களுக்கான கல்வி மற்றும் சேர்க்கை வாய்ப்புகள்
            </p>
          </div>

          {/* Admission Information Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">

            {/* Hifz Programme */}
            <article className="bg-[#F7F3EA] border border-[#E8DFC9] border-t-4 border-t-[#B08A3C] p-5 sm:p-7 lg:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-white border border-[#B08A3C]/30 rounded-sm">
                  <BookOpen className="w-5 h-5 text-[#B08A3C]" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B08A3C] font-semibold">
                    Programme 01
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#29231B]">
                    ஹிஃப்ழ் பிரிவு
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#51483C] leading-8">
                ஆறாம் வகுப்பு முதல் பத்தாம் வகுப்பு வரை படிக்கும் மாணவர்கள் ஹிஃப்ழ் பிரிவில் சேர்த்துக் கொள்ளப்படுவார்கள். அவர்களுக்கு ஹாஃபிழ் கோர்ஸ் உடன் தினமும் பள்ளிக்கூட பாடங்களும் நடைபெறும். அதாவது ஆறாம் வகுப்பு முடித்த மாணவர்களுக்கு பத்தாம் வகுப்பு வரை ஹிஃபுலு வகுப்புகளும் உலகக் கல்வி பாடங்களும் நடத்தப்பட்டு சிறப்பான ஆங்கில பேச்சுப் பயிற்சியும் கொடுக்கப்படும்.
              </p>
            </article>

            {/* Alim + Advocate Programme */}
            <article className="bg-[#F7F3EA] border border-[#E8DFC9] border-t-4 border-t-[#B08A3C] p-5 sm:p-7 lg:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-white border border-[#B08A3C]/30 rounded-sm">
                  <Scale className="w-5 h-5 text-[#B08A3C]" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B08A3C] font-semibold">
                    Programme 02
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#29231B]">
                    ஆலிம் + அட்வகேட் கோர்ஸ்
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#51483C] leading-8">
                பத்தாம் வகுப்பு அல்லது பிளஸ் டூ முடித்த மாணவர்களுக்கு ஆலிம் + அட்வகேட் கோர்ஸ் நடத்தப்படும். அதாவது பிளஸ் டூ முடித்தவுடன் சென்னை பல்கலைக்கழகத்தின் பாடத்திட்டங்களின்படி சென்னை புதுக் கல்லூரியில் முதல் மூன்று ஆண்டுகள் பிஏ அரபிக் கோர்ஸும் அடுத்த மூன்றாண்டுகள் பெங்களூர் அல் அமீன் சட்டக் கல்லூரியில் மூன்றாண்டுகள் சட்டக் கல்வியும் பயிற்றுவிக்கப்பட்டுஆறு ஆண்டுகளில் ஆலிம் டிகிரியும் அட்வகேட் டிகிரியும் வழங்கப்படும்.
              </p>
            </article>

            {/* Graduate LLB Programme */}
            <article className="bg-[#F7F3EA] border border-[#E8DFC9] border-t-4 border-t-[#B08A3C] p-5 sm:p-7 lg:p-8 rounded-sm lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-white border border-[#B08A3C]/30 rounded-sm">
                  <GraduationCap className="w-5 h-5 text-[#B08A3C]" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B08A3C] font-semibold">
                    Programme 03
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#29231B]">
                    பட்டம் முடித்த மாணவர்களுக்கான சட்டக் கல்வி
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#51483C] leading-8">
                டிகிரி முடித்த மாணவர்களுக்கு மூன்று வருட llb சட்டக் கல்வி பெங்களூர் அல் அமீன் சட்ட கல்லூரியுடன் இணைந்து சட்டக் கல்வி வழங்கப்படும் இதற்கான கட்டணத்தில் 50 சதவீதம் இல்மி டிரஸ்ட் ஸ்காலர்ஷிப் வழங்கும்.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* Detailed Course Information & Objectives */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 7 Columns – Academic Curriculum & Objectives */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Introduction Card */}
              <div className="bg-white p-8 rounded-sm border border-[#E8DFC9] shadow-sm space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08A3C] block">
                  Course Introduction
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#29231B]">
                  Pioneering Dual Qualification for Upright Community Leadership
                </h2>
                <p className="text-sm sm:text-base text-[#51483C] leading-relaxed">
                  Jamia Darul Ilmi – Chennai presents a historic opportunity for educational empowerment and community service. Muslim students who have passed 12th grade can pursue Islamic scholarship (Alim course) alongside Law (LLB) at an affordable and subsidised fee.
                </p>
                <p className="text-sm sm:text-base text-[#51483C] leading-relaxed">
                  The programme is conducted in prestigious collaboration with <strong>Al-Ameen Law College, Bangalore</strong>. The five-year programme aims to develop students who can serve the community as Islamic scholars and legal professionals simultaneously.
                </p>
              </div>

              {/* Programme Objectives */}
              <div className="bg-white p-8 rounded-sm border border-[#E8DFC9] shadow-sm space-y-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08A3C] block">
                  Programme Objectives
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#29231B]">
                  What the 5-Year Integrated Curriculum Produces
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-[#51483C]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#48634A] shrink-0 mt-0.5" />
                    <span>Graduation as both a qualified Alim and a registered Law advocate simultaneously.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#48634A] shrink-0 mt-0.5" />
                    <span>Dual mastery of sacred Islamic jurisprudence (Fiqh) and constitutional civil and criminal statutory law.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#48634A] shrink-0 mt-0.5" />
                    <span>Equipping students to serve as upright community advocates, public interest litigators, legal counselors, and prospective judges.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#48634A] shrink-0 mt-0.5" />
                    <span>Character-driven mentorship rooted in honesty, public service, and spiritual dignity.</span>
                  </div>
                </div>
              </div>

              {/* Eligibility & Course Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-sm border border-[#E8DFC9] shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-[#F7F3EA] border border-[#B08A3C]/30 flex items-center justify-center text-[#B08A3C]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#29231B]">
                    Student Eligibility
                  </h4>
                  <p className="text-xs sm:text-sm text-[#51483C] leading-relaxed">
                    Muslim students who have passed 12th grade (Higher Secondary). Passion for Islamic studies, ethical commitment, and dedication to the legal profession.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-sm border border-[#E8DFC9] shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-[#F7F3EA] border border-[#B08A3C]/30 flex items-center justify-center text-[#B08A3C]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#29231B]">
                    Course Duration
                  </h4>
                  <p className="text-xs sm:text-sm text-[#51483C] leading-relaxed">
                    5-Year Full-Time Integrated Curriculum combining classical Dars-e-Nizami Islamic studies with the Bar Council-accredited LLB curriculum.
                  </p>
                </div>
              </div>

              {/* Fee Support & Financial Sponsorship Information */}
              <div className="bg-[#1F1A14] text-[#F7F3EA] p-8 rounded-sm border border-[#B08A3C]/40 shadow-md space-y-4">
                <div className="flex items-center gap-2.5 text-[#D8C18A] text-xs font-semibold uppercase tracking-widest">
                  <Award className="w-4 h-4 text-[#B08A3C]" />
                  <span>Financial Sponsorship & Fee Support</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F7F3EA]">
                  Approx. ₹3,00,000 / Year Academic Support for Eligible Candidates
                </h3>
                <p className="text-sm text-[#F7F3EA]/85 leading-relaxed font-sans">
                  For eligible students, academic expenses worth approximately ₹3,00,000 per year are supported through the ILMI Trust Educational Sponsorship fund. This enables talented, deserving students to achieve higher education and legal standing regardless of their economic background.
                </p>
                
                {/* Historical Clarification Notice */}
                <div className="pt-2 border-t border-white/10 text-xs text-[#D8C18A]/80 flex items-start gap-2">
                  <Calendar className="w-4 h-4 shrink-0 text-[#B08A3C] mt-0.5" />
                  <span>
                    Note: The historical initial batch registration deadline was 25.06.2025. Contact our admissions desk to enquire about active cycle availability and intake requirements.
                  </span>
                </div>
              </div>

            </div>

            {/* Right 5 Columns – Admission Enquiry Form */}
            <div ref={formSectionRef} className="lg:col-span-5 sticky top-28 space-y-6">
              <AdmissionEnquiryForm initialCourse="Alim & Law Dual Course (5 Years)" />

              {/* Direct Secretariat Contact Card */}
              <div className="bg-white p-6 rounded-sm border border-[#E8DFC9] shadow-xs space-y-3 text-xs sm:text-sm text-[#51483C]">
                <span className="font-serif font-bold text-[#29231B] block text-base">
                  Admissions Helpline & Secretariat
                </span>
                <p className="leading-relaxed">
                  Have questions about syllabus, hostel arrangement, legal college affiliation, or eligibility? Contact the Trust admission desk:
                </p>
                <div className="space-y-1.5 pt-1 font-mono text-[#29231B]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B08A3C]" />
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#B08A3C] transition-colors font-bold">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B08A3C]" />
                    <a href="tel:+918072720009" className="hover:text-[#B08A3C] transition-colors font-bold">
                      +91 80727 20009
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
