const p = "/images/palassio";

export const logoSrc = `${p}/logo.jpeg`;

export const heroSlides = [
  { src: `${p}/exterior.jpg`, alt: "Hotel Palassio International exterior" },
  { src: `${p}/deluxe.jpg`, alt: "Deluxe Executive Room interior" },
  { src: `${p}/ballroom.jpg`, alt: "Palassio Grand Ballroom setup" },
];

export const discoverSlides = [
  { src: `${p}/dining.jpg`, alt: "Dining at Hotel Palassio International" },
  { src: `${p}/rooftop.jpg`, alt: "Open-air rooftop lounge" },
  { src: `${p}/royal.jpg`, alt: "Palassio Royal Suite bedroom" },
  { src: `${p}/wedding.jpg`, alt: "Royal Lucknow wedding reception decor" },
  { src: `${p}/restaurant.jpg`, alt: "Multi-cuisine restaurant" },
  { src: `${p}/presidential.jpg`, alt: "Presidential Luxury Suite lounge" },
];

export const banquetSlides = [
  { src: `${p}/ballroom.jpg`, alt: "Palassio Grand Ballroom" },
  { src: `${p}/hall2.jpg`, alt: "Royal Celebration Hall" },
  { src: `${p}/dining.jpg`, alt: "Awadhi dining room" },
  { src: `${p}/restaurant.jpg`, alt: "Restaurant seating" },
  { src: `${p}/wedding.jpg`, alt: "Wedding reception decor" },
  { src: `${p}/rooftop.jpg`, alt: "Rooftop lounge at sunset" },
  { src: `${p}/corporate.jpg`, alt: "Corporate meeting space" },
  { src: `${p}/biryani.jpg`, alt: "Awadhi Dum Biryani and Galawati Kebabs" },
  { src: `${p}/unplugged.jpg`, alt: "Friday unplugged acoustic night" },
];

const gallerySource = [
  [`${p}/deluxe.jpg`, "rooms", "Deluxe Executive Room interior"],
  [`${p}/royal.jpg`, "rooms", "Palassio Royal Suite bedroom"],
  [`${p}/presidential.jpg`, "rooms", "Presidential Luxury Suite lounge"],
  [`${p}/standard.jpg`, "rooms", "Standard Comfort Room"],
  [`${p}/deluxe-2.jpg`, "rooms", "Guest room at Hotel Palassio International"],
  [`${p}/deluxe-3.jpg`, "rooms", "Deluxe room seating"],
  [`${p}/dining.jpg`, "restaurant", "Dining at Palassio"],
  [`${p}/restaurant.jpg`, "restaurant", "Multi-cuisine restaurant"],
  [`${p}/biryani.jpg`, "restaurant", "Awadhi Dum Biryani and Galawati Kebabs"],
  [`${p}/exterior.jpg`, "lobby", "Hotel Palassio International, Gomti Nagar Extension"],
  [`${p}/corporate.jpg`, "lobby", "Corporate lounge"],
  [`${p}/ballroom.jpg`, "events", "Palassio Grand Ballroom setup"],
  [`${p}/hall2.jpg`, "events", "Royal Celebration Hall"],
  [`${p}/wedding.jpg`, "events", "Royal Lucknow wedding reception decor"],
  [`${p}/rooftop.jpg`, "events", "Rooftop lounge sunset view"],
  [`${p}/unplugged.jpg`, "events", "Friday unplugged acoustic night"],
];

export const galleryImages = gallerySource.map(([src, category, alt]) => ({
  src,
  category,
  alt,
}));

export const photos = {
  exterior: `${p}/exterior.jpg`,
  deluxe: `${p}/deluxe.jpg`,
  royal: `${p}/royal.jpg`,
  presidential: `${p}/presidential.jpg`,
  standard: `${p}/standard.jpg`,
  dining: `${p}/dining.jpg`,
  restaurant: `${p}/restaurant.jpg`,
  rooftop: `${p}/rooftop.jpg`,
  ballroom: `${p}/ballroom.jpg`,
  hall2: `${p}/hall2.jpg`,
  corporate: `${p}/corporate.jpg`,
  unplugged: `${p}/unplugged.jpg`,
  wedding: `${p}/wedding.jpg`,
  biryani: `${p}/biryani.jpg`,
};

export function roomImage(id) {
  const map = {
    1: `${p}/deluxe.jpg`,
    2: `${p}/royal.jpg`,
    3: `${p}/presidential.jpg`,
    4: `${p}/standard.jpg`,
  };
  return map[id] || map[1];
}
