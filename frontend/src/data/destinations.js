// Destination highlights data for Wild Track Adventure
import padarImg from '../assets/images/destinations/padar.jpg';
import komodoImg from '../assets/images/destinations/komodo.jpg';
import pinkImg from '../assets/images/destinations/pink.jpg';
import takaImg from '../assets/images/destinations/taka.jpg';
import mantaImg from '../assets/images/destinations/manta.jpg';
import rincaImg from '../assets/images/destinations/rinca.jpg';

export const destinations = [
  {
    id: 1,
    name: "Pulau Padar",
    description: "Iconic three-bay viewpoint with breathtaking panoramic views of turquoise waters and dramatic hills",
    image: padarImg,
    category: "Island",
    activities: ["Trekking", "Photography", "Sunrise/Sunset"],
    difficulty: "Moderate"
  },
  {
    id: 2,
    name: "Pulau Komodo",
    description: "Home to the legendary Komodo dragons, the world's largest living lizard species",
    image: komodoImg,
    category: "Wildlife",
    activities: ["Dragon Tracking", "Trekking", "Wildlife Photography"],
    difficulty: "Easy to Moderate"
  },
  {
    id: 3,
    name: "Pink Beach",
    description: "Rare pink-sand beach perfect for swimming, snorkeling, and relaxation",
    image: pinkImg,
    category: "Beach",
    activities: ["Swimming", "Snorkeling", "Beach Relaxation"],
    difficulty: "Easy"
  },
  {
    id: 4,
    name: "Taka Makassar",
    description: "Stunning white sandbar surrounded by crystal clear turquoise waters",
    image: takaImg,
    category: "Sandbar",
    activities: ["Swimming", "Snorkeling", "Photography"],
    difficulty: "Easy"
  },
  {
    id: 5,
    name: "Manta Point",
    description: "World-famous diving and snorkeling spot to swim with majestic manta rays",
    image: mantaImg,
    category: "Underwater",
    activities: ["Snorkeling", "Diving", "Marine Life"],
    difficulty: "Easy to Moderate"
  },
  {
    id: 6,
    name: "Pulau Rinca",
    description: "Alternative island to see Komodo dragons in a more rugged, wild setting",
    image: rincaImg,
    category: "Island",
    activities: ["Dragon Tracking", "Trekking", "Wildlife Spotting"],
    difficulty: "Moderate"
  },
  {
    id: 7,
    name: "Kalong Island",
    description: "Witness thousands of flying foxes (fruit bats) during spectacular sunset",
    image: "https://images.unsplash.com/photo-1518598428801-b8f4118ea1b8?q=80&w=2070",
    category: "Wildlife",
    activities: ["Sunset Viewing", "Wildlife Photography"],
    difficulty: "Easy"
  },
  {
    id: 8,
    name: "Kelor Island",
    description: "Small island with beautiful coral reefs and a short trek to panoramic viewpoint",
    image: "https://images.unsplash.com/photo-1596423730075-80dd85496464?q=80&w=2070",
    category: "Island",
    activities: ["Snorkeling", "Trekking", "Photography"],
    difficulty: "Easy"
  }
];

export default destinations;
