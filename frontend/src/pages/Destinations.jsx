import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, Users, Star, Check, ArrowRight, Compass, MessageCircle, MapPin, Tag, X, AlertCircle } from 'lucide-react'; // Added icons
import trips from '@/data/trips';
import heroBg from '../assets/images/hero/hero-default.jpg';

const Destinations = () => {
    const [selectedTrip, setSelectedTrip] = useState(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Check if there's a trip ID passed in the location state
        if (location.state?.tripId) {
            const tripToSelect = trips.find(t => t.id === location.state.tripId);
            if (tripToSelect) {
                setSelectedTrip(tripToSelect);
            }
        }
    }, [location.state]);

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
                                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden group">
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

                                    {/* View Details Button */}
                                    <button
                                        onClick={() => setSelectedTrip(trip)}
                                        className="w-full btn-primary flex items-center justify-center gap-2 group mt-auto"
                                    >
                                        <span>View Full Itinerary</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Custom Trip Card (unchanged) */}
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
                                    Let us help you design the perfect adventure tailored to your preferences.
                                </p>
                            </div>
                            <a
                                href="https://wa.me/6282244308302" // Update this number if needed
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
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto relative animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 md:p-8">
                            <button
                                onClick={() => setSelectedTrip(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <div className="mb-6 pr-12">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                                        {selectedTrip.location}
                                    </span>
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                                        {selectedTrip.type}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{selectedTrip.title}</h2>
                                <p className="text-gray-600 text-sm md:text-base">{selectedTrip.description}</p>
                            </div>

                            {/* Itinerary */}
                            {selectedTrip.itinerary && selectedTrip.itinerary.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xl md:text-2xl font-display font-bold mb-6 flex items-center gap-2">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                        Itinerary
                                    </h3>
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
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Included */}
                                <div>
                                    <h3 className="text-lg md:text-xl font-display font-bold mb-4 text-green-700 flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        What's Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {selectedTrip.included.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Excluded */}
                                {selectedTrip.excluded && (
                                    <div>
                                        <h3 className="text-lg md:text-xl font-display font-bold mb-4 text-red-700 flex items-center gap-2">
                                            <X className="w-5 h-5" />
                                            What's Excluded
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedTrip.excluded.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Additional Info / Surcharges */}
                            {selectedTrip.additionalInfo && selectedTrip.additionalInfo.length > 0 && (
                                <div className="mb-8 bg-orange-50 rounded-xl p-6 border border-orange-100">
                                    <h3 className="text-lg md:text-xl font-display font-bold mb-4 text-orange-800 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5" />
                                        Important Notes & Additional Fees
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedTrip.additionalInfo.map((info, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                                                <div className="min-w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                                                <span>{info}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Price & Book */}
                            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-200 gap-4 md:gap-0">
                                <div className="text-center md:text-left">
                                    <p className="text-sm text-gray-500 mb-1">Starting from</p>
                                    <div className="flex items-baseline gap-2 justify-center md:justify-start">
                                        <span className="text-3xl font-bold text-secondary">{selectedTrip.price}</span>
                                        {selectedTrip.priceUnit && (
                                            <span className="text-gray-500 text-sm">{selectedTrip.priceUnit}</span>
                                        )}
                                    </div>
                                    {selectedTrip.priceUSD && (
                                        <p className="text-sm text-gray-500">{selectedTrip.priceUSD} (approx)</p>
                                    )}
                                </div>
                                <a
                                    href={`https://wa.me/6282244308302?text=Hello, I would like to book the ${selectedTrip.title} (${selectedTrip.location})`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Book via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Destinations;
