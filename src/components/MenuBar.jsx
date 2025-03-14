import { Link } from "react-router-dom";
import HiddenButton from "./HiddenButton"; // Import the HiddenButton component

const MenuBar = () => {
  return (
    
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      
      {/* Hidden Button Component */}
      <HiddenButton />
    </nav>
  );
};

export default MenuBar;
