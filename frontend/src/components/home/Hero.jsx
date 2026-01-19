import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

import hero1 from '../../assets/images/home/hero-1.jpg';
import hero2 from '../../assets/images/home/hero-2.jpg';
import hero3 from '../../assets/images/home/hero-3.jpg';
import hero4 from '../../assets/images/home/hero-4.jpg';

const heroImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Carousel */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 container-custom text-center text-white">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-secondary font-semibold text-sm md:text-xl mb-4">
                        Welcome To Wild Track Adventure
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                        Explore The Wild Beauty<br />
                        Of <span className="text-secondary">Labuan Bajo</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                        Discover pristine islands, meet Komodo dragons, and dive into crystal-clear waters.
                        Your adventure of a lifetime starts here.
                    </p>
                </div>

                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <Link
                        to="/contact"
                        className="btn-primary flex items-center space-x-2 group"
                    >
                        <span>Book Your Trip</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/destinations"
                        className="btn-outline flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
                    >
                        <Play className="w-5 h-5" />
                        <span>View Open Trips</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
