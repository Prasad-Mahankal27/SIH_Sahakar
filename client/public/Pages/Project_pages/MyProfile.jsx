import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Bell, MessageSquare, Calendar, Plus } from 'lucide-react';

const Header = () => (
  <div className="flex flex-col md:flex-row justify-between items-center mb-6">
    <div className="mb-4 md:mb-0">
      <h1 className="text-2xl font-bold mt-2">Profile Analytics</h1>
    </div>
    <div className="flex items-center space-x-4">
      <input type="text" placeholder="Search" className="border rounded-full px-4 py-2" />
      <select className="border rounded-full px-4 py-2">
        <option>EN</option>
      </select>
      
    </div>
  </div>
);

const NotificationBar = () => (
  <div className="flex flex-wrap gap-4 mb-6">
    <div className="flex items-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-2">
      <Bell size={16} className="mr-2" />
      <span>1 task notification</span>
    </div>
    <div className="flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2">
      <MessageSquare size={16} className="mr-2" />
      <span>5 unread notifications</span>
    </div>
    <div className="flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2">
      <Calendar size={16} className="mr-2" />
      <span>3 urgent notifications</span>
    </div>
    <button className="bg-indigo-600 text-white py-2 px-4 rounded-full flex items-center">
      <Plus size={20} className="mr-2" />
      Create Progress Report
    </button>
  </div>
);

const ProjectStatistics = () => {
  const data = [
    { name: 'Jan', value1: 200, value2: 100 },
    { name: 'Feb', value1: 300, value2: 200 },
    { name: 'Mar', value1: 200, value2: 400 },
    { name: 'Apr', value1: 400, value2: 300 },
    { name: 'May', value1: 300, value2: 500 },
    { name: 'Jun', value1: 500, value2: 400 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h3 className="text-lg font-semibold mb-4">Project Statistics</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="value1" stroke="#4F46E5" />
          <Line type="monotone" dataKey="value2" stroke="#FFA500" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const StatCard = ({ title, value, change, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? '+' : ''}{change}%
        </p>
      </div>
      {icon}
    </div>
  </div>
);

const ManageProjectCard = () => (
  <div className="bg-indigo-600 text-white p-6 rounded-lg shadow mb-4">
    <div className="flex flex-col items-center">
      {/* Circular Image */}
      <img src="./public/images/profile.png" alt="Profile" className="w-24 h-24 rounded-full mb-4" />
      
      {/* User Information */}
      <h3 className="text-xl font-semibold p-2">Prasad Ajay Mahankal</h3>
      <p className="text-sm p-1">Project Management Admin</p>
      <p className="text-sm p-1">Roads & Transport Department</p>
      <p className="text-sm p-1">prasad.mahankal22@pccoepune.org</p>
    </div>
    
    {/* Button */}
    <button className="bg-white text-indigo-600 px-4 py-2 rounded-full w-full mt-4">
      Edit Profile
    </button>
  </div>
);

const WorkloadDashboard = () => (
  <div className="bg-white p-4 rounded-lg shadow mb-6">
    <h3 className="text-lg font-semibold mb-4">Workload Dashboard</h3>
    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
      <div className="mb-4 md:mb-0">
        <p className="text-2xl font-bold">$25,456.44</p>
        <p className="text-sm text-gray-500">+2.5% from last week</p>
      </div>
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-semibold">50%</p>
            <p className="text-xs">On Progress</p>
          </div>
        </div>
        <div className="w-full h-full border-8 border-indigo-600 rounded-full"></div>
      </div>
    </div>
    <p className="text-sm font-semibold">For CMS Website</p>
    <p className="text-xs text-gray-500">Praesent et dolor eu velit volutpat euismod</p>
  </div>
);

const DailyTasks = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Daily Task</h3>
    <div className="space-y-2">
      <div className="bg-red-100 text-red-800 p-2 rounded">
        <p className="font-semibold">iOS Dev team meeting</p>
        <p className="text-sm">10:00 - 11:00</p>
      </div>
      <div className="bg-yellow-100 text-yellow-800 p-2 rounded">
        <p className="font-semibold">Design meeting</p>
        <p className="text-sm">11:00 - 12:00</p>
      </div>
      <div className="bg-indigo-100 text-indigo-800 p-2 rounded">
        <p className="font-semibold">SEO meeting</p>
        <p className="text-sm">11:30 - 12:00</p>
      </div>
    </div>
  </div>
);

const ProjectManagerDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      <div className="flex-grow p-4 md:p-8 overflow-y-auto">
        <Header />
        <NotificationBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProjectStatistics />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <StatCard title="Total Tasks assigned" value="78" change={5.6} icon={<div className="w-12 h-12 bg-indigo-100 rounded-full"></div>} />
              <StatCard title="Total Tasks Done" value="34" change={-2.5} icon={<div className="w-12 h-12 bg-green-100 rounded-full"></div>} />
              <StatCard title="Total Pending Tasks" value="565" change={-3.5} icon={<div className="w-12 h-12 bg-yellow-100 rounded-full"></div>} />
              <StatCard title="New Projects" value="565" change={5.6} icon={<div className="w-12 h-12 bg-red-100 rounded-full"></div>} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="text-lg font-semibold mb-4">Project Statistics</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={[
                  { name: 'A', value1: 400, value2: 300 },
                  { name: 'B', value1: 300, value2: 400 },
                  { name: 'C', value1: 600, value2: 200 },
                  { name: 'D', value1: 200, value2: 500 },
                ]}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="value1" fill="#8884d8" />
                  <Bar dataKey="value2" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <ManageProjectCard />
            <WorkloadDashboard />
            <DailyTasks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagerDashboard;
