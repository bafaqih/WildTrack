import { useEffect } from 'react';
import {
    CheckCircle, Heart, Award, Users,
    Target, Compass, MapPin, Shield,
    Sliders, Leaf, Headphones, Tag
} from 'lucide-react';
import aboutImage from '../assets/images/about/about.jpg';
import heroBg from '../assets/images/hero/hero-default.jpg';
import OurServices from '@/components/common/OurServices';

const About = () => {
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
                            backgroundImage: `url(${heroBg})`,
                        }}
                    ></div>
                </div>
                <div className="relative z-10 container-custom text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4" data-aos="fade-up">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Your Gateway to Indonesian Nature
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    {/* Mobile Title (visible only on mobile) */}
                    <div className="md:hidden text-left mb-8" data-aos="fade-up">
                        <h2 className="text-2xl font-display font-bold">
                            Our <span className="text-secondary">Story</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-up" className="order-2 md:order-1">
                            <h2 className="hidden md:block text-2xl md:text-3xl font-display font-bold mb-6">
                                Our <span className="text-secondary">Story</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    WILDTRACK ADVENTURE INDONESIA is an adventure activity agency and a business specializing in the rental
                                    of camping equipment, glamping, gatherings, and trip organizing, located in Malang, East Java.
                                </p>
                                <p>
                                    We are engaged in the rental of camping equipment, outdoor activity equipment, and event venue setup for camping,
                                    glamping, and gatherings, as well as providing several exclusive trips that tourists must explore when visiting Indonesia.
                                </p>
                                <p>
                                    We were established on July 27, 2016, and our headquarters are in Malang. To maintain quality and service standards in the
                                    future, WILDTRACK ADVENTURE INDONESIA always prioritizes the best service with skilled staff and equipment that meet
                                    standards, excellent hospitality, clear trip schedules, and the safety of travelers remains a top priority.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="order-1 md:order-2">
                            <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group">
                                <div
                                    className="h-64 md:h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${aboutImage})`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            Our <span className="text-secondary">Values</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Heart className="w-12 h-12 text-secondary transition-transform duration-300 group-hover:scale-110" />,
                                title: "Passion",
                                description: "We love what we do and it shows in every trip we organize"
                            },
                            {
                                icon: <CheckCircle className="w-12 h-12 text-secondary transition-transform duration-300 group-hover:scale-110" />,
                                title: "Quality",
                                description: "We never compromise on the quality of our services and experiences"
                            },
                            {
                                icon: <Award className="w-12 h-12 text-secondary transition-transform duration-300 group-hover:scale-110" />,
                                title: "Excellence",
                                description: "Striving for excellence in every detail of your journey"
                            },
                            {
                                icon: <Users className="w-12 h-12 text-secondary transition-transform duration-300 group-hover:scale-110" />,
                                title: "Community",
                                description: "Supporting local communities and sustainable tourism"
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-lg card-hover text-center group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="inline-block p-4 bg-secondary/10 rounded-full mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div
                            className="bg-gradient-to-br from-accent to-blue-600 text-white rounded-2xl p-10 shadow-xl group"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm shrink-0">
                                    <Compass className="w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-display font-bold">Our Vision</h3>
                            </div>
                            <ol className="text-white/90 leading-relaxed text-lg list-decimal list-outside pl-5 space-y-2">
                                <li>To become the number one place for camping equipment rental, glamping, camping events, and trip organizers in Malang and East Java.</li>
                                <li>To position WILDTRACK ADVENTURE INDONESIA as a camping equipment rental and trip organizer that prioritizes service and quality.</li>
                                <li>To maintain WILDTRACK ADVENTURE INDONESIA's core business by prioritizing the best quality and service for its clients.</li>
                            </ol>
                        </div>

                        {/* Mission */}
                        <div
                            className="bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-2xl p-10 shadow-xl group"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm shrink-0">
                                    <Target className="w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-display font-bold">Our Mission</h3>
                            </div>
                            <ol className="text-white/90 leading-relaxed text-lg list-decimal list-outside pl-5 space-y-2">
                                <li>To provide services and products for camping equipment rental, glamping, and trip organizing by WILDTRACK ADVENTURE INDONESIA that align with client needs.</li>
                                <li>To maintain the quality of equipment and services for camping, glamping, and trip organizing in line with consumer needs.</li>
                                <li>Enhancing product promotion through online and offline media across various platforms that support outdoor activities.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <OurServices compact={true} grayBackground={true} />

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            Why Travel <span className="text-secondary">With Us?</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Six reasons why Wild Track Adventure is your best travel partner
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MapPin className="w-5 h-5 text-secondary" />,
                                title: "Local Expertise",
                                description: "Our guides are experts in every destination, offering deep local knowledge and uncovering hidden gems across Indonesia."
                            },
                            {
                                icon: <Shield className="w-5 h-5 text-secondary" />,
                                title: "Safety First",
                                description: "Your safety is our top priority. All our equipment is regularly maintained and our crew is professionally trained."
                            },
                            {
                                icon: <Sliders className="w-5 h-5 text-secondary" />,
                                title: "Flexible Packages",
                                description: "We offer customizable packages to suit your preferences, budget, and schedule."
                            },
                            {
                                icon: <Leaf className="w-5 h-5 text-secondary" />,
                                title: "Sustainable Tourism",
                                description: "We practice responsible tourism, respecting nature and supporting local communities."
                            },
                            {
                                icon: <Headphones className="w-5 h-5 text-secondary" />,
                                title: "24/7 Support",
                                description: "Our team is available round the clock to ensure your trip goes smoothly."
                            },
                            {
                                icon: <Tag className="w-5 h-5 text-secondary" />,
                                title: "Best Value",
                                description: "Competitive pricing with transparent costs and no hidden fees."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg card-hover"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <h4 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                                    {item.icon}
                                    {item.title}
                                </h4>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
