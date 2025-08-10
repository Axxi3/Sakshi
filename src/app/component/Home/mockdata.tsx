// data/treatments.ts
export interface Treatment {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
}

// data/treatments.ts (Enhanced version)
export const treatmentsData: Treatment[] = [
  {
    id: 1,
    title: "Panchakarma",
    description: "Complete detoxification and rejuvenation therapy to restore balance and vitality.",
    icon: "🌿",
    category: "Detoxification"
  },
  {
    id: 2,
    title: "Abhyanga",
    description: "Full-body therapeutic oil massage to improve circulation and promote relaxation.",
    icon: "💆‍♀️",
    category: "Massage Therapy"
  },
  {
    id: 3,
    title: "Shirodhara",
    description: "Continuous oil pouring therapy for mental relaxation and stress relief.",
    icon: "🫗",
    category: "Mental Wellness"
  },
  {
    id: 4,
    title: "Nasya",
    description: "Nasal administration of medicated oils for respiratory and neurological health.",
    icon: "🌸",
    category: "Respiratory Care"
  },
  {
    id: 5,
    title: "Udvartana",
    description: "Herbal powder massage for weight management and skin rejuvenation.",
    icon: "🌾",
    category: "Body Therapy"
  },
  {
    id: 6,
    title: "Marma Therapy",
    description: "Vital point stimulation to enhance energy flow and healing.",
    icon: "⚡",
    category: "Energy Healing"
  }
];

