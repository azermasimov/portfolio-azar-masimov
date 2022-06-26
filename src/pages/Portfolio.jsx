import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../components/Project";

function Portfolio() {
  const [show, setShow] = useState("all");

  const projects = [
    {
      src: "https://react-firebase-rent-a-car.vercel.app/",
      category: "react-app",
    },
    { src: "https://react-pics-search.vercel.app/", category: "react-app" },
    {
      src: "https://react-youtube-clone-five.vercel.app/",
      category: "react-app",
    },
    {
      src: "https://react-hooks-components.vercel.app/",
      category: "react-app",
    },
    { src: "https://react-context-six.vercel.app/", category: "react-app" },
    {
      src: "https://t-rex-game-ten.vercel.app/",
      category: "poor-js",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const filterProjects = () => {
    const filteredProjects = projects.filter(
      (project) => project.category === show
    );

    return show === "all" ? projects : filteredProjects;
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li onClick={() => setShow("all")} style={show === "all" ? { color: "#0a043c" } : null}>
                All
              </li>
              <li onClick={() => setShow("react-app")} style={show === "react-app" ? { color: "#0a043c" } : null}>React-Apps</li>
              <li onClick={() => setShow("poor-js")} style={show === "js-game" ? { color: "#0a043c" } : null}>Poor JS</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row portfolio-item">
            {filterProjects().map((project, i) => (
              <Project key={i} src={project.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
