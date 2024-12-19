import React, { useState } from 'react';

const Out_req = () => {
  const [department, setDepartment] = useState('');
  const [resourceName, setResourceName] = useState('');
  const [resourceCategory, setResourceCategory] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [departments, setDepartments] = useState([
    'Electricity Department',
    'Gas Supply Department',
    'Civil Department',
    'Public Works Department',
    'Construction',
    'Sanitation Department',
    'Emergency Services',
    'Urban Planning',
  ]);

  const [resourceItems, setResourceItems] = useState([
    'Generator',
    'Transformer',
    'Street Light',
    'Excavator',
    'Concrete Mixer',
    'Dump Truck',
    'Water Pump',
    'Drill Machine',
    'Road Roller',
    'Scaffolding',
  ]);

  const [categories, setCategories] = useState([
    'Office Supplies',
    'Electronics',
    'Furniture',
    'Tools',
    'Vehicles',
  ]);

  const [newDepartment, setNewDepartment] = useState('');
  const [newResourceName, setNewResourceName] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddDepartment = () => {
    if (newDepartment.trim() && !departments.includes(newDepartment)) {
      setDepartments([...departments, newDepartment]);
      setNewDepartment('');
    }
  };

  const handleAddResourceName = () => {
    if (newResourceName.trim() && !resourceItems.includes(newResourceName)) {
      setResourceItems([...resourceItems, newResourceName]);
      setNewResourceName('');
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log({
      department,
      resourceName,
      resourceCategory,
      location,
      startDate, // Include start date in the submitted data
      endDate,   // Include end date in the submitted data
    });
  };

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Request Resources for Interdepartmental Use</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="department">Department</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
            <option value="add-new-department">Add New Department</option>
          </select>
          {department === 'add-new-department' && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Add new department"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              <button
                type="button"
                onClick={handleAddDepartment}
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Add Department
              </button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="resourceName">Resource Name</label>
          <select
            id="resourceName"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select Resource</option>
            {resourceItems.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
            <option value="add-new-resource">Add New Resource</option>
          </select>
          {resourceName === 'add-new-resource' && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Add new resource"
                value={newResourceName}
                onChange={(e) => setNewResourceName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              <button
                type="button"
                onClick={handleAddResourceName}
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Add Resource
              </button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="resourceCategory">Resource Category</label>
          <select
            id="resourceCategory"
            value={resourceCategory}
            onChange={(e) => setResourceCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            <option value="add-new-category">Add New Category</option>
          </select>
          {resourceCategory === 'add-new-category' && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Add new category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              <button
                type="button"
                onClick={handleAddCategory}
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Add Category
              </button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter Location"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit 
          </button>
        </div>
      </form>
    </div>
  );
};

export default Out_req;
