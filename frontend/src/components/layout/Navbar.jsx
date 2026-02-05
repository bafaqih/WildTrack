import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import logoWhite from '@/assets/images/wt-white.png';
import logoBlack from '@/assets/images/wt-black.png';
import iconWhite from '@/assets/images/icon-wt-white.png';
import iconBlack from '@/assets/images/icon-wt-black.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Initialize state immediately
        handleScroll();

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

    // List of pages that have a hero section and need a transparent navbar initially
    const heroPages = ['/', '/about', '/destinations', '/gallery', '/contact'];
    const isHeroPage = heroPages.includes(location.pathname);

    // Determine if we should show the dark version of the navbar (solid bg, black text)
    const showDarkNav = isScrolled || !isHeroPage;

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${showDarkNav || isMobileMenuOpen
                ? 'bg-white shadow-lg'
                : 'bg-transparent'
                } ${isMobileMenuOpen ? 'pb-5' : ''}`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="grid items-center"
                        onClick={(e) => {
                            setIsMobileMenuOpen(false);
                            if (location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        {/* Mobile Icon White - visible when not scrolled */}
                        <img
                            src={iconWhite}
                            alt="Wild Track Adventure"
                            className={`md:hidden col-start-1 row-start-1 h-10 w-auto object-contain transition-opacity duration-500 ${showDarkNav || isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        {/* Mobile Icon Black - visible when scrolled */}
                        <img
                            src={iconBlack}
                            alt="Wild Track Adventure"
                            className={`md:hidden col-start-1 row-start-1 h-10 w-auto object-contain transition-opacity duration-500 ${showDarkNav || isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                        {/* Desktop Logo White - visible when not scrolled */}
                        <img
                            src={logoWhite}
                            alt="Wild Track Adventure"
                            className={`hidden md:block col-start-1 row-start-1 h-14 w-auto object-contain transition-opacity duration-500 ${showDarkNav ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        {/* Desktop Logo Black - visible when scrolled */}
                        <img
                            src={logoBlack}
                            alt="Wild Track Adventure"
                            className={`hidden md:block col-start-1 row-start-1 h-14 w-auto object-contain transition-opacity duration-500 ${showDarkNav ? 'opacity-100' : 'opacity-0'
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
                                        : showDarkNav
                                            ? 'text-gray-800 hover:text-secondary'
                                            : 'text-white hover:text-secondary'
                                        }`}
                                    onClick={(e) => {
                                        if (link.path === '/' && location.pathname === '/') {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }}
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
                        className="lg:hidden p-2 -mr-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className={`w-6 h-6 ${showDarkNav || isMobileMenuOpen ? 'text-gray-800' : 'text-white'}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${showDarkNav || isMobileMenuOpen ? 'text-gray-800' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {/* Mobile Menu */}
                <div className={`lg:hidden bg-white shadow-lg rounded-lg px-4 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                    ? 'max-h-96 opacity-100 translate-y-0 mt-2 py-4'
                    : 'max-h-0 opacity-0 -translate-y-4 py-0'
                    }`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block py-3 pl-3 font-medium transition-colors relative ${isActive(link.path)
                                ? 'text-secondary'
                                : 'text-gray-800'
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
            </div>
        </nav>
    );
};

export default Navbar;
