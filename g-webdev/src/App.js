import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

// IMPORT INTERN COMPONENTS
import Header from "./components/header/Header";

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Diensten from './pages/Diensten/Diensten';
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer";


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="diensten" element={<Diensten />} />
        <Route path="projecten" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;