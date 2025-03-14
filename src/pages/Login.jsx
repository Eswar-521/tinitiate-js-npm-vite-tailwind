import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block font-semibold">Email:</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Password:</label>
            <input type="password" className="w-full p-2 border rounded" placeholder="Enter your password" required />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
        </div>
        <div className="mt-2 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
