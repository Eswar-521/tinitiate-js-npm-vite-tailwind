import { Link } from "react-router-dom";
import { Home, Briefcase, Phone, User, LogIn, UserPlus } from "lucide-react"; // ✅ Icons
import Logo from "../assets/logo.png"; // ✅ Import the image


const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col items-center shadow-lg">
      {/* Image at the top */}
      <img src={Logo} alt="Logo" className="w-24 h-24 mb-6 rounded-full border-4 border-gray-700 shadow-md" />

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
