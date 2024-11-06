import { useState } from 'react';
import styledArrow1 from "./assets/styledArrow1.svg"
import styledArrow2 from "./assets/styledArrow2.svg"
import TestimonialData from "./TestimonialsData"

import "./Testimonials.css"

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + TestimonialData.length) % TestimonialData.length
    );
  };


  return (
    <section className="testimonial">
      <img src={styledArrow1} className="styledArrow1" alt="" />
      <h1 className="testimonialHeadingText">What our Clients are saying</h1>
      <div className="slide">
        <div className="slideWrapper">
          <div>
            <img src={TestimonialData[currentIndex].img} alt="" />
          </div>
          <div className="slidesContents">
            <div className="slidesHeading">
              <h4>{TestimonialData[currentIndex].name}</h4>
              <p>{TestimonialData[currentIndex].position}</p>
            </div>
            <p>{TestimonialData[currentIndex].paragraph}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-controls">
        <div className="arrows">
          <button onClick={handlePrev}>←</button>
          <button onClick={handleNext}>→</button>
        </div>
        <div className="dots">
          {TestimonialData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <img src={styledArrow2} className="styledArrow2" alt="" />
    </section>
  );
}

export default Testimonials