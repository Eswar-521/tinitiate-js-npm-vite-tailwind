const Heading = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl">
      <h1 className="text-center text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        Tinitiate Project
      </h1>
      <div className="flex justify-center items-center space-x-4">
        <div className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-md">
          <span className="font-semibold text-lg">js</span>
        </div>
        <div className="bg-green-600 text-white px-5 py-2 rounded-md shadow-md">
          <span className="font-semibold text-lg">npm</span>
        </div>
        <div className="bg-pink-600 text-white px-5 py-2 rounded-md shadow-md">
          <span className="font-semibold text-lg">vite</span>
        </div>
        <div className="bg-yellow-500 text-white px-5 py-2 rounded-md shadow-md">
          <span className="font-semibold text-lg">tailwind</span>
        </div>
      </div>
    </div>
  );
};

export default Heading;
