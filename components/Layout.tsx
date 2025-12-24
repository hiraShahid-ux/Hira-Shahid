
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../store';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, user, logout } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">SwiftShop</Link>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</Link>
                <Link to="/products" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Shop</Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>

              {user ? (
                <div className="flex items-center space-x-4">
                  {user.role === 'admin' && (
                    <Link to="/admin" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Admin</Link>
                  )}
                  <button onClick={() => { logout(); navigate('/'); }} className="text-sm font-medium text-gray-600 hover:text-indigo-600">Logout</button>
                </div>
              ) : (
                <Link to="/login" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Login</Link>
              )}

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-2">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            {user?.role === 'admin' && <Link to="/admin" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Admin</Link>}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <span className="text-gray-400 hover:text-gray-500">Privacy Policy</span>
              <span className="text-gray-400 hover:text-gray-500">Terms of Service</span>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 SwiftShop Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
