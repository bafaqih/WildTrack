import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import testimonials from '@/data/testimonials';

const StatCounter = ({ end, duration = 2000, suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            const currentCount = easeOutQuart * end;
            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
};

const Testimonials = () => {
    // Get first 3 testimonials for home page
    const featuredTestimonials = testimonials.slice(0, 3);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Auto slide for mobile carousel
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [featuredTestimonials.length, isPaused]);

    // Touch handlers for swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsPaused(true);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            setIsPaused(false);
            return;
        }

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length);
        }
        if (isRightSwipe) {
            setActiveIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
        }

        setIsPaused(false);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        What Our <span className="text-secondary">Travelers Say</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Real experiences from adventurers who explored Indonesia with us
                    </p>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredTestimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-8 shadow-lg card-hover relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel View */}
                <div
                    className="md:hidden relative"
                    data-aos="fade-up"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="overflow-hidden px-4 py-8 -mx-4">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {featuredTestimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                                    <div className="bg-white rounded-2xl p-8 shadow-lg relative h-full mx-2">
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-2">
                        {featuredTestimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-secondary'
                                    : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    data-aos="fade-up"
                >
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">
                            <StatCounter end={500} suffix="+" />
                        </p>
                        <p className="text-gray-600">Happy Travelers</p>
                    </div>
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">
                            <StatCounter end={4.9} decimals={1} />
                        </p>
                        <p className="text-gray-600">Average Rating</p>
                    </div>
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">
                            <StatCounter end={100} suffix="+" />
                        </p>
                        <p className="text-gray-600">Successful Trips</p>
                    </div>
                    <div>
                        <p className="text-4xl font-display font-bold text-secondary mb-2">
                            <StatCounter end={15} suffix="+" />
                        </p>
                        <p className="text-gray-600">Destinations</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial }) => (
    <>
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
    </>
);

export default Testimonials;
