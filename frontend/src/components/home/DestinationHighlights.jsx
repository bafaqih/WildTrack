import { Link } from 'react-router-dom';
import destinations from '@/data/destinations';

const DestinationHighlights = () => {
    // Get first 6 destinations for home page
    const highlightedDestinations = destinations.slice(0, 6);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Destination <span className="text-secondary">Highlights</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover the most breathtaking locations across Indonesia's most stunning landscapes
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {highlightedDestinations.map((destination, index) => (
                        <div
                            key={destination.id}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg card-hover h-80 ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-full' : ''
                                } ${index >= 3 ? 'hidden md:block' : ''}`}
                            data-aos="zoom-in"
                            data-aos-delay={index * 50}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('${destination.image}')`,
                                }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                                    {destination.name}
                                </h3>

                                <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                                    <p className="text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {destination.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {destination.activities.map((activity, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-secondary/90 text-white text-sm rounded-full"
                                            >
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                                {destination.category}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center" data-aos="fade-up">
                    <Link
                        to="/destinations"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span>Explore All Destinations</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DestinationHighlights;
