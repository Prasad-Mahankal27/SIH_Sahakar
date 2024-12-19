import React from 'react';
import Calendar from '../Components/Calender';
import { useNavigate } from 'react-router-dom';

const Meeting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 mr-auto"
        >
          Back
        </button>
        <h1 className="text-2xl text-center flex-grow">Meeting Schedule</h1>
      </div>
      <Calendar />
    </div>
  );
};

export default Meeting;
