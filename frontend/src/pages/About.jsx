import { useEffect } from 'react';
import { Heart, CheckCircle, Award, Users } from 'lucide-react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        About Wild Track Adventure
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Your Gateway to Labuan Bajo's Hidden Treasures
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-4xl font-display font-bold mb-6">
                                Our <span className="text-secondary">Story</span>
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Wild Track Adventure was born from a passion for exploration and a deep love for Labuan Bajo's natural wonders. Founded by local adventurers who grew up exploring these islands, we understand the magic that makes this region so special.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Since our establishment, we've been dedicated to providing authentic, sustainable, and unforgettable travel experiences. We believe that travel should be more than just visiting places—it should be about creating meaningful connections with nature, culture, and people.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our team consists of experienced local guides who are not only knowledgeable about the area but are also passionate about sharing the beauty of Labuan Bajo with travelers from around the world.
                            </p>
                        </div>
                        <div data-aos="fade-left" className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2070"
                                alt="Ocean wave"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-display font-bold mb-4">
                            Our <span className="text-secondary">Values</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl cursor-pointer group" data-aos="fade-up" data-aos-delay="0">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Passion</h3>
                            <p className="text-gray-600 text-sm">
                                We love what we do and it shows in every trip we organize
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl cursor-pointer group" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality</h3>
                            <p className="text-gray-600 text-sm">
                                We never compromise on the quality of our services and experiences
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl cursor-pointer group" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Excellence</h3>
                            <p className="text-gray-600 text-sm">
                                Striving for excellence in every detail of your journey
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl cursor-pointer group" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Community</h3>
                            <p className="text-gray-600 text-sm">
                                Supporting local communities and sustainable tourism
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-secondary text-white p-10 rounded-2xl transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-right">
                            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
                            <p className="leading-relaxed">
                                To provide exceptional, authentic, and sustainable travel experiences that showcase the natural beauty and cultural richness of Labuan Bajo, while contributing positively to local communities and environmental conservation.
                            </p>
                        </div>

                        <div className="bg-accent text-white p-10 rounded-2xl transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-left">
                            <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
                            <p className="leading-relaxed">
                                To become the most trusted and preferred travel partner for adventurers seeking authentic experiences in Labuan Bajo, recognized for our commitment to sustainable tourism and exceptional service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Travel With Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-display font-bold mb-4">
                            Why Travel <span className="text-secondary">With Us?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-up" data-aos-delay="0">
                            <h3 className="text-xl font-bold mb-3 text-secondary">Local Expertise</h3>
                            <p className="text-gray-600">
                                Our guides are born and raised in Labuan Bajo, with deep knowledge of every hidden gem and local secret.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-xl font-bold mb-3 text-secondary">Safety First</h3>
                            <p className="text-gray-600">
                                Your safety is our top priority. All our equipment is regularly maintained and our crew is professionally trained.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-bold mb-3 text-secondary">Flexible Packages</h3>
                            <p className="text-gray-600">
                                We offer customizable packages to suit your preferences, budget, and schedule.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="text-xl font-bold mb-3 text-secondary">Sustainable Tourism</h3>
                            <p className="text-gray-600">
                                We practice responsible tourism, respecting nature and supporting local communities.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-xl font-bold mb-3 text-secondary">24/7 Support</h3>
                            <p className="text-gray-600">
                                Our team is available round the clock to ensure your trip goes smoothly.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer" data-aos="fade-up" data-aos-delay="500">
                            <h3 className="text-xl font-bold mb-3 text-secondary">Best Value</h3>
                            <p className="text-gray-600">
                                Competitive pricing with transparent costs and no hidden fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
