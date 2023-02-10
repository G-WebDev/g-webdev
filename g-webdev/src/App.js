import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

// IMPORT INTERN COMPONENTS
import Header from "./components/Header/Header";

import Home from './pages/Home/Home';
import Web3 from "./pages/Web3/Web3";
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from "./pages/Contact/Contact";


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="web3" element={<Web3 />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

