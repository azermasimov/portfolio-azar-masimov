import React, { useState, useEffect } from "react";
import img from "../assets/images/fakeProfile.avif";
import Navbar from "../components/Navbar";

function Sidebar() {
  const [scroll, setScroll] = useState(false);

  const backgroundStyle = {
    background: "#0A043C",
  };

  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }),
    []
  );

  return (
    <header id="header" style={scroll ? backgroundStyle : null}>
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src={img}
            alt="Portfile picture"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a>Azar Masimov</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="https://twitter.com/azermasimov" target={"_blank"}>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://t.me/AzerMasimov" target={"_blank"}>
              <i className="bi bi-telegram"></i>
            </a>
            <a href="https://www.instagram.com/azermas1m0v/" target={"_blank"}>
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/azar-masimov-ba7660139/"
              target={"_blank"}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/azermasimov" target={"_blank"}>
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Sidebar;
