import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, Check, MapPin, Tag } from 'lucide-react';
import trips from '@/data/trips';

const FeaturedTrips = () => {
    // Get specific trips: Fullday Trip (lb-3), Sunset Trip (lb-2), Bromo Sunrise Private (br-2)
    const featuredTrips = trips.filter(trip =>
        ['lb-3', 'lb-2', 'br-2'].includes(trip.id)
    );

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Featured <span className="text-secondary">Trips</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Choose from our carefully curated trip packages to explore the wonders of Indonesia
                    </p>
                </div>

                {/* Trips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredTrips.map((trip, index) => (
                        <div
                            key={trip.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden group flex-shrink-0">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${trip.image}')`,
                                    }}
                                ></div>
                                <div className="overlay-gradient"></div>

                                {/* Location & Type Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                                        <MapPin className="w-3 h-3 text-secondary" />
                                        {trip.location}
                                    </div>
                                    <div className="bg-secondary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                                        <Tag className="w-3 h-3" />
                                        {trip.type}
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-secondary px-4 py-2 rounded-full font-bold shadow-sm">
                                    {trip.price}
                                </div>
                                <div className="absolute bottom-4 left-6 right-6">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1 leading-tight">
                                        {trip.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                {/* Trip Info */}
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200 overflow-x-auto whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                                        <span className="font-semibold">{trip.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-secondary flex-shrink-0" />
                                        <span>Max {trip.maxGuests} guests</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                                        <span className="font-semibold">{trip.rating}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                    {trip.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Trip Highlights:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {trip.highlights.slice(0, 4).map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-sm truncate" title={highlight}>{highlight}</span>
                                            </div>
                                        ))}
                                        {trip.highlights.length > 4 && (
                                            <div className="text-sm text-gray-400 italic pl-7">
                                                + {trip.highlights.length - 4} more
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* View Details Button (Link) */}
                                <Link
                                    to="/destinations"
                                    state={{ tripId: trip.id }}
                                    className="w-full btn-primary flex items-center justify-center gap-2 group mt-auto"
                                >
                                    <span>View Full Itinerary</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center" data-aos="fade-up">
                    <Link
                        to="/destinations"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <span>View All Packages</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTrips;
