/**
 * Centralized Gym Configuration
 * -------------------------------------------------------------
 * ChaloBuild Gym Website Template
 *
 * This configuration file contains all the gym-specific brand identity,
 * contact details, programs, facilities, trainers, pricing plans, and
 * provider credits.
 *
 * To customize this template for any client gym, simply modify the values
 * in this file. UI components consume these values rather than hardcoding them.
 */

export interface GymPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  billingText: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface GymProgram {
  id: string;
  title: string;
  tagline: string;
  description: string;
  intensity: "Beginner" | "Intermediate" | "High" | "All Levels";
  duration: string;
  idealFor: string;
  highlights: string[];
  image: string;
  iconName: string;
}

export interface GymTrainer {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  experience: string;
  specialization: string;
  bio: string;
  image: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface GymFacility {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export interface GymGalleryItem {
  id: string;
  title: string;
  category: "Strength" | "Cardio" | "Coaching" | "Facilities" | "Community";
  caption: string;
  image: string;
}

export interface GymTestimonial {
  id: string;
  name: string;
  membershipDuration: string;
  goalAchieved: string;
  rating: number;
  quote: string;
  avatarInitials: string;
}

export interface GymFaq {
  question: string;
  answer: string;
}

export interface GymConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  taglineSecondary: string;
  shortDescription: string;
  detailedAbout: string;
  mission: string;
  vision: string;
  logo: {
    svg: string;
    alt: string;
    width: number;
    height: number;
  };
  contact: {
    phoneFormatted: string;
    phoneRaw: string;
    whatsappFormatted: string;
    whatsappRaw: string;
    whatsappMessage: string;
    email: string;
    address: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    summary: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
    twitter: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    subheadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    stats: Array<{ value: string; label: string }>;
  };
  whyChooseUs: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  programs: GymProgram[];
  plans: GymPlan[];
  trainers: GymTrainer[];
  facilities: GymFacility[];
  gallery: GymGalleryItem[];
  testimonials: GymTestimonial[];
  faqs: GymFaq[];
  provider: {
    name: string;
    brandText: string;
    badgeText: string;
    url: string;
    poweredByText: string;
    footerText: string;
    demoNotice: string;
    ctaText: string;
    ctaWhatsappLink: string;
  };
}

export const gymConfig: GymConfig = {
  name: "IRONCORE FITNESS",
  legalName: "IronCore Fitness Club Pvt Ltd",
  shortName: "IronCore",
  tagline: "Train Strong. Live Strong.",
  taglineSecondary: "Where grit meets high performance training.",
  shortDescription:
    "IronCore Fitness is a premier athletic training facility engineered for real physical transformations. Featuring competition-grade equipment, world-class coaching, and a driven community.",
  detailedAbout:
    "Founded with a clear commitment to athletic excellence, IronCore Fitness delivers a training environment without shortcuts. Whether you are lifting a barbell for the first time or training for competitive sports, our 5,000+ sq. ft. facility combines science-based programming, Olympic-standard equipment, and an encouraging culture built on consistency.",
  mission:
    "To empower individuals of every fitness background with the coaching, equipment, and mindset required to achieve lasting strength, vitality, and resilience.",
  vision:
    "To set the benchmark for modern athletic training facilities across India through science-backed coaching and member-first care.",
  logo: {
    svg: "/images/ironcore-logo.svg",
    alt: "IronCore Fitness Club",
    width: 220,
    height: 55,
  },
  contact: {
    phoneFormatted: "+91 98765 43210",
    phoneRaw: "+919876543210",
    whatsappFormatted: "+91 98765 43210",
    whatsappRaw: "919876543210",
    whatsappMessage:
      "Hi IronCore Fitness! I saw your website and would like to claim my free 1-day guest pass.",
    email: "info@ironcorefitness.demo",
    address:
      "Plot 42, Olympia Sports Arena, Senapati Bapat Road, Shivajinagar",
    landmark: "Opposite Tech Park Gate 3",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411016",
    googleMapsUrl: "https://maps.google.com/?q=Pune+Maharashtra+Gym",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711153443!2d73.78056586321285!3d18.524598599484918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d3e3f32!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  },
  openingHours: {
    weekdays: "5:30 AM – 10:30 PM",
    saturday: "6:00 AM – 9:00 PM",
    sunday: "7:00 AM – 1:00 PM",
    summary: "Open 7 Days a Week • Extended Morning & Evening Slots",
  },
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
  hero: {
    badge: "PREMIUM ATHLETIC & STRENGTH FACILITY",
    headlinePart1: "BUILD YOUR",
    headlineHighlight: "STRONGEST SELF.",
    subheadline:
      "Train smarter. Get stronger. Experience a fitness club built for measurable physical results.",
    description:
      "A 5,000+ sq. ft. purpose-built facility combining Olympic lifting platforms, calibrated weights, functional turf, and expert personal trainers.",
    primaryCta: "Start Your Journey",
    secondaryCta: "Claim Free Trial Pass",
    image: "/images/hero-gym.jpg",
    stats: [
      { value: "5,000+", label: "Sq Ft Facility" },
      { value: "100+", label: "Modern Machines" },
      { value: "12+", label: "Elite Coaches" },
      { value: "98%", label: "Satisfaction Rate" },
    ],
  },
  whyChooseUs: [
    {
      title: "Commercial-Grade Equipment",
      description:
        "Calibrated Olympic barbells, custom bumper plates, heavy-duty power cages, and pin-loaded selectorized machines.",
      icon: "Dumbbell",
    },
    {
      title: "Certified Strength Coaches",
      description:
        "Every trainer holds internationally recognized certifications (CSCS, ACE, K11) with proven track records in transformation.",
      icon: "ShieldCheck",
    },
    {
      title: "Personalized Progression",
      description:
        "No generic routines. Every member receives form assessments, body composition tracking, and structured progression phases.",
      icon: "Target",
    },
    {
      title: "Hygienic & Well-Maintained",
      description:
        "Sanitized hourly with continuous fresh-air HEPA ventilation, pristine showers, and dedicated locker security.",
      icon: "Sparkles",
    },
    {
      title: "Flexible Membership Options",
      description:
        "Straightforward pricing with zero hidden admission fees, easy freeze policies, and transparent renewal discounts.",
      icon: "CalendarCheck",
    },
    {
      title: "Vibrant Community Atmosphere",
      description:
        "An encouraging, zero-ego environment where both newcomers and seasoned powerlifters push each other to excel.",
      icon: "Users",
    },
  ],
  programs: [
    {
      id: "strength-hypertrophy",
      title: "Strength & Muscle Building",
      tagline: "Compound lifts, progressive overload, and hypertrophy.",
      description:
        "Designed to systematically increase absolute strength, core stability, and muscle density through barbell mechanics and targeted accessory work.",
      intensity: "High",
      duration: "60 mins / session",
      idealFor: "Athletes, lifters, and anyone wanting to build lean muscle.",
      highlights: [
        "Periodized squat, bench & deadlift training",
        "Form correction & biomechanics analysis",
        "Customized accessory volume",
        "Weekly load tracking",
      ],
      image: "/images/strength-zone.jpg",
      iconName: "Dumbbell",
    },
    {
      id: "fat-loss-conditioning",
      title: "Fat Loss & Metabolic Conditioning",
      tagline: "High-yield interval circuits designed to burn fat and build stamina.",
      description:
        "Combines heart-rate-targeted cardio intervals with resistance circuits to maximize caloric expenditure and accelerate metabolic recovery.",
      intensity: "High",
      duration: "45–50 mins / session",
      idealFor: "Weight management, cardiovascular stamina, and endurance.",
      highlights: [
        "Kettlebell & dumbbell complexes",
        "Curved treadmills & assault bikes",
        "Targeted heart-rate zone tracking",
        "Metabolic post-burn focus",
      ],
      image: "/images/cardio-deck.jpg",
      iconName: "Flame",
    },
    {
      id: "functional-hiit",
      title: "Functional Turf & Athletic Agility",
      tagline: "Speed, agility, sled pushes, and multi-planar movement.",
      description:
        "Move the way your body was built to move. Train on our 30-meter indoor turf with sleds, battle ropes, plyometrics, and carry variations.",
      intensity: "High",
      duration: "50 mins / session",
      idealFor: "Sports performance, functional agility, and all-round athletic fitness.",
      highlights: [
        "Sled push & pull training",
        "Battle rope & slam ball conditioning",
        "Rotational core strength",
        "Footwork & plyometric agility",
      ],
      image: "/images/functional-turf.jpg",
      iconName: "Zap",
    },
    {
      id: "personal-training",
      title: "1-on-1 Dedicated Coaching",
      tagline: "100% focused attention, custom blueprint, and accountability.",
      description:
        "Work directly with an elite trainer who designs every set, monitors your nutritional intake, and adjusts your programming week by week.",
      intensity: "All Levels",
      duration: "60 mins / session",
      idealFor: "Beginners needing guidance, injury rehab, or fast-tracked goals.",
      highlights: [
        "Comprehensive mobility & posture assessment",
        "Tailored macro & nutritional roadmaps",
        "Direct coach WhatsApp support",
        "Guaranteed technique mastery",
      ],
      image: "/images/trainer-1.jpg",
      iconName: "Award",
    },
    {
      id: "powerlifting-olympic",
      title: "Powerlifting & Barbell Club",
      tagline: "Master the big three with competition platforms and calibrated plates.",
      description:
        "A dedicated space for heavy barbell enthusiasts. Train on competition-grade deadlift platforms with chalk stations and specialized bars.",
      intensity: "High",
      duration: "75 mins / session",
      idealFor: "Intermediate to advanced lifters aiming for personal records.",
      highlights: [
        "Competition-spec barbells and bumper plates",
        "Chalk allowed & platform deadlifts",
        "Velocity-based training feedback",
        "Meet prep & peaking protocols",
      ],
      image: "/images/deadlift-platform.jpg",
      iconName: "Activity",
    },
    {
      id: "mobility-core",
      title: "Mobility, Core & Recovery",
      tagline: "Prevent injuries, increase range of motion, and recover faster.",
      description:
        "Balance your heavy lifting with active myofascial release, joint decompression, hip opening, and deep core strengthening sessions.",
      intensity: "Beginner",
      duration: "40 mins / session",
      idealFor: "Desk workers, tight joints, post-workout recovery, and injury prevention.",
      highlights: [
        "Thoracic & hip mobility routines",
        "Foam rolling & soft tissue release",
        "Anti-rotational core stability",
        "Breathing mechanics & cooldowns",
      ],
      image: "/images/locker-lounge.jpg",
      iconName: "HeartPulse",
    },
  ],
  plans: [
    {
      id: "starter",
      name: "STARTER",
      tagline: "Essential access for consistent solo routines.",
      price: 999,
      period: "month",
      billingText: "Billed monthly • Cancel anytime",
      features: [
        "Full access to strength & cardio floors",
        "Locker room & shower access",
        "Complimentary fitness assessment",
        "Standard mobile check-in",
        "Water station & Wi-Fi access",
      ],
      ctaText: "Join Starter Plan",
    },
    {
      id: "pro",
      name: "PRO",
      tagline: "Our most popular tier for dedicated athletes.",
      price: 1499,
      period: "month",
      billingText: "Billed quarterly at ₹4,497 (Save 20%)",
      popular: true,
      badge: "MOST POPULAR",
      features: [
        "Everything in Starter plan",
        "Unlimited turf & functional zone access",
        "2 Free 1-on-1 Personal Training sessions",
        "Bi-weekly body composition & InBody scans",
        "Personal locker reservation included",
        "1 Free guest pass per month",
      ],
      ctaText: "Get Pro Membership",
    },
    {
      id: "elite",
      name: "ELITE",
      tagline: "The comprehensive high-performance package.",
      price: 2499,
      period: "month",
      billingText: "Billed annually at ₹24,990 (Best Value)",
      badge: "VIP EXPERIENCE",
      features: [
        "Everything in Pro plan",
        "4 Free 1-on-1 Personal Training sessions / month",
        "Custom nutrition & macro plan design",
        "Priority locker & sauna / steam access",
        "Complimentary gym shaker & starter merchandise",
        "Unlimited guest passes (on weekends)",
        "30-day membership freeze option anytime",
      ],
      ctaText: "Go Elite",
    },
  ],
  trainers: [
    {
      id: "marcus-vance",
      name: "Marcus Vance",
      role: "Head Strength & Conditioning Coach",
      certifications: ["CSCS", "USAW Level 2", "Precision Nutrition"],
      experience: "8+ Years Experience",
      specialization: "Barbell Mechanics, Powerlifting & Athletic Hypertrophy",
      bio: "Former collegiate strength coach specializing in compound lift mechanics and injury-resilient muscle building. Marcus has coached over 350 athletes and transformation clients.",
      image: "/images/trainer-1.jpg",
      socials: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: "sarah-jenkins",
      name: "Sarah Jenkins",
      role: "Lead Functional & Mobility Specialist",
      certifications: ["ACE-CPT", "K11 Master Trainer", "FMS Level 2"],
      experience: "6+ Years Experience",
      specialization: "Fat Loss, Functional Movement & Posture Alignment",
      bio: "Sarah focuses on building functional athletic bodies that look great and move pain-free. Her high-energy coaching combines metabolic conditioning with postural correction.",
      image: "/images/trainer-2.jpg",
      socials: {
        instagram: "https://instagram.com",
      },
    },
    {
      id: "arjun-sharma",
      name: "Arjun Sharma",
      role: "Olympic Lifting & Performance Coach",
      certifications: ["CrossFit Level 2", "NSCA-CPT", "ISSA"],
      experience: "7+ Years Experience",
      specialization: "Olympic Snatch & Clean, Plyometrics, HIIT",
      bio: "Arjun helps members develop explosive power and speed. His structured lifting progressions demystify the Olympic lifts for everyday athletes.",
      image: "/images/trainer-1.jpg",
      socials: {
        instagram: "https://instagram.com",
      },
    },
    {
      id: "priya-deshmukh",
      name: "Priya Deshmukh",
      role: "Cardio & Metabolic Transformation Coach",
      certifications: ["ACSM-CPT", "Reebok Certified Aerobics"],
      experience: "5+ Years Experience",
      specialization: "Body Recomposition, Female Strength & Endurance",
      bio: "Priya excels at taking beginner gym-goers and turning them into confident lifters with structured, supportive, and data-driven routines.",
      image: "/images/trainer-2.jpg",
      socials: {
        instagram: "https://instagram.com",
      },
    },
  ],
  facilities: [
    {
      id: "strength-zone",
      title: "Heavy Strength & Power Racks",
      tagline: "Engineered for heavy squats, benches, and pulls.",
      description:
        "Full lineup of commercial power cages, adjustable competition benches, Swiss bars, and rubber-coated Olympic plates.",
      features: [
        "6 Heavy-Duty Power Racks",
        "Competition Bench Presses",
        "Full Dumbbell Rack Up to 50kg",
        "Chalk Stand & Safety Straps",
      ],
      image: "/images/strength-zone.jpg",
    },
    {
      id: "cardio-deck",
      title: "High-Tech Cardio Deck",
      tagline: "Smooth, low-impact, and high-intensity stamina stations.",
      description:
        "Equipped with curved motorless treadmills, Concept2 rowing ergs, assault air bikes, and commercial stair climbers.",
      features: [
        "Motorless Curved Treadmills",
        "Concept2 Rowers & SkiErgs",
        "Assault Air Bikes",
        "Heart-rate synced displays",
      ],
      image: "/images/cardio-deck.jpg",
    },
    {
      id: "functional-turf",
      title: "30-Meter Functional Turf Track",
      tagline: "Run, push, pull, and jump on high-traction synthetic turf.",
      description:
        "Designed for sled pushes, farmer carries, plyometrics, kettlebell circuits, and athletic sprint acceleration.",
      features: [
        "Weighted Sleds & Harnesses",
        "Plyometric Soft Foam Boxes",
        "Competition Kettlebells 8kg–36kg",
        "Battle Ropes & Slam Balls",
      ],
      image: "/images/functional-turf.jpg",
    },
    {
      id: "olympic-platforms",
      title: "Olympic Lifting Deadlift Platforms",
      tagline: "Solid oak wood inserts with shock-absorbing rubber surround.",
      description:
        "Dedicated drop platforms built to handle dropped barbells, snatches, and cleans without vibration.",
      features: [
        "Shock-absorbent high density rubber",
        "Calibrated competition bumper plates",
        "Deadlift jacks & band pegs",
        "Barbell maintenance & chalk stations",
      ],
      image: "/images/deadlift-platform.jpg",
    },
    {
      id: "recovery-lounge",
      title: "Pristine Locker & Shower Suites",
      tagline: "Relax, refresh, and recharge after every intense session.",
      description:
        "Spacious changing quarters with digital keypad lockers, hot rainfall showers, vanity grooming counters, and fresh towels.",
      features: [
        "Electronic Keyless Lockers",
        "High-Pressure Rain Showers",
        "Grooming stations & hair dryers",
        "Continuous hygiene sanitization",
      ],
      image: "/images/locker-lounge.jpg",
    },
    {
      id: "coaching-studio",
      title: "Private 1-on-1 Coaching Studio",
      tagline: "Uninterrupted focus for personal training clients.",
      description:
        "A private room for initial fitness screenings, body composition testing, and dedicated private training sessions.",
      features: [
        "InBody Body Composition Analyzer",
        "Postural & FMS Screening Grid",
        "Private coaching apparatus",
        "Hydration & Supplement Bar",
      ],
      image: "/images/hero-gym.jpg",
    },
  ],
  gallery: [
    {
      id: "g1",
      title: "Main Strength Floor",
      category: "Strength",
      caption: "Panoramic view of our main lifting arena and power cages.",
      image: "/images/hero-gym.jpg",
    },
    {
      id: "g2",
      title: "Heavy Dumbbell Pit",
      category: "Strength",
      caption: "Cast iron and polyurethane dumbbells organized in pairs up to 50kg.",
      image: "/images/strength-zone.jpg",
    },
    {
      id: "g3",
      title: "High-Octane Cardio Deck",
      category: "Cardio",
      caption: "Endurance station with curved treadmills overlooking city skyline.",
      image: "/images/cardio-deck.jpg",
    },
    {
      id: "g4",
      title: "Athletic Turf & Sled Track",
      category: "Facilities",
      caption: "High-traction turf lane for metabolic conditioning and functional sprints.",
      image: "/images/functional-turf.jpg",
    },
    {
      id: "g5",
      title: "Olympic Lifting Platform",
      category: "Strength",
      caption: "Competition-grade wooden platform with calibrated bumper plates.",
      image: "/images/deadlift-platform.jpg",
    },
    {
      id: "g6",
      title: "Coach Guidance & Technique",
      category: "Coaching",
      caption: "Head coach Marcus instructing form on barbell compound lifts.",
      image: "/images/trainer-1.jpg",
    },
    {
      id: "g7",
      title: "Functional Movement Coaching",
      category: "Coaching",
      caption: "Lead trainer Sarah guiding client through mobility progressions.",
      image: "/images/trainer-2.jpg",
    },
    {
      id: "g8",
      title: "Executive Locker & Recovery Lounge",
      category: "Facilities",
      caption: "Sanitized private locker rooms with rainfall showers.",
      image: "/images/locker-lounge.jpg",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Rohan Kulkarni",
      membershipDuration: "Member for 14 Months",
      goalAchieved: "Lost 14 kg & Deadlifted 180 kg",
      rating: 5,
      quote:
        "The atmosphere at IronCore is completely different from ordinary commercial gyms. The equipment is top-tier, trainers actually pay attention to your form, and the environment pushes you to show up consistently.",
      avatarInitials: "RK",
    },
    {
      id: "t2",
      name: "Ananya Mehta",
      membershipDuration: "Member for 8 Months",
      goalAchieved: "Rehabilitated Lower Back & Gained Core Strength",
      rating: 5,
      quote:
        "I was intimidated by barbell training before joining, but Coach Sarah made the fundamentals crystal clear. The facility is spotlessly clean and everyone is genuinely encouraging.",
      avatarInitials: "AM",
    },
    {
      id: "t3",
      name: "Vikram Sengupta",
      membershipDuration: "Member for 2 Years",
      goalAchieved: "Increased Squat by 45 kg & Completed Half-Marathon",
      rating: 5,
      quote:
        "Having access to calibrated plates and Olympic platforms right in Pune is a game-changer. The Pro membership is worth every rupee. Best training investment I have made.",
      avatarInitials: "VS",
    },
    {
      id: "t4",
      name: "Sneha Patil",
      membershipDuration: "Member for 6 Months",
      goalAchieved: "Body Fat Dropped from 29% to 21%",
      rating: 5,
      quote:
        "The turf sprint track and kettlebell circuits are incredible. If you are serious about real health results without the sales gimmicks, this is the gym.",
      avatarInitials: "SP",
    },
  ],
  faqs: [
    {
      question: "Can I try out the gym before purchasing a membership?",
      answer:
        "Yes! We offer a complimentary 1-Day Guest Pass for first-time visitors so you can test our equipment, meet the coaches, and experience the facility. Click 'Claim Free Trial' or message us on WhatsApp to reserve your slot.",
    },
    {
      question: "What are the gym operating hours?",
      answer:
        "We are open 7 days a week. Monday through Friday: 5:30 AM to 10:30 PM. Saturday: 6:00 AM to 9:00 PM. Sunday: 7:00 AM to 1:00 PM.",
    },
    {
      question: "Is personal training mandatory, or can I train independently?",
      answer:
        "All our memberships include full independent access to the entire training floor, lockers, and cardio deck. Personal coaching is available as an optional add-on or included in our Elite membership.",
    },
    {
      question: "Can I freeze or pause my membership if I travel?",
      answer:
        "Yes! Pro and Elite memberships allow you to pause your membership for up to 30 days per annual cycle with zero administrative fees. Simply notify the front desk or via WhatsApp.",
    },
    {
      question: "Is the gym beginner-friendly?",
      answer:
        "Absolutely. Every new member receives a complimentary movement screening and equipment walkthrough with a certified trainer to ensure you feel confident and safe from day one.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "We accept UPI (Google Pay, PhonePe, Paytm), all major credit/debit cards, Net Banking, and cash at the front desk.",
    },
  ],
  provider: {
    name: "ChaloBuild",
    brandText: "ChaloBuild",
    badgeText: "ChaloBuild Gym Website Template",
    url: "https://chalobuild.com",
    poweredByText: "Powered by ChaloBuild",
    footerText: "Website & Gym Management by ChaloBuild",
    demoNotice:
      "Demo Website Template • Created by ChaloBuild for Fitness Centers & Gym Owners",
    ctaText: "Get This Website & Management System for Your Gym",
    ctaWhatsappLink:
      "https://wa.me/919876543210?text=Hi%20ChaloBuild!%20I%20love%20the%20IronCore%20gym%20website%20template%20and%20want%20to%20discuss%20setting%20up%20a%20website%20and%20management%20system%20for%20my%20gym.",
  },
};
