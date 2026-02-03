import React from 'react';
import glampingImg from '../../assets/images/services/glamping.jpg';
import rentalImg from '../../assets/images/services/rentaloutdoor.jpg';
import tripImg from '../../assets/images/services/triporganizer.jpg';

const services = [
    {
        id: 1,
        title: 'Trip Organizer',
        description: 'Professional trip planning and guiding services for your best adventure. We handle all the details so you can focus on the experience.',
        image: tripImg,
        badge: 'Adventure'
    },
    {
        id: 2,
        title: 'Outdoor Gear Rental',
        description: 'High-quality camping and hiking equipment rental for your safety and comfort. From tents to trekking poles, we have it all.',
        image: rentalImg,
        badge: 'Equipment'
    },
    {
        id: 3,
        title: 'Glamping',
        description: 'Luxury camping experiences combining nature with modern comfort. Enjoy the outdoors without sacrificing a good night\'s sleep.',
        image: glampingImg,
        badge: 'Luxury'
    }
];

const OurServices = ({ compact = false, grayBackground = false }) => {
    return (
        <section className={`py-20 ${grayBackground ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container-custom">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className={`${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl'} font-display font-bold mb-4`}>
                        Our <span className="text-secondary">Services</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Everything you need for an unforgettable outdoor experience
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                {/* Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Text Content */}
                                <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <h3 className="text-3xl font-display font-bold text-white mb-2">
                                        {service.title}
                                    </h3>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
                                        <div className="overflow-hidden">
                                            <p className="text-white/90 text-lg leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
