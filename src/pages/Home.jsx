// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Welcome to Our Store</h1>
//       <p>Explore our catalog of amazing products!</p>
//       <Link
//         to="/catalog"
//         className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md"
//       >
//         View Catalog
//       </Link>
//     </div>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Welcome to Our Store
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg">
          Discover a variety of amazing products just for you!
        </p>

        {/* Button */}
        <Link
          to="/catalog"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition shadow-md"
        >
          Explore Catalog
        </Link>
      </div>
    </div>
  );
};

export default Home;
