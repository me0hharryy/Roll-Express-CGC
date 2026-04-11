// ============================================
// ROLL EXPRESS — Complete Menu Data
// ============================================

export const menuCategories = [
  {
    id: 'holy-aloo',
    name: 'HOLY ALOO SIN',
    emoji: '🥔',
    tagline: 'Where it all begins — the humble aloo, elevated.',
    hasSinDbl: true,
    items: [
      { id: 'a1', name: 'Aloo Roll', sin: 70, dbl: 80 },
      { id: 'a2', name: 'Tandoori Aloo Roll', sin: 80, dbl: 100 },
    ],
  },
  {
    id: 'garden-edit',
    name: 'THE GARDEN EDIT',
    emoji: '🌿',
    tagline: 'Fresh from the garden, wrapped to perfection.',
    hasSinDbl: true,
    items: [
      { id: 'g1', name: 'Veggie Roll', sin: 80, dbl: 100 },
      { id: 'g2', name: 'Mix Veg Paneer Roll', sin: 90, dbl: 110 },
    ],
  },
  {
    id: 'paneer-premiere',
    name: 'PANEER PREMIERE',
    emoji: '🧀',
    tagline: 'The star of Indian street food — paneer royalty.',
    hasSinDbl: true,
    items: [
      { id: 'p1', name: 'Paneer Roll', sin: 100, dbl: 120 },
      { id: 'p2', name: 'Paneer Malai Tikka Roll', sin: 110, dbl: 140 },
      { id: 'p3', name: 'Paneer Bhurji Roll', sin: 110, dbl: 140 },
      { id: 'p4', name: 'Achari Paneer Roll', sin: 110, dbl: 140 },
    ],
  },
  {
    id: 'tales-of-chaap',
    name: 'TALES OF CHAAP',
    emoji: '🫓',
    tagline: 'Smoky, spiced, and irresistibly juicy chaap.',
    hasSinDbl: true,
    items: [
      { id: 'ch1', name: 'Afghani Chaap Roll', sin: 110, dbl: 130 },
      { id: 'ch2', name: 'Masala Chaap Roll', sin: 110, dbl: 130 },
      { id: 'ch3', name: 'Achari Chaap Roll', sin: 120, dbl: 140 },
      { id: 'ch4', name: 'Tandoori Chaap Roll', sin: 120, dbl: 140 },
    ],
  },
  {
    id: 'egg-veg-combo',
    name: 'EGG VEG COMBO',
    emoji: '🥚🥔',
    tagline: 'The perfect protein-meets-veggie mashup.',
    hasSinDbl: false,
    items: [
      { id: 'ev1', name: 'Sin.Egg Sin.Aloo Roll', price: 90 },
      { id: 'ev2', name: 'Sin.Egg Dbl.Aloo Roll', price: 100 },
      { id: 'ev3', name: 'Dbl.Egg Dbl.Aloo Roll', price: 110 },
      { id: 'ev4', name: 'Sin.Egg Sin.Veggie Roll', price: 100 },
      { id: 'ev5', name: 'Dbl.Egg Dbl.Veggie Roll', price: 130 },
    ],
  },
  {
    id: 'egg-paneer-combo',
    name: 'EGG PANEER COMBO',
    emoji: '🥚🧀',
    tagline: 'Egg and paneer — a match made in roll heaven.',
    hasSinDbl: false,
    items: [
      { id: 'ep1', name: 'Sin.Egg Sin.Paneer Roll', price: 110 },
      { id: 'ep2', name: 'Sin.Egg Dbl.Paneer Roll', price: 130 },
      { id: 'ep3', name: 'Dbl.Egg Dbl.Paneer Roll', price: 140 },
    ],
  },
  {
    id: 'egg-chicken-combo',
    name: 'EGG CHICKEN COMBO',
    emoji: '🥚🍗',
    tagline: 'Double the protein, double the satisfaction.',
    hasSinDbl: false,
    items: [
      { id: 'ec1', name: 'Sin.Egg Sin.Chicken Roll', price: 110 },
      { id: 'ec2', name: 'Dbl.Egg Sin.Chicken Roll', price: 120 },
      { id: 'ec3', name: 'Sin.Egg Dbl.Chicken Roll', price: 140 },
      { id: 'ec4', name: 'Dbl.Egg Dbl.Chicken Roll', price: 150 },
    ],
  },
  {
    id: 'rustic-chicken',
    name: 'RUSTIC CHICKEN',
    emoji: '🍗',
    tagline: 'Bold, juicy, and crafted for the chicken lover.',
    hasSinDbl: true,
    items: [
      { id: 'rc1', name: 'Chicken Roll', sin: 100, dbl: 120 },
      { id: 'rc2', name: 'Chicken Seekh Roll', sin: 110, dbl: 140 },
      { id: 'rc3', name: 'Chicken Malai Tikka Roll', sin: 110, dbl: 140 },
      { id: 'rc4', name: 'Chicken Keema Roll', sin: 110, dbl: 140 },
      { id: 'rc5', name: 'Achari Chicken Roll', sin: 110, dbl: 140 },
      { id: 'rc6', name: 'Tandoori Chicken Roll', sin: 120, dbl: 140 },
    ],
  },
  {
    id: 'egg-cellent',
    name: 'EGG-CELLENT SERIES',
    emoji: '🥚',
    tagline: 'Simple. Classic. Egg-straordinary.',
    hasSinDbl: false,
    items: [
      { id: 'e1', name: 'Single Egg Roll', price: 60 },
      { id: 'e2', name: 'Double Egg Roll', price: 70 },
      { id: 'e3', name: 'Triple Egg Roll', price: 80 },
      { id: 'e4', name: 'Egg Bhurji Roll', price: 100 },
    ],
  },
  {
    id: 'kings-cut',
    name: "THE KING'S CUT (MUTTON)",
    emoji: '👑',
    tagline: 'The crown jewel — premium mutton seekh.',
    hasSinDbl: false,
    items: [
      { id: 'm1', name: 'Single Mutton Seekh Roll', price: 120 },
      { id: 'm2', name: 'Double Mutton Seekh Roll', price: 150 },
      { id: 'm3', name: 'Sin.Egg Sin.Mutton Seekh Roll', price: 140 },
      { id: 'm4', name: 'Sin.Egg Dbl.Mutton Seekh Roll', price: 170 },
      { id: 'm5', name: 'Dbl.Egg Dbl.Mutton Seekh Roll', price: 180 },
    ],
  },
];

// Flat category names for navigation
export const categoryNames = menuCategories.map(cat => ({
  id: cat.id,
  name: cat.name,
  emoji: cat.emoji,
}));

// Featured items for homepage showcase
export const featuredItems = [
  { ...menuCategories[2].items[1], category: 'PANEER PREMIERE', sin: 110, dbl: 140 },  
  { ...menuCategories[7].items[2], category: 'RUSTIC CHICKEN', sin: 110, dbl: 140 },    
  { ...menuCategories[9].items[0], category: "THE KING'S CUT", price: 120 },             
  { ...menuCategories[3].items[0], category: 'TALES OF CHAAP', sin: 110, dbl: 130 },     
];
