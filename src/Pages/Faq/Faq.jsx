import React, { useState } from "react";
import "./Faq.css";
import { faqQuestions } from "./data"; // Import the FAQ data
import plusIcon from "./assets/plusIcon.svg"

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null); // Track which item is open

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open/close
  };

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqQuestions.map((faq, index) => (
          <>
            <div
              key={index}
              className={`faq-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h2>{faq.question}</h2>
                {activeIndex === index ? (
                  <span>—</span>
                ) : (
                  <img src={plusIcon} alt="" />
                )}
                {/* <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span> */}
              </div>
              {activeIndex === index && (
                <p
                  className="faq-answer"
                  dangerouslySetInnerHTML={{
                    __html: faq.answer.replace(/\n/g, "<br />"),
                  }}
                >
                  {/* {faq.answer} */}
                </p>
              )}
            </div>
            {/* Conditionally render <hr /> only if it's not the last item */}
            {index !== faqQuestions.length - 1 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
