import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/AzarResume.pdf";

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
          <a href={Resume} target="_blank">Download Resume</a>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
