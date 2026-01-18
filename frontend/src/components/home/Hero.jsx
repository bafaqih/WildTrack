import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom text-center text-white">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-secondary font-semibold text-lg md:text-xl mb-4">
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

                {/* Scroll Indicator */}
                <div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
