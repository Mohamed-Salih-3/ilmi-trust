import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface CinematicSliderProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

interface SlideItem {
  id: string;
  place: string;
  title1: string;
  title2: string;
  description: string;
  ctaText: string;
  causeId: string;
  image: string;
}

const SLIDES_DATA: SlideItem[] = [
  {
    id: 'ias-academy',
    place: 'CIVIL SERVICES · EDUCATIONAL EMPOWERMENT',
    title1: 'EMPOWERING',
    title2: 'FUTURE LEADERS',
    description:
      'Established to empower Muslim youth through civil services education, Azhagiya Kadan IAS Academy provides guidance, coaching and mentorship to aspiring candidates pursuing UPSC, TNPSC and other competitive examinations.',
    ctaText: 'EXPLORE OUR ACADEMY',
    causeId: 'ias-academy',
    image: '/src/assets/images/ias_academy_classroom_1793880040971.jpg',
  },
  {
    id: 'women-rehab',
    place: 'WOMEN REHABILITATION · SOCIAL WELFARE',
    title1: 'RESTORING HOPE',
    title2: 'BUILDING FUTURES',
    description:
      'Madrasathun Niswan is dedicated to supporting and rehabilitating women through care, guidance, education and opportunities for a dignified and independent future.',
    ctaText: 'DISCOVER OUR INITIATIVE',
    causeId: 'women-rehab',
    image: '/src/assets/images/madrasathun_niswan_sanctuary_1793942807489.jpg',
  },
  {
    id: 'scholarships',
    place: 'EDUCATION · STUDENT SUPPORT',
    title1: 'EVERY CHILD',
    title2: 'DESERVES TO LEARN',
    description:
      'Supporting deserving students from financially disadvantaged backgrounds through educational scholarships and assistance to pursue their academic dreams.',
    ctaText: 'EXPLORE SCHOLARSHIPS',
    causeId: 'scholarships',
    image: '/src/assets/images/vision_islamic_campus_1794207125383.jpg',
  },
  {
    id: 'family-counselling',
    place: 'FAMILY COUNSELLING · COMMUNITY GUIDANCE',
    title1: 'STRENGTHENING',
    title2: 'FAMILIES & HEARTS',
    description:
      'ILMI Trust aims to support individuals and families through empathetic guidance, marriage counselling, and constructive dispute resolution anchored in Islamic values.',
    ctaText: 'EXPLORE GUIDANCE SERVICES',
    causeId: 'family-counselling',
    image: '/src/assets/images/hero_islamic_architecture_1793880038286.jpg',
  },
  {
    id: 'medical-aid',
    place: 'HEALTHCARE · HUMANITARIAN SERVICE',
    title1: 'CARE FOR ALL',
    title2: 'HEALTH FOR EVERYONE',
    description:
      'Providing accessible healthcare support, medical consultations and essential assistance to underserved communities.',
    ctaText: 'EXPLORE HEALTHCARE INITIATIVE',
    causeId: 'medical-aid',
    image: '/src/assets/images/community_welfare_initiative_1793880040153.jpg',
  },
  {
    id: 'jamia-construction',
    place: 'JAMIA DARUL ILMI · CHENNAI',
    title1: 'BUILDING A LEGACY',
    title2: 'FOR GENERATIONS',
    description:
      'Our vision is to establish a landmark centre for authentic Islamic education, Quran memorization, Hadith, Fiqh, Arabic studies and the integrated Alim & Law curriculum.',
    ctaText: 'EXPLORE CAMPUS PROJECT',
    causeId: 'jamia-construction',
    image: '/src/assets/images/jamia_darul_ilmi_campus_1793880039067.jpg',
  },
];

export const CinematicSlider: React.FC<CinematicSliderProps> = ({
  onNavigate,
  onOpenDonate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [detailsEven, setDetailsEven] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const orderRef = useRef<number[]>([0, 1, 2, 3, 4, 5]);
  const detailsEvenRef = useRef<boolean>(true);
  const isAnimatingRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const indicatorTweenRef = useRef<gsap.core.Tween | null>(null);

  // Keep refs synchronized
  useEffect(() => {
    orderRef.current = order;
  }, [order]);

  useEffect(() => {
    detailsEvenRef.current = detailsEven;
  }, [detailsEven]);

  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Navigate to initiative details section
  const handleCtaClick = (slide: SlideItem) => {
    onNavigate('initiatives');
    setTimeout(() => {
      const el = document.getElementById(slide.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Dimensions & layout metrics
  const getLayoutMetrics = useCallback(() => {
    if (!containerRef.current) {
      return {
        width: 1200,
        height: 720,
        cardWidth: 190,
        cardHeight: 270,
        gap: 20,
        offsetLeft: 650,
        offsetTop: 380,
      };
    }
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    const cardWidth = isMobile ? 105 : isTablet ? 160 : 190;
    const cardHeight = isMobile ? 145 : isTablet ? 230 : 270;
    const gap = isMobile ? 8 : 20;

    const offsetLeft = isMobile
      ? width - cardWidth - 14
      : isTablet
      ? width - (cardWidth * 2 + gap + 30)
      : width - (cardWidth * 2.8 + gap * 2);

    const offsetTop = isMobile
      ? height - cardHeight - 65
      : height - cardHeight - 110;

    return {
      width,
      height,
      cardWidth,
      cardHeight,
      gap,
      offsetLeft,
      offsetTop,
    };
  }, []);

  // Animate text reveal in details container
  const animateDetails = useCallback(
    (targetId: string, slide: SlideItem) => {
      const container = containerRef.current;
      if (!container) return;

      const target = container.querySelector(targetId);
      if (!target) return;

      const placeEl = target.querySelector('.place-text');
      const title1El = target.querySelector('.title-1-text');
      const title2El = target.querySelector('.title-2-text');
      const descEl = target.querySelector('.desc-text');
      const ctaBtnEl = target.querySelector('.cta-btn-text');
      const ctaBoxEl = target.querySelector('.cta-box');

      if (placeEl) placeEl.textContent = slide.place;
      if (title1El) title1El.textContent = slide.title1;
      if (title2El) title2El.textContent = slide.title2;
      if (descEl) descEl.textContent = slide.description;
      if (ctaBtnEl) ctaBtnEl.textContent = slide.ctaText;

      const ease = 'power3.out';

      gsap.to(target, { opacity: 1, duration: 0.4, ease: 'sine.inOut' });

      if (placeEl) {
        gsap.fromTo(
          placeEl,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.05, ease }
        );
      }
      if (title1El) {
        gsap.fromTo(
          title1El,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.1, ease }
        );
      }
      if (title2El) {
        gsap.fromTo(
          title2El,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.15, ease }
        );
      }
      if (descEl) {
        gsap.fromTo(
          descEl,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.25, ease }
        );
      }
      if (ctaBoxEl) {
        gsap.fromTo(
          ctaBoxEl,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.35, ease }
        );
      }
    },
    []
  );

  // Core transition step
  const goToNext = useCallback(() => {
    if (isAnimatingRef.current || !containerRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);

    const currentOrder = [...orderRef.current];
    currentOrder.push(currentOrder.shift()!);

    const newEven = !detailsEvenRef.current;
    detailsEvenRef.current = newEven;
    setDetailsEven(newEven);

    const activeIndex = currentOrder[0];
    const previousIndex = currentOrder[currentOrder.length - 1];
    setActiveSlideIndex(activeIndex);

    const activeSlide = SLIDES_DATA[activeIndex];
    const targetDetailsId = newEven ? '#details-even' : '#details-odd';
    const inactiveDetailsId = newEven ? '#details-odd' : '#details-even';

    const container = containerRef.current;
    const inactiveTarget = container.querySelector(inactiveDetailsId);
    if (inactiveTarget) {
      gsap.to(inactiveTarget, { opacity: 0, duration: 0.3, ease: 'sine.inOut' });
    }

    animateDetails(targetDetailsId, activeSlide);

    const { width, height, cardWidth, cardHeight, gap, offsetLeft, offsetTop } =
      getLayoutMetrics();

    const ease = 'sine.inOut';

    // Elements
    const activeCard = container.querySelector(`#slide-card-${activeIndex}`);
    const previousCard = container.querySelector(`#slide-card-${previousIndex}`);
    const activeCardContent = container.querySelector(
      `#slide-card-content-${activeIndex}`
    );

    // Hide active card content
    if (activeCardContent) {
      gsap.to(activeCardContent, {
        opacity: 0,
        y: offsetTop + cardHeight,
        duration: 0.3,
        ease,
      });
    }

    // Expand active card to full section
    if (activeCard) {
      gsap.set(activeCard, { zIndex: 18 });
      gsap.to(activeCard, {
        x: 0,
        y: 0,
        width,
        height,
        borderRadius: 0,
        duration: 0.85,
        ease: 'power3.inOut',
        onComplete: () => {
          // Reset previous card to the tail position
          if (previousCard) {
            const tailIndex = currentOrder.length - 2;
            const xNew = offsetLeft + tailIndex * (cardWidth + gap);
            gsap.set(previousCard, {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              borderRadius: 12,
              zIndex: 25,
            });

            const previousCardContent = container.querySelector(
              `#slide-card-content-${previousIndex}`
            );
            if (previousCardContent) {
              gsap.set(previousCardContent, {
                x: xNew,
                y: offsetTop + cardHeight - 85,
                opacity: 1,
                zIndex: 35,
              });
            }
          }

          setOrder(currentOrder);
          isAnimatingRef.current = false;
          setIsAnimating(false);
        },
      });
    }

    // Shift other preview cards to their new positions
    currentOrder.slice(1).forEach((slideIdx, index) => {
      if (slideIdx !== previousIndex) {
        const xNew = offsetLeft + index * (cardWidth + gap);
        const cardEl = container.querySelector(`#slide-card-${slideIdx}`);
        const cardContentEl = container.querySelector(
          `#slide-card-content-${slideIdx}`
        );

        if (cardEl) {
          gsap.set(cardEl, { zIndex: 25 });
          gsap.to(cardEl, {
            x: xNew,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            borderRadius: 12,
            duration: 0.7,
            ease,
            delay: 0.04 * (index + 1),
          });
        }

        if (cardContentEl) {
          gsap.set(cardContentEl, { zIndex: 35 });
          gsap.to(cardContentEl, {
            x: xNew,
            y: offsetTop + cardHeight - 85,
            opacity: 1,
            duration: 0.7,
            ease,
            delay: 0.04 * (index + 1),
          });
        }
      }
    });

    // Update progress bar indicator
    const progressBar = container.querySelector('#cinematic-progress-line');
    if (progressBar) {
      gsap.to(progressBar, {
        width: `${((activeIndex + 1) / SLIDES_DATA.length) * 100}%`,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  }, [animateDetails, getLayoutMetrics]);

  // Step backwards
  const goToPrev = useCallback(() => {
    if (isAnimatingRef.current || !containerRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);

    const currentOrder = [...orderRef.current];
    const lastItem = currentOrder.pop()!;
    currentOrder.unshift(lastItem);

    const newEven = !detailsEvenRef.current;
    detailsEvenRef.current = newEven;
    setDetailsEven(newEven);

    const activeIndex = currentOrder[0];
    setActiveSlideIndex(activeIndex);

    const activeSlide = SLIDES_DATA[activeIndex];
    const targetDetailsId = newEven ? '#details-even' : '#details-odd';
    const inactiveDetailsId = newEven ? '#details-odd' : '#details-even';

    const container = containerRef.current;
    const inactiveTarget = container.querySelector(inactiveDetailsId);
    if (inactiveTarget) {
      gsap.to(inactiveTarget, { opacity: 0, duration: 0.3, ease: 'sine.inOut' });
    }

    animateDetails(targetDetailsId, activeSlide);

    const { width, height, cardWidth, cardHeight, gap, offsetLeft, offsetTop } =
      getLayoutMetrics();

    const activeCard = container.querySelector(`#slide-card-${activeIndex}`);
    if (activeCard) {
      gsap.set(activeCard, { zIndex: 18 });
      gsap.to(activeCard, {
        x: 0,
        y: 0,
        width,
        height,
        borderRadius: 0,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => {
          setOrder(currentOrder);
          isAnimatingRef.current = false;
          setIsAnimating(false);
        },
      });
    }

    currentOrder.slice(1).forEach((slideIdx, index) => {
      const xNew = offsetLeft + index * (cardWidth + gap);
      const cardEl = container.querySelector(`#slide-card-${slideIdx}`);
      const cardContentEl = container.querySelector(
        `#slide-card-content-${slideIdx}`
      );

      if (cardEl) {
        gsap.set(cardEl, { zIndex: 25 });
        gsap.to(cardEl, {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          borderRadius: 12,
          duration: 0.7,
          ease: 'power2.inOut',
          delay: 0.03 * (index + 1),
        });
      }

      if (cardContentEl) {
        gsap.set(cardContentEl, { zIndex: 35 });
        gsap.to(cardContentEl, {
          x: xNew,
          y: offsetTop + cardHeight - 85,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.inOut',
          delay: 0.03 * (index + 1),
        });
      }
    });

    const progressBar = container.querySelector('#cinematic-progress-line');
    if (progressBar) {
      gsap.to(progressBar, {
        width: `${((activeIndex + 1) / SLIDES_DATA.length) * 100}%`,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  }, [animateDetails, getLayoutMetrics]);

  // Initial layout setup
  const initSlider = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { width, height, cardWidth, cardHeight, gap, offsetLeft, offsetTop } =
      getLayoutMetrics();

    const [active, ...rest] = orderRef.current;
    const activeSlide = SLIDES_DATA[active];

    // Set full active card
    const activeCard = container.querySelector(`#slide-card-${active}`);
    if (activeCard) {
      gsap.set(activeCard, {
        x: 0,
        y: 0,
        width,
        height,
        borderRadius: 0,
        zIndex: 10,
      });
    }

    const activeCardContent = container.querySelector(
      `#slide-card-content-${active}`
    );
    if (activeCardContent) {
      gsap.set(activeCardContent, { opacity: 0 });
    }

    // Set preview cards
    rest.forEach((slideIdx, index) => {
      const cardEl = container.querySelector(`#slide-card-${slideIdx}`);
      const cardContentEl = container.querySelector(
        `#slide-card-content-${slideIdx}`
      );
      const xPos = offsetLeft + index * (cardWidth + gap);

      if (cardEl) {
        gsap.set(cardEl, {
          x: xPos,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          borderRadius: 12,
          zIndex: 25,
        });
      }

      if (cardContentEl) {
        gsap.set(cardContentEl, {
          x: xPos,
          y: offsetTop + cardHeight - 85,
          opacity: 1,
          zIndex: 35,
        });
      }
    });

    // Initialize details content
    animateDetails('#details-even', activeSlide);
    const inactiveDetails = container.querySelector('#details-odd');
    if (inactiveDetails) {
      gsap.set(inactiveDetails, { opacity: 0 });
    }

    const progressBar = container.querySelector('#cinematic-progress-line');
    if (progressBar) {
      gsap.set(progressBar, {
        width: `${((active + 1) / SLIDES_DATA.length) * 100}%`,
      });
    }
  }, [animateDetails, getLayoutMetrics]);

  // Run initial setup and window resize listener
  useEffect(() => {
    initSlider();

    const handleResize = () => {
      initSlider();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initSlider]);

  // Autoplay loop with top indicator bar
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    const topBar = containerRef.current?.querySelector('#cinematic-top-indicator');

    if (topBar) {
      gsap.fromTo(
        topBar,
        { width: '0%' },
        { width: '100%', duration: 6, ease: 'linear' }
      );
    }

    autoplayTimerRef.current = setInterval(() => {
      if (!isPausedRef.current && !isAnimatingRef.current) {
        goToNext();
        if (topBar) {
          gsap.fromTo(
            topBar,
            { width: '0%' },
            { width: '100%', duration: 6, ease: 'linear' }
          );
        }
      }
    }, 6000);
  }, [goToNext]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (indicatorTweenRef.current) indicatorTweenRef.current.kill();
    };
  }, [startAutoplay]);

  const activeSlide = SLIDES_DATA[activeSlideIndex];

  return (
    <section
      id="cinematic-impact-slider"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[620px] sm:h-[720px] lg:h-[750px] min-h-[580px] bg-[#1F1A14] text-[#F7F3EA] overflow-hidden select-none max-w-full"
    >
      {/* Top Autoplay Progress Bar */}
      <div
        id="cinematic-top-indicator"
        className="absolute top-0 left-0 h-1 bg-[#B08A3C] z-40 transition-all pointer-events-none"
        style={{ width: '0%' }}
      />

      {/* Decorative Brand Header Badge */}
      <div className="absolute top-4 left-4 sm:top-10 sm:left-12 z-30 flex items-center gap-2 sm:gap-3 bg-[#29231B]/85 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-[#B08A3C]/40 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#B08A3C] animate-pulse" />
        <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.22em] text-[#D8C18A] uppercase">
          OUR INITIATIVES · OUR IMPACT
        </span>
      </div>

      {/* Background Image Cards & Previews */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {SLIDES_DATA.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide-card-${index}`}
            className="absolute top-0 left-0 bg-center bg-cover shadow-2xl transition-shadow cursor-pointer pointer-events-auto overflow-hidden group"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            onClick={() => {
              if (orderRef.current[0] !== index && !isAnimatingRef.current) {
                goToNext();
              }
            }}
          >
            {/* Dark gradient overlay to preserve contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#29231B]/95 via-[#29231B]/75 to-[#1F1A14]/30 pointer-events-none" />
            <div className="absolute inset-0 bg-[#29231B]/25 pointer-events-none" />

            {/* Hover highlight on preview cards */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B08A3C] transition-colors rounded-inherit pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Card Content Overlays on Previews */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {SLIDES_DATA.map((slide, index) => (
          <div
            key={`content-${slide.id}`}
            id={`slide-card-content-${index}`}
            className="absolute top-0 left-0 p-3 sm:p-4 text-[#F7F3EA] max-w-[150px] sm:max-w-[180px] pointer-events-none drop-shadow-md"
          >
            <div className="w-5 sm:w-6 h-1 rounded-full bg-[#B08A3C] mb-1.5 sm:mb-2" />
            <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D8C18A] font-mono font-semibold line-clamp-1">
              {slide.title1}
            </div>
            <div className="text-xs sm:text-sm font-serif font-bold text-[#F7F3EA] leading-tight line-clamp-1">
              {slide.title2}
            </div>
          </div>
        ))}
      </div>

      {/* Primary Details Container (Alternating Even Container) */}
      <div
        id="details-even"
        className="absolute top-16 xs:top-20 sm:top-32 lg:top-36 left-4 sm:left-12 lg:left-16 z-25 max-w-[calc(100%-1.5rem)] sm:max-w-xl pr-2 sm:pr-4 pointer-events-auto"
      >
        <div className="overflow-hidden mb-1.5 sm:mb-2">
          <div className="text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold text-[#D8C18A] flex items-center gap-2 sm:gap-2.5">
            <span className="w-4 sm:w-6 h-0.5 bg-[#B08A3C] inline-block shrink-0" />
            <span className="place-text line-clamp-1">{activeSlide.place}</span>
          </div>
        </div>

        <div className="overflow-hidden my-0.5 sm:my-1">
          <div className="title-1-text font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F7F3EA] leading-tight sm:leading-none tracking-tight">
            {activeSlide.title1}
          </div>
        </div>

        <div className="overflow-hidden mb-3 sm:mb-5">
          <div className="title-2-text font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#D8C18A] leading-tight sm:leading-none tracking-tight">
            {activeSlide.title2}
          </div>
        </div>

        <div className="overflow-hidden mb-4 sm:mb-7">
          <p className="desc-text text-xs sm:text-base text-[#F7F3EA]/85 leading-relaxed font-sans max-w-lg drop-shadow-sm line-clamp-3 sm:line-clamp-none">
            {activeSlide.description}
          </p>
        </div>

        <div className="cta-box flex items-center gap-3 sm:gap-4 pt-1">
          <button
            onClick={() => onOpenDonate(activeSlide.causeId)}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#B08A3C] hover:bg-[#97732F] text-[#29231B] flex items-center justify-center transition-all shadow-md group cursor-pointer shrink-0"
            aria-label="Support this initiative"
            title="Support this initiative"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => handleCtaClick(activeSlide)}
            className="btn-17 btn-17-primary text-[11px] sm:text-xs tracking-wider !py-2.5 sm:!py-3 !px-4 sm:!px-6 shadow-md cursor-pointer"
          >
            <span className="text-container">
              <span className="text">
                <span className="cta-btn-text">{activeSlide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Secondary Details Container (Alternating Odd Container) */}
      <div
        id="details-odd"
        className="absolute top-16 xs:top-20 sm:top-32 lg:top-36 left-4 sm:left-12 lg:left-16 z-25 max-w-[calc(100%-1.5rem)] sm:max-w-xl pr-2 sm:pr-4 opacity-0 pointer-events-auto"
      >
        <div className="overflow-hidden mb-1.5 sm:mb-2">
          <div className="text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold text-[#D8C18A] flex items-center gap-2 sm:gap-2.5">
            <span className="w-4 sm:w-6 h-0.5 bg-[#B08A3C] inline-block shrink-0" />
            <span className="place-text line-clamp-1">{activeSlide.place}</span>
          </div>
        </div>

        <div className="overflow-hidden my-0.5 sm:my-1">
          <div className="title-1-text font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F7F3EA] leading-tight sm:leading-none tracking-tight">
            {activeSlide.title1}
          </div>
        </div>

        <div className="overflow-hidden mb-3 sm:mb-5">
          <div className="title-2-text font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#D8C18A] leading-tight sm:leading-none tracking-tight">
            {activeSlide.title2}
          </div>
        </div>

        <div className="overflow-hidden mb-4 sm:mb-7">
          <p className="desc-text text-xs sm:text-base text-[#F7F3EA]/85 leading-relaxed font-sans max-w-lg drop-shadow-sm line-clamp-3 sm:line-clamp-none">
            {activeSlide.description}
          </p>
        </div>

        <div className="cta-box flex items-center gap-3 sm:gap-4 pt-1">
          <button
            onClick={() => onOpenDonate(activeSlide.causeId)}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#B08A3C] hover:bg-[#97732F] text-[#29231B] flex items-center justify-center transition-all shadow-md group cursor-pointer shrink-0"
            aria-label="Support this initiative"
            title="Support this initiative"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => handleCtaClick(activeSlide)}
            className="btn-17 btn-17-primary text-[11px] sm:text-xs tracking-wider !py-2.5 sm:!py-3 !px-4 sm:!px-6 shadow-md cursor-pointer"
          >
            <span className="text-container">
              <span className="text">
                <span className="cta-btn-text">{activeSlide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Pagination & Progress Controls (Near Bottom) */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-12 lg:left-16 z-30 flex items-center gap-3 sm:gap-8">
        {/* Previous / Next Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrev}
            disabled={isAnimating}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-[#29231B]/60 hover:bg-[#B08A3C] hover:text-[#29231B] hover:border-[#B08A3C] text-[#F7F3EA] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md active:scale-95 disabled:opacity-50"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-[#29231B]/60 hover:bg-[#B08A3C] hover:text-[#29231B] hover:border-[#B08A3C] text-[#F7F3EA] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md active:scale-95 disabled:opacity-50"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Linear Progress Sub-track */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="w-20 sm:w-48 lg:w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              id="cinematic-progress-line"
              className="h-full bg-[#B08A3C] rounded-full transition-all duration-300"
              style={{
                width: `${((activeSlideIndex + 1) / SLIDES_DATA.length) * 100}%`,
              }}
            />
          </div>

          {/* Slide Numbers */}
          <div className="text-[11px] sm:text-sm font-mono tracking-widest text-[#D8C18A] font-bold">
            <span className="text-[#F7F3EA] text-xs sm:text-base">
              0{activeSlideIndex + 1}
            </span>
            <span className="text-white/40 mx-0.5 sm:mx-1">/</span>
            <span className="text-white/60 text-[10px] sm:text-xs">0{SLIDES_DATA.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
