import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import trips from '@/data/trips';

const FeaturedTrips = () => {
    // Get first 3 trips for featured section
    const featuredTrips = trips.slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Featured <span className="text-secondary">Trips</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Choose from our carefully curated trip packages to explore the wonders of Labuan Bajo
                    </p>
                </div>

                {/* Trips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredTrips.map((trip, index) => (
                        <div
                            key={trip.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
                                    }}
                                ></div>
                                <div className="overlay-gradient"></div>
                                <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold text-sm">
                                    {trip.price}
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                                        {trip.title}
                                    </h3>
                                    <p className="text-white/90 text-sm">{trip.shortDescription}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{trip.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>Max {trip.maxGuests} pax</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span>{trip.rating}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {trip.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <p className="font-semibold text-gray-900 mb-2">Highlights:</p>
                                    <ul className="space-y-1">
                                        {trip.highlights.slice(0, 3).map((highlight, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-secondary mr-2">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to="/destinations"
                                    className="w-full btn-primary flex items-center justify-center gap-2 group"
                                >
                                    <span>Detail Trip</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
