import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

const MyInventory = () => {
  const inventoryItems = [
    {
      id: 1,
      name: "Excavator",
      department: "Public Works Department",
      category: "Machinery",
      status: "Available",
      location: "Depot 5",
      lastMaintenance: "2024-08-15",
      nextAvailable: "2024-09-20",
      specifications: "5-ton capacity, Caterpillar brand",
    },
    {
      id: 2,
      name: "Drones",
      department: "Urban Planning",
      category: "Technology",
      status: "In Use",
      location: "Project Site 3",
      lastMaintenance: "2024-07-10",
      nextAvailable: "2024-09-25",
      specifications: "4K camera, GIS Mapping Capable",
    },
    {
      id: 3,
      name: "Water Tanker",
      department: "Water Supply Department",
      category: "Utility Vehicle",
      status: "In Use",
      location: "Water Station 4",
      lastMaintenance: "2024-09-01",
      nextAvailable: "2024-09-21",
      specifications: "2000 liters capacity, stainless steel tank",
    },
    {
      id: 4,
      name: "Bulldozer",
      department: "Public Works Department",
      category: "Machinery",
      status: "Available",
      location: "Depot 2",
      lastMaintenance: "2024-08-10",
      nextAvailable: "2024-09-25",
      specifications: "10-ton capacity, John Deere brand",
    },
    {
      id: 5,
      name: "Traffic Monitoring Cameras",
      department: "Traffic Control",
      category: "Technology",
      status: "In Maintenance",
      location: "City Center",
      lastMaintenance: "2024-08-20",
      nextAvailable: "2024-09-30",
      specifications: "Night vision, automatic number plate recognition",
    },
    {
      id: 6,
      name: "Road Roller",
      department: "Public Works Department",
      category: "Machinery",
      status: "Available",
      location: "Depot 7",
      lastMaintenance: "2024-07-30",
      nextAvailable: "2024-09-22",
      specifications: "8-ton weight, Vibromax model",
    },
    {
      id: 7,
      name: "GIS Mapping Software",
      department: "Urban Planning",
      category: "Software",
      status: "Available",
      location: "Head Office",
      lastMaintenance: "2024-08-12",
      nextAvailable: "Immediately",
      specifications: "ArcGIS Pro, version 10.8, spatial analysis tools",
    },
    {
      id: 8,
      name: "Dump Truck",
      department: "Sanitation Department",
      category: "Utility Vehicle",
      status: "In Use",
      location: "Waste Management Plant",
      lastMaintenance: "2024-09-05",
      nextAvailable: "2024-09-23",
      specifications: "15-ton capacity, 4x4 drive",
    },
    {
      id: 9,
      name: "Survey Drone",
      department: "Urban Planning",
      category: "Technology",
      status: "Available",
      location: "Depot 9",
      lastMaintenance: "2024-08-05",
      nextAvailable: "2024-09-20",
      specifications: "LiDAR scanning, 3D mapping capability",
    },
    {
      id: 10,
      name: "Concrete Mixer",
      department: "Construction",
      category: "Machinery",
      status: "In Use",
      location: "Construction Site 2",
      lastMaintenance: "2024-09-02",
      nextAvailable: "2024-09-26",
      specifications: "8 cubic meters capacity, electric-powered",
    },
    {
      id: 11,
      name: "Portable Generators",
      department: "Emergency Services",
      category: "Technology",
      status: "Available",
      location: "Emergency Depot",
      lastMaintenance: "2024-08-18",
      nextAvailable: "Immediately",
      specifications: "5 kW capacity, diesel engine",
    },
    {
      id: 12,
      name: "Floodlights",
      department: "Disaster Management",
      category: "Technology",
      status: "In Use",
      location: "Disaster Recovery Site",
      lastMaintenance: "2024-08-25",
      nextAvailable: "2024-09-15",
      specifications: "Portable, LED, 1500 lumens",
    },
    
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredItems = inventoryItems.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDepartment === '' || item.department === filterDepartment) &&
      (filterCategory === '' || item.category === filterCategory) &&
      (filterStatus === '' || item.status === filterStatus)
    );
  });

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Inventory Management</h1>

      {/* Search Bar and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
        </div>

        {/* Department Filter */}
        <select
          className="mb-4 md:mb-0 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={filterDepartment}
          onChange={e => setFilterDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="Public Works Department">Public Works Department</option>
          <option value="Urban Planning">Urban Planning</option>
          <option value="Water Supply Department">Water Supply Department</option>
          <option value="Traffic Control">Traffic Control</option>
          <option value="Sanitation Department">Sanitation Department</option>
          <option value="Construction">Construction</option>
          <option value="Emergency Services">Emergency Services</option>
          <option value="Disaster Management">Disaster Management</option>
        </select>

        {/* Category Filter */}
        <select
          className="mb-4 md:mb-0 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Machinery">Machinery</option>
          <option value="Technology">Technology</option>
          <option value="Utility Vehicle">Utility Vehicle</option>
          <option value="Software">Software</option>
        </select>

        {/* Status Filter */}
        <select
          className="p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Available">Available</option>
          <option value="In Use">In Use</option>
          <option value="In Maintenance">In Maintenance</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-white shadow-md rounded-lg border border-gray-300">
          <thead className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
            <tr className="h-16">
              <th className="px-4 py-2 text-center">Resource Name</th>
              <th className="px-4 py-2 text-center">Department</th>
              <th className="px-4 py-2 text-center">Category</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">Location</th>
              <th className="px-4 py-2 text-center">Next Available</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id} className="border-b text-center">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.department}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className={`px-4 py-2 ${item.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>{item.status}</td>
                <td className="px-4 py-2">{item.location}</td>
                <td className="px-4 py-2">{item.nextAvailable}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200">Request</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInventory;
