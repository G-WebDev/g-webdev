import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Style from "./components/Header/Header.module.css";

// IMPORT INTERN COMPONENTS
import Header from "./components/Header/Header";

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Diensten from "./Pages/Diensten/Diensten";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/footer/Footer";

import SideBar from "./components/Header/sidebar/SideBar";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  return (
    <BrowserRouter>
      <Header onToggleSidebar={setOpenSideBar} />
      <div className={Style.header__sidebar__box}>
        {openSideBar && <SideBar onClose={handleCloseSideBar} />}
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Diensten />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
