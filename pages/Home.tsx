
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { products } = useApp();
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-indigo-900 h-[500px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://picsum.photos/seed/hero/1600/900"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            New Season Arrivals
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Check out the latest trends and essential tech for the upcoming season. Quality guaranteed.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-indigo-50 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-500 mt-2">Handpicked items we think you'll love.</p>
          </div>
          <Link to="/products" className="text-indigo-600 font-semibold hover:text-indigo-500">
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Quality Products</h3>
            <p className="text-gray-500">Sourced from top-rated manufacturers worldwide.</p>
          </div>
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-500">Standard shipping within 3-5 business days.</p>
          </div>
          <div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-500">Safe and encrypted checkout process.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
