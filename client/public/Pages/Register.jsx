import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import LoginBack from '../Images/LoginBack.png';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    navigate('/Dashboard');
  };

  return (
    <div className="min-h-screen flex items-stretch justify-center py-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex border-2 border-blue-600 h-full">
        {/* Left side of the card with the image */}
        <div className="w-1/2 p-0 h-full">
          <img
            src={LoginBack}
            alt="Register background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side of the card with registration form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600">Fill in the details to register</p>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-4 flex items-center border-2 border-gray-300 rounded p-2">
              <FaEnvelope className="text-gray-600 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 outline-none"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-gray-300 rounded p-2">
              <FaPhone className="text-gray-600 mr-2" />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full p-2 outline-none"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-gray-300 rounded p-2">
              <FaUser className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 outline-none"
              />
            </div>
            <div className="mb-4 flex items-center border-2 border-gray-300 rounded p-2">
              <FaLock className="text-gray-600 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 outline-none"
              />
            </div>
            <div className="mb-6 flex items-center border-2 border-gray-300 rounded p-2">
              <FaLock className="text-gray-600 mr-2" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-purple-700"
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="#"
                onClick={() => navigate('/')}
                className="text-blue-600"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
