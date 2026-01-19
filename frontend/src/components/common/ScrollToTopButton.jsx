import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../lib/utils'; // Assuming cn utility exists, usually in shadcn/ui setups. If not I will just use template literals. 
// I'll stick to standard template literals or just className since I'm not 100% sure on utils location without checking, 
// but standard tailwind is fine.

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-3 rounded-full bg-secondary text-white shadow-lg 
        transition-all duration-300 ease-in-out hover:bg-secondary-dark hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
}
