import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/home/Hero';
import OurServices from '@/components/common/OurServices';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedTrips from '@/components/home/FeaturedTrips';
import DestinationHighlights from '@/components/home/DestinationHighlights';
import Testimonials from '@/components/home/Testimonials';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <Hero />
            <OurServices />
            <WhyChooseUs />
            <FeaturedTrips />
            <DestinationHighlights />
            <Testimonials />

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container-custom relative z-10" data-aos="fade-up">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Ready For Your Adventure?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Start planning your dream trip to Indonesia today. Our team is ready to help you create unforgettable memories.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            <span>Book Your Adventure Now</span>
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
