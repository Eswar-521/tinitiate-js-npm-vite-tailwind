import { Link } from "react-router-dom";
import { Home, Briefcase, Phone, User, LogIn, UserPlus } from "lucide-react";
import ProfileImage from "../assets/profile.png"; // ✅ Updated to use profile.png

const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col items-center shadow-lg">
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
        <ul className="flex flex-col space-y-6 text-lg font-semibold">
          <li>
            <Link to="/" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <Home size={22} /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <Briefcase size={22} /> <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center space-x-3 hover:text-gray-400 transition">
              <Phone size={22} /> <span>Contact</span>
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
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
