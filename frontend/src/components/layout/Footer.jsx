import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Twitter } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <img
                            src={logo}
                            alt="Wild Track Adventure"
                            className="h-14 w-auto mb-4 brightness-0 invert"
                        />
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for unforgettable Labuan Bajo adventures. Explore the wild beauty of Komodo National Park with us.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
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
                        <h3 className="text-xl font-display font-bold mb-4">Popular Trips</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">3D2N Adventure</li>
                            <li className="text-gray-400">4D3N Explorer</li>
                            <li className="text-gray-400">1 Day Trip</li>
                            <li className="text-gray-400">5D4N Ultimate</li>
                            <li className="text-gray-400">Custom Packages</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-secondary" />
                                <span>Jl. Soekarno Hatta No. 88, Labuan Bajo, Flores, NTT 86763, Indonesia</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-secondary" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-secondary" />
                                <span>info@wildtrackadventure.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Wild Track Adventure. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
