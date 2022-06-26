import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "../components/ProgressBar";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <ProgressBar title="HTML" progress={85} />
            <ProgressBar title="CSS/SCSS" progress={75} />
            <ProgressBar title="Semantic UI" progress={60} />
            <ProgressBar title="Bootstrap" progress={85} />
            <ProgressBar title="Javascript, ES6+" progress={75} />
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <ProgressBar title="React JS, React Hooks" progress={85} />
            <ProgressBar title="React Context, React Query" progress={70} />
            <ProgressBar
              title="Redux, React Redux, Redux Toolkit"
              progress={50}
            />
            <ProgressBar title="Git, Github" progress={50} />
            <ProgressBar
              title="Node JS, Express JS, Firebase Web, MongoDB"
              progress={45}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
