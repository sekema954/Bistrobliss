// src/components/NotFound.jsx
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f7] text-gray-800 overflow-hidden">
      {/* Animated 404 Text */}
      <div className="animate-bounce text-center mb-10">
        <h1 className="text-8xl font-bold text-red-800 mb-4 drop-shadow-lg animate-pulse">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 animate-fadeInDown">
          Page Not Found
        </h2>
      </div>

      {/* Error Description */}
      <p className="text-lg md:text-xl mb-8 text-center max-w-md animate-fadeInUp">
        Oops! The page you're looking for doesn't exist. It might have been removed or you may have mistyped the URL.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-8 py-3 bg-red-800 text-white rounded-full hover:bg-white hover:text-red-800 border border-red-800 transition duration-300 animate-fadeInUp"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
