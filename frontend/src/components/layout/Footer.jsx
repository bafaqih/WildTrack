import { Link, useLocation } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/images/wt-white.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" onClick={handleLogoClick} className="inline-block">
                            <img
                                src={logo}
                                alt="Wild Track Adventure"
                                className="h-14 w-auto mb-4 brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for unforgettable Indonesian adventures. Explore the wild beauty of Indonesia with us.
                        </p>
                        <div className="flex space-x-4">

                            <a
                                href="https://instagram.com/wildtrack_adventure"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://tiktok.com/@glampingcampmalang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition-colors"
                                aria-label="TikTok"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations" className="text-gray-400 hover:text-secondary transition-colors">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-gray-400 hover:text-secondary transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Destinations */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">Trip Packages</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/destinations" state={{ tripId: 'lb-1' }} className="text-gray-400 hover:text-secondary transition-colors">
                                    One Day Trip (Labuan Bajo)
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations" state={{ tripId: 'lb-2' }} className="text-gray-400 hover:text-secondary transition-colors">
                                    Sunset Trip (Labuan Bajo)
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations" state={{ tripId: 'lb-3' }} className="text-gray-400 hover:text-secondary transition-colors">
                                    Fullday Trip (Labuan Bajo)
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations" state={{ tripId: 'br-1' }} className="text-gray-400 hover:text-secondary transition-colors">
                                    Bromo Sunrise (Open Trip)
                                </Link>
                            </li>
                            <li>
                                <Link to="/destinations" state={{ tripId: 'br-2' }} className="text-gray-400 hover:text-secondary transition-colors">
                                    Bromo Sunrise (Private)
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                                    Custom Trip
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-secondary" />
                                <span>Jl. Raya Prapatan Tulusayu No. 09, Tulusbesar, Kec. Tumpang, Kab. Malang, Jawa Timur, Indonesia 65156</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-secondary" />
                                <span>+62 822-4430-8302</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-secondary" />
                                <span>wildtrackadventure@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex justify-center items-center">
                        <p className="text-gray-400 text-sm text-center">
                            © {currentYear} Wild Track Adventure. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
