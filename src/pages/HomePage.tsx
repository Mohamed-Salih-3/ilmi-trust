import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  Coins, 
  HeartHandshake, 
  Stethoscope, 
  Award, 
  ArrowRight, 
  Heart, 
  Calendar, 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  ShieldCheck,
  Building2,
  Users,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Youtube,
  Twitter,
  MessageCircle,
  Scale,
  Phone
} from 'lucide-react';
import { PageId, AnnouncementItem } from '../types';
import { CinematicSlider } from '../components/CinematicSlider';
import { 
  HERO_DATA, 
  HADITH_DATA, 
  STATS_DATA, 
  INITIATIVES_DATA, 
  ANNOUNCEMENTS_DATA,
  CONTACT_INFO
} from '../data/trustData';
import JamiaDarulIlmi from '../components/JamiaDarulIlmi';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDonate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(ANNOUNCEMENTS_DATA);
  const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterLoading(true);
    // Real integration hook
    setTimeout(() => {
      setNewsletterLoading(false);
      setNewsletterSuccess(true);
    }, 600);
  };

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;
    const newItem: AnnouncementItem = {
      id: `ann-${Date.now()}`,
      title: newTitle,
      date: newDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: 'General Update',
      summary: newContent.slice(0, 90) + '...',
      content: newContent,
      isHistorical: false
    };
    setAnnouncements([newItem, ...announcements]);
    setNewTitle('');
    setNewDate('');
    setNewContent('');
    setShowAddAnnouncement(false);
  };

  // Hero Carousel State (Exactly 3 Slides)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const heroSlides = [
    {
      id: 1,
      kicker: "JAMIA DARUL ILMI · CHENNAI",
      heading: "Knowledge That Transforms. Faith That Inspires.",
      headingWords: ["Knowledge", "That", "Transforms.", "Faith", "That", "Inspires."],
      subtitle: "Building a Strong Foundation in Deen and Education.",
      description: "Nurturing future generations through authentic Islamic teachings, academic excellence, strong moral values and community responsibility.",
      image: HERO_DATA.studyImage,
      btn1: {
        label: "EXPLORE OUR MISSION",
        action: () => onNavigate('about'),
        isPrimary: false,
        isDonate: false
      },
      btn2: {
        label: "SUPPORT OUR MISSION",
        action: () => onOpenDonate('jamia-construction'),
        isPrimary: true,
        isDonate: true
      }
    },
    {
      id: 2,
      kicker: "EDUCATION · EMPOWERMENT · SERVICE",
      heading: "Empowering Communities Through Education.",
      headingWords: ["Empowering", "Communities", "Through", "Education."],
      subtitle: "Creating Opportunities for a Brighter Future.",
      description: "Supporting underprivileged students through civil service coaching, educational scholarships and initiatives that strengthen our community.",
      image: HERO_DATA.iasImage,
      btn1: {
        label: "EXPLORE OUR INITIATIVES",
        action: () => onNavigate('initiatives'),
        isPrimary: true,
        isDonate: false
      },
      btn2: {
        label: "LEARN MORE",
        action: () => onNavigate('about'),
        isPrimary: false,
        isDonate: false
      }
    },
    {
      id: 3,
      kicker: "OUR VISION · OUR FUTURE",
      heading: "Building a Legacy for Generations to Come.",
      headingWords: ["Building", "a", "Legacy", "for", "Generations", "to", "Come."],
      subtitle: "A Vision for Islamic Learning and Community Growth.",
      description: "Join us in establishing a centre for Islamic education, character building and spiritual development for future generations, InshaAllah.",
      image: HERO_DATA.heroImage,
      btn1: {
        label: "DISCOVER OUR PROJECT",
        action: () => onNavigate('initiatives'),
        isPrimary: false,
        isDonate: false
      },
      btn2: {
        label: "SUPPORT OUR MISSION",
        action: () => onOpenDonate('jamia-construction'),
        isPrimary: true,
        isDonate: true
      }
    },
  ];

  // Automatic transition every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    setTouchStartX(null);
  };

  // 6 Key initiatives for Home Page Section 4
  const homeKeyInitiatives = INITIATIVES_DATA.slice(0, 6);


  const getInitiativeIcon = (name: string) => {
    switch (name) {
      case 'Coins': return <Coins className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION - FULL-WIDTH COMPACT 3-SLIDE CAROUSEL
          ========================================================================= */}
      <section 
        className="relative w-full min-h-[500px] sm:min-h-[480px] sm:h-[480px] lg:h-[540px] bg-[#29231B] text-white overflow-hidden border-b-2 border-[#B08A3C]/40 select-none flex flex-col justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Stacking Order: Background Image Layer (z-0) with subtle zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>

              {/* Stacking Order: Dark Charcoal Gradient Overlay (z-10): stronger on left, lighter on right */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#29231B]/95 via-[#29231B]/85 to-[#29231B]/40 sm:to-[#29231B]/20" 
              />
              <div 
                className="absolute inset-0 z-10 pointer-events-none bg-black/25" 
              />

              {/* Stacking Order: Text Content Layer (z-20) - Guaranteed above image and overlay */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 flex flex-col justify-center text-left pointer-events-auto py-8 sm:py-0">
                <div 
                  key={`hero-text-slide-${slide.id}-${isActive ? currentSlide : 'off'}`}
                  className="max-w-[750px] space-y-2.5 sm:space-y-4"
                >
                  
                  {/* 1. Small Label: Champagne Gold, fade in with slight upward movement */}
                  <div className={isActive ? "hero-anim-kicker inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D8C18A] tracking-widest uppercase" : "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D8C18A] tracking-widest uppercase"}>
                    <span className="w-5 sm:w-6 h-px bg-[#B08A3C]" />
                    <span className="text-[11px] sm:text-xs">{slide.kicker}</span>
                  </div>

                  {/* 2. Main Heading: Large Playfair Display serif, pure white, word-by-word staggered reveal */}
                  <h1 
                    className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18] flex flex-wrap"
                    style={{ textWrap: 'balance' }}
                  >
                    {slide.headingWords.map((word, wIdx) => (
                      <span 
                        key={wIdx} 
                        className="inline-block overflow-hidden mr-[0.28em] last:mr-0"
                      >
                        <span 
                          className="inline-block"
                          style={{
                            animation: isActive ? 'heroWordReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                            animationDelay: `${0.12 + wIdx * 0.08}s`,
                            opacity: isActive ? 0 : 1,
                          }}
                        >
                          {word}
                        </span>
                      </span>
                    ))}
                  </h1>

                  {/* 3. Subtitle: Antique Gold / Champagne Gold, fade in and move upward */}
                  <p className={isActive ? "hero-anim-subtitle text-xs xs:text-sm sm:text-base lg:text-lg text-[#D8C18A] font-serif italic font-medium leading-snug" : "text-xs xs:text-sm sm:text-base lg:text-lg text-[#D8C18A] font-serif italic font-medium leading-snug"}>
                    {slide.subtitle}
                  </p>

                  {/* 4. Description: White, fade in smoothly */}
                  <p className={isActive ? "hero-anim-description text-xs xs:text-sm sm:text-base text-white/95 font-sans leading-relaxed max-w-xl" : "text-xs xs:text-sm sm:text-base text-white/95 font-sans leading-relaxed max-w-xl"}>
                    {slide.description}
                  </p>

                  {/* 5. Buttons: Sequential appearance with subtle upward movement */}
                  <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                    <div className={isActive ? "hero-anim-btn-1" : ""}>
                      <button
                        onClick={slide.btn1.action}
                        className={
                          slide.btn1.isPrimary
                            ? "btn-17 btn-17-primary !px-5 sm:!px-7 !py-2.5 sm:!py-3 text-[11px] sm:text-xs tracking-wider font-bold shadow-md"
                            : "btn-17 btn-17-secondary-dark !px-5 sm:!px-7 !py-2.5 sm:!py-3 text-[11px] sm:text-xs tracking-wider font-semibold shadow-md"
                        }
                      >
                        <span className="text-container">
                          <span className="text">
                            {slide.btn1.isDonate && <Heart className="w-3.5 h-3.5 fill-current" />}
                            <span>{slide.btn1.label}</span>
                          </span>
                        </span>
                      </button>
                    </div>

                    <div className={isActive ? "hero-anim-btn-2" : ""}>
                      <button
                        onClick={slide.btn2.action}
                        className={
                          slide.btn2.isPrimary
                            ? "btn-17 btn-17-primary !px-5 sm:!px-7 !py-2.5 sm:!py-3 text-[11px] sm:text-xs tracking-wider font-bold shadow-md"
                            : "btn-17 btn-17-secondary-dark !px-5 sm:!px-7 !py-2.5 sm:!py-3 text-[11px] sm:text-xs tracking-wider font-semibold shadow-md"
                        }
                      >
                        <span className="text-container">
                          <span className="text">
                            {slide.btn2.isDonate && <Heart className="w-3.5 h-3.5 fill-current" />}
                            <span>{slide.btn2.label}</span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          );
        })}

        {/* Previous Navigation Arrow */}
        <button
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
          className="absolute left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2.5 rounded-full bg-[#29231B]/75 hover:bg-[#29231B] text-white hover:text-[#D8C18A] border border-[#B08A3C]/40 backdrop-blur-xs transition-all shadow-md focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          onClick={handleNextSlide}
          aria-label="Next Slide"
          className="absolute right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2.5 rounded-full bg-[#29231B]/75 hover:bg-[#29231B] text-white hover:text-[#D8C18A] border border-[#B08A3C]/40 backdrop-blur-xs transition-all shadow-md focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Three Navigation Dots */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-[#29231B]/60 backdrop-blur-xs px-3 py-1.5 rounded-full border border-[#B08A3C]/30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-6 sm:w-7 h-2 bg-[#B08A3C]'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INTRODUCTION TO ILMI TRUST
          ========================================================================= */}
      <section className="py-20 bg-[#F7F3EA] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B08A3C]">
              <span>Rooted in Islamic Service</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29231B]">
              An Institution Built on Knowledge, Faith and Service
            </h2>
            <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto" />
            <p className="text-base text-[#51483C] leading-relaxed pt-2">
              ILMI Trust (Islamic Literacy Movement of India) is a charitable trust committed to authentic Islamic education, social welfare, community development, and academic empowerment across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 – 1997: Warm Gold Gradient (#FFF0D2 -> #E8C987 -> #C99B52) */}
            <div 
              style={{ background: 'linear-gradient(135deg, #FFF0D2 0%, #E8C987 50%, #C99B52 100%)' }}
              className="p-6 rounded-sm border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span className="text-xs font-bold text-[#51483C] block mb-2 font-mono tracking-wider">1997</span>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">Azhagiya Kadan Trust</h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Established by Maulana Shamsudeen Qasimi to introduce community welfare, educational empowerment and humanitarian assistance.
              </p>
            </div>

            {/* Card 2 – 2012: Ocean Blue Gradient (#DCEFF2 -> #A7D0D5 -> #6FA6B0) */}
            <div 
              style={{ background: 'linear-gradient(135deg, #DCEFF2 0%, #A7D0D5 50%, #6FA6B0 100%)' }}
              className="p-6 rounded-sm border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span className="text-xs font-bold text-[#51483C] block mb-2 font-mono tracking-wider">2012</span>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">Azhagiya Kadan IAS Academy</h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Launched to empower Muslim youth in civil services, producing successful UPSC and state TNPSC officers.
              </p>
            </div>

            {/* Card 3 – 2014: Royal Mauve Gradient (#F2E1EC -> #D8B5CB -> #B58AAE) */}
            <div 
              style={{ background: 'linear-gradient(135deg, #F2E1EC 0%, #D8B5CB 50%, #B58AAE 100%)' }}
              className="p-6 rounded-sm border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span className="text-xs font-bold text-[#51483C] block mb-2 font-mono tracking-wider">2014</span>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">Renamed ILMI Trust</h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Renamed by the respected Imam of Baitul Muqaddas, Sheikh Ali Al-Abbas, to expand nationwide educational literacy.
              </p>
            </div>

            {/* Card 4 – Ongoing: Emerald Sage Gradient (#E7EFDD -> #B9CDA6 -> #829D79) */}
            <div 
              style={{ background: 'linear-gradient(135deg, #E7EFDD 0%, #B9CDA6 50%, #829D79 100%)' }}
              className="p-6 rounded-sm border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span className="text-xs font-bold text-[#51483C] block mb-2 font-mono tracking-wider">ONGOING</span>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">Jamia Darul Ilmi</h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Building a landmark Madarasa and dual Alim & Law university campus to groom principled future community scholars.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('about')}
              className="btn-17 btn-17-secondary text-xs tracking-wider font-semibold !py-2.5 !px-6"
            >
              <span className="text-container">
                <span className="text">
                  <span>Discover Our History</span>
                  <ArrowRight className="w-4 h-4 text-[#B08A3C]" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR VISION
          ========================================================================= */}
      <section className="relative py-16 bg-[#29231B] text-[#F7F3EA] border-y border-[#B08A3C]/30 overflow-hidden">
        {/* Full-width Islamic Architectural Background Image with subtle scroll zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="/src/assets/images/vision_islamic_campus_1794207125383.jpg"
            alt="Jamia Darul Ilmi Campus Islamic Architecture"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.0 }}
            whileInView={{ scale: 1.08 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            loading="lazy"
          />
        </div>

        {/* Strong Dark Brown Overlay (rgba(41, 35, 27, 0.82)) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(rgba(41, 35, 27, 0.82), rgba(41, 35, 27, 0.82))'
          }}
        />

        {/* Vision Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#B08A3C]/10 border border-[#B08A3C]/30 text-[#D8C18A] mb-2 shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            To Build a Strong Foundation in Deen & Education
          </h2>
          <div className="w-12 h-0.5 bg-[#B08A3C] mx-auto my-3" />
          <p className="text-base sm:text-lg text-[#F7F3EA] font-sans leading-relaxed max-w-3xl mx-auto font-normal">
            "Our vision is to develop an educated, ethical and empowered community through authentic Islamic knowledge, academic excellence, charitable service and social responsibility."
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR KEY INITIATIVES
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A3C]">
                Institutional Programs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29231B] mt-1">
                Our Key Initiatives
              </h2>
            </div>
            <button
              onClick={() => onNavigate('initiatives')}
              className="btn-17 btn-17-secondary text-xs tracking-wider !py-2 !px-4"
            >
              <span className="text-container">
                <span className="text">
                  <span>View All Initiatives</span>
                  <ArrowRight className="w-4 h-4 text-[#B08A3C]" />
                </span>
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeKeyInitiatives.map((item) => (
              <div
                key={item.id}
                className="initiative-card-wrapper group rounded-sm"
              >
                <div className="initiative-card-content p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-sm bg-white border border-[#B08A3C]/30 flex items-center justify-center text-[#B08A3C] group-hover:bg-[#B08A3C] group-hover:text-white transition-colors">
                        {getInitiativeIcon(item.iconName)}
                      </div>
                      <span className="text-xs font-medium text-[#51483C]/70">
                        0{item.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#29231B] mb-2.5 group-hover:text-[#B08A3C] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#51483C] leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-300/60 flex items-center justify-between gap-2 flex-wrap xs:flex-nowrap">
                    <button
                      onClick={() => onNavigate('initiatives')}
                      className="btn-17 btn-17-secondary text-[11px] tracking-wider !py-1.5 !px-3 sm:!px-3.5"
                    >
                      <span className="text-container">
                        <span className="text">
                          <span>Learn More</span>
                          <ArrowRight className="w-3 h-3 text-[#B08A3C]" />
                        </span>
                      </span>
                    </button>
                    <button
                      onClick={() => onOpenDonate(item.id)}
                      className="btn-17 btn-17-primary text-[11px] tracking-wider !py-1.5 !px-3.5 sm:!px-4"
                    >
                      <span className="text-container">
                        <span className="text">
                          <span>Support</span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR IMPACT (STATISTICS WITH ANIMATED COUNTERS)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#29231B] text-[#F7F3EA] border-y border-[#B08A3C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D8C18A]">
              Verified Institutional Reporting
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EA] mt-1">
              Our Community Impact
            </h2>
            <p className="text-xs text-[#F7F3EA]/70 mt-2">
              Official metrics recorded and published by the ILMI Trust administrative archives.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 text-center">
            {STATS_DATA.map((stat, sIdx) => (
              <div 
                key={stat.id}
                className={`bg-[#1F1A14] border border-[#B08A3C]/20 p-4 sm:p-6 rounded-sm hover:border-[#B08A3C]/60 transition-colors ${
                  sIdx === 4 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#D8C18A] tabular-nums mb-1 sm:mb-2">
                  <span>{stat.prefix}</span>
                  <span>{stat.value.toLocaleString()}</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F7F3EA]/85 font-medium leading-snug">
                  {stat.label}
                </p>
                <span className="block text-[9.5px] sm:text-[10px] text-[#D8C18A]/60 mt-1.5 sm:mt-2 italic">
                  {stat.sourceNote}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CINEMATIC INITIATIVES & IMPACT SLIDER
          ========================================================================= */}
      <CinematicSlider onNavigate={onNavigate} onOpenDonate={onOpenDonate} />

      {/* =========================================================================
          SECTION 7: MADARSA DARUL ILMI – INSTITUTIONAL INTRODUCTION & VISION
          ========================================================================= */}
      <section id="madarsa-darul-ilmi" className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block">
              Sacred Learning · Character Building
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#29231B] leading-tight">
              Madarsa Darul Ilmi
            </h2>
            <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto" />
            <p className="text-base text-[#51483C] leading-relaxed pt-1">
              Established under the patronage of ILMI Trust, Madarsa Darul Ilmi is dedicated to nurturing righteous scholars, Quran memorizers, and compassionate community servants grounded in authentic Islamic scholarship and high moral character.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Visual Campus Showcase (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-sm overflow-hidden border-2 border-[#B08A3C]/30 shadow-xl bg-[#F7F3EA] group">
                <img
                  src={HERO_DATA.studyImage}
                  alt="Students and Scholars at Madarsa Darul Ilmi"
                  referrerPolicy="no-referrer"
                  className="w-full h-[260px] xs:h-[320px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29231B]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-[#29231B]/70 backdrop-blur-xs rounded-sm border border-white/20">
                  <div className="flex items-center justify-between text-xs font-serif">
                    <span className="font-bold text-[#D8C18A]">Madarsa Darul Ilmi</span>
                    <span className="text-white/80">Chennai Campus Project</span>
                  </div>
                </div>
              </div>

              {/* Quick Vision Quote Callout */}
              <div className="p-5 bg-[#F7F3EA] border-l-3 border-[#B08A3C] rounded-r-sm text-xs sm:text-sm text-[#51483C] leading-relaxed italic font-serif">
                "Our vision is to build an enduring centre where authentic sacred knowledge inspires moral excellence, self-reliance, and active service to society."
              </div>
            </div>

            {/* Core Educational Pillars (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A3C] block mb-1">
                  Our Educational Foundation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#29231B]">
                  Pillars of Islamic Learning & Character Formation
                </h3>
              </div>

              {/* 6 Structured Educational Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* 1. Islamic Educational Vision */}
                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-colors">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1.5">
                    <BookOpen className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Islamic Educational Vision</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    Nurturing principled scholars who integrate sacred tradition with deep moral responsibility and constructive service to the Ummah.
                  </p>
                </div>

                {/* 2. Quran & Tajweed Education */}
                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-colors">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Quran & Tajweed Education</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    Systematic memorization (Hifz) and precise phonetic recitation (Tajweed) transmitted with authentic oral chains of authority (Sanad).
                  </p>
                </div>

                {/* 3. Hadith & Fiqh Studies */}
                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-colors">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1.5">
                    <Scale className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Hadith & Fiqh Studies</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    In-depth textual study of classical Hadith compilations and Islamic jurisprudence (Fiqh) applied with wisdom to contemporary life.
                  </p>
                </div>

                {/* 4. Arabic Language Education */}
                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-colors">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1.5">
                    <GraduationCap className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Arabic Language Education</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    Rigorous mastery of classical Arabic grammar (Nahw), morphology (Sarf), literature, and communicative fluency to directly unlock sacred texts.
                  </p>
                </div>

                {/* 5. Character Development */}
                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-colors">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Character Development (Tarbiyah)</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    Spiritual purification (Tazkiyah), modesty, truthfulness, and ethical discipline forming the moral bedrock of every student.
                  </p>
                </div>

                {/* 6. Student Education & Community Service */}
                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-colors">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1.5">
                    <Users className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Education & Community Service</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    Grooming upright leaders who serve their neighbourhoods as scholars, advocates, counselors, and compassionate community pillars.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('alim-law-admission')}
                  className="btn-17 btn-17-primary text-xs tracking-wider !py-3 !px-6 shadow-sm"
                >
                  <span className="text-container">
                    <span className="text">
                      <GraduationCap className="w-4 h-4 shrink-0" />
                      <span>Alim & Law Dual Course</span>
                    </span>
                  </span>
                </button>

                <button
                  onClick={() => onOpenDonate('jamia-construction')}
                  className="btn-17 btn-17-secondary text-xs tracking-wider !py-3 !px-6"
                >
                  <span className="text-container">
                    <span className="text">
                      <Heart className="w-4 h-4 text-[#B08A3C]" />
                      <span>Support Madarsa Darul Ilmi</span>
                    </span>
                  </span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

        {/* =========================================================================
          NEWLY ADDED SECTION : JamiaDarulIlmi
          ========================================================================= */}

      <section>
        <JamiaDarulIlmi />
      </section>

      {/* =========================================================================
          SECTION :8 HADITH OF THE PROPHET MUHAMMAD (PBUH)
          ========================================================================= */}
      <section className="py-20 bg-[#29231B] text-[#F7F3EA] relative overflow-hidden">
        {/* Subtle decorative gold line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#B08A3C]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#1F1A14] border border-[#B08A3C] flex items-center justify-center text-[#D8C18A]">
            <Quote className="w-6 h-6 fill-[#D8C18A]/20" />
          </div>

          {/* Arabic Hadith */}
          <p className="font-arabic text-xl sm:text-2xl text-[#D8C18A] leading-loose max-w-2xl mx-auto" dir="rtl">
            {HADITH_DATA.arabicQuote}
          </p>

          {/* English Hadith Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-[#F7F3EA] leading-relaxed italic max-w-3xl mx-auto">
            "{HADITH_DATA.quote}"
          </blockquote>

          {/* Reference Citation */}
          <div className="pt-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A3C] block">
              — {HADITH_DATA.reference}
            </span>
            <span className="text-xs text-[#F7F3EA]/60 mt-1 block">
              Teaching dignity, self-sufficiency, and honor in honest labor.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: AZHAGIYA KADAN IAS ACADEMY – ACHIEVEMENTS & SUCCESS
          ========================================================================= */}
      <section id="ias-success" className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Classroom Image & Badge (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-sm overflow-hidden border-2 border-[#B08A3C]/30 shadow-xl bg-[#F7F3EA] group">
                <img
                  src="/src/assets/images/ias_academy_classroom_1793880040971.jpg"
                  alt="Azhagiya Kadan IAS Academy Classroom"
                  referrerPolicy="no-referrer"
                  className="w-full h-[260px] xs:h-[320px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29231B]/85 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 bg-[#B08A3C] text-[#29231B] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm shadow-md">
                  Est. 2012 · Civil Services
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 bg-[#29231B]/80 backdrop-blur-xs rounded-sm border border-white/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-bold text-[#D8C18A]">Chennai & Delhi Centres</span>
                    <span className="text-white/80 font-mono">50 Active Aspirants</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Highlights & Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block mb-1">
                  Azhagiya Kadan IAS Academy
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#29231B] leading-tight">
                  Success Through Knowledge, Guidance & Determination.
                </h2>
                <div className="w-16 h-0.5 bg-[#B08A3C] mt-3 mb-4" />
                <p className="text-base text-[#51483C] leading-relaxed">
                  Established in 2012 to empower Muslim youth in civil services, Azhagiya Kadan IAS Academy provides coaching, guidance and mentorship to aspiring candidates pursuing UPSC, TNPSC and central competitive examinations.
                </p>
              </div>

              {/* 4 Verified Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                
                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-all">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1">
                    <Award className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Inaugural Batch</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    First batch started with <strong>28 students</strong> in Chennai receiving intensive civil services coaching.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-all">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#48634A] shrink-0" />
                    <span>UPSC Success</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    <strong>One student cleared UPSC</strong>, setting an inspiring benchmark for subsequent academy batches.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-all">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1">
                    <Sparkles className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>State & Central Officers</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    Several students succeeded in <strong>TNPSC, SSC and Group IV</strong> examinations across Tamil Nadu.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] transition-all">
                  <div className="flex items-center gap-2.5 text-[#29231B] font-serif font-bold text-sm mb-1">
                    <GraduationCap className="w-4 h-4 text-[#B08A3C] shrink-0" />
                    <span>Current Enrolment</span>
                  </div>
                  <p className="text-xs text-[#51483C] leading-relaxed">
                    Currently <strong>50 students are enrolled</strong> across Chennai and Delhi centres receiving full guidance.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('initiatives')}
                  className="btn-17 btn-17-primary text-xs tracking-wider !py-3 !px-6 shadow-sm"
                >
                  <span className="text-container">
                    <span className="text">
                      <span>Explore Academy Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </span>
                </button>
                <button
                  onClick={() => onOpenDonate('ias-academy')}
                  className="btn-17 btn-17-secondary text-xs tracking-wider !py-3 !px-6"
                >
                  <span className="text-container">
                    <span className="text">
                      <Heart className="w-4 h-4 text-[#B08A3C]" />
                      <span>Sponsor an IAS Aspirant</span>
                    </span>
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: MADRASA MUTTUKADU – INSTITUTION INTRODUCTION & ACTIVITIES
          ========================================================================= */}
      <section id="madrasa-muttukadu" className="py-20 bg-[#F7F3EA] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block mb-1">
                  Community Learning Centre
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29231B] leading-tight">
                  Madrasa Muttukadu
                </h2>
                <div className="w-16 h-0.5 bg-[#B08A3C] mt-2 mb-4" />
                <p className="text-base text-[#51483C] leading-relaxed">
                  Madrasa Muttukadu is a dedicated Islamic learning initiative established under the educational aegis of ILMI Trust, dedicated to nurturing young minds with authentic Islamic education, Quranic literacy, and strong ethical character.
                </p>
              </div>

              {/* 3 Core Institutional Pillars */}
              <div className="space-y-4 pt-1">
                
                <div className="p-4 bg-white border border-[#E8DFC9] rounded-sm shadow-xs flex items-start gap-3.5">
                  <BookOpen className="w-5 h-5 text-[#B08A3C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#29231B]">Educational Mission</h4>
                    <p className="text-xs text-[#51483C] mt-1 leading-relaxed">
                      Imparting foundational Islamic literacy, Quranic reading with Tajweed, and character-building education to young students from diverse community backgrounds.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#E8DFC9] rounded-sm shadow-xs flex items-start gap-3.5">
                  <Sparkles className="w-5 h-5 text-[#B08A3C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#29231B]">Islamic Learning Activities</h4>
                    <p className="text-xs text-[#51483C] mt-1 leading-relaxed">
                      Structured daily Quran memorization and recitation, essential daily Islamic rulings (Fiqh), authentic Duas, Sunnah manners, and moral instruction.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#E8DFC9] rounded-sm shadow-xs flex items-start gap-3.5">
                  <Users className="w-5 h-5 text-[#B08A3C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#29231B]">Community Development Objectives</h4>
                    <p className="text-xs text-[#51483C] mt-1 leading-relaxed">
                      Serving as an educational and spiritual anchor that strengthens families, preserves traditional Islamic values, and uplifts local community welfare.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-17 btn-17-secondary text-xs tracking-wider !py-3 !px-6"
                >
                  <span className="text-container">
                    <span className="text">
                      <span>Contact Madrasa Desk</span>
                      <ArrowRight className="w-4 h-4 text-[#B08A3C]" />
                    </span>
                  </span>
                </button>
              </div>

            </div>

            {/* Right Visual Image (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border-2 border-[#B08A3C]/30 shadow-xl bg-white group">
                <img
                  src="/src/assets/images/vision_islamic_campus_1794207125383.jpg"
                  alt="Madrasa Muttukadu Islamic Learning Campus"
                  referrerPolicy="no-referrer"
                  className="w-full h-[260px] xs:h-[320px] sm:h-[400px] object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="p-4 bg-white border-t border-stone-200">
                  <div className="flex items-center justify-between text-xs text-[#51483C]">
                    <span className="font-semibold text-[#29231B]">Madrasa Muttukadu</span>
                    <span>ILMI Trust Educational Initiative</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FAMILY COUNSELLING & GUIDANCE
          ========================================================================= */}
      <section id="family-counselling" className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block">
              Compassionate Social Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#29231B]">
              Family Counselling & Guidance
            </h2>
            <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto" />
            <p className="text-base text-[#51483C] leading-relaxed pt-1">
              ILMI Trust aims to support individuals and families through guidance, counselling and constructive solutions to family-related challenges.
            </p>
          </div>

          {/* 4 Pillars of Family Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="p-6 bg-[#F7F3EA] rounded-sm border border-[#E8DFC9] hover:border-[#B08A3C] transition-all">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#B08A3C]/40 flex items-center justify-center text-[#B08A3C] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">
                Family Guidance
              </h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Nurturing harmonious, patient, and loving family relationships rooted in Islamic ethics and prophetic compassion.
              </p>
            </div>

            <div className="p-6 bg-[#F7F3EA] rounded-sm border border-[#E8DFC9] hover:border-[#B08A3C] transition-all">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#B08A3C]/40 flex items-center justify-center text-[#B08A3C] mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">
                Marriage Counselling
              </h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Pre-marital advice, relationship communication, fostering mutual understanding, and restoring peace within marriages.
              </p>
            </div>

            <div className="p-6 bg-[#F7F3EA] rounded-sm border border-[#E8DFC9] hover:border-[#B08A3C] transition-all">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#B08A3C]/40 flex items-center justify-center text-[#B08A3C] mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">
                Family Dispute Guidance
              </h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Confidential mediation and constructive, fair reconciliation for resolving intra-family disputes with dignity and equity.
              </p>
            </div>

            <div className="p-6 bg-[#F7F3EA] rounded-sm border border-[#E8DFC9] hover:border-[#B08A3C] transition-all">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#B08A3C]/40 flex items-center justify-center text-[#B08A3C] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#29231B] mb-2">
                Personal & Social Guidance
              </h3>
              <p className="text-xs text-[#51483C] leading-relaxed">
                Empathetic mentorship and moral support for individuals confronting grief, personal stress, and social challenges.
              </p>
            </div>

          </div>

          {/* Contact for Guidance CTA Block */}
          <div className="max-w-3xl mx-auto p-6 bg-[#F7F3EA] border border-[#B08A3C]/40 rounded-sm text-center space-y-4">
            <h4 className="font-serif text-xl font-bold text-[#29231B]">
              Need Confidential Guidance or Family Support?
            </h4>
            <p className="text-xs sm:text-sm text-[#51483C] max-w-xl mx-auto leading-relaxed">
              Reach out to our secretariat for private, confidential consultations with trusted scholars and experienced community mentors.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-17 btn-17-primary text-xs tracking-wider !py-3 !px-8 shadow-md"
              >
                <span className="text-container">
                  <span className="text">
                    <HeartHandshake className="w-4 h-4 shrink-0" />
                    <span>Contact for Guidance</span>
                  </span>
                </span>
              </button>
            </div>
            <p className="text-[11px] text-stone-500 italic pt-1">
              Note: Faith-based guidance provides community mentorship; it does not constitute clinical medical or legal court representation.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 12: SEASONAL ACTIVITIES & PROGRAMMES
          ========================================================================= */}
      <section id="seasonal-activities" className="py-20 lg:py-24 bg-[#1F1A14] text-[#F7F3EA] border-b border-[#B08A3C]/30 relative overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C18A] block">
              Annual Calendar of Khidmah
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EA] leading-tight">
              Seasonal Activities & Programmes
            </h2>
            <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto" />
            <p className="text-base text-[#F7F3EA]/85 leading-relaxed pt-1 font-sans">
              Discover the seasonal programmes, educational activities, community initiatives and special events organised by ILMI Trust.
            </p>
          </div>

          {/* 5 Flexible Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* 1. Ramadan Activities */}
            <div className="bg-[#29231B] border border-[#B08A3C]/30 p-6 rounded-sm hover:border-[#B08A3C] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#D8C18A] font-mono mb-3">
                  <span className="uppercase tracking-wider">Mubarak Ramadan</span>
                  <Sparkles className="w-4 h-4 text-[#B08A3C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EA] mb-2.5">
                  Ramadan Activities & Relief
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F3EA]/75 leading-relaxed">
                  Daily community Iftar distributions, Ramadan food basket allocations for underprivileged families, and coordinated Zakat distribution to verified beneficiaries.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-[#D8C18A]/70 italic">
                Food Kits · Iftar Packets · Zakat Aid
              </div>
            </div>

            {/* 2. Islamic Educational Programmes */}
            <div className="bg-[#29231B] border border-[#B08A3C]/30 p-6 rounded-sm hover:border-[#B08A3C] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#D8C18A] font-mono mb-3">
                  <span className="uppercase tracking-wider">Educational</span>
                  <BookOpen className="w-4 h-4 text-[#B08A3C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EA] mb-2.5">
                  Islamic Educational Programmes
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F3EA]/75 leading-relaxed">
                  Intensive summer Deeniyat courses for school-going youth, Tajweed phonetics workshops, adult Islamic literacy, and classical Hadith explanation circles.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-[#D8C18A]/70 italic">
                Summer Camps · Tajweed · Dars-e-Quran
              </div>
            </div>

            {/* 3. Student Activities */}
            <div className="bg-[#29231B] border border-[#B08A3C]/30 p-6 rounded-sm hover:border-[#B08A3C] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#D8C18A] font-mono mb-3">
                  <span className="uppercase tracking-wider">Youth & Scholars</span>
                  <GraduationCap className="w-4 h-4 text-[#B08A3C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EA] mb-2.5">
                  Student Activities & Mentorship
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F3EA]/75 leading-relaxed">
                  Civil service orientation workshops, scholarship distribution ceremonies, student career counselling, and motivational seminars by visiting civil servants.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-[#D8C18A]/70 italic">
                Scholarships · Mentorship · IAS Seminars
              </div>
            </div>

            {/* 4. Community Welfare Programmes */}
            <div className="bg-[#29231B] border border-[#B08A3C]/30 p-6 rounded-sm hover:border-[#B08A3C] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#D8C18A] font-mono mb-3">
                  <span className="uppercase tracking-wider">Humanitarian</span>
                  <HeartHandshake className="w-4 h-4 text-[#B08A3C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EA] mb-2.5">
                  Community Welfare Programmes
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F3EA]/75 leading-relaxed">
                  Free medical checkup camps, diagnostic outreaches, winter blanket drives, and emergency assistance for vulnerable families in distressed circumstances.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 text-[11px] text-[#D8C18A]/70 italic">
                Free Health Camps · Relief Grants
              </div>
            </div>

            {/* 5. Special Events & Announcements */}
            <div className="bg-[#29231B] border border-[#B08A3C]/30 p-6 rounded-sm hover:border-[#B08A3C] transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between text-xs text-[#D8C18A] font-mono mb-3">
                  <span className="uppercase tracking-wider">Conferences & Duas</span>
                  <Calendar className="w-4 h-4 text-[#B08A3C]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F7F3EA] mb-2.5">
                  Special Events & Announcements
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F3EA]/75 leading-relaxed max-w-xl">
                  Periodic institutional gatherings, landmark foundation milestones, convocations, and guest lectures by visiting Ulama and Islamic scholars from across India and abroad.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#D8C18A]/70 italic">
                  Conferences · Milestone Updates · Spiritual Duas
                </span>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-xs text-[#D8C18A] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>View Archival Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B08A3C]" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 13: PROJECT UPDATES (TIMELINE & EXPANDABLE ANNOUNCEMENTS)
          ========================================================================= */}
      <section className="py-20 bg-[#F7F3EA] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B08A3C]">
                Official Progress Log
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#29231B] mt-1">
                Project Announcements & Updates
              </h2>
            </div>

            {/* Administrator Add Announcement Toggle */}
            <button
              onClick={() => setShowAddAnnouncement(!showAddAnnouncement)}
              className="px-4 py-2 bg-white hover:bg-stone-50 border border-stone-300 text-[#29231B] text-xs font-semibold rounded-sm transition-colors"
            >
              {showAddAnnouncement ? 'Close Form' : '+ Add Announcement (Admin)'}
            </button>
          </div>

          {/* Admin Add Form */}
          {showAddAnnouncement && (
            <div className="mb-10 bg-white p-6 rounded-sm border border-[#B08A3C]/40 shadow-sm max-w-2xl">
              <h3 className="font-serif text-base font-bold text-[#29231B] mb-4">
                Add New Project Announcement
              </h3>
              <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#51483C] mb-1">Announcement Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Groundwork and Soil Testing Completed"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#51483C] mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="e.g. July 14, 2025"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#51483C] mb-1">Content Details</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter full announcement details..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#48634A] text-white text-xs font-bold rounded-sm uppercase tracking-wide hover:bg-[#3d543f]"
                >
                  Publish Announcement
                </button>
              </form>
            </div>
          )}

          {/* Announcements Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {announcements.map((ann) => (
              <div 
                key={ann.id}
                className="bg-white border border-stone-200 p-7 rounded-sm shadow-xs hover:border-[#B08A3C] transition-all"
              >
                <div className="flex items-center justify-between text-xs text-[#51483C] mb-3">
                  <div className="flex items-center gap-1.5 font-medium text-[#48634A]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{ann.date}</span>
                  </div>
                  {ann.isHistorical && (
                    <span className="text-[11px] font-mono text-stone-400">Official Archive</span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#29231B] mb-2.5">
                  {ann.title}
                </h3>

                <p className="text-sm text-[#51483C] leading-relaxed mb-4">
                  {ann.content}
                </p>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[#B08A3C] font-semibold">{ann.category}</span>
                  <span className="text-stone-400">Jamia Darul Ilmi Secretariat</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 10: DONATION CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-[#29231B] text-[#F7F3EA] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D8C18A]">
            Continuous Charity · Sadaqah Jariyah
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EA] leading-tight">
            Be a Part of a Lasting Legacy
          </h2>

          <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto" />

          <p className="text-base sm:text-lg text-[#F7F3EA]/85 leading-relaxed max-w-2xl mx-auto font-sans">
            Your support can help us build educational opportunities, empower underprivileged communities and establish a lasting centre for Islamic learning.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDonate()}
              className="w-full sm:w-auto btn-17 btn-17-primary text-xs tracking-widest !py-4 !px-8 shadow-lg hover:shadow-xl"
            >
              <span className="text-container">
                <span className="text">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Support Our Mission</span>
                </span>
              </span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto btn-17 btn-17-secondary-dark text-xs tracking-widest !py-4 !px-8"
            >
              <span className="text-container">
                <span className="text">
                  <span>Contact Secretariat</span>
                </span>
              </span>
            </button>
          </div>

          <p className="text-xs text-[#F7F3EA]/50 italic pt-2">
            "When a human being dies, their deeds end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for them." (Sahih Muslim)
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: STAY CONNECTED WITH ILMI TRUST
          ========================================================================= */}
      <section id="stay-connected" className="py-20 bg-white border-t border-[#E8DFC9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-10">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block">
              Official Channels & Social Hub
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29231B]">
              Stay Connected With ILMI Trust
            </h2>
            <div className="w-16 h-0.5 bg-[#B08A3C] mx-auto" />
            <p className="text-sm sm:text-base text-[#51483C] leading-relaxed pt-1">
              Follow our journey, educational initiatives, community activities and important announcements.
            </p>
          </div>

          {/* Official Social Media Channels Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            
            {/* Facebook */}
            <a
              href={CONTACT_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow ILMI Trust on Facebook"
              className="group p-5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] hover:bg-[#29231B] hover:text-[#F7F3EA] transition-all duration-300 shadow-xs flex flex-col items-center gap-3 text-[#29231B]"
            >
              <div className="w-11 h-11 rounded-full bg-white group-hover:bg-[#B08A3C] border border-[#E8DFC9] flex items-center justify-center transition-colors shadow-xs">
                <Facebook className="w-5 h-5 text-[#29231B] group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="font-serif font-bold text-sm block">Facebook</span>
                <span className="text-[11px] text-[#51483C] group-hover:text-[#D8C18A] transition-colors font-mono">
                  @ilmitrust
                </span>
              </div>
            </a>

            {/* YouTube */}
            <a
              href={CONTACT_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to ILMI Trust on YouTube"
              className="group p-5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] hover:bg-[#29231B] hover:text-[#F7F3EA] transition-all duration-300 shadow-xs flex flex-col items-center gap-3 text-[#29231B]"
            >
              <div className="w-11 h-11 rounded-full bg-white group-hover:bg-[#B08A3C] border border-[#E8DFC9] flex items-center justify-center transition-colors shadow-xs">
                <Youtube className="w-5 h-5 text-[#29231B] group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="font-serif font-bold text-sm block">YouTube</span>
                <span className="text-[11px] text-[#51483C] group-hover:text-[#D8C18A] transition-colors font-mono">
                  @ilmitrust
                </span>
              </div>
            </a>

            {/* Twitter / X */}
            <a
              href={CONTACT_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow ILMI Trust on Twitter / X"
              className="group p-5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] hover:bg-[#29231B] hover:text-[#F7F3EA] transition-all duration-300 shadow-xs flex flex-col items-center gap-3 text-[#29231B]"
            >
              <div className="w-11 h-11 rounded-full bg-white group-hover:bg-[#B08A3C] border border-[#E8DFC9] flex items-center justify-center transition-colors shadow-xs">
                <Twitter className="w-5 h-5 text-[#29231B] group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="font-serif font-bold text-sm block">Twitter / X</span>
                <span className="text-[11px] text-[#51483C] group-hover:text-[#D8C18A] transition-colors font-mono">
                  @ilmitrust
                </span>
              </div>
            </a>

            {/* WhatsApp Secretariat */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with ILMI Trust on WhatsApp"
              className="group p-5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm hover:border-[#B08A3C] hover:bg-[#29231B] hover:text-[#F7F3EA] transition-all duration-300 shadow-xs flex flex-col items-center gap-3 text-[#29231B]"
            >
              <div className="w-11 h-11 rounded-full bg-white group-hover:bg-[#B08A3C] border border-[#E8DFC9] flex items-center justify-center transition-colors shadow-xs">
                <MessageCircle className="w-5 h-5 text-[#29231B] group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="font-serif font-bold text-sm block">WhatsApp</span>
                <span className="text-[11px] text-[#51483C] group-hover:text-[#D8C18A] transition-colors font-mono">
                  Secretariat
                </span>
              </div>
            </a>

          </div>

          {/* Email Subscription Sub-Block */}
          <div className="pt-8 border-t border-[#E8DFC9] max-w-lg mx-auto space-y-4">
            <div className="text-xs font-semibold text-[#51483C] uppercase tracking-wider">
              Receive Official Institutional Email Dispatches
            </div>

            {newsletterSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-sm text-emerald-800 text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Jazakumullahu Khairan! You are now subscribed to ILMI Trust announcements.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C]"
                />
                <button
                  type="submit"
                  disabled={newsletterLoading}
                  className="btn-17 btn-17-primary text-xs tracking-wider !py-3 !px-7 shrink-0 disabled:opacity-50"
                >
                  <span className="text-container">
                    <span className="text">
                      <span>{newsletterLoading ? 'Subscribing...' : 'Subscribe'}</span>
                    </span>
                  </span>
                </button>
              </form>
            )}

            <div className="text-[11px] text-stone-500">
              We respect your privacy. No spam — only genuine community progress updates.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
