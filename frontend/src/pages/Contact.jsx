import { useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';
import heroBg from '../assets/images/hero/hero-default.jpg';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const socialLinks = [
        { icon: <Instagram className="w-6 h-6" />, url: 'https://instagram.com/wildtrack_adventure', color: 'hover:bg-[#E4405F]' },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
            ), url: 'https://tiktok.com/@glampingcampmalang', color: 'hover:bg-[#000000]'
        }
    ];

    const contactDetails = [
        {
            icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-secondary" />,
            title: "Our Office",
            content: (
                <>
                    <p>Jl. Raya Prapatan Tulusayu No. 09, Tulusbesar</p>
                    <p>Kec. Tumpang, Kab. Malang, Jawa Timur 65156</p>
                </>
            )
        },
        {
            icon: <Phone className="w-6 h-6 md:w-8 md:h-8 text-secondary" />,
            title: "WhatsApp",
            content: (
                <>
                    <p className="text-secondary font-medium mb-1">+62 822-4430-8302</p>
                    <p className="text-gray-500 text-sm">Available 24/7</p>
                </>
            )
        },
        {
            icon: <Mail className="w-6 h-6 md:w-8 md:h-8 text-secondary" />,
            title: "Email",
            content: (
                <div className="break-all sm:break-normal">
                    <p className="text-secondary font-medium mb-1">wildtrackadventure@gmail.com</p>
                    <p className="text-gray-500 text-sm">We'll reply within 24 hours</p>
                </div>
            )
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

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
                        Get In Touch
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Let's Plan Your Perfect Adventure
                    </p>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Information */}
                        <div data-aos="fade-up">
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                                Contact <span className="text-secondary">Information</span>
                            </h2>
                            <p className="text-gray-600 mb-10 leading-relaxed">
                                Have questions about our trips? Want to customize a package? Or just want
                                to say hello? We'd love to hear from you! Our team is here to help you plan
                                the perfect Labuan Bajo adventure.
                            </p>

                            <div className="space-y-6">
                                {contactDetails.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 md:gap-6"
                                    >
                                        <div className="bg-orange-50 p-3 md:p-4 rounded-full shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                                            <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Send Message Form */}
                        <div data-aos="fade-up" data-aos-delay="200" className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300">
                                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                                    Send Us a <span className="text-secondary">Message</span>
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            placeholder="Your name"
                                            className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="your.email@example.com"
                                            className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            placeholder="+62 822-4430-8302"
                                            className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows="3"
                                            placeholder="Tell us about your dream trip..."
                                            className="w-full px-6 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-20 bg-white">
                <div className="container-custom text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-display font-bold mb-4">
                        Follow Our <span className="text-secondary">Adventures</span>
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        Stay updated with our latest trips, special offers, and beautiful moments from Komodo National Park.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:text-white transform hover:scale-110 hover:-translate-y-1 shadow-sm ${link.color}`}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
