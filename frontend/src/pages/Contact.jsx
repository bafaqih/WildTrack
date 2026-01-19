import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/6281234567890', '_blank');
    };

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
                        Get In Touch
                    </h1>
                    <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="100">
                        Let's Plan Your Adventure Together
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-display font-bold mb-2">
                                Contact <span className="text-secondary">Information</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about our trips? Want to customize a package? Or just want to say hello? We'd love to hear from you! Our team is here to help you plan the perfect Labuan Bajo adventure.
                            </p>

                            {/* Our Office */}
                            <div className="bg-white rounded-2xl p-6 mb-6 shadow-md card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Our Office</h3>
                                        <p className="text-gray-600">Jl. Soekarno Hatta No. 88</p>
                                        <p className="text-gray-600">Labuan Bajo, Flores</p>
                                        <p className="text-gray-600">NTT 86763, Indonesia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone & WhatsApp */}
                            <div className="bg-white rounded-2xl p-6 mb-6 shadow-md card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Phone & WhatsApp</h3>
                                        <p className="text-secondary font-semibold">+62 812-3456-7890</p>
                                        <p className="text-gray-600 text-sm">Available 24/7</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white rounded-2xl p-6 mb-6 shadow-md card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Email</h3>
                                        <p className="text-secondary font-semibold">info@wildtrackadventure.com</p>
                                        <p className="text-gray-600 text-sm">We'll reply within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Follow Us */}
                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-300"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-300"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-300"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div data-aos="fade-left">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="text-3xl font-display font-bold mb-8">
                                    Send Us a <span className="text-secondary">Message</span>
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Full Name <span className="text-secondary">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            required
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Email Address <span className="text-secondary">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                            required
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+62 812 3456 7890"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Message <span className="text-secondary">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your dream trip..."
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Send Message Button */}
                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </button>

                                    {/* WhatsApp Alternative */}
                                    <div className="text-center">
                                        <p className="text-gray-600 mb-3">Or contact us directly via WhatsApp</p>
                                        <button
                                            type="button"
                                            onClick={handleWhatsApp}
                                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            <span>Chat on WhatsApp</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
