import React from "react";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Azar Masimov</h1>
        <p>I'm a</p>
        <span>
          <Typewriter
            className="typed"
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                " React Developer",
                " Front-end Developer",
                " Tech Enthusiast",
              ],
            }}
          />
        </span>

        <button type="button" className="px-3 btn btn-outline-light">
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
