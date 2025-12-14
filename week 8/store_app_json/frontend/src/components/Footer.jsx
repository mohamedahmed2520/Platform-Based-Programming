import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-12 mt-16 shadow-inner border-t border-gray-700 relative overflow-hidden">
      
      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-36 h-36 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-500 rounded-full opacity-15 blur-2xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        
        {/* Logo / Brand */}
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="text-3xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg mb-2">Whitmore</h2>
          <p className="text-sm text-gray-400">
            Your trusted men’s fashion destination. Step up your style with Whitmore.
          </p>
        </div>

        {/* Links - centered for desktop */}
        <div className="flex flex-col md:flex-row md:w-1/3 justify-center items-start md:items-center text-sm font-semibold space-y-3 md:space-y-0 md:space-x-8">
          <Link to="/" className="hover:text-yellow-400 transition-all duration-300 relative group">
            Home
            <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition-all duration-300 relative group">
            Products
            <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-all duration-300 relative group">
            Contact
            <span className="block h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex md:flex-col md:w-1/3 justify-start md:justify-end items-center md:items-end space-x-6 md:space-x-0 md:space-y-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300 text-2xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300 text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300 text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 relative z-10">
        © {new Date().getFullYear()} Whitmore. All rights reserved.
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
