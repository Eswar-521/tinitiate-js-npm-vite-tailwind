import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex justify-center space-x-6 text-white font-semibold">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
        <li><Link to="/signup" className="hover:text-gray-200">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
