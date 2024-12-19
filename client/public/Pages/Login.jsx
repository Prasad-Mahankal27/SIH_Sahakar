import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons
import LoginBack from '../Images/LoginBack.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <div className="min-h-screen flex items-start justify-center py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex border-2 border-blue-600">
        <div className="w-1/2 p-0">
          <img
            src={LoginBack}
            alt="Login background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back...</h2>
            <p className="text-gray-600">Please enter your username and password</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4 flex items-center border-2 border-gray-300 rounded p-2">
              <FaUser className="text-gray-600 mr-2" />
              <input
                type="email"
                placeholder="Username"
                className="w-full p-2 outline-none"
              />
            </div>
            <div className="mb-6 flex items-center border-2 border-gray-300 rounded p-2">
              <FaLock className="text-gray-600 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 outline-none"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              By logging in, you agree to our <a href="#" className="text-blue-600">Terms & Conditions</a>
            </p>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-purple-700"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-600">Forgot Password</a>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account yet?{' '}
              <a
                href="#"
                onClick={() => navigate('/Register')}  // Updated to navigate to Register
                className="text-blue-600"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
