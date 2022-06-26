import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setScrollToTopButton(true);
        } else {
          setScrollToTopButton(false);
        }
      }),
    []
  );

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollToTopButton && (
        <button
          type="button"
          className="back-to-top d-flex align-items-center justify-content-center"
          onClick={scrollUp}
        >
          <i className="bi bi-arrow-up-circle"></i>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
