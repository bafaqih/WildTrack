import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import logoWhite from '@/assets/images/wt-white.png';
import logoBlack from '@/assets/images/wt-black.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Destinations', path: '/destinations' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="relative inline-block h-12 md:h-14 -ml-6 md:-ml-8" style={{ width: '200px' }}>
                        {/* Logo White - visible when not scrolled */}
                        <img
                            src={logoWhite}
                            alt="Wild Track Adventure"
                            className={`absolute top-0 left-0 h-full w-full object-contain transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        {/* Logo Black - visible when scrolled */}
                        <img
                            src={logoBlack}
                            alt="Wild Track Adventure"
                            className={`absolute top-0 left-0 h-full w-full object-contain transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative font-medium transition-colors duration-300 py-2 pb-1 ${isActive(link.path)
                                            ? 'text-secondary'
                                            : isScrolled
                                                ? 'text-gray-800 hover:text-secondary'
                                                : 'text-white hover:text-secondary'
                                        }`}
                                >
                                    {link.name}
                                    {/* Underline */}
                                    <span
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-center transition-all duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                                            }`}
                                    ></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Book Now Button - Right aligned */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            to="/contact"
                            className="btn-primary flex items-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            <span>Book Now</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 py-4 px-4 animate-fade-in">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block py-3 font-medium transition-colors relative ${isActive(link.path)
                                        ? 'text-secondary'
                                        : 'text-gray-800 hover:text-secondary'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-r"></span>
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 mt-4 btn-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Calendar className="w-5 h-5" />
                            <span>Book Now</span>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
