
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../store';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent, role: 'user' | 'admin') => {
    e.preventDefault();
    login(email || 'user@example.com', role);
    navigate(role === 'admin' ? '/admin' : '/');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Welcome Back</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <button
              onClick={(e) => handleSubmit(e, 'user')}
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Login as User
            </button>
            <button
              onClick={(e) => handleSubmit(e, 'admin')}
              className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Login as Admin (Simulated)
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account? <span className="text-indigo-600 font-semibold cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
