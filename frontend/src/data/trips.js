// Trip packages data for Wild Track Adventure - Labuan Bajo
export const trips = [
  {
    id: 1,
    title: "3D2N Adventure",
    duration: "3 Days 2 Nights",
    description: "Explore the highlights of Labuan Bajo in an unforgettable 3-day adventure",
    shortDescription: "Padar, Rinca, Komodo",
    price: "IDR 3.500K",
    priceUSD: "$220",
    image: "/src/assets/images/destinations/padar.jpg",
    rating: 4.9,
    maxGuests: 12,
    highlights: [
      "Padar Island Trekking",
      "Komodo Dragon Encounter",
      "Pink Beach",
      "Snorkeling at Manta Point",
      "Sunset at Kalong Island"
    ],
    itinerary: [
      {
        day: 1,
        title: "Padar Island & Pink Beach",
        activities: "Start with trekking Padar Island for iconic views, then relax at Pink Beach with snorkeling session"
      },
      {
        day: 2,
        title: "Komodo Island & Manta Point",
        activities: "Meet Komodo Dragons in their natural habitat, snorkel with manta rays at Manta Point"
      },
      {
        day: 3,
        title: "Taka Makassar & Return",
        activities: "Visit Taka Makassar sandbar, final snorkeling session, and sunset viewing before return"
      }
    ],
    included: [
      "Boat charter with captain & crew",
      "Accommodation on boat",
      "All meals during trip",
      "Snorkeling equipment",
      "National park fees",
      "Professional guide"
    ]
  },
  {
    id: 2,
    title: "4D3N Explorer",
    duration: "4 Days 3 Nights",
    description: "Complete Komodo National Park exploration with extended island hopping",
    shortDescription: "Komodo, Pink Beach, Taka Makassar",
    price: "IDR 4.800K",
    priceUSD: "$305",
    image: "/src/assets/images/destinations/komodo.jpg",
    rating: 5.0,
    maxGuests: 10,
    highlights: [
      "Padar Island Summit",
      "Komodo & Rinca Islands",
      "Pink Beach Paradise",
      "Swimming with Manta Rays",
      "Taka Makassar Sandbar",
      "Sunset Cruise"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey Begins - Kelor Island",
        activities: "Depart from Labuan Bajo, visit Kelor Island for sunset trekking and snorkeling"
      },
      {
        day: 2,
        title: "Padar & Pink Beach",
        activities: "Epic sunrise at Padar Island, Pink Beach relaxation, snorkeling at multiple spots"
      },
      {
        day: 3,
        title: "Komodo Dragons & Manta Point",
        activities: "Komodo Island trekking, manta ray encounter, Kalong Island bat watching"
      },
      {
        day: 4,
        title: "Taka Makassar & Return",
        activities: "Morning at Taka Makassar sandbar, final snorkeling, return to Labuan Bajo"
      }
    ],
    included: [
      "Private boat charter",
      "3 nights on-board accommodation",
      "All meals & fresh water",
      "Snorkeling & safety equipment",
      "National park entrance fees",
      "English speaking tour guide",
      "Airport transfer"
    ]
  },
  {
    id: 3,
    title: "1 Day Trip",
    duration: "1 Day",
    description: "Quick but exciting day trip to experience Labuan Bajo's beauty",
    shortDescription: "Kelor, Komodo, Pink Beach",
    price: "IDR 1.200K",
    priceUSD: "$75",
    image: "/src/assets/images/destinations/pink-beach.jpg",
    rating: 4.7,
    maxGuests: 15,
    highlights: [
      "Kelor Island Snorkeling",
      "Komodo Dragon Tracking",
      "Pink Beach Visit",
      "Local Lunch Included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Labuan Bajo Day Adventure",
        activities: "Early morning departure, Kelor Island snorkeling, Komodo Island trekking to see dragons, Pink Beach relaxation, return by evening"
      }
    ],
    included: [
      "Shared boat transportation",
      "Local guide",
      "Lunch & mineral water",
      "Snorkeling gear",
      "Komodo National Park fee"
    ]
  },
  {
    id: 4,
    title: "5D4N Ultimate",
    duration: "5 Days 4 Nights",
    description: "Ultimate Labuan Bajo experience with all highlights and hidden gems",
    shortDescription: "Complete Komodo Experience",
    price: "IDR 6.500K",
    priceUSD: "$410",
    image: "/src/assets/images/destinations/sunset.jpg",
    rating: 5.0,
    maxGuests: 8,
    highlights: [
      "All major islands",
      "Multiple snorkeling spots",
      "Komodo & Rinca Dragons",
      "Sunset cruises",
      "Local village visit",
      "Premium accommodation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure & Kelor Island",
        activities: "Pick up from hotel, sail to Kelor Island, snorkeling and sunset trekking"
      },
      {
        day: 2,
        title: "Padar Island & Pink Beach",
        activities: "Sunrise at Padar Island, trekking to viewpoint, Pink Beach snorkeling"
      },
      {
        day: 3,
        title: "Komodo Island Adventure",
        activities: "Komodo Dragon trekking, Manta Point snorkeling, Taka Makassar visit"
      },
      {
        day: 4,
        title: "Rinca Island & Secret Spots",
        activities: "Rinca Island dragon tracking, hidden snorkeling spots, sunset cruise"
      },
      {
        day: 5,
        title: "Final Exploration & Return",
        activities: "Morning snorkeling, local village visit, return to Labuan Bajo"
      }
    ],
    included: [
      "Private boat charter",
      "4 nights premium accommodation",
      "All meals & beverages",
      "Complete snorkeling equipment",
      "All entrance fees",
      "Professional English guide",
      "Airport transfer",
      "Travel insurance"
    ]
  }
];

export default trips;
