import { useEffect } from 'react';
import { Heart, CheckCircle, Award, Users, Target, Compass } from 'lucide-react';
import aboutImage from '@/assets/images/about/about.jpg';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        {
            icon: Heart,
            title: "Passion",
            desc: "We love what we do and it shows in every trip we organize"
        },
        {
            icon: CheckCircle,
            title: "Quality",
            desc: "We never compromise on the quality of our services and experiences"
        },
        {
            icon: Award,
            title: "Excellence",
            desc: "Striving for excellence in every detail of your journey"
        },
        {
            icon: Users,
            title: "Community",
            desc: "Supporting local communities and sustainable tourism"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-secondary to-accent">
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
                        About Wild Track
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Your Gateway to Labuan Bajo's Hidden Treasures
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-0">
                        {/* Title */}
                        <div className="md:col-start-1 md:row-start-1" data-aos="fade-right">
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-2">
                                Our <span className="text-secondary">Story</span>
                            </h2>
                        </div>

                        {/* Image */}
                        <div
                            className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2 w-full"
                            data-aos="fade-left"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-video">
                                <img
                                    src={aboutImage}
                                    alt="About Wild Track Adventure"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="order-3 md:order-none md:col-start-1 md:row-start-2 text-gray-600 leading-relaxed space-y-4" data-aos="fade-up">
                            <p>
                                Wild Track Adventure was born from a passion for exploration and a deep love for Labuan Bajo's natural wonders. Founded by local adventurers who grew up exploring these islands, we understand the magic that makes this region so special.
                            </p>
                            <p>
                                Since our establishment, we've been dedicated to providing authentic, sustainable, and unforgettable travel experiences. We believe that travel should be more than just visiting places—it should be about creating meaningful connections with nature, culture, and people.
                            </p>
                            <p>
                                Our team consists of experienced local guides who are not only knowledgeable about the area but are also passionate about sharing the beauty of Labuan Bajo with travelers from around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4" data-aos="fade-up">
                            Our <span className="text-secondary">Values</span>
                        </h2>
                        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <item.icon className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <div
                            className="bg-gradient-to-br from-orange-500 to-red-500 p-10 rounded-2xl text-white shadow-lg md:card-hover"
                            data-aos="fade-right"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-display font-bold">Our Mission</h3>
                            </div>
                            <p className="text-white/90 leading-relaxed text-sm">
                                To provide exceptional, authentic, and sustainable travel experiences that showcase the natural beauty and cultural richness of Labuan Bajo, while contributing positively to local communities and environmental conservation.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div
                            className="bg-gradient-to-br from-blue-500 to-cyan-500 p-10 rounded-2xl text-white shadow-lg md:card-hover"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Compass className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-display font-bold">Our Vision</h3>
                            </div>
                            <p className="text-white/90 leading-relaxed text-sm">
                                To become the most trusted and preferred travel partner for adventurers seeking authentic experiences in Labuan Bajo, recognized for our commitment to sustainable tourism and exceptional service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
