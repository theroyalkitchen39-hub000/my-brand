/**
 * ============================================================================
 * FOOD O'CLOCK — EDITABLE BRAND, STORY, GALLERY, ABOUT & CONTACT DATA
 * ============================================================================
 * Update copy, time slots, team members, FAQs, or contact details here
 * without touching layout or page components.
 * ============================================================================
 */

export const BRAND_CONFIG = {
  name: "FOOD O'CLOCK",
  tagline: "IT'S ALWAYS FOOD O'CLOCK.",
  concept: 'Your Cravings Have a Schedule.',
  established: '2022',
  city: 'Lahore · Karachi · Islamabad',
  email: 'hello@foodoclock.pk',
  phone: '+92 300 000 3663',
  hours: 'Mon–Wed 12:00 PM – 1:00 AM · Thu–Sun 12:00 PM – 3:00 AM',
  flagshipAddress: '42-C Gulberg III, Main Boulevard, Lahore',
  socials: [
    { label: 'Instagram', handle: '@foodoclock.pk', href: 'https://instagram.com' },
    { label: 'TikTok', handle: '@foodoclockpk', href: 'https://tiktok.com' },
    { label: 'YouTube', handle: '@foodoclockkitchen', href: 'https://youtube.com' },
  ],
};

export const TICKER_ITEMS: string[] = [
  "IT'S ALWAYS FOOD O'CLOCK",
  'FRESH SMASHED TO ORDER',
  'GRILL OPEN UNTIL 3:00 AM THU–SUN',
  '48-HOUR SOURDOUGH PIZZA DOUGH',
  'PKR 2,150 CAMPUS BOX DAILY 3–7 PM',
  'ZERO FREEZER BEEF · 100% HALAL',
];

export interface CravingSlot {
  id: string;
  hourLabel: string;
  clockTime: string;
  hourAngle: number;
  minuteAngle: number;
  moodTitle: string;
  description: string;
  recommendedItemId: string;
  recommendedName: string;
  pricePkr: number;
}

export const CRAVING_SLOTS: CravingSlot[] = [
  {
    id: 'lunch-rush',
    hourLabel: '12:30 PM',
    clockTime: 'Lunch Rush',
    hourAngle: 15,
    minuteAngle: 180,
    moodTitle: 'Beat the midday slump with crunch.',
    description:
      'Quick griddle-toasted wraps and electric lime fizz engineered for 35-minute lecture gaps.',
    recommendedItemId: 'zesty-nashville-wrap',
    recommendedName: 'Campus Crispy Wrap',
    pricePkr: 950,
  },
  {
    id: 'campus-break',
    hourLabel: '04:00 PM',
    clockTime: 'Campus Break',
    hourAngle: 120,
    minuteAngle: 0,
    moodTitle: 'Loaded trays built for table sharing.',
    description:
      'Golden fries drowned in cheddar queso, jalapenos, and spicy chicken bites right after class.',
    recommendedItemId: 'loaded-chaos-fries',
    recommendedName: 'Volcano Loaded Fries',
    pricePkr: 890,
  },
  {
    id: 'dinner-drop',
    hourLabel: '08:30 PM',
    clockTime: 'Prime Dinner',
    hourAngle: 255,
    minuteAngle: 180,
    moodTitle: 'Double smash patties on hot steel.',
    description:
      'Caramelized lacy edges, melted cheddar, and house orange chili mayo when dinner means business.',
    recommendedItemId: 'smash-double-clock',
    recommendedName: 'Double O’Clock Smash',
    pricePkr: 1350,
  },
  {
    id: 'midnight-crave',
    hourLabel: '01:00 AM',
    clockTime: 'Midnight Crave',
    hourAngle: 30,
    minuteAngle: 0,
    moodTitle: 'Late-night pizza pull & cold brew shakes.',
    description:
      'Blistered hot-honey pepperoni slices and creamy salted caramel shakes while the rest of the street sleeps.',
    recommendedItemId: 'hot-honey-pepperoni',
    recommendedName: 'Hot Honey Pepperoni Pie',
    pricePkr: 2150,
  },
];

export interface GalleryStory {
  id: string;
  chapter: string;
  timeStamp: string;
  title: string;
  caption: string;
  storyText: string;
  image: string;
  imageAlt: string;
  layout: 'wide' | 'split-left' | 'split-right';
  linkedCategory: string;
}

export const GALLERY_STORIES: GalleryStory[] = [
  {
    id: 'story-sear',
    chapter: '01',
    timeStamp: '450°F Flat-Top',
    title: 'The Lace-Edge Smash',
    caption: 'Zero fillers. Fresh local beef pressed paper-thin onto seasoned steel.',
    storyText:
      'Every patty hits the 450°F griddle as a hand-rolled sphere and gets smashed once with heavy iron. Those crispy, caramelized edges lock in juices in under ninety seconds.',
    image: '/src/assets/images/gallery_kitchen_fire_1794861039136.jpg',
    imageAlt: 'Chef pressing smashed burger patties on a sizzling stainless steel griddle',
    layout: 'wide',
    linkedCategory: 'Burgers',
  },
  {
    id: 'story-pull',
    chapter: '02',
    timeStamp: '48-Hour Ferment',
    title: 'Blistered Crust & Hot Honey',
    caption: 'Sourdough pizza dough aged two full days for airy crunch.',
    storyText:
      'We let our dough cold-ferment for 48 hours before stretching it by hand, topping it with curled beef pepperoni, mozzarella, and a finishing ribbon of house chili honey.',
    image: '/src/assets/images/menu_pizza_slice_1794861036665.jpg',
    imageAlt: 'Artisan pepperoni sourdough pizza with molten cheese pull',
    layout: 'split-left',
    linkedCategory: 'Pizza',
  },
  {
    id: 'story-midnight',
    chapter: '03',
    timeStamp: '01:15 AM Booths',
    title: 'After-Hours Table Rituals',
    caption: 'Where thesis deadlines turn into shared pizza boxes and fries.',
    storyText:
      'Food O’Clock was built around the hours students actually live—post-concert hangs, late library runs, and Friday nights that refuse to end early.',
    image: '/src/assets/images/gallery_late_night_hangout_1794861039792.jpg',
    imageAlt: 'Friends laughing together in a dimly lit fast-food booth over burgers and pizza boxes',
    layout: 'split-right',
    linkedCategory: 'Fries',
  },
  {
    id: 'story-crunch',
    chapter: '04',
    timeStamp: 'Daily Prep 09:00 AM',
    title: 'Acid, Heat & Crunch',
    caption: 'Fresh purple cabbage slaw, pickled red onions, and lime crema.',
    storyText:
      'Great fast food isn’t heavy—it’s balanced. Sharp pickled onions and bright coriander lime crema cut cleanly through crispy Nashville-spiced tenders.',
    image: '/src/assets/images/menu_crispy_wrap_1794861037430.jpg',
    imageAlt: 'Toasted crispy chicken wrap cut open showing crunchy slaw and lime crema',
    layout: 'split-left',
    linkedCategory: 'Wraps',
  },
  {
    id: 'story-chill',
    chapter: '05',
    timeStamp: 'Cold Bar',
    title: 'Fizz & Cold Brew Fuel',
    caption: 'Pressed citrus mint sodas and espresso gelato shakes.',
    storyText:
      'Whether you need an ice-cold citrus reset alongside loaded fries or a salted caramel cold brew shake to power a late drive home, the drink bar runs non-stop.',
    image: '/src/assets/images/menu_craft_drinks_1794861038187.jpg',
    imageAlt: 'Electric lime mint fizz and salted caramel cold brew shake side by side',
    layout: 'wide',
    linkedCategory: 'Drinks',
  },
];

export const ABOUT_VALUES = [
  {
    number: '01',
    title: 'Zero Shortcuts on Freshness',
    summary:
      'We grind beef daily, cold-ferment pizza dough for 48 hours, and whisk every sauce from scratch before doors open at noon.',
  },
  {
    number: '02',
    title: 'Clocked for Real Schedules',
    summary:
      'Student budgets, 12-minute class breaks, and 2 AM cravings deserve real food—never stale heat-lamp leftovers.',
  },
  {
    number: '03',
    title: 'Loud Flavor, Honest Pricing',
    summary:
      'Every burger, wrap, and combo box is priced transparently in PKR with generous portions that keep your crew full.',
  },
];

export const BRAND_TIMELINE = [
  {
    year: '2022',
    title: 'One Flat-Top in Gulberg',
    detail:
      'Started as a 16-seat late-night burger counter serving smashed patties out of a converted garage until 2 AM.',
  },
  {
    year: '2023',
    title: 'The Sourdough & Fries Expansion',
    detail:
      'Added our 48-hour fermented pizza oven and Volcano Loaded Fries, turning into the campus after-hours hangout.',
  },
  {
    year: '2024',
    title: 'Three Cities & The 4 PM Campus Box',
    detail:
      'Opened kitchens near university hubs in Lahore, Karachi, and Islamabad with student-friendly combo pricing.',
  },
  {
    year: '2026',
    title: 'Always Food O’Clock',
    detail:
      'Serving over 4,500 fresh-smashed meals weekly with zero frozen patties and late-night hours Thu–Sun until 3 AM.',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Zainab Tariq',
    role: 'Co-Founder & Culinary Director',
    bio: 'Former pastry and sourdough nerd obsessed with crust blistering, house sauces, and crisp-to-tender ratios.',
    specialty: 'Hot Honey Pepperoni Pie',
  },
  {
    name: 'Hamza Qureshi',
    role: 'Co-Founder & Grill Lead',
    bio: 'Designed our 450°F smash technique and the signature orange chili mayo after 200 test batches.',
    specialty: 'Double O’Clock Smash',
  },
  {
    name: 'Bilal Siddiqui',
    role: 'Head of Beverage & Night Ops',
    bio: 'Keeps the cold brew shakes pouring and every Thursday–Sunday night shift humming cleanly past 3 AM.',
    specialty: 'Cold Brew Caramel Shake',
  },
];

export const CONTACT_FAQS = [
  {
    id: 'faq-halal',
    question: 'Is everything on the FOOD O’CLOCK menu 100% Halal?',
    answer:
      'Yes. Every cut of beef, chicken, pepperoni, and dairy ingredient is sourced from certified 100% Halal local suppliers.',
  },
  {
    id: 'faq-late',
    question: 'How late does the kitchen stay open for dine-in and pickup?',
    answer:
      'Monday through Wednesday we serve until 1:00 AM. Thursday through Sunday our grill and pizza oven stay firing until 3:00 AM.',
  },
  {
    id: 'faq-student',
    question: 'How do student deals and the 4 PM Campus Box work?',
    answer:
      'Between 3:00 PM and 7:00 PM daily, anyone ordering the 4 PM Campus Box gets our bundled combo rate—plus students with a valid campus ID get 20% off single burgers and wraps in-store.',
  },
  {
    id: 'faq-bag',
    question: 'Does the Add to Bag button process online payments right now?',
    answer:
      'This website showcases an interactive demo Order Bag so you can plan your craving schedule and estimate totals in PKR. No online payment, account login, or checkout submission is active here.',
  },
  {
    id: 'faq-allergens',
    question: 'Can I customize spice levels or skip dairy/pickles?',
    answer:
      'At our kitchen counters, you can dial heat from Mild to Midnight Hot on any Nashville chicken item, swap sauces, or ask for lettuce-wrapped smash patties.',
  },
];
