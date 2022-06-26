import React, { useState } from "react";

function ProgressBar({ title, progress }) {
    const [ style, setStyle ] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${progress}%`
        }

        setStyle(newStyle);
    }, 1200);

  return (
    <div className="progress">
      <span className="skill">
        {title} <i className="val">{progress}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={style} ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
