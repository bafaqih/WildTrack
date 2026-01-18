import { Users, Ship, MapPin, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Users className="w-12 h-12 text-secondary" />,
            title: "Local Expert Guides",
            description: "Experienced and friendly local guides who know every corner of Labuan Bajo"
        },
        {
            icon: <Ship className="w-12 h-12 text-secondary" />,
            title: "Private & Small Group",
            description: "Exclusive and comfortable trips with small group sizes for better experience"
        },
        {
            icon: <MapPin className="w-12 h-12 text-secondary" />,
            title: "Hidden Gems & Iconic Spots",
            description: "Unforgettable destinations that combine popular attractions with secret locations"
        },
        {
            icon: <DollarSign className="w-12 h-12 text-secondary" />,
            title: "Transparent Pricing",
            description: "No hidden fees, all costs included in the package price"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Why Choose <span className="text-secondary">Wild Track?</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We provide the best service and unforgettable experiences for your Labuan Bajo adventure
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group card-hover text-center"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="inline-block p-4 bg-secondary/10 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold mb-3 text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
