import React from 'react';

const DepartmentCard = ({ department, onExplore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-blue-100 p-6 transition-transform transform hover:translate-y-1 hover:shadow-lg hover:border-blue-900">
      <h2 className="text-blue-900 text-xl font-semibold mb-2">{department.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{department.type}</p>
      <p className="text-gray-700 text-base mb-4">{department.description}</p>
      <button
        className="bg-blue-900 text-white rounded px-4 py-2 text-sm transition-colors hover:bg-blue-800"
        onClick={onExplore}
      >
        Explore
      </button>
    </div>
  );
};

export default DepartmentCard;
