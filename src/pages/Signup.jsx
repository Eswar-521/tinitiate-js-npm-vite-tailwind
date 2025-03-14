import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block font-semibold">Name:</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" required />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Email:</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Password:</label>
            <input type="password" className="w-full p-2 border rounded" placeholder="Create a password" required />
          </div>
          <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

