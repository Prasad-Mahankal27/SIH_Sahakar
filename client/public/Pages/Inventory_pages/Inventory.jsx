import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 h-screen flex flex-col">
      <button
          onClick={() => navigate(-1)}
          className="text-sm text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 mr-auto"
        >
          Back
        </button>
      {/* Inventory Header */}
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-4xl font-bold text-black-700">INVENTORY</h1>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 flex-grow h-full">
        
        {/* My Inventory Card */}
        <div 
          className="relative w-full cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
          style={{ border: '1px solid black', borderRadius: '20px', height: '50vh' }}
          onClick={() => navigate('/MyInventory')}
        >
          <div 
            className="w-full h-[85%] bg-cover bg-center" 
            style={{ backgroundImage: "url('/Images/inv1.png')" }}
          ></div>
          <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center text-white font-bold text-lg">
            My Inventory
          </div>
        </div>

        {/* Request For Resources Card */}
        <div 
          className="relative w-full cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
          style={{ border: '1px solid black', borderRadius: '20px', height: '50vh' }}
          onClick={() => navigate('/Out_req')}
        >
          <div 
            className="w-full h-[85%] bg-cover bg-center" 
            style={{ backgroundImage: "url('/Images/inv2.png')" }}
          ></div>
          <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center text-white font-bold text-lg">
            Request For Resources
          </div>
        </div>

        {/* Received Requests Card */}
        <div 
          className="relative w-full cursor-pointer rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3)] transform transition duration-300 hover:scale-105 overflow-hidden" 
          style={{ border: '1px solid black', borderRadius: '20px', height: '50vh' }}
          onClick={() => navigate('/Inc_req')}
        >
          <div 
            className="w-full h-[85%] bg-cover bg-center" 
            style={{ backgroundImage: "url('/Images/inv3.png')" }}
          ></div>
          <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center text-white font-bold text-lg">
            Received Requests
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
