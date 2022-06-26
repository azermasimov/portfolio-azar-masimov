import React from "react";

function Project({ src }) {
  return (
    <div className="portfolio-wrap">
      <iframe src={src} title="React pics search app"></iframe>
      <div className="portfolio-links">
        <a href={src} target="_blank" title="More Details">
          <i className="bi bi-link"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
