import { FaArrowCircleUp } from "react-icons/fa";

import React, { useState, useEffect } from "react";
import "./PrivacyPolicy.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={`scroll_to_top ${isVisible ? "visible" : ""}`}>
      <FaArrowCircleUp onClick={scrollToTop} />
    </div>
  );
};

export default ScrollToTopButton;
