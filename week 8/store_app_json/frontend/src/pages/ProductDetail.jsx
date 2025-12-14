import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product)
    return (
      <div className="flex items-center justify-center h-screen text-lg text-gray-400 animate-pulse bg-gray-900">
        Loading product details...
      </div>
    );

  return (
    <div className="bg-gray-900 min-h-screen pb-24 text-gray-200">
      {/* Hero Section with Slanted Background */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-pink-600 opacity-20 rotate-45 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-700 opacity-25 rotate-[30deg] rounded-full animate-spin-slow"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Product Image */}
          <div className="flex justify-center relative">
            <img
              src={product.image || 'https://via.placeholder.com/500x500?text=Product+Image'}
              alt={product.name}
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover transform hover:rotate-2 hover:scale-105 transition-all duration-700"
            />
            {/* Floating price tag */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-700 to-pink-600 px-5 py-3 rounded-xl text-white font-bold shadow-lg text-xl">
              ${product.price}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col justify-between border border-gray-700">
            <div>
              <h2 className="text-4xl font-extrabold text-indigo-400 mb-4">{product.name}</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {product.description || "This premium product offers quality, comfort, and style all in one. Perfect for your daily needs and special occasions."}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                🛒 Add to Cart
              </button>
              <Link
                to="/"
                className="text-indigo-400 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                ← Back to Store
              </Link>
            </div>
          </div>
        </div>
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
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
