import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  Phone,
  User,
  LogIn,
  UserPlus,
  Music2, // use Music2 instead of Music to avoid import error
} from "lucide-react";
import ProfileImage from "../assets/profile.png";

const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col items-center shadow-lg overflow-y-auto">
      {/* Profile Image with hover effect and project title */}
      <div className="text-center mb-6">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700 shadow-md hover:scale-105 transition-transform duration-300"
        />
        <h2 className="mt-3 text-xl font-bold tracking-wide">My Project</h2>
      </div>

      {/* Navigation Links */}
      <nav className="w-full">
        <ul className="flex flex-col space-y-4 text-lg font-semibold">
          <li>
            <Link to="/" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <Home size={22} /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <User size={22} /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <LogIn size={22} /> <span>Login</span>
            </Link>
          </li>
          <li>
            <Link to="/signup" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <UserPlus size={22} /> <span>Signup</span>
            </Link>
          </li>
          <li>
            <Link to="/catalog" className="hover:text-gray-400 transition">📚 Catalog</Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <Briefcase size={22} /> <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="hover:text-gray-400 transition">🔍 Search</Link>
          </li>
          <li>
            <Link to="/comparison" className="hover:text-gray-400 transition">📊 Comparison</Link>
          </li>
          <li>
            <Link to="/comparisontable" className="hover:text-gray-400 transition">📑 Comparison Table</Link>
          </li>
          <li>
            <Link to="/forms" className="hover:text-gray-400 transition">📝 Forms</Link>
          </li>
          <li>
            <Link to="/datatable" className="hover:text-gray-400 transition">📋 Data Table</Link>
          </li>
          <li>
            <Link to="/infographics" className="hover:text-gray-400 transition">📈 Infographics Dashboard</Link>
          </li>
          <li>
            <Link to="/video" className="hover:text-gray-400 transition">🎥 Video</Link>
          </li>
          <li>
            <Link to="/audio" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <Music2 size={22} /> <span>Audio</span>
            </Link>
          </li>
          <li>
            <Link to="/animation" className="hover:text-gray-400 transition">🎞️ Animation</Link>
          </li>
          <li>
            <Link to="/drag-drop" className="hover:text-gray-400 transition">🖱️ Drag & Drop</Link>
          </li>
          <li>
            <Link to="/editor" className="hover:text-gray-400 transition">✏️ Online Editor</Link>
          </li>
          <li>
            <Link to="/shopping-cart" className="hover:text-gray-400 transition">🛒 Shopping Cart</Link>
          </li>
          <li>
            <Link to="/calendar" className="hover:text-gray-400 transition">📅 Calendar</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-400 transition">📊 Dashboard</Link>
          </li>
          <li>
            <Link to="/analytics" className="hover:text-gray-400 transition">📈 Analytics</Link>
          </li>
          <li>
            <Link to="/security" className="hover:text-gray-400 transition">🔒 Security</Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center space-x-3 hover:text-gray-400 transition">
              ℹ️ <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:text-gray-400 transition">🆘 Help</Link>
          </li>
          <li>
            <Link to="/forgot-password" className="hover:text-gray-400 transition">🔑 Forgot Password</Link>
          </li>
          <li>
            <Link to="/coursecatalog" className="hover:text-gray-400 transition">🎓 Course Catalog</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
