import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../css/backToTopButton.css";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  return (
    <>
      {backToTopButton && (
        <button
          className="backToTop-btn"
          onClick={() => scrollUp()}
          id="backToTop-btn"
          title="Go to top"
        >
          <FontAwesomeIcon icon={faAngleUp} size="1x" />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
