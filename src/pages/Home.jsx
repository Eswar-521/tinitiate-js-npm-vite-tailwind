import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Store</h1>
      <p>Explore our catalog of amazing products!</p>
      <Link
        to="/catalog"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        View Catalog
      </Link>
    </div>
  );
};

export default Home;

