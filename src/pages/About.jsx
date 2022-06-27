import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../assets/images/photo.png";

function About() {
  const [birthYear] = useState(1997);

  const myAge = new Date().getFullYear() - birthYear;

  const location = window.location.href;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Meticulous and Innovative web developer with over a year of
            front-end experience and a passion for responsive website design.
            Hackerrank certified. Proficient in HTML, CSS, JavaScript and React;
            plus modern libraries and frameworks. Passionate about usability and
            possess working knowledge of Node.js, Express.js, Mongoose and
            MongoDB.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos={"fade-right"}>
            <img
              src={img}
              style={{ filter: "saturate(0)" }}
              className="img-fluid"
              alt="About page photo"
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos={"fade-left"}>
            <h3>Front-end &amp; React Developer</h3>
            <h5 className="fst-italic m-3">Do something great :)</h5>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>26 May {birthYear}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <a href={location}>
                      <span>{location}</span>
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+994 55 489 33 41</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Baku, Azerbaijan</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>{myAge}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>Bachelor, Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>mesimovazer@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
