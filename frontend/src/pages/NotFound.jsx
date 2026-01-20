import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 bg-gray-50">
            {/* Icon Illustration */}
            <div className="bg-white p-6 rounded-full shadow-lg mb-8 animate-pulse">
                <Compass className="w-24 h-24 text-secondary" />
            </div>

            {/* Text Content */}
            <h1 className="text-6xl md:text-8xl font-display font-bold text-secondary mb-4">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4">
                Lost in the Wild?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Home Button */}
            <Link
                to="/"
                className="btn-primary inline-flex items-center gap-2 transform hover:-translate-y-1 transition-transform"
            >
                <Home className="w-5 h-5" />
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
