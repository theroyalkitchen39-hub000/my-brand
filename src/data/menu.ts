/**
 * ============================================================================
 * FOOD O'CLOCK — EDITABLE MENU & DEALS DATA FILE
 * ============================================================================
 * HOW TO EDIT THIS FILE:
 * 1. Add a category: Append a new string to `MENU_CATEGORIES` below.
 * 2. Add/remove products: Edit items inside `MENU_ITEMS`.
 * 3. Change prices/descriptions: Update `pricePkr` or `description` on any item.
 * 4. Add/remove deals: Edit `SPECIAL_DEALS` or `PROMO_BANNERS`.
 * ============================================================================
 */

export type MenuCategory =
  | 'All'
  | 'Burgers'
  | 'Pizza'
  | 'Fries'
  | 'Wraps'
  | 'Sides'
  | 'Drinks'
  | (string & {});

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  pricePkr: number;
  description: string;
  prepTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  note?: string;
}

export interface SpecialDeal {
  id: string;
  title: string;
  subtitle: string;
  includes: string[];
  originalPricePkr: number;
  dealPricePkr: number;
  scheduleSlot: string;
  image: string;
  imageAlt: string;
}

export interface PromoBanner {
  id: string;
  kicker: string;
  headline: string;
  detail: string;
  actionLabel: string;
  targetCategory?: MenuCategory;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  'All',
  'Burgers',
  'Pizza',
  'Fries',
  'Wraps',
  'Sides',
  'Drinks',
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'smash-double-clock',
    name: 'Double O’Clock Smash',
    category: 'Burgers',
    pricePkr: 1350,
    description:
      'Two lacy-edged beef patties, double sharp cheddar, charred sweet onions, dill pickles, and house orange chili mayo on a toasted brioche bun.',
    prepTime: '12 mins',
    image: '/src/assets/images/hero_smash_burger_1794861035577.jpg',
    imageAlt: 'Double O’Clock Smash beef burger with melted cheddar on toasted brioche bun',
    featured: true,
    note: 'House Signature',
  },
  {
    id: 'nashville-crunch-burger',
    name: 'Midnight Crunch Chicken',
    category: 'Burgers',
    pricePkr: 1180,
    description:
      'Buttermilk-brined crispy chicken thigh dusted in smoky cayenne, house slaw, crunchy pickles, and lime-garlic crema.',
    prepTime: '14 mins',
    image: '/src/assets/images/menu_chicken_combo_1794861037389.jpg',
    imageAlt: 'Midnight Crunch crispy fried chicken burger with pickles and house sauce',
    featured: true,
    note: 'Spicy Kick',
  },
  {
    id: 'hot-honey-pepperoni',
    name: 'Hot Honey Pepperoni Pie',
    category: 'Pizza',
    pricePkr: 2150,
    description:
      '48-hour fermented blistered sourdough crust, crushed San Marzano style tomato base, curled beef pepperoni, fresh mozzarella, and chili honey drizzle.',
    prepTime: '16 mins',
    image: '/src/assets/images/menu_pizza_slice_1794861036665.jpg',
    imageAlt: 'Blistered sourdough pepperoni pizza with mozzarella pull and hot honey drizzle',
    featured: true,
    note: '48h Dough',
  },
  {
    id: 'late-night-margherita',
    name: 'Charcoal Roasted Margherita',
    category: 'Pizza',
    pricePkr: 1790,
    description:
      'Wood-fired thin crust topped with fior di latte mozzarella, blistered cherry tomatoes, sweet basil, and cold-pressed garlic oil.',
    prepTime: '15 mins',
    image: '/src/assets/images/menu_pizza_slice_1794861036665.jpg',
    imageAlt: 'Artisan wood-fired pizza slice with melted cheese and fresh basil',
  },
  {
    id: 'loaded-chaos-fries',
    name: 'Volcano Loaded Fries',
    category: 'Fries',
    pricePkr: 890,
    description:
      'Double-cooked skin-on fries drowned in spiced cheddar queso, crispy Nashville chicken bites, sliced jalapenos, and scallions.',
    prepTime: '10 mins',
    image: '/src/assets/images/menu_loaded_fries_1794861036456.jpg',
    imageAlt: 'Crispy golden loaded fries topped with melted cheddar, crispy chicken bites, and jalapenos',
    featured: true,
    note: 'Best Seller',
  },
  {
    id: 'waffle-dust-fries',
    name: 'Lime & Chili Waffle Fries',
    category: 'Fries',
    pricePkr: 620,
    description:
      'Crisscross potato waffles tossed hot from the fryer in zesty citrus salt, smoked paprika, and served with cool herb ranch.',
    prepTime: '8 mins',
    image: '/src/assets/images/menu_chicken_combo_1794861037389.jpg',
    imageAlt: 'Golden seasoned waffle fries served with dipping sauce',
  },
  {
    id: 'zesty-nashville-wrap',
    name: 'Campus Crispy Wrap',
    category: 'Wraps',
    pricePkr: 950,
    description:
      'Griddle-toasted flour tortilla packed with crunchy chicken tenders, purple cabbage slaw, pickled red onions, and coriander lime crema.',
    prepTime: '10 mins',
    image: '/src/assets/images/menu_crispy_wrap_1794861037430.jpg',
    imageAlt: 'Toasted crispy chicken wrap sliced in half showing purple slaw and lime crema',
    featured: true,
    note: 'Grab & Go',
  },
  {
    id: 'smoked-smash-wrap',
    name: 'Grilled Smash Quesadilla Wrap',
    category: 'Wraps',
    pricePkr: 1090,
    description:
      'Seared minced beef, molten cheddar-jack blend, caramelized onions, and chipotle glaze folded and pressed crisp.',
    prepTime: '11 mins',
    image: '/src/assets/images/menu_crispy_wrap_1794861037430.jpg',
    imageAlt: 'Griddle pressed wrap stuffed with crispy filling and fresh slaw',
  },
  {
    id: 'glazed-wing-box',
    name: '6pc Sticky Chili Wings',
    category: 'Sides',
    pricePkr: 980,
    description:
      'Double-fried wings glazed in toasted sesame-chili honey, finished with spring onions and a side of creamy ranch.',
    prepTime: '12 mins',
    image: '/src/assets/images/menu_chicken_combo_1794861037389.jpg',
    imageAlt: 'Six sticky glazed crispy chicken wings topped with sesame seeds and green onions',
  },
  {
    id: 'house-dip-trio',
    name: 'Signature Dip Flight (3x)',
    category: 'Sides',
    pricePkr: 340,
    description:
      'House orange chili mayo, cool buttermilk ranch, and zesty coriander lime crema — made fresh every morning.',
    prepTime: '2 mins',
    image: '/src/assets/images/menu_loaded_fries_1794861036456.jpg',
    imageAlt: 'Three housemade dipping sauces paired with street food',
  },
  {
    id: 'electric-lime-fizz',
    name: 'Electric Lime Mint Fizz',
    category: 'Drinks',
    pricePkr: 420,
    description:
      'Crushed fresh mint, hand-squeezed lime, sparkling soda water, and a crisp citrus rim built to cut through rich smash burgers.',
    prepTime: '3 mins',
    image: '/src/assets/images/menu_craft_drinks_1794861038187.jpg',
    imageAlt: 'Chilled sparkling electric lime mint fizz with crushed ice and fresh lime wheel',
    featured: true,
    note: 'Zero Caffeine',
  },
  {
    id: 'salted-caramel-shake',
    name: 'Cold Brew Caramel Shake',
    category: 'Drinks',
    pricePkr: 690,
    description:
      'Slow-steeped cold brew espresso spun with Madagascar vanilla gelato, burnt salted caramel swirl, and toasted brittle.',
    prepTime: '4 mins',
    image: '/src/assets/images/menu_craft_drinks_1794861038187.jpg',
    imageAlt: 'Iced salted caramel cold brew shake topped with whipped cream and caramel drizzle',
  },
];

export const SPECIAL_DEALS: SpecialDeal[] = [
  {
    id: 'deal-study-sprint',
    title: 'The 4 PM Campus Box',
    subtitle: 'Built for post-lecture hunger between classes and studio nights.',
    includes: [
      '1x Midnight Crunch Chicken Burger',
      '1x Seasoned Waffle Fries',
      '3pc Sticky Chili Wings',
      '1x Electric Lime Mint Fizz',
    ],
    originalPricePkr: 2710,
    dealPricePkr: 2150,
    scheduleSlot: '15:00 – 19:00 Daily',
    image: '/src/assets/images/menu_chicken_combo_1794861037389.jpg',
    imageAlt: 'The 4 PM Campus Box combo featuring crispy chicken burger, waffle fries, wings, and lime soda',
  },
  {
    id: 'deal-midnight-duo',
    title: 'Midnight Crave Duo',
    subtitle: 'Two smash legends, volcano fries, and double shakes for late-night crews.',
    includes: [
      '2x Double O’Clock Smash Burgers',
      '1x Volcano Loaded Fries (Share Size)',
      '2x Electric Lime Mint Fizz',
    ],
    originalPricePkr: 4430,
    dealPricePkr: 3650,
    scheduleSlot: '22:00 – 03:00 Night Shift',
    image: '/src/assets/images/hero_smash_burger_1794861035577.jpg',
    imageAlt: 'Double O’Clock Smash burger combo prepared for late-night sharing',
  },
  {
    id: 'deal-squad-slice',
    title: 'Squad Pizza & Wings Drop',
    subtitle: 'Zero dishwashing, maximum cheese pull for dorm hangouts and watch parties.',
    includes: [
      '1x Hot Honey Pepperoni Pie (Large)',
      '6pc Sticky Chili Wings',
      '1x Signature Dip Flight',
    ],
    originalPricePkr: 3470,
    dealPricePkr: 2890,
    scheduleSlot: 'All Day Weekend',
    image: '/src/assets/images/menu_pizza_slice_1794861036665.jpg',
    imageAlt: 'Large hot honey pepperoni sourdough pizza paired with wings',
  },
];

export const PROMO_BANNERS: PromoBanner[] = [
  {
    id: 'banner-student-hour',
    kicker: 'Campus Clock Perk',
    headline: 'Flat 20% Off Combos Between 3 PM & 6 PM',
    detail: 'Flash any valid university or college ID at our counter or apply the Campus Box deal directly in your demo bag.',
    actionLabel: 'Browse Wraps & Burgers',
    targetCategory: 'Burgers',
  },
  {
    id: 'banner-night-owl',
    kicker: 'Night Owl Kitchen',
    headline: 'Grill Stays Hot Until 3:00 AM Thu–Sun',
    detail: 'Freshly smashed beef, hot honey pizza slices, and cold brew shakes served way past midnight.',
    actionLabel: 'Explore Late-Night Fries',
    targetCategory: 'Fries',
  },
];

export function formatPkr(amount: number): string {
  return `PKR ${amount.toLocaleString('en-PK')}`;
}
