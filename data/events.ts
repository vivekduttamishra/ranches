
import { EventData } from '../types';

export const EVENTS_DB: Record<string, EventData> = {
  'republic-day-2026': {
    id: 'republic-day-2026',
    title: '77th Republic Day Celebration',
    date: 'Jan 26, 2026',
    time: '08:30 AM onwards',
    location: 'Main Flag Hoisting Area (Front Gate)',
    description: 'Join us for the flag hoisting ceremony followed by breakfast and patriotic cultural performances.',
    longDescription: 'Mahaveer Ranches celebrates the spirit of India. This year, we are focusing on "Viksit Bharat" with a grand parade by the children of the community, followed by a formal flag hoisting ceremony by the senior-most residents of our society.',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '08:30 AM - Assembly of Residents',
      '08:45 AM - Guard of Honor by Security Team',
      '09:00 AM - Flag Hoisting & National Anthem',
      '09:15 AM - Speech by AOA President',
      '09:30 AM - Cultural Performances by Kids',
      '10:30 AM - Community Breakfast'
    ],
    guidelines: [
      'Dress Code: Ethnic / White',
      'Please arrive by 08:20 AM to ensure smooth assembly',
      'Parking will be restricted near the front gate area from 07:00 AM',
      'Breakfast coupons available at the AOA office'
    ],
    type: "National Event",
    color: "blue",
    tag: "National Day"
  },
  'sankranti-2026': {
    id: 'sankranti-2026',
    title: 'Makar Sankranti Kite Festival',
    date: 'Jan 14, 2026',
    time: '03:00 PM - 07:00 PM',
    location: 'Grand Lawn & Clubhouse Rooftop',
    description: 'A sky full of colors: Kite flying competition and traditional Sankranti feast.',
    longDescription: 'Experience the joy of Makar Sankranti with our annual kite flying festival. We provide the kites and the strings; you bring the skill! Enjoy traditional sweets like Til-Gul and Pongal served at our community stalls.',
    image: 'https://images.unsplash.com/photo-1590422955512-1f4863f6e522?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '03:00 PM - Kite Distribution',
      '03:30 PM - Competition Begins (Kids Category)',
      '04:30 PM - Pro Kite Flying Showcase',
      '05:30 PM - Award Ceremony',
      '06:00 PM - Traditional Feast & Music'
    ],
    guidelines: [
      'Eco-friendly cotton strings (Manjha) only',
      'Children must be accompanied by adults at the rooftop',
      'Traditional attire encouraged'
    ],
    type: "Festival",
    color: "green",
    tag: "Cultural"
  },
  'lohri-2026': {
    id: 'lohri-2026',
    title: 'Lohri Bonfire Night',
    date: 'Jan 13, 2026',
    time: '06:30 PM onwards',
    location: 'Central Courtyard',
    description: 'The warmth of bonfire, traditional dhol, and community celebration.',
    longDescription: 'Let us celebrate the harvest festival together with the warmth of a community bonfire. We have arranged for a live Dhol troupe and authentic Punjabi snacks (Popcorn, Revari, Gajak) for all residents.',
    image: 'https://images.unsplash.com/photo-1574092524457-3f82e66699da?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '06:30 PM - Lighting of the Bonfire',
      '07:00 PM - Traditional Rituals & Offerings',
      '07:30 PM - Live Dhol & Bhangra Performances',
      '08:30 PM - Community Dinner'
    ],
    guidelines: [
      'Maintain safe distance from the central bonfire',
      'Avoid throwing plastic or non-combustible items into the fire',
      'Resident ID cards mandatory for dinner entry'
    ],
    type: "Festivity",
    color: "orange",
    tag: "Festivity"
  },
  'saraswati-pooja-2026': {
    id: 'saraswati-pooja-2026',
    title: 'Saraswati Pooja & Cultural Meet',
    date: 'Jan 23, 2026',
    time: '10:00 AM - 01:00 PM',
    location: 'Clubhouse Temple Area',
    description: 'Celebrating Vasant Panchami with community pooja and cultural activities for students.',
    longDescription: 'Invoking the goddess of knowledge and arts. This year, we are hosting a special "Hatey Khori" ceremony for the toddlers of our community starting their education journey.',
    image: 'https://images.unsplash.com/photo-1614700166444-48677a561172?auto=format&fit=crop&w=1600&q=80',
    agenda: [
      '10:00 AM - Saraswati Vandana',
      '10:30 AM - Hatey Khori Ceremony',
      '11:30 AM - Pushpanjali (Offerings)',
      '12:30 PM - Distribution of Bhog/Prasadam'
    ],
    guidelines: [
      'Yellow attire is preferred',
      'Bring your books/pens for the blessings area',
      'Volunteers needed for prasadam distribution'
    ],
    type: "Cultural",
    color: "yellow",
    tag: "Tradition"
  }
};

export const ALL_EVENTS = Object.values(EVENTS_DB);
