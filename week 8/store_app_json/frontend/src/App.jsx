import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
              Elevate Your <span className="text-pink-500">Style</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Discover premium jackets, shirts, and accessories crafted for modern elegance and comfort. Be unique, be bold, be Whitmore.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-gray-900 font-bold px-10 py-4 rounded-2xl 
                         shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-pink-500/50"
            >
              Explore Collection
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x500?text=Fashion+Model"
              alt="Fashion"
              className="w-full rounded-3xl shadow-2xl transform hover:rotate-3 hover:scale-105 transition-all duration-700"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-700 opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400 opacity-15 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className="bg-gray-900 p-12">
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-10">
          Featured Jackets
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-400 animate-pulse">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {products.map((p) => (
              <div
                key={p.id}
                className="group relative bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 transform hover:-translate-y-2 hover:shadow-yellow-500/40 transition-all duration-500"
              >
                {/* Diagonal Shape Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-500 to-yellow-400 opacity-10 transform rotate-[-10deg] pointer-events-none"></div>

                {/* Product Image */}
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={p.image || 'https://via.placeholder.com/300x400?text=Men+Jacket'}
                    alt={p.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 relative z-10">
                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-pink-400 transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2 min-h-[40px]">
                    {p.description || "High-quality jacket crafted for modern fashion and comfort."}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <span className="text-2xl font-bold text-yellow-400">${p.price}</span>
                    <Link
                      to={`/product/${p.id}`}
                      className="bg-gradient-to-r from-pink-500 to-yellow-400 text-gray-900 text-xs px-5 py-2 rounded-2xl 
                                 font-semibold hover:scale-110 transition-all duration-500 cursor-pointer"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
