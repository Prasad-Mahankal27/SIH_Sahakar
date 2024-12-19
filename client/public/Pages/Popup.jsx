import React from 'react';

const Popup = ({ department, onClose }) => {
  if (!department) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-400 text-xl hover:text-gray-800"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <h2 className="text-blue-900 text-2xl font-semibold mb-2">{department.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{department.type}</p>
        <p className="text-gray-700 text-base mb-4">{department.description}</p>
        {department.letter && (
          <pre className="bg-gray-100 border border-gray-300 rounded p-4 mt-4 whitespace-pre-wrap text-sm font-mono">
            {department.letter}
          </pre>
        )}
      </div>
    </div>
  );
};

export default Popup;
