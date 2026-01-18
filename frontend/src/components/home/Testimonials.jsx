import { Star, Quote } from 'lucide-react';
import testimonials from '@/data/testimonials';

const Testimonials = () => {
    // Get first 3 testimonials for home page
    const featuredTestimonials = testimonials.slice(0, 3);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        What Our <span className="text-secondary">Travelers Say</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Real experiences from adventurers who explored Labuan Bajo with us
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredTestimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-8 shadow-lg card-hover relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-secondary/20">
                                <Quote className="w-12 h-12" fill="currentColor" />
                            </div>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 mb-6 italic leading-relaxed">
                                "{testimonial.review}"
                            </p>

                            {/* Trip Type */}
                            <div className="mb-4">
                                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                                    {testimonial.tripType}
                                </span>
                            </div>

                            {/* Customer Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    data-aos="fade-up"
                >
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">500+</p>
                        <p className="text-gray-600">Happy Travelers</p>
                    </div>
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">4.9</p>
                        <p className="text-gray-600">Average Rating</p>
                    </div>
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">100+</p>
                        <p className="text-gray-600">Successful Trips</p>
                    </div>
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">15+</p>
                        <p className="text-gray-600">Destinations</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
