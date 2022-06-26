import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./pages/Sidebar";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile nav toggle button */}
      <i
        className="bi bi-list mobile-nav-toggle d-xl-none"
        onClick={() => setIsOpen(!isOpen)}
      ></i>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}><h2 style={{ textAlign: "center", marginTop: "2rem" }}>Azar Masimov</h2></Modal>

      <Sidebar />
      <HeroSection />
      <main id="main">
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
