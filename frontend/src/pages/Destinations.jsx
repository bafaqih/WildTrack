import { useEffect, useState } from 'react';
import { Clock, Users, Star, Check, ArrowRight, Compass, MessageCircle } from 'lucide-react';
import trips from '@/data/trips';

const Destinations = () => {
    const [selectedTrip, setSelectedTrip] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-secondary to-accent">
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
                        Trip Packages
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Choose Your Perfect Adventure
                    </p>
                </div>
            </section>

            {/* Trips Grid */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {trips.map((trip, index) => (
                            <div
                                key={trip.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden group">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
                                        }}
                                    ></div>
                                    <div className="overlay-gradient"></div>
                                    <div className="absolute top-4 right-4 bg-secondary text-white px-5 py-2 rounded-full font-bold">
                                        {trip.price}
                                    </div>
                                    <div className="absolute bottom-4 left-6">
                                        <h3 className="text-3xl font-display font-bold text-white mb-1">
                                            {trip.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    {/* Trip Info */}
                                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-secondary" />
                                            <span className="font-semibold">{trip.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5 text-secondary" />
                                            <span>Max {trip.maxGuests} guests</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold">{trip.rating}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {trip.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mb-6">
                                        <h4 className="font-bold text-gray-900 mb-3 text-lg">Trip Highlights:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {trip.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* View Details Button */}
                                    <button
                                        onClick={() => setSelectedTrip(trip)}
                                        className="w-full btn-primary flex items-center justify-center gap-2 group"
                                    >
                                        <span>View Full Itinerary</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Custom Trip Card */}
                        <div
                            className="bg-secondary text-white rounded-2xl p-8 md:p-12 shadow-lg col-span-1 lg:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 card-hover"
                            data-aos="fade-up"
                        >
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-4">
                                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                                        <Compass className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold">Want a Custom Trip?</h3>
                                </div>
                                <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
                                    Have a specific destination in mind? Or want to combine multiple packages?
                                    Let us help you design the perfect Labuan Bajo adventure tailored to your preferences.
                                </p>
                            </div>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-secondary hover:bg-orange-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center gap-3 whitespace-nowrap"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Custom via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trip Detail Modal */}
            {selectedTrip && (
                <div
                    className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedTrip(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 md:p-8">
                            <button
                                onClick={() => setSelectedTrip(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none z-10"
                            >
                                ×
                            </button>
                            <div className="mb-6 pr-8">
                                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{selectedTrip.title}</h2>
                                <p className="text-gray-600 text-sm md:text-base">{selectedTrip.description}</p>
                            </div>

                            {/* Itinerary */}
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-display font-bold mb-6">Day-by-Day Itinerary</h3>
                                <div className="space-y-6">
                                    {selectedTrip.itinerary.map((day, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-base md:text-lg">
                                                D{day.day}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-bold text-lg mb-2">{day.title}</h4>
                                                <p className="text-gray-600">{day.activities}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What's Included */}
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-display font-bold mb-4">What's Included</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedTrip.included.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price & Book */}
                            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-200 gap-4 md:gap-0">
                                <div className="text-center md:text-left">
                                    <p className="text-sm text-gray-500 mb-1">Starting from</p>
                                    <p className="text-3xl font-bold text-secondary">{selectedTrip.price}</p>
                                    <p className="text-sm text-gray-500">{selectedTrip.priceUSD} per person</p>
                                </div>
                                <button className="btn-primary w-full md:w-auto">
                                    Book This Trip
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Destinations;
