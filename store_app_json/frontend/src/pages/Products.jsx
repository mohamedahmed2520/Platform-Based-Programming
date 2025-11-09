import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen pb-20 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 via-indigo-900 to-purple-900 text-white text-center py-20 shadow-inner relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-700 rounded-full opacity-25 animate-spin-slow"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Whitmore Collection
        </h1>
        <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our exclusive lineup of premium men’s jackets, shirts, and accessories crafted for style, comfort, and quality.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {products.length === 0 ? (
          <p className="text-center text-gray-400 animate-pulse">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map(p => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 transform hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={p.image || 'https://via.placeholder.com/300x400?text=Men+Jacket'}
                    alt={p.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-100 group-hover:text-yellow-400 transition-colors duration-300">
                    {p.name}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2 min-h-[40px]">
                    {p.description || "Premium men’s jacket made with high-quality materials for style and comfort."}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <span className="text-2xl font-bold text-yellow-400">${p.price}</span>
                    <span className="bg-yellow-500 text-gray-900 text-xs px-3 py-1 rounded-full font-semibold group-hover:bg-yellow-400 group-hover:text-gray-900 transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
