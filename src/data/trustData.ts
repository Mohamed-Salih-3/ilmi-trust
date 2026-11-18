import { InitiativeItem, GalleryItem, PillarItem, AnnouncementItem, TrustStat } from '../types';

export const HERO_DATA = {
  mainHeading: "Knowledge That Transforms. Faith That Inspires.",
  supportingHeading: "Building a Strong Foundation in Deen and Education.",
  description: [
    "Our Jamia Darul Ilmi is committed to cultivating future generations grounded in authentic Islamic teachings, strong moral character, and a deep sense of community responsibility.",
    "From Quran memorization and Tajweed to Hadith, Fiqh, and Arabic studies, we aim to create a spiritually uplifting, academically sound, and safe environment for students of all ages.",
    "The Jamia Darul Ilmi will also extend support to orphans, provide need-based scholarships, and function as a hub for social development and community unity."
  ],
  heroImage: "/src/assets/images/hero_islamic_architecture_1793880038286.jpg",
  studyImage: "/src/assets/images/jamia_darul_ilmi_campus_1793880039067.jpg",
  iasImage: "/src/assets/images/ias_academy_classroom_1793880040971.jpg",
  welfareImage: "/src/assets/images/community_welfare_initiative_1793880040153.jpg",
  niswanImage: "/src/assets/images/madrasathun_niswan_sanctuary_1793942807489.jpg",
  masterplanImage: "/src/assets/images/jamia_architectural_masterplan_1793942808369.jpg",
};

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'shahadah',
    title: 'Shahadah',
    arabic: 'الشهادة',
    englishMeaning: 'Faith',
    description: 'The Shahadah is an Islamic creed, one of the Five Pillars of Islam and part of the Adhan. It reads: "I bear witness that there is no deity but God, and I bear witness that Muhammad is the messenger of God."',
    iconName: 'Fingerprint'
  },
  {
    id: 'salah',
    title: 'Salah',
    arabic: 'الصلاة',
    englishMeaning: 'Prayer',
    description: 'Every Muslim is required to pray five times a day — at dawn, noon, afternoon, sunset, and night. These prayers can be performed anywhere; however, praying in congregation is considered more rewarding than praying alone.',
    iconName: 'Clock'
  },
  {
    id: 'sawm',
    title: 'Sawm',
    arabic: 'الصوم',
    englishMeaning: 'Fasting',
    description: 'Each Muslim fasts during the month of Ramadan by abstaining from food, drink, and bad behavior from dawn to sunset. Fasting teaches patience, self-control, gratitude, and increases spiritual awareness and closeness to Allah.',
    iconName: 'Moon'
  },
  {
    id: 'zakat',
    title: 'Zakat',
    arabic: 'الزكاة',
    englishMeaning: 'Almsgiving',
    description: "It is a fundamental pillar of Islam that requires Muslims to donate a fixed portion of their wealth to those in need. It serves as a means of purifying one's wealth, fostering generosity, and ensuring social justice by supporting the poor and underprivileged.",
    iconName: 'Coins'
  },
  {
    id: 'hajj',
    title: 'Hajj',
    arabic: 'الحج',
    englishMeaning: 'Pilgrimage',
    description: 'It is one of the Five Pillars of Islam, requiring Muslims to travel to Mecca at least once in their lifetime if they have the means. It is a profound spiritual journey that brings Muslims together in unity, equality, and devotion to Allah.',
    iconName: 'Compass'
  }
];

export const HADITH_DATA = {
  quote: "It is Better For Any Of You To Carry A Load Of Firewood On His Own Back Than To Beg From Someone Else.",
  reference: "Riyadh-Us-Saleheen, Chapter 59, Hadith 540",
  arabicQuote: "لأَنْ يَأْخُذَ أَحَدُكُمْ حَبْلَهُ فَيَأْتِيَ بِحُزْمَةِ الْحَطَبِ عَلَى ظَهْرِهِ فَيَبِيعَهَا فَيَكُفَّ اللَّهُ بِهَا وَجْهَهُ خَيْرٌ لَهُ مِنْ أَنْ يَسْأَلَ النَّاسَ أَعْطَوْهُ أَوْ مَنَعُوهُ"
};

export const STATS_DATA: TrustStat[] = [
  {
    id: 'scholarships',
    value: 300,
    prefix: '',
    suffix: '+',
    label: 'Students Supported Annually with Scholarships',
    sourceNote: 'Reported by existing website archives'
  },
  {
    id: 'patients',
    value: 1500,
    prefix: '',
    suffix: '+',
    label: 'Patients Served Monthly Through Free Clinics',
    sourceNote: 'Reported by existing website archives'
  },
  {
    id: 'women-rehab',
    value: 55,
    prefix: '',
    suffix: '',
    label: 'Sisters Sheltered at Rehabilitation Center',
    sourceNote: 'Reported by existing website archives'
  },
  {
    id: 'ias-enrolled',
    value: 50,
    prefix: '',
    suffix: '',
    label: 'Civil Service Students Enrolled in Chennai & Delhi',
    sourceNote: 'Reported by existing website archives'
  }
];

export const INITIATIVES_DATA: InitiativeItem[] = [
  {
    id: 'ias-academy',
    number: 1,
    title: 'Azhagiya Kadan IAS Academy',
    category: 'Education',
    shortDesc: 'Founded in 2012 to empower youth in civil services, offering coaching, accommodation, and mentorship.',
    fullDesc: [
      'Founded in 2012 to uplift Muslim youth in civil services with top-tier coaching, study materials, and character mentoring.',
      'The academy has produced notable success stories across national and state civil service exams and maintains centres in Chennai and Delhi.'
    ],
    achievements: [
      'First batch had 28 students with 1 student clearing UPSC',
      'Several successful candidates in TNPSC, SSC, and Group IV examinations',
      'Currently 50 students enrolled across Chennai and Delhi centres',
      'Future batches aim to expand to 100+ students'
    ],
    financialRequirements: [
      { label: 'Monthly Academy Running Expense', amount: '₹4,00,000' },
      { label: 'Annual Expense per Enrolled Student', amount: '₹1,00,000' }
    ],
    iconName: 'GraduationCap',
    image: '/src/assets/images/ias_academy_classroom_1793880040971.jpg'
  },
  {
    id: 'women-rehab',
    number: 2,
    title: 'Women Rehabilitation Center – Madrasathun Niswan',
    category: 'Welfare',
    shortDesc: 'Providing free shelter, wholesome food, security, and Islamic education to sisters facing social challenges.',
    fullDesc: [
      'Providing free shelter, food, and Islamic education to sisters affected by social and moral challenges in our society.',
      'The centre operates as a safe sanctuary that helps women regain dignity, emotional stability, and independence through moral and practical learning.'
    ],
    achievements: [
      'Currently housing and supporting 55 sisters with comprehensive care'
    ],
    financialRequirements: [
      { label: 'Monthly Operating Expense', amount: '₹1,00,000' }
    ],
    iconName: 'HeartHandshake',
    image: '/src/assets/images/madrasathun_niswan_sanctuary_1793942807489.jpg'
  },
  {
    id: 'scholarships',
    number: 3,
    title: 'Educational Scholarships',
    category: 'Education',
    shortDesc: 'Supporting over 300 deserving students annually for higher education following 10th and 12th grade.',
    fullDesc: [
      'Supporting over 300 students yearly with scholarships after thorough verification of financial background.',
      'Aimed specifically at ensuring talented students do not discontinue their higher education after 10th or 12th grade due to poverty.'
    ],
    achievements: [
      'Over 300 deserving students supported each academic year',
      'Need-based verification ensuring transparency'
    ],
    iconName: 'BookOpen',
    image: '/src/assets/images/jamia_darul_ilmi_campus_1793880039067.jpg'
  },
  {
    id: 'medical-aid',
    number: 4,
    title: 'Medical Aid & Free Clinic',
    category: 'Healthcare',
    shortDesc: 'Serving 1,500+ patients monthly with free clinical healthcare and emergency medical grants up to ₹25,000.',
    fullDesc: [
      'Serving 1,500+ patients monthly with free clinical consultations, vital diagnostic checks, and essential medications.',
      'Emergency medical cases receive direct emergency assistance of up to ₹25,000 to alleviate urgent hospital burdens.'
    ],
    financialRequirements: [
      { label: 'Monthly Clinic Cost', amount: '₹60,000' },
      { label: 'Annual Budget for 30 Critical Patients', amount: '₹7,50,000' }
    ],
    achievements: [
      '1,500+ patients receiving free consultations monthly',
      'Emergency relief grants up to ₹25,000 for critical surgeries'
    ],
    iconName: 'Stethoscope',
    image: '/src/assets/images/community_welfare_initiative_1793880040153.jpg'
  },
  {
    id: 'scheme-100',
    number: 5,
    title: 'Scheme 100',
    category: 'Education',
    shortDesc: '100 high-performing SSLC students (85%+) selected for fully sponsored coaching, boarding, and Islamic learning.',
    fullDesc: [
      '100 high-performing SSLC students who score 85%+ are selected for fully sponsored coaching, food, accommodation, and Islamic learning.',
      'This initiative fosters tomorrow’s high achievers with balanced religious and contemporary academic excellence.'
    ],
    financialRequirements: [
      { label: 'Total Annual Cost', amount: '₹1 Crore/year' }
    ],
    iconName: 'Award',
    image: '/src/assets/images/ias_academy_classroom_1793880040971.jpg'
  },
  {
    id: 'madrasa-muttukadu',
    number: 6,
    title: 'Madrasa Muttukadu',
    category: 'Education',
    shortDesc: 'A dedicated Islamic educational institution committed to Quranic study, deeniyat learning and community development.',
    fullDesc: [
      'Madrasa Muttukadu is dedicated to nurturing young minds with authentic Islamic education, Quranic literacy, and strong ethical character.',
      'The institution serves as a center for learning activities, spiritual development, and community welfare objectives for future generations.'
    ],
    achievements: [
      'Active Quranic and Islamic learning classes',
      'Community empowerment and ethical character building'
    ],
    iconName: 'Building2',
    image: '/src/assets/images/vision_islamic_campus_1794207125383.jpg'
  },
  {
    id: 'family-counselling',
    number: 7,
    title: 'Family Counselling & Guidance',
    category: 'Welfare',
    shortDesc: 'Supporting individuals and families through empathetic guidance, relationship counselling and constructive dispute resolution.',
    fullDesc: [
      'ILMI Trust aims to support individuals and families through guidance, counselling and constructive solutions to family-related challenges.',
      'Services include family guidance, marriage and relationship counselling, family dispute guidance, and personal and social mentorship under Islamic values.'
    ],
    achievements: [
      'Constructive family dispute resolution and pre-marital guidance',
      'Confidential personal guidance for community members'
    ],
    iconName: 'HeartHandshake',
    image: '/src/assets/images/community_welfare_initiative_1793880040153.jpg'
  },
  {
    id: 'old-age-home',
    number: 8,
    title: 'Old Age Home & Guidance Center',
    category: 'Welfare',
    shortDesc: 'A compassionate sanctuary for abandoned senior citizens of all backgrounds, offering care and guidance.',
    fullDesc: [
      'For abandoned senior citizens (including non-Muslims), offering dignified care, lodging, healthcare, and gentle moral guidance.',
      'Work is currently in progress — your sincere duas and partnership are humbly requested to establish this facility.'
    ],
    urgencyOrStatus: 'Work in progress — sincere Duas requested from the community',
    iconName: 'Users',
    image: '/src/assets/images/community_welfare_initiative_1793880040153.jpg'
  },
  {
    id: 'alim-law-course',
    number: 9,
    title: 'Alim & Law Dual Course',
    category: 'Education',
    shortDesc: 'Unique 5-year integrated program combining classical Islamic scholarship (Alim) with an LLB degree.',
    fullDesc: [
      'Jamia Darul Ilmi – Chennai presents a valuable opportunity for community development and legal empowerment.',
      'Muslim students who have passed 12th grade this year — regardless of their marks — can pursue Islamic scholarship (Alim course) while studying Law (LLB) at a subsidized fee.',
      'Insha Allah, within five years, students can graduate as both a qualified Alim and a registered Law advocate simultaneously.',
      'Conducted in collaboration with the prestigious Al-Ameen Law College, Bangalore.',
      'Our ultimate objective, Insha Allah, is to produce upright community leaders who can serve as Islamic scholars, advocates, and judges.'
    ],
    achievements: [
      'Full academic sponsorship for eligible candidates (approx. ₹3,00,000/year value completely free)',
      'Collaboration with Al-Ameen Law College, Bangalore',
      'First-come, first-served basis for limited allocated seats'
    ],
    financialRequirements: [
      { label: 'Value of Scholarship per Eligible Student', amount: '₹3,00,000/year (Completely Free)' }
    ],
    contact: ['80727 20009'],
    urgencyOrStatus: 'Historical registration deadline was 25.6.2025. Contact administration for current academic cycle inquiries.',
    iconName: 'Scale',
    image: '/src/assets/images/jamia_darul_ilmi_campus_1793880039067.jpg'
  },
  {
    id: 'kind-appeal',
    number: 10,
    title: 'Kind Appeal for Land & Capital Support',
    category: 'Institutional',
    shortDesc: 'Annual trust expenditure of ₹3 Crores and urgent land acquisition for the permanent Jamia campus.',
    fullDesc: [
      'Total estimated annual expense across all trust humanitarian and educational activities is ₹3 Crores.',
      'There has been a slight delay in our ongoing expansion activities because we do not yet own permanent land.',
      'We are currently in the active process of purchasing land for Jamia Darul Ilmi, and we humbly request your financial support and continuous prayers. Jazakumullahu Khaira.'
    ],
    financialRequirements: [
      { label: 'Total Estimated Annual Operating Budget', amount: '₹3 Crores' }
    ],
    urgencyOrStatus: 'Active Land Acquisition Phase',
    iconName: 'Landmark',
    image: '/src/assets/images/jamia_architectural_masterplan_1793942808369.jpg'
  }
];

export const SCHOLAR_DATA = {
  name: "Maulana Shamsudeen Qasimi",
  designation: "Founder – Azhagiya Kadan IAS Academy & Ilmi Trust",
  credentials: "Chief Imam of Makkah Masjid in Chennai",
  biography: [
    "Maulana Shamsudeen Qasimi is a visionary Islamic scholar and community leader dedicated to empowering youth through education and moral guidance.",
    "As the Chief Imam of Makkah Masjid in Chennai, he combines deep religious insight with a progressive mission to uplift society.",
    "Through the establishment of the Azhagiya Kadan IAS Academy, he has provided free civil service coaching, food, accommodation, and mentorship to hundreds of students, with a focus on serving underprivileged and marginalized communities.",
    "Maulana's mission is rooted in the values of knowledge (Ilm), service (Khidmah), and compassion (Rahmah).",
    "He believes that nurturing educated, ethical individuals is a form of Sadaqah Jariyah—ongoing charity that benefits generations to come."
  ],
  languages: ["Tamil", "Urdu", "English"],
  coreValues: [
    { title: "Knowledge (Ilm)", desc: "Empowering every community youth with authentic sacred knowledge and academic excellence." },
    { title: "Service (Khidmah)", desc: "Dedication to humanitarian welfare, educational empowerment, and medical aid without distinction." },
    { title: "Compassion (Rahmah)", desc: "Uplifting the destitute, sheltering vulnerable women, and supporting aspiring leaders." }
  ],
  keyAchievements: [
    "Founder of Azhagiya Kadan Trust in 1997, pioneering community social welfare",
    "Established Azhagiya Kadan IAS Academy in 2012 producing UPSC and TNPSC civil servants",
    "Chief Imam of the historic Makkah Masjid, Anna Salai, Chennai",
    "Spearheading the construction and realization of Jamia Darul Ilmi"
  ]
};

export const ANNOUNCEMENTS_DATA: AnnouncementItem[] = [
  {
    id: 'ann-1',
    title: 'Land Acquisition Process Has Started',
    date: 'May 28, 2025',
    category: 'Campus Infrastructure',
    summary: 'Official commencement of the land procurement process for the permanent Jamia Darul Ilmi educational campus.',
    content: 'Alhamdulillah, ILMI Trust has initiated the formal land acquisition procedure for building the permanent Jamia Darul Ilmi institution. This dedicated campus will host the Madarasa, Alim & Law dual studies center, and student residential quarters.',
    isHistorical: true
  },
  {
    id: 'ann-2',
    title: 'Architectural Design Phase Underway',
    date: 'June 3, 2025',
    category: 'Architecture & Planning',
    summary: 'Comprehensive master plan and architectural drafting are underway with experienced educational facility architects.',
    content: 'Following initial land evaluations, the architectural master planning phase has officially commenced. The design integrates classical Islamic aesthetics, modern sustainable ventilation, study libraries, and comprehensive safety standards for all residential students.',
    isHistorical: true
  }
];



const galleryImageFiles = [
  "hqdefault.jpg.jpg",
  "img0.jpg.jpg",
  "img1.jpg.jpg",
  "img10.jpg.jpg",
  "img11.jpg.jpg",
  "img12.jpg.jpg",
  "img13.jpg.jpg",
  "img14.jpg.jpg",
  "img15.jpg.jpg",
  "img16.jpg.jpg",
  "img17.jpg.jpg",
  "img18.jpg.jpg",
  "img2.jpg.jpg",
  "img20.jpg.jpg",
  "img21.png",
  "img23.png",
  "img3.jpg.jpg",
  "img31.png",
  "img32.png",
  "img33.png",
  "img34.png",
  "img35.png",
  "img36.png",
  "img37.png",
  "img38.png",
  "img39.png",
  "img40.png",
  "img41.png",
  "img42.png",
  "img43.png",
  "img44.png",
  "img45.png",
  "img46.png",
  "img47.png",
  "img5.jpg.jpg",
  "img6.jpg.jpg",
  "img7.jpg.jpg",
  "img8.jpg.jpg",
  "img9.jpg.jpg",
  "land.jpg.jpg",
  "madrasa1.png",
  "madrasa2.png",
  "madrasa3.png",
  "mosque1.jpg",
  "mosque2.jpg",
  "mosque3.jpg",
  "sddefault.jpg.jpg",
];

const cloudinaryImage = (filename: string) =>
  `https://res.cloudinary.com/blvpou2j/image/upload/${filename}`;

export const GALLERY_ITEMS: GalleryItem[] = galleryImageFiles.map(
  (filename, index) => ({
    id: index + 1,
    caption: "",
    category: "image",
    featured: true,
    mediaUrl: cloudinaryImage(filename),
  })
);



export const CONTACT_INFO = {
  address: "19, A M 4th Street, Thousand Lights West, Chennai – 600006",
  phone: "+91 98844 67666",
  email: "ilmitrust@gmail.com",
  website: "www.ilmitrust.com",
  whatsappUrl: "https://wa.me/919884467666?text=Assalamu%20Alaikum%2C%20I%20am%20contacting%20ILMI%20Trust%20regarding%20Jamia%20Darul%20Ilmi%20initiatives.",
  socials: {
    facebook: "https://facebook.com/ilmitrust",
    youtube: "https://youtube.com/ilmitrust",
    twitter: "https://twitter.com/ilmitrust",
  },
  configNotice: "Notice: The legacy website contains conflicting address and email records. The details above reflect the primary provisional institutional contact and are configurable before final public launch."
};
