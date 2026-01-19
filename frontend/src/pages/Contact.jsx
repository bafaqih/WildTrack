import { useEffect, useState } from 'react';

const Contact = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'all', name: 'All Photos' },
        { id: 'islands', name: 'Islands' },
        { id: 'wildlife', name: 'Wildlife' },
        { id: 'underwater', name: 'Underwater' },
        { id: 'beaches', name: 'Beaches' },
    ];

    const galleryImages = [
        { id: 1, category: 'islands', title: 'Padar Island Viewpoint', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070' },
        { id: 2, category: 'underwater', title: 'Coral Reef', url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2074' },
        { id: 3, category: 'wildlife', title: 'Komodo Dragon', url: 'https://images.unsplash.com/photo-1611316186697-00fef7a6f135?q=80&w=2070' },
        { id: 4, category: 'beaches', title: 'Pink Beach', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073' },
        { id: 5, category: 'islands', title: 'Komodo Island', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070' },
        { id: 6, category: 'underwater', title: 'Manta Ray', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070' },
        { id: 7, category: 'beaches', title: 'Taka Makassar', url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068' },
        { id: 8, category: 'islands', title: 'Sunset at Kalong', url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070' },
        { id: 9, category: 'underwater', title: 'Tropical Fish', url: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=2074' },
        { id: 10, category: 'wildlife', title: 'Flying Foxes', url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2074' },
        { id: 11, category: 'islands', title: 'Rinca Island', url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021' },
        { id: 12, category: 'beaches', title: 'Kelor Island Beach', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070' },
    ];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-secondary to-accent">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
                        }}
                    ></div>
                </div>
                <div className="relative z-10 container-custom text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4" data-aos="fade-up">
                        Photo Gallery
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Discover the Beauty Through Our Lens
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-secondary text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${image.url}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {image.title}
                                        </h3>
                                    </div>
                                </div>
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

            {/* Instagram CTA */}
            <section className="py-16 bg-white" data-aos="fade-up">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-display font-bold mb-4">
                        Follow Our Adventures
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Tag us <span className="text-secondary font-semibold">@wildtrackadventure</span> to be featured!
                    </p>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>Follow on Instagram</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
