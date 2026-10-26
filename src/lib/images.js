// Every photograph is imported statically so Next.js knows its intrinsic size,
// generates a blur placeholder, and serves it from a content-hashed URL with an
// immutable cache header. Hotel photos are produced by scripts/optimize-images.mjs.

import bathDeluxe from "@/assets/hotel/bath-deluxe.webp";
import bathPresidential from "@/assets/hotel/bath-presidential.webp";
import bathPresidentialShower from "@/assets/hotel/bath-presidential-shower.webp";
import bathRoyal from "@/assets/hotel/bath-royal.webp";
import bathRoyalShower from "@/assets/hotel/bath-royal-shower.webp";
import bathStandard from "@/assets/hotel/bath-standard.webp";
import corridorFlowers from "@/assets/hotel/corridor-flowers.webp";
import corridorLift from "@/assets/hotel/corridor-lift.webp";
import corridorLong from "@/assets/hotel/corridor-long.webp";
import corridorPlants from "@/assets/hotel/corridor-plants.webp";
import corridorRooms from "@/assets/hotel/corridor-rooms.webp";
import entranceSteps from "@/assets/hotel/entrance-steps.webp";
import exteriorDay from "@/assets/hotel/exterior-day.webp";
import exteriorDayFront from "@/assets/hotel/exterior-day-front.webp";
import exteriorDayGarden from "@/assets/hotel/exterior-day-garden.webp";
import exteriorDaySide from "@/assets/hotel/exterior-day-side.webp";
import exteriorDusk from "@/assets/hotel/exterior-dusk.webp";
import exteriorDuskStreet from "@/assets/hotel/exterior-dusk-street.webp";
import exteriorDuskWide from "@/assets/hotel/exterior-dusk-wide.webp";
import exteriorSunset from "@/assets/hotel/exterior-sunset.webp";
import lobbyLiftDoor from "@/assets/hotel/lobby-lift-door.webp";
import lobbyLiftStairs from "@/assets/hotel/lobby-lift-stairs.webp";
import lobbyStaircase from "@/assets/hotel/lobby-staircase.webp";
import lobbyStairsEntrance from "@/assets/hotel/lobby-stairs-entrance.webp";
import loungeSeating from "@/assets/hotel/lounge-seating.webp";
import receptionDesk from "@/assets/hotel/reception-desk.webp";
import receptionLounge from "@/assets/hotel/reception-lounge.webp";
import receptionRestaurantView from "@/assets/hotel/reception-restaurant-view.webp";
import restaurantDining from "@/assets/hotel/restaurant-dining.webp";
import restaurantHall from "@/assets/hotel/restaurant-hall.webp";
import restaurantLounge from "@/assets/hotel/restaurant-lounge.webp";
import roomDeluxeBed from "@/assets/hotel/room-deluxe-bed.webp";
import roomDeluxeCloset from "@/assets/hotel/room-deluxe-closet.webp";
import roomDeluxeCloseup from "@/assets/hotel/room-deluxe-closeup.webp";
import roomDeluxeDressing from "@/assets/hotel/room-deluxe-dressing.webp";
import roomDeluxeEntry from "@/assets/hotel/room-deluxe-entry.webp";
import roomDeluxeMirror from "@/assets/hotel/room-deluxe-mirror.webp";
import roomDeluxeVanity from "@/assets/hotel/room-deluxe-vanity.webp";
import roomDeluxeVanityView from "@/assets/hotel/room-deluxe-vanity-view.webp";
import roomDeluxeWorkDesk from "@/assets/hotel/room-deluxe-work-desk.webp";
import roomPresidentialBed from "@/assets/hotel/room-presidential-bed.webp";
import roomPresidentialDressing from "@/assets/hotel/room-presidential-dressing.webp";
import roomPresidentialSuite from "@/assets/hotel/room-presidential-suite.webp";
import roomPresidentialTv from "@/assets/hotel/room-presidential-tv.webp";
import roomPresidentialVanity from "@/assets/hotel/room-presidential-vanity.webp";
import roomPresidentialWide from "@/assets/hotel/room-presidential-wide.webp";
import roomRoyalCurtains from "@/assets/hotel/room-royal-curtains.webp";
import roomRoyalSuite from "@/assets/hotel/room-royal-suite.webp";
import roomRoyalTeaStation from "@/assets/hotel/room-royal-tea-station.webp";
import roomRoyalView from "@/assets/hotel/room-royal-view.webp";
import roomRoyalWindow from "@/assets/hotel/room-royal-window.webp";
import roomRoyalWorkDesk from "@/assets/hotel/room-royal-work-desk.webp";
import roomStandardAngle from "@/assets/hotel/room-standard-angle.webp";
import roomStandardBed from "@/assets/hotel/room-standard-bed.webp";
import roomStandardCloset from "@/assets/hotel/room-standard-closet.webp";
import roomStandardDoor from "@/assets/hotel/room-standard-door.webp";
import roomStandardEntry from "@/assets/hotel/room-standard-entry.webp";
import roomStandardFront from "@/assets/hotel/room-standard-front.webp";
import roomStandardMirror from "@/assets/hotel/room-standard-mirror.webp";
import roomStandardTv from "@/assets/hotel/room-standard-tv.webp";
import roomStandardWardrobe from "@/assets/hotel/room-standard-wardrobe.webp";
import ballroom from "@/assets/stock/ballroom.jpg";
import biryani from "@/assets/stock/biryani.jpg";
import hall2 from "@/assets/stock/hall2.jpg";
import rooftop from "@/assets/stock/rooftop.jpg";
import unplugged from "@/assets/stock/unplugged.jpg";
import wedding from "@/assets/stock/wedding.jpg";

export const photos = {
  exterior: exteriorSunset,
  exteriorDay: exteriorDayFront,
  entrance: entranceSteps,
  reception: receptionDesk,
  lobby: lobbyStaircase,
  restaurant: restaurantDining,
  restaurantHall,
  restaurantLounge,
  lounge: loungeSeating,
  workDesk: roomRoyalWorkDesk,
  deluxe: roomDeluxeDressing,
  royal: roomRoyalWindow,
  presidential: roomPresidentialWide,
  standard: roomStandardBed,
  rooftop,
  ballroom,
  hall2,
  unplugged,
  wedding,
  biryani,
};

const shot = (src, alt) => ({ src, alt });

// Ordered so the first photo of each room is its cover image.
export const roomPhotos = {
  deluxe: [
    shot(roomDeluxeDressing, "Deluxe Executive Room with king bed and dressing mirror"),
    shot(roomDeluxeBed, "Deluxe Executive Room king bed with backlit wall sconces"),
    shot(roomDeluxeMirror, "Deluxe Executive Room bed beside a full-length mirror"),
    shot(roomDeluxeWorkDesk, "Work desk, tea station and wall-mounted TV in the Deluxe Executive Room"),
    shot(roomDeluxeVanity, "Vanity mirror, writing desk and TV unit in the Deluxe Executive Room"),
    shot(roomDeluxeVanityView, "Deluxe Executive Room bed facing the vanity and TV unit"),
    shot(roomDeluxeCloseup, "Premium linen and cushions in the Deluxe Executive Room"),
    shot(roomDeluxeEntry, "Deluxe Executive Room entrance and bed"),
    shot(roomDeluxeCloset, "Deluxe Executive Room wardrobe and bed"),
    shot(bathDeluxe, "Deluxe Executive Room bathroom with marble walls and glass shower"),
  ],
  royal: [
    shot(roomRoyalWindow, "Palassio Royal Suite with picture window, work desk and king bed"),
    shot(roomRoyalView, "Palassio Royal Suite bed beside a large window with green views"),
    shot(roomRoyalSuite, "Palassio Royal Suite king bed framed by full-length drapes"),
    shot(roomRoyalCurtains, "Palassio Royal Suite bedroom with layered gold curtains"),
    shot(roomRoyalTeaStation, "Palassio Royal Suite tea station, TV and king bed"),
    shot(roomRoyalWorkDesk, "Work desk and TV in the Palassio Royal Suite"),
    shot(bathRoyal, "Palassio Royal Suite master bathroom with rain shower"),
    shot(bathRoyalShower, "Marble rain shower in the Palassio Royal Suite"),
  ],
  presidential: [
    shot(roomPresidentialWide, "Presidential Luxury Suite with king bed, TV and dressing area"),
    shot(roomPresidentialSuite, "Presidential Luxury Suite bedroom and vanity corner"),
    shot(roomPresidentialTv, "Presidential Luxury Suite bed facing the wall-mounted TV"),
    shot(roomPresidentialBed, "Presidential Luxury Suite king bed and dressing mirror"),
    shot(roomPresidentialDressing, "Presidential Luxury Suite with dressing table and work desk"),
    shot(roomPresidentialVanity, "Vanity room with mirror and tea station in the Presidential Luxury Suite"),
    shot(bathPresidential, "Presidential Luxury Suite bathroom with walk-in glass shower"),
    shot(bathPresidentialShower, "Presidential Luxury Suite marble shower and vanity"),
  ],
  standard: [
    shot(roomStandardBed, "Standard Comfort Room queen bed with wall sconces"),
    shot(roomStandardFront, "Standard Comfort Room bed and accent wall"),
    shot(roomStandardTv, "Standard Comfort Room with TV and tea station"),
    shot(roomStandardMirror, "Standard Comfort Room bed and dressing mirror"),
    shot(roomStandardAngle, "Standard Comfort Room bed and entrance"),
    shot(roomStandardDoor, "Standard Comfort Room bed beside the entrance door"),
    shot(roomStandardEntry, "Standard Comfort Room seen from the entrance"),
    shot(roomStandardWardrobe, "Standard Comfort Room wardrobe and bed"),
    shot(roomStandardCloset, "Standard Comfort Room wardrobe and king bed"),
    shot(bathStandard, "Standard Comfort Room bathroom with glass shower partition"),
  ],
};

export const heroSlides = [
  shot(exteriorSunset, "Hotel Palassio International lit up at sunset"),
  shot(roomRoyalWindow, "Palassio Royal Suite with picture window"),
  shot(restaurantHall, "Restaurant hall with crystal chandeliers"),
  shot(lobbyStaircase, "Hotel lobby with marble staircase and lift"),
];

export const discoverSlides = [
  shot(receptionDesk, "Reception desk at Hotel Palassio International"),
  shot(restaurantDining, "Multi-cuisine restaurant dining hall"),
  shot(roomRoyalView, "Palassio Royal Suite bedroom with garden views"),
  shot(rooftop, "Open-air rooftop lounge"),
  shot(loungeSeating, "Lounge seating beside the restaurant"),
  shot(roomPresidentialWide, "Presidential Luxury Suite bedroom"),
  shot(wedding, "Royal Lucknow wedding reception decor"),
];

export const banquetSlides = [
  shot(ballroom, "Palassio Grand Ballroom"),
  shot(hall2, "Royal Celebration Hall"),
  shot(restaurantHall, "Restaurant hall with crystal chandeliers"),
  shot(restaurantDining, "Restaurant dining tables under cove lighting"),
  shot(restaurantLounge, "Restaurant lounge and dining area"),
  shot(wedding, "Wedding reception decor"),
  shot(rooftop, "Rooftop lounge at sunset"),
  shot(loungeSeating, "Lounge seating for private gatherings"),
  shot(biryani, "Awadhi Dum Biryani and Galawati Kebabs"),
  shot(unplugged, "Friday unplugged acoustic night"),
];

export const arrivalPhotos = [
  shot(exteriorDayFront, "Hotel Palassio International facade in Gomti Nagar Extension"),
  shot(entranceSteps, "Main entrance steps lined with plants"),
  shot(receptionDesk, "Reception desk inside the main entrance"),
];

const tag = (category, items) => items.map((item) => ({ ...item, category }));

export const galleryImages = [
  ...tag("exterior", [
    shot(exteriorSunset, "Hotel Palassio International at sunset"),
    shot(exteriorDusk, "Hotel facade with warm lighting at dusk"),
    shot(exteriorDuskWide, "Hotel Palassio International at twilight"),
    shot(exteriorDuskStreet, "Hotel entrance lit up in the evening"),
    shot(exteriorDayFront, "Hotel Palassio International, Gomti Nagar Extension"),
    shot(exteriorDayGarden, "Hotel facade with landscaped frontage"),
    shot(exteriorDay, "Hotel exterior on a clear day"),
    shot(exteriorDaySide, "Side view of the hotel building"),
    shot(entranceSteps, "Main entrance steps lined with plants"),
  ]),
  ...tag("lobby", [
    shot(receptionDesk, "Reception desk"),
    shot(receptionLounge, "Reception and waiting area"),
    shot(receptionRestaurantView, "Reception with a view into the restaurant"),
    shot(lobbyStaircase, "Lobby staircase and lift by the main doors"),
    shot(lobbyLiftDoor, "Lift lobby beside the carved entrance doors"),
    shot(lobbyLiftStairs, "Granite lift lobby and staircase"),
    shot(lobbyStairsEntrance, "Staircase and lift inside the entrance"),
    shot(corridorLift, "Guest floor lift lobby and corridor"),
    shot(corridorFlowers, "Guest corridor with flowering plants"),
    shot(corridorPlants, "Bright guest corridor with marble floors"),
    shot(corridorLong, "Guest room corridor"),
    shot(corridorRooms, "Corridor leading to guest rooms"),
  ]),
  ...tag("rooms", [
    ...roomPhotos.royal.slice(0, 6),
    ...roomPhotos.presidential.slice(0, 6),
    ...roomPhotos.deluxe.slice(0, 9),
    ...roomPhotos.standard.slice(0, 9),
  ]),
  ...tag("bathrooms", [
    roomPhotos.royal[6],
    roomPhotos.royal[7],
    roomPhotos.presidential[6],
    roomPhotos.presidential[7],
    roomPhotos.deluxe[9],
    roomPhotos.standard[9],
  ]),
  ...tag("restaurant", [
    shot(restaurantHall, "Restaurant hall with crystal chandeliers"),
    shot(restaurantDining, "Multi-cuisine restaurant"),
    shot(restaurantLounge, "Restaurant lounge and dining area"),
    shot(loungeSeating, "Lounge seating beside the restaurant"),
    shot(biryani, "Awadhi Dum Biryani and Galawati Kebabs"),
  ]),
  ...tag("events", [
    shot(ballroom, "Palassio Grand Ballroom setup"),
    shot(hall2, "Royal Celebration Hall"),
    shot(wedding, "Royal Lucknow wedding reception decor"),
    shot(rooftop, "Rooftop lounge sunset view"),
    shot(unplugged, "Friday unplugged acoustic night"),
  ]),
];

export function roomImage(id) {
  const map = {
    1: photos.deluxe,
    2: photos.royal,
    3: photos.presidential,
    4: photos.standard,
  };
  return map[id] || map[1];
}
