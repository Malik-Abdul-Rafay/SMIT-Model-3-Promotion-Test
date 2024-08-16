import React from 'react';
import { FaUser, FaCog, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/FireBase';

// Mock user data
const user = {
  name: "Abdul Rafay Malik",
  email: "malikabdulrafay@gmail.com",
  stats: {
    posts: 120,
    comments: 450,
    likes: 789
  },
};

function Dashboard() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        alert('Logged out successfully');
        navigate('/');
      })
      .catch(error => {
        alert(`Error: ${error.message}`);
      });
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </header>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Good Morning {user.name}!</h2>
      </div>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-semibold mr-4">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-700 text-lg">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold text-blue-600">{user.stats.posts}</p>
            <p className="text-gray-600 text-sm">Posts</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold text-green-600">{user.stats.comments}</p>
            <p className="text-gray-600 text-sm">Comments</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold text-yellow-600">{user.stats.likes}</p>
            <p className="text-gray-600 text-sm">Likes</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Navigation</h2>
        <ul className="space-y-3">
          <li>
            <div className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer">
              <FaUser className="text-xl mr-3" /> Profile
            </div>
          </li>
          <li>
            <div className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer">
              <FaCog className="text-xl mr-3" /> Settings
            </div>
          </li>
          <li>
            <div className="flex items-center text-green-600 hover:text-green-800 transition duration-300 cursor-pointer">
              <FaChartLine className="text-xl mr-3" /> Analytics
            </div>
          </li>
          <li>
            <div onClick={handleSignOut} className="flex items-center text-red-600 hover:text-red-800 transition duration-300 cursor-pointer">
              <FaSignOutAlt className="text-xl mr-3" /> Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
