import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Home from "./pages/Home";
import About from "./pages/About";

import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Catalog from "./pages/Catalog"; 
import courseCatalogo from './components/courseCatalogo';
import Comparison from "./pages/Comparison";
import ComparisonTable from "./pages/ComparisonTable";
import DataTable from "./pages/DataTable";
import Forms from "./pages/Forms";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Security from "./pages/Security";
import Help from "./pages/Help";
import Search from "./pages/Search"

import Infographics from "./pages/Infographics";
import AudioVideo from "./pages/Video";
import Animation from "./pages/Animation";
import DragDrop from "./pages/DragDrop";
import Editor from "./pages/Editor";
import ShoppingCart from "./pages/ShoppingCart";
import Calendar from "./pages/Calendar"
import Audio from "./pages/Audio";



function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Header />
      <MenuBar onSearch={setSearchQuery} />
      <div className="flex">
        <LeftSidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/catalog" element={<Catalog searchQuery={searchQuery} />}/>
            <Route path="/coursecatalog" element={<courseCatalogo />} />

             <Route path="/comparison" element={<Comparison />} />
             <Route path="/comparisontable" element={<ComparisonTable />} />
             <Route path="/datatable" element={<DataTable />} />
             <Route path="/forms" element={<Forms />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/security" element={<Security />} />
            <Route path="/help" element={<Help />} />
            <Route path="/search" element={<Search />} />
            <Route path="/audio" element={<Audio />} />

            <Route path="/infographics" element={<Infographics />} />
            <Route path="/video" element={<AudioVideo />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/drag-drop" element={<DragDrop />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/calendar" element={<Calendar />} />
          
          </Routes>
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
