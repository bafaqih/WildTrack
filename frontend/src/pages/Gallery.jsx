import { useEffect, useState, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

// Import images
import heroBg from '../assets/images/hero/hero-default.jpg';
import padarImg from '../assets/images/gallery/islands/padar.jpg';
import takaImg from '../assets/images/gallery/islands/taka.jpg';
import komodoImg from '../assets/images/gallery/wildlife/komodo.jpg';
import mantaImg from '../assets/images/gallery/underwater/manta.jpg';
import pinkImg from '../assets/images/gallery/beaches/pink.jpg';
import rincaImg from '../assets/images/gallery/beaches/rinca.jpg';
import bromoImg from '../assets/images/gallery/mountains/bromo.jpg';
import semeruImg from '../assets/images/gallery/mountains/semeru.jpg';
import ijenImg from '../assets/images/gallery/mountains/ijen.jpg';
import tumpakSewuImg from '../assets/images/gallery/waterfalls/tumpaksewu.jpg';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll active thumbnail into view
    useEffect(() => {
        if (selectedIndex !== null && scrollRef.current) {
            const activeThumbnail = scrollRef.current.children[selectedIndex];
            if (activeThumbnail) {
                activeThumbnail.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [selectedIndex]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (selectedIndex === null) return;

        if (e.key === 'ArrowLeft') {
            navigateImage('prev');
        } else if (e.key === 'ArrowRight') {
            navigateImage('next');
        } else if (e.key === 'Escape') {
            setSelectedIndex(null);
        }
    }, [selectedIndex]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const categories = [
        { id: 'all', name: 'All Photos' },
        { id: 'islands', name: 'Islands' },
        { id: 'mountains', name: 'Mountains' },
        { id: 'waterfalls', name: 'Waterfalls' },
        { id: 'wildlife', name: 'Wildlife' },
        { id: 'underwater', name: 'Underwater' },
        { id: 'beaches', name: 'Beaches' },
    ];

    const galleryImages = [
        { id: 1, category: 'islands', title: 'Padar Island', url: padarImg },
        { id: 2, category: 'wildlife', title: 'Komodo Dragon', url: komodoImg },
        { id: 3, category: 'beaches', title: 'Pink Beach', url: pinkImg },
        { id: 4, category: 'underwater', title: 'Manta Point', url: mantaImg },
        { id: 5, category: 'islands', title: 'Taka Makassar', url: takaImg },
        { id: 6, category: 'beaches', title: 'Rinca Island', url: rincaImg },
        { id: 7, category: 'mountains', title: 'Mount Bromo', url: bromoImg },
        { id: 8, category: 'mountains', title: 'Mount Semeru', url: semeruImg },
        { id: 9, category: 'mountains', title: 'Ijen Crater', url: ijenImg },
        { id: 10, category: 'waterfalls', title: 'Tumpak Sewu', url: tumpakSewuImg },
    ];

    const socialLinks = [
        { icon: <Instagram className="w-6 h-6" />, url: 'https://instagram.com/wildtrack_adventure', color: 'hover:bg-[#E4405F]' },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
            ), url: 'https://tiktok.com/@glampingcampmalang', color: 'hover:bg-[#000000]'
        },
    ];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    // Get the index in the FULL list corresponding to the current filtered item
    // This is a bit tricky if we filter. Navigation should probably respect the filter.
    // Let's make navigation strictly within filteredImages for better UX.

    const openLightbox = (image) => {
        const index = filteredImages.findIndex(img => img.id === image.id);
        setSelectedIndex(index);
    };

    const navigateImage = (direction) => {
        if (selectedIndex === null) return;

        let newIndex;
        if (direction === 'next') {
            newIndex = (selectedIndex + 1) % filteredImages.length;
        } else {
            newIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
        }
        setSelectedIndex(newIndex);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-secondary to-accent">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroBg})`,
                        }}
                    ></div>
                </div>
                <div className="relative z-10 container-custom text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4" data-aos="fade-up">
                        Photo Gallery
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Discover the Beauty of Indonesia
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="pt-8 pb-20 bg-gray-50">
                <div className="container-custom">
                    {/* Category Filter */}
                    <div className="flex overflow-x-auto gap-3 p-4 mb-4 md:mb-12 md:justify-center md:flex-wrap scrollbar-hide -mx-4 md:mx-0" data-aos="fade-up">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={(e) => {
                                    setSelectedCategory(category.id);
                                    setSelectedIndex(null);
                                    e.target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                                }}
                                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base whitespace-nowrap flex-shrink-0 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-secondary text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-200"
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                                onClick={() => openLightbox(image)}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${image.url})` }}
                                ></div>
                                {/* Removed Text Overlay */}
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No images found in this category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/50 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-20"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Main Image Container */}
                    <div className="flex-1 w-full flex items-center justify-center relative min-h-0 mb-6">
                        <button
                            className="absolute left-2 md:left-4 text-white/70 hover:text-white transition-colors p-2 z-20"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <div
                            className="relative w-full h-full flex items-center justify-center pointer-events-none"
                        >
                            <img
                                src={filteredImages[selectedIndex].url}
                                alt={filteredImages[selectedIndex].title}
                                className="max-h-[70vh] md:max-h-[80vh] w-auto h-auto max-w-[95vw] md:max-w-5xl object-contain rounded-lg shadow-2xl pointer-events-auto"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>

                        <button
                            className="absolute right-2 md:right-4 text-white/70 hover:text-white transition-colors p-2 z-20"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Thumbnails Footer */}
                    <div
                        className="w-full max-w-4xl overflow-x-auto whitespace-nowrap scrollbar-hide z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex gap-2 md:gap-4 w-max mx-auto p-4" ref={scrollRef}>
                            {filteredImages.map((img, idx) => (
                                <button
                                    key={img.id}
                                    onClick={() => setSelectedIndex(idx)}
                                    className={`relative w-16 h-10 md:w-24 md:h-16 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${selectedIndex === idx
                                        ? 'ring-1 ring-secondary ring-offset-1 ring-offset-transparent opacity-100 scale-105'
                                        : 'opacity-50 hover:opacity-100 hover:scale-105'
                                        }`}
                                >
                                    <img
                                        src={img.url}
                                        alt={img.title}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Social Media Section */}
            <section className="py-20 bg-white">
                <div className="container-custom text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-display font-bold mb-4">
                        Follow Our <span className="text-secondary">Adventures</span>
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        Stay updated with our latest trips, special offers, and beautiful moments from Komodo National Park.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:text-white transform hover:scale-110 hover:-translate-y-1 shadow-sm ${link.color}`}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
