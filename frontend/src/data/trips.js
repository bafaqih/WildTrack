// Trip packages data for Wild Track Adventure
// Images
import oneDayTripImg from '../assets/images/destinations/onedaytrip.jpg';
import sunsetTripImg from '../assets/images/destinations/sunsettrip.jpg';
import fullDayTripImg from '../assets/images/destinations/fulldaytrip.jpg';
import bromoSunriseImg from '../assets/images/destinations/bromosunrise.jpg';

export const trips = [
    // LABUAN BAJO TRIPS
    {
        id: "lb-1",
        title: "One Day Trip",
        location: "Labuan Bajo",
        type: "Open Trip",
        duration: "1 Day (07.00 AM – 04.00 PM)",
        description: "Experience the best of Komodo National Park in a single day. Visit 6 iconic destinations including Padar Island and Komodo Island.",
        price: "IDR 1.450.000",
        priceUnit: "/ pax",
        image: oneDayTripImg,
        rating: 4.8,
        maxGuests: 15,
        highlights: [
            "Komodo Island",
            "Padar Island",
            "Taka Makassar",
            "Pink Beach",
            "Manta Point",
            "Siaba"
        ],
        itinerary: [
             {
                day: 1,
                title: "Full Day Adventure",
                activities: "Start at 07:00 AM. Visit Komodo, Padar, Taka Makassar, Pink Beach, Manta Point, and Siaba. End at 04:00 PM."
            }
        ],
        included: [
            "Pickup and drop off hotel",
            "Snack, coffee and tea",
            "Tour guide",
            "First aid",
            "Snorkeling set",
            "Mineral water free",
            "Lunch"
        ],
        excluded: [
            "Towel"
        ],
        additionalInfo: [
            "Entrance fee WNA (6 & 8 Dest): 425K / pax",
            "Entrance fee WNI (6 & 8 Dest): 250K / pax",
            "Entrance fee WNA (3 Dest): 275K / pax",
            "Entrance fee WNI (3 Dest): 75K / pax",
            "Shuttle car Drop off (Airport – Hotel): 250K / One way",
            "Soft drink / alcohol",
            "Documentation (Photographer, Videographer, Drone, Gopro, etc)",
            "Personal travel insurance"
        ]
    },
    {
        id: "lb-2",
        title: "Sunset Trip",
        location: "Labuan Bajo",
        type: "Open Trip",
        duration: "Half Day (03.00 PM – 07.00 PM)",
        description: "Enjoy a relaxing afternoon visiting beautiful islands and witnessing the spectacular flying foxes at sunset.",
        price: "IDR 1.250.000",
        priceUnit: "/ pax",
        image: sunsetTripImg,
        rating: 4.9,
        maxGuests: 15,
        highlights: [
            "Manjarite",
            "Kelor Island",
            "Sunset at Kalong Island"
        ],
        itinerary: [
             {
                day: 1,
                title: "Sunset Journey",
                activities: "Start at 03:00 PM. Visit Manjarite and Kelor Island. End with a magical sunset at Kalong Island. Finish at 07:00 PM."
            }
        ],
        included: [
            "Snack and soft drink",
            "Tour guide",
            "First aid",
            "Snorkeling set",
            "Mineral water free"
        ],
        excluded: [
            "Towel"
        ],
        additionalInfo: [
            "Entrance fee WNA (6 & 8 Dest): 425K / pax",
            "Entrance fee WNI (6 & 8 Dest): 250K / pax",
            "Entrance fee WNA (3 Dest): 275K / pax",
            "Entrance fee WNI (3 Dest): 75K / pax",
            "Shuttle car Drop off (Airport – Hotel): 250K / One way",
            "Soft drink / alcohol",
            "Documentation (Photographer, Videographer, Drone, Gopro, etc)",
            "Personal travel insurance"
        ]
    },
    {
        id: "lb-3",
        title: "Fullday Trip",
        location: "Labuan Bajo",
        type: "Open Trip",
        duration: "Full Day (07.00 AM – 07.00 PM)",
        description: "The ultimate one-day experience covering 8 breathtaking destinations in Komodo National Park from sunrise to sunset.",
        price: "IDR 2.600.000",
        priceUnit: "/ pax",
        image: fullDayTripImg,
        rating: 5.0,
        maxGuests: 12,
        highlights: [
            "Padar Island",
            "Pink Beach",
            "Komodo Island",
            "Taka Makassar",
            "Manta Point",
            "Siaba",
            "Kelor Island",
            "Sunset Kalong"
        ],
        itinerary: [
            {
                day: 1,
                title: "The Ultimate Journey",
                activities: "Start 07:00 AM. Explore Padar, Pink Beach, Komodo, Taka Makassar, Manta Point, Siaba, Kelor Island. End with Sunset at Kalong. Finish 07:00 PM."
            }
        ],
        included: [
            "Pick up and drop off hotel",
            "Snack coffee and tea",
            "Tour guide",
            "First aid",
            "Snorkeling set",
            "Mineral water free",
            "Lunch"
        ],
        excluded: [
            "Towel"
        ],
        additionalInfo: [
            "Entrance fee WNA (6 & 8 Dest): 425K / pax",
            "Entrance fee WNI (6 & 8 Dest): 250K / pax",
            "Entrance fee WNA (3 Dest): 275K / pax",
            "Entrance fee WNI (3 Dest): 75K / pax",
            "Shuttle car Drop off (Airport – Hotel): 250K / One way",
            "Soft drink / alcohol",
            "Documentation (Photographer, Videographer, Drone, Gopro, etc)",
            "Personal travel insurance"
        ]
    },

    // BROMO TRIPS
    {
        id: "br-1",
        title: "Bromo Sunrise",
        location: "Bromo",
        type: "Open Trip (WNI)",
        duration: "1 Night",
        description: "Witness the iconic Bromo sunrise and explore the volcanic landscape with our jeep adventure.",
        price: "IDR 345.000",
        priceUnit: "/ pax",
        image: bromoSunriseImg,
        rating: 4.8,
        maxGuests: 6,
        highlights: [
            "Sunrise View Point",
            "Widodaren",
            "Kawah Bromo / Pura Luhur",
            "Pasir Berbisik",
            "Bukit Teletubies / Savanna"
        ],
        itinerary: [
             {
                day: 1,
                title: "Bromo Sunrise Adventure",
                activities: "Departure from Malang, Sunrise at View Point, Explore Crater, Sea of Sand, and Savanna. Return to Malang."
            }
        ],
        included: [
            "Shuttle car : Kota malang – Tumpang (PP)",
            "Welcome drink in basecamp tumpang",
            "Jeep 4x4 : Tumpang – Bromo (PP)",
            "Entrance fee",
            "Tour leader as phographer",
            "Gdrive photo trip"
        ],
        excluded: [
            "Sewa kuda"
        ],
        additionalInfo: []
    },
    {
        id: "br-2",
        title: "Bromo Sunrise",
        location: "Bromo",
        type: "Private Trip",
        duration: "1 Night",
        description: "Exclusive private jeep tour for your group to enjoy Bromo's sunrise and scenery in comfort.",
        price: "IDR 2.000.000",
        priceUnit: "/ Jeep (Max 5 pax)",
        image: bromoSunriseImg,
        rating: 5.0,
        maxGuests: 5,
        highlights: [
            "Sunrise View Point",
            "Widodaren",
            "Kawah Bromo / Pura Luhur",
            "Pasir Berbisik",
            "Bukit Teletubies / Savanna"
        ],
        itinerary: [
             {
                day: 1,
                title: "Private Jeep Adventure",
                activities: "Private pickup, Sunrise at View Point, Private exploration of Crater and Savanna. Flexible timing."
            }
        ],
        included: [
            "Shuttle car : Kota malang – Tumpang (PP)",
            "Welcome drink in basecamp tumpang",
            "Jeep 4x4 : Tumpang – Bromo (PP)",
            "Entrance fee",
            "Tour leader as phographer",
            "Gdrive photo trip"
        ],
        excluded: [
            "Sewa kuda",
            "Additional Video Production"
        ],
        additionalInfo: []
    }
];

export default trips;
