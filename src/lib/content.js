export const site = {
  name: "Hotel Palassio International",
  fullName: "Hotel Palassio International",
  wordmark: "Palassio",
  wordmarkSub: "International",
  heroLead: "Palassio",
  heroAccent: "International",
  tagline: "Stay. Dine. Celebrate.",
  description:
    "Modern hospitality in the heart of Gomti Nagar Extension. Featuring 14 luxury guest rooms, 2 grand banquet halls, an exquisite restaurant, and an open-air rooftop lounge.",
  address:
    "Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
  addressLine:
    "Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow, Uttar Pradesh -- 226010",
  contactAddress: [
    "Plot No. 6/C-921, Sector-6,",
    "Gomti Nagar Extension,",
    "Lucknow, Uttar Pradesh",
    "226010",
  ],
  phoneDisplay: "+91 91234 56789",
  phoneHotline: "+91 91234 56789",
  phoneTel: "+919123456789",
  phoneMobileTel: "+919123456789",
  phoneDesk: "+91 522 400 1234",
  phoneDeskTel: "+915224001234",
  email: "reservations@hotelpalassio.com",
  privacyEmail: "reservations@hotelpalassio.com",
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  hotlineNote: "Check-in 12:00 PM · Check-out 11:00 AM",
  whatsappNumber: "919123456789",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=919123456789&text&type=phone_number&app_absent=0",
  swiggy: "https://www.swiggy.com",
  zomato: "https://www.zomato.com",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.10860517596!2d81.000305!3d26.836474!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3a846c4f82f%3A0x8bb1ca76b583f605!2sGomti%20Nagar%20Extension%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=26.836474,81.000305",
  copyright: "© 2026 Hotel Palassio International. Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow.",
};

export function whatsappHref(payload) {
  if (!payload) return site.whatsappUrl;
  const text =
    typeof payload === "string"
      ? payload
      : [
          payload.type ? `Inquiry: ${String(payload.type).replaceAll("_", " ")}` : "Inquiry",
          payload.name ? `Name: ${payload.name}` : "",
          payload.phone ? `Phone: ${payload.phone}` : "",
          payload.roomName ? `Room: ${payload.roomName}` : "",
          payload.checkIn ? `Check-in: ${payload.checkIn}` : "",
          payload.checkOut ? `Check-out: ${payload.checkOut}` : "",
          payload.guests ? `Guests: ${payload.guests}` : "",
          payload.notes || "",
        ]
          .filter(Boolean)
          .join("\n");
  const params = new URLSearchParams({
    phone: site.whatsappNumber,
    text,
    type: "phone_number",
    app_absent: "0",
  });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

export function formatInr(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const guestOptions = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests (Extra Bed)" },
  { value: "4", label: "4+ Guests (Suite)" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/room-overview", label: "Room Overview" },
  { href: "/banquet-restaurant", label: "Banquet & Restaurant" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export const headerMenu = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Stay" },
  {
    label: "Dining",
    children: [
      { href: "/dining", label: "Multi-Cuisine Restaurant" },
      { href: "/rooftop", label: "Open-Air Rooftop Lounge" },
      { href: "/rooftop/menu", label: "Rooftop Menu" },
      { href: "/rooftop/events", label: "Events & Unplugged Nights" },
      { href: "/order-food", label: "Swiggy / Zomato Order", separated: true },
    ],
  },
  {
    label: "Celebrate",
    children: [
      { href: "/banquets", label: "Banquet Halls (Hall 1 & 2)" },
      { href: "/weddings", label: "Weddings & Receptions" },
      { href: "/corporate", label: "Corporate Events & Rates" },
    ],
  },
  { href: "/corporate", label: "Corporate" },
  { href: "/offers", label: "Offers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export const roomNavLinks = [
  { href: "/room/1", label: "Deluxe Executive Room" },
  { href: "/room/2", label: "Palassio Royal Suite" },
  { href: "/room/3", label: "Presidential Luxury Suite" },
  { href: "/room/4", label: "Standard Comfort Room" },
];

export const homeIntro = {
  heading: "Stay somewhere that feels considered.",
  paragraphs: [
    "Situated in Sector-6, Gomti Nagar Extension, Hotel Palassio International combines refined architectural restraint with authentic Awadhi warmth for corporate travelers, wedding hosts, and dining guests.",
    "Modern hospitality in the heart of Gomti Nagar Extension. Featuring 14 luxury guest rooms, 2 grand banquet halls, an exquisite restaurant, and an open-air rooftop lounge.",
  ],
  closing: "Two pillarless halls welcome up to 400 guests, and the ground restaurant serves Lucknowi Galawati Kebabs and Awadhi Dum Biryani beside the ",
  closingEmphasis: "open-air rooftop lounge",
};

const deluxeAmenities = [
  "High-Speed Wi-Fi",
  "43-inch Smart TV",
  "Centralized Air Conditioning",
  "Work Desk & Ergonomic Chair",
  "Tea / Coffee Maker",
  "Complimentary Mineral Water",
  "Luxury Toiletries",
  "24/7 In-Room Dining",
];

const royalAmenities = [
  "High-Speed Wi-Fi",
  "55-inch Smart TV",
  "Separate Living Lounge Area",
  "Minibar & Refrigerator",
  "Espresso Coffee Machine",
  "Bathrobe & Slippers",
  "Premium Bathroom Amenities",
  "Priority Room Service",
];

const presidentialAmenities = [
  "Dedicated Butler Assistance",
  "Complimentary Premium Breakfast",
  "55-inch OLED Smart TV",
  "Private Dining Area",
  "Grand Master Bedroom",
  "Vanity Room",
  "Royal Decor",
  "Skyline View",
];

const standardAmenities = [
  "High-Speed Wi-Fi",
  "32-inch Smart TV",
  "Split Air Conditioner",
  "Tea/Coffee Station",
  "Cozy Bedding",
  "Clean Modern Bath",
  "Quiet Air Conditioning",
  "Skyline View",
];

export const homeRooms = [
  {
    name: "Deluxe Executive Room",
    image: "/images/palassio/deluxe.jpg",
    href: "/room/1",
    amenities: deluxeAmenities.slice(0, 5),
  },
  {
    name: "Palassio Royal Suite",
    image: "/images/palassio/royal.jpg",
    href: "/room/2",
    amenities: royalAmenities.slice(0, 5),
  },
  {
    name: "Presidential Luxury Suite",
    image: "/images/palassio/presidential.jpg",
    href: "/room/3",
    amenities: presidentialAmenities.slice(0, 5),
  },
  {
    name: "Standard Comfort Room",
    image: "/images/palassio/standard.jpg",
    href: "/room/4",
    amenities: standardAmenities.slice(0, 5),
  },
];

export const overviewRooms = [
  {
    id: "1",
    title: "Deluxe Executive Room",
    image: "/images/palassio/deluxe.jpg",
    occupancy: "3 Guests (extra bed ₹800/night)",
    included: "Breakfast optional on CP/MAP plans",
    stay: "1 Night · check-in 12:00 PM",
    amenities: deluxeAmenities,
  },
  {
    id: "2",
    title: "Palassio Royal Suite",
    image: "/images/palassio/royal.jpg",
    occupancy: "3 Guests (extra bed available)",
    included: "Valid government photo ID",
    stay: "1 Night · free cancellation up to 48 hours",
    amenities: royalAmenities,
  },
  {
    id: "3",
    title: "Presidential Luxury Suite",
    image: "/images/palassio/presidential.jpg",
    occupancy: "4+ Guests",
    included: "Complimentary premium breakfast",
    stay: "1 Night · check-in 12:00 PM",
    amenities: presidentialAmenities,
  },
  {
    id: "4",
    title: "Standard Comfort Room",
    image: "/images/palassio/standard.jpg",
    occupancy: "2 Guests",
    included: "Valid government photo ID",
    stay: "1 Night · check-in 12:00 PM",
    amenities: standardAmenities,
  },
];

export const detailRooms = {
  1: {
    title: "Deluxe Executive Room",
    images: ["/images/palassio/deluxe.jpg", "/images/palassio/deluxe-2.jpg", "/images/palassio/deluxe-3.jpg"],
    occupancy: "3 Guests (extra bed ₹800/night)",
    included: "Breakfast optional on CP/MAP plans",
    stay: "1 Night · free cancellation up to 24 hours",
    amenities: `${deluxeAmenities.join(", ")}. 280 sq. ft. King bed or twin beds. Starting ₹3,499 / night. Thoughtfully designed for maximum comfort, featuring premium linen, a dedicated workstation, high-speed Wi-Fi, and sophisticated ambient lighting in the heart of Gomti Nagar Extension.`,
  },
  2: {
    title: "Palassio Royal Suite",
    images: ["/images/palassio/royal.jpg"],
    occupancy: "3 Guests (extra bed available)",
    included: "Valid government photo ID",
    stay: "1 Night · free cancellation up to 48 hours",
    amenities: `${royalAmenities.join(", ")}. 420 sq. ft. Super king bed. Starting ₹5,499 / night. Indulge in extra space featuring a separate living room area, plush king bed, master bathroom with rain shower, and exclusive views of the Gomti Nagar Extension skyline.`,
  },
  3: {
    title: "Presidential Luxury Suite",
    images: ["/images/palassio/presidential.jpg"],
    occupancy: "4+ Guests",
    included: "Complimentary premium breakfast",
    stay: "1 Night · check-in 12:00 PM",
    amenities: `${presidentialAmenities.join(", ")}. 600 sq. ft. Royal king bed. Starting ₹8,999 / night. Designed for discerning guests, corporate leaders, and wedding parties, with a grand master bedroom, private dining nook, vanity room, and royal decor.`,
  },
  4: {
    title: "Standard Comfort Room",
    images: ["/images/palassio/standard.jpg"],
    occupancy: "2 Guests",
    included: "Valid government photo ID",
    stay: "1 Night · check-in 12:00 PM",
    amenities: `${standardAmenities.join(", ")}. 220 sq. ft. Queen bed. Starting ₹2,499 / night. Perfect for budget business travelers and quick transit stays, with cozy bedding, a clean modern bath, quiet air conditioning, and high-speed internet.`,
  },
};

export const rooms = [
  {
    id: "deluxe-room",
    name: "Deluxe Executive Room",
    price: 3499,
    size: "280 sq. ft.",
    bed: "King Bed or Twin Beds",
    occupancy: "3 Guests (extra bed ₹800/night)",
    image: "deluxe",
    tagline: "Elegance and comfort for modern corporate & leisure travelers.",
    description:
      "Thoughtfully designed for maximum comfort, featuring premium linen, a dedicated workstation, high-speed Wi-Fi, and sophisticated ambient lighting in the heart of Gomti Nagar Extension.",
    amenities: deluxeAmenities,
  },
  {
    id: "executive-suite",
    name: "Palassio Royal Suite",
    price: 5499,
    size: "420 sq. ft.",
    bed: "Super King Bed",
    occupancy: "3 Guests (extra bed available)",
    image: "royal",
    tagline: "Luxury living with an expanse of space and premium personalized service.",
    description:
      "Indulge in extra space featuring a separate living room area, plush king bed, master bathroom with rain shower, and exclusive views of the Gomti Nagar Extension skyline.",
    amenities: royalAmenities,
  },
  {
    id: "presidential-suite",
    name: "Presidential Luxury Suite",
    price: 8999,
    size: "600 sq. ft.",
    bed: "Royal King Bed",
    occupancy: "4+ Guests",
    image: "presidential",
    tagline: "The pinnacle of grandeur and VIP hospitality in Lucknow.",
    description:
      "Designed for discerning guests, corporate leaders, and wedding parties. Complete with grand master bedroom, private dining nook, vanity room, and royal decor.",
    amenities: presidentialAmenities,
  },
  {
    id: "standard-room",
    name: "Standard Comfort Room",
    price: 2499,
    size: "220 sq. ft.",
    bed: "Queen Bed",
    occupancy: "2 Guests",
    image: "standard",
    tagline: "Smart, cozy and affordable lodging without compromising quality.",
    description:
      "Perfect for budget business travelers and quick transit stays. Equipped with cozy bedding, clean modern bath, quiet air conditioning and high-speed internet.",
    amenities: standardAmenities,
  },
];

export function roomById(id) {
  return rooms.find((room) => room.id === id) || rooms[0];
}

export const banquetFeatures = [
  ["Guest Capacity:", "Hall 1, 250–400 guests · Hall 2, 80–150 guests"],
  ["Palassio Grand Ballroom:", "4,500 sq. ft. pillarless hall with crystal chandeliers"],
  ["Royal Celebration Hall:", "2,200 sq. ft. for intimate gatherings"],
  ["Facilities:", "Central AC, surround sound, microphones, projector and screen"],
  ["Parking:", "Valet parking"],
  ["Catering:", "In-house Awadhi and multi-cuisine catering"],
  ["Weddings:", "Receptions, sangeet, ring ceremony, mehendi, and haldi"],
  ["Corporate:", "Conferences, product launches, seminars, and workshops"],
  ["Location:", "Sector-6, Gomti Nagar Extension, Lucknow"],
  ["Accommodation:", "14 guest rooms above the venue"],
];

export const restaurantFeatures = [
  ["Cuisine:", "Lucknowi Galawati Kebabs, Awadhi Dum Biryani, and continental dishes"],
  ["Hours:", "Ground restaurant 7:00 AM – 11:00 PM"],
  ["Rooftop Lounge:", "5:00 PM – 1:00 AM, Friday acoustic and Saturday DJ"],
  ["Signature:", "Lucknowi Murgh Galawati Kebab ₹449"],
  ["Biryani:", "Awadhi Dum Gosht Biryani ₹549"],
  ["Ambience:", "Designed for peaceful conversation"],
  ["Service:", "Breakfast, lunch, and dinner"],
  ["Delivery:", "Verified listings on Swiggy and Zomato"],
  ["Service Charge:", "Not automatic or mandatory; tips are voluntary"],
  ["FSSAI:", "Compliance in process. Certificate on record: The Multicuisine Rasoi / Shraddha Soni"],
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "restaurant", label: "Restaurant" },
  { id: "lobby", label: "Lobby" },
  { id: "events", label: "Events" },
];

export const menu = [
  {
    name: "Lucknowi Murgh Galawati Kebab",
    bestseller: true,
    description: "Melt-in-mouth minced chicken kebabs spiced with authentic Awadhi potli masala.",
    category: "Kebabs & Starters",
    price: 449,
  },
  {
    name: "Paneer Tikka Angara",
    bestseller: true,
    description: "Cottage cheese marinated in spicy hung curd and smoked in charcoal tandoor.",
    category: "Kebabs & Starters",
    price: 349,
  },
  {
    name: "Awadhi Dum Gosht Biryani",
    bestseller: true,
    description: "Long-grain basmati rice cooked on dum with tender mutton, saffron, and aromatic spices.",
    category: "Biryani & Rice",
    price: 549,
  },
  {
    name: "Subz Handi Biryani",
    bestseller: false,
    description: "Fragrant rice dum-cooked with garden fresh vegetables and aromatic Lucknowi herbs.",
    category: "Biryani & Rice",
    price: 399,
  },
  {
    name: "Dal Palassio Special",
    bestseller: true,
    description: "Overnight slow-cooked black lentils finished with fresh cream and white butter.",
    category: "Main Course",
    price: 349,
  },
  {
    name: "Butter Chicken Delhi Style",
    bestseller: false,
    description: "Tender tandoori chicken simmered in rich creamy tomato and cashew gravy.",
    category: "Main Course",
    price: 489,
  },
  {
    name: "Paneer Butter Masala",
    bestseller: false,
    description: "Soft paneer cubes cooked in velvet orange tomato butter gravy.",
    category: "Main Course",
    price: 389,
  },
  {
    name: "Chilli Chicken Dry",
    bestseller: false,
    description: "Crispy fried chicken tossed in hot garlic soy sauce with green bell peppers.",
    category: "Chinese & Asian",
    price: 399,
  },
  {
    name: "Veg Hakka Noodles",
    bestseller: false,
    description: "Wok-tossed noodles with crunchy spring vegetables and oriental herbs.",
    category: "Chinese & Asian",
    price: 299,
  },
  {
    name: "Shahi Tukda with Rabri",
    bestseller: true,
    description: "Crispy fried bread soaked in saffron syrup topped with rich cardamom rabri and nuts.",
    category: "Desserts",
    price: 249,
  },
];

export const halls = [
  {
    id: "grand-ballroom",
    name: "Palassio Grand Ballroom (Hall 1)",
    capacity: "250 - 400 Guests",
    area: "4,500 sq. ft.",
    image: "ballroom",
    description:
      "Our premier pillarless banquet hall with high ceilings, exquisite crystal chandeliers, integrated sound system, and customizable stage setup. Designed for grand wedding receptions, gala dinners, and major corporate conventions.",
    events: ["Weddings & Receptions", "Sangeet & Ring Ceremony", "Corporate Conferences", "Product Launches", "Gala Celebrations"],
    specs: ["Central AC", "Surround Sound & Microphones", "Projector & Screen", "Valet Parking", "Custom Catering Options"],
    features: ["Central AC", "Surround Sound & Microphones", "Projector & Screen", "Valet Parking", "Custom Catering Options"],
  },
  {
    id: "royal-hall",
    name: "Royal Celebration Hall (Hall 2)",
    capacity: "80 - 150 Guests",
    area: "2,200 sq. ft.",
    image: "hall2",
    description:
      "An elegant, cozy hall tailored for intimate gatherings, birthday parties, anniversaries, corporate seminars, and pre-wedding functions like Mehendi or Haldi.",
    events: ["Engagement & Roka", "Birthday Parties", "Anniversary Parties", "Corporate Seminars & Workshops", "Kitty Parties"],
    specs: ["High-speed Wi-Fi", "PA System", "Buffet Counters Setup", "Full Climate Control"],
    features: ["High-speed Wi-Fi", "PA System", "Buffet Counters Setup", "Full Climate Control"],
  },
];

export const landmarks = [
  { name: "Ekana Cricket Stadium", distance: "3.5 km", time: "8 mins" },
  { name: "Palassio Mall / Phoenix Palassio", distance: "2.8 km", time: "6 mins" },
  { name: "Charbagh Railway Station", distance: "14 km", time: "25 mins" },
  { name: "Chaudhary Charan Singh International Airport (LKO)", distance: "18 km", time: "30 mins" },
  { name: "Janeshwar Mishra Park", distance: "4.2 km", time: "10 mins" },
];

export const offers = [
  {
    code: "PALASSIO15",
    kicker: "15% OFF",
    group: "Stay",
    title: "Direct Stay Special - Flat 15% Off",
    description:
      "Book directly on our official website and enjoy an exclusive 15% discount on all room categories, free early check-in (subject to availability), and complimentary Wi-Fi.",
    validity: "Valid till 31st Dec 2026",
    href: "/book?promo=PALASSIO15",
  },
  {
    code: "SUNDOWNER",
    kicker: "Buy 1 Get 1 on Starters",
    group: "Rooftop",
    title: "Rooftop Sundowner Happy Hours",
    description:
      "Enjoy sunset drinks and delicious Lucknowi kebabs at our open-air Rooftop Lounge between 5:00 PM and 8:00 PM.",
    validity: "Valid Mon to Thu",
    href: "/rooftop",
  },
  {
    code: "ROYALWEDDING",
    kicker: "Complimentary Bride Suite + 10% Off F&B",
    group: "Banquet",
    title: "Grand Wedding Season Offer 2026",
    description:
      "Book your wedding reception at Palassio Grand Ballroom and receive a complimentary Presidential Suite stay for the newlyweds plus 10% discount on catering packages.",
    validity: "Valid for bookings made 60 days in advance",
    href: "/contact",
  },
];

export const posts = [
  {
    category: "Local Guide",
    date: "September 15, 2026",
    read: "5 min read",
    title: "Top 7 Things to Do Near Gomti Nagar Extension, Lucknow",
    excerpt:
      "Discover the best attractions around Gomti Nagar Extension, from Ekana Cricket Stadium to Phoenix Palassio Shopping Mall and Janeshwar Mishra Park.",
    author: "Palassio Travel Concierge",
  },
  {
    category: "Wedding Guide",
    date: "August 28, 2026",
    read: "7 min read",
    title: "How to Plan a Destination Wedding in Lucknow: Complete Guide",
    excerpt:
      "Learn how to choose banquet halls, customize traditional Awadhi menus, and coordinate guest accommodations for your dream wedding.",
    author: "Palassio Event Planner",
  },
];

export const moreLinks = [
  { href: "/dining", label: "Dining" },
  { href: "/rooftop", label: "Rooftop Lounge" },
  { href: "/rooftop/menu", label: "Rooftop Menu" },
  { href: "/rooftop/events", label: "Rooftop Events" },
  { href: "/banquets", label: "Banquet Halls" },
  { href: "/weddings", label: "Weddings" },
  { href: "/corporate", label: "Corporate" },
  { href: "/offers", label: "Offers" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Lucknow Guide" },
  { href: "/book", label: "Book a Room" },
  { href: "/order-food", label: "Order Food" },
  { href: "/guest-club", label: "Guest Club" },
  { href: "/digital-hub", label: "Guest Hub" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cancellation-policy", label: "Cancellation" },
  { href: "/refund-policy", label: "Refunds" },
];

export const homeStories = [
  {
    href: "/dining",
    image: "/images/palassio/dining.jpg",
    title: "Awadhi Dining",
    copy: "Lucknowi Galawati Kebabs, dum biryani, and continental dishes from 7:00 AM to 11:00 PM.",
  },
  {
    href: "/rooftop",
    image: "/images/palassio/rooftop.jpg",
    title: "Rooftop Lounge",
    copy: "Open-air skyline seating, Friday acoustic nights, and Saturday DJ sets until 1:00 AM.",
  },
  {
    href: "/banquets",
    image: "/images/palassio/ballroom.jpg",
    title: "Two Banquet Halls",
    copy: "Palassio Grand Ballroom for 250–400 guests and Royal Celebration Hall for 80–150.",
  },
  {
    href: "/weddings",
    image: "/images/palassio/wedding.jpg",
    title: "Weddings",
    copy: "Pillarless ballrooms, Awadhi catering, and 14 guest rooms for the wedding family.",
  },
  {
    href: "/corporate",
    image: "/images/palassio/corporate.jpg",
    title: "Corporate Stays",
    copy: "Work desks, GST invoices, and meeting space near Ekana Stadium and Palassio Mall.",
  },
  {
    href: "/offers",
    image: "/images/palassio/restaurant.jpg",
    title: "Offers",
    copy: "Direct-stay code PALASSIO15, rooftop sundowners, and the 2026 wedding season offer.",
  },
];

export const testimonials = [
  {
    name: "Rajesh & Swati Verma",
    from: "New Delhi · Leisure Stay",
    quote:
      "Stayed at Hotel Palassio International during an Ekana Stadium match weekend. The rooms are spotless, modern, and high-speed Wi-Fi worked flawlessly. The rooftop lounge evening with live acoustic music was unforgettable.",
  },
  {
    name: "Anil Kumar Srivastava",
    from: "Lucknow · Banquet Event",
    quote:
      "Hosted our daughter's ring ceremony in Hall 1. The banquet staff managed everything from stage decor to food counters. The Lucknowi Galawati Kebabs and Dum Biryani were praised by all our guests.",
  },
  {
    name: "Vikramaditya Rao",
    from: "Mumbai · Corporate Travel",
    quote:
      "Excellent business stay in Gomti Nagar Extension. Proximity to corporate hubs, a great desk in the Executive Room, and polite front desk staff.",
  },
];

export const rooftopEvents = [
  {
    when: "Every Friday",
    time: "7:00 PM - 11:30 PM",
    title: "Friday Sunset Acoustic Unplugged Night",
    artist: "Live Acoustic Trio & Vocalists",
    copy: "Soak in the magnificent evening skyline views of Gomti Nagar while enjoying soothing live acoustic tunes, craft mocktails, and fresh sizzlers.",
    note: "Free Entry | Table Reservation Recommended",
    image: "/images/palassio/unplugged.jpg",
  },
  {
    when: "Every Saturday",
    time: "8:00 PM - 1:00 AM",
    title: "Saturday Rooftop Beats & DJ Night",
    artist: "Resident DJ Beats",
    copy: "Elevate your weekend mood under the stars with deep house, retro mixes, dark ambient lighting, and signature tandoori appetizers.",
    note: "Cover Charge Applicable for Stags | Couple & VIP Tables Available",
    image: "/images/palassio/rooftop.jpg",
  },
];

export const faqs = [
  {
    group: "Hotel & Stay",
    items: [
      {
        q: "Where is Hotel Palassio International located?",
        a: "We are located at Plot No. 6/C-921, Sector-6, Gomti Nagar Extension, Lucknow - 226010, close to Phoenix Palassio Mall and Ekana Cricket Stadium.",
      },
      {
        q: "What are the standard check-in and check-out times?",
        a: "Standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability.",
      },
    ],
  },
  {
    group: "Policies & Booking",
    items: [
      {
        q: "What government identification is required during check-in?",
        a: "All Indian citizens must present a valid government-issued photo ID (Aadhaar Card, Passport, Voter ID, or Driving License). PAN card is not accepted as address proof. Foreign nationals must present a valid Passport and Visa.",
      },
      {
        q: "Are local couples allowed?",
        a: "Yes, local couples holding valid government photo IDs are welcome at Hotel Palassio International.",
      },
    ],
  },
  {
    group: "Dining & Rooftop",
    items: [
      {
        q: "What are the timings for the Restaurant and Rooftop Lounge?",
        a: "The Ground Restaurant operates from 7:00 AM to 11:00 PM. The Rooftop Lounge opens at 5:00 PM and serves late-night food till 1:00 AM.",
      },
      {
        q: "Can I order food on Swiggy or Zomato from Hotel Palassio?",
        a: "Yes! You can order our signature Awadhi and multi-cuisine dishes via our verified listings on Swiggy and Zomato.",
      },
    ],
  },
  {
    group: "Banquets & Weddings",
    items: [
      {
        q: "What is the total capacity of banquet halls at Hotel Palassio?",
        a: "We have two banquet halls: Hall 1 (Grand Ballroom) accommodates up to 400 guests, and Hall 2 (Royal Hall) is ideal for 80-150 guests. Our Rooftop terrace is also available for outdoor events.",
      },
      {
        q: "Do you provide outside catering or in-house catering?",
        a: "We offer full-service in-house Masterclass Awadhi & Multi-Cuisine catering. Customized catering packages can be tailored during event consultation.",
      },
    ],
  },
];
