
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity } = useApp();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
          <svg className="mx-auto h-24 w-24 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/products"
            className="mt-8 inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-bold hover:bg-indigo-700 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Shopping Cart</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <ul className="divide-y divide-gray-200 bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
            {cart.map((item) => (
              <li key={item.id} className="p-6 flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        <Link to={`/product/${item.id}`} className="hover:text-indigo-600">{item.name}</Link>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Order Summary */}
        <div className="mt-10 lg:mt-0 lg:col-span-4">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-base text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base text-gray-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base text-gray-600">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-lg mt-8 hover:bg-indigo-700 transition shadow-md">
              Proceed to Checkout
            </button>
            <div className="mt-6 text-center">
              <Link to="/products" className="text-sm text-indigo-600 font-medium hover:text-indigo-500">
                &larr; Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
