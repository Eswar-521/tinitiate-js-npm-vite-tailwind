import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
