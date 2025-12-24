
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../store';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useApp();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="text-indigo-600 mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <ol className="flex text-sm text-gray-500">
          <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
          <li className="mx-2">&rarr;</li>
          <li><Link to="/products" className="hover:text-indigo-600">Shop</Link></li>
          <li className="mx-2">&rarr;</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm h-[400px] md:h-[600px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{product.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
          
          <div className="prose prose-indigo mb-8 text-gray-600 leading-relaxed">
            {product.description}
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Availability</h3>
            {product.stock > 0 ? (
              <p className="text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                In Stock ({product.stock} units available)
              </p>
            ) : (
              <p className="text-red-600 flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Out of Stock
              </p>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className={`flex-1 py-4 px-8 rounded-lg text-white font-bold text-lg transition shadow-lg ${
                product.stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              Add to Cart
            </button>
            <button className="p-4 border border-gray-300 rounded-lg text-gray-400 hover:text-red-500 hover:border-red-500 transition">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Recommended (Simulation) */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">{p.name}</h3>
              <p className="text-gray-500">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
