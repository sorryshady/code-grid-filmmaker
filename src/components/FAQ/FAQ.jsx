import React, { useState, useRef, useEffect } from "react";
import "./FAQ.css";

import { faq } from "./faqs.js";

import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const FAQ = ({ title = true, fullWidth = false }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  const iconRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    iconRefs.current = iconRefs.current.slice(0, faq.length);
    contentRefs.current = contentRefs.current.slice(0, faq.length);
  }, []);

  const toggleFAQ = (index) => {
    if (activeIndices.includes(index)) {
      gsap.to(iconRefs.current[index], {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(contentRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        paddingTop: 0,
        paddingBottom: 0,
      });

      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      gsap.to(iconRefs.current[index], {
        rotation: 90,
        duration: 0.3,
        ease: "power2.out",
      });

      const contentHeight = contentRefs.current[index].scrollHeight;

      gsap.to(contentRefs.current[index], {
        height: contentHeight + 24,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        paddingTop: "0.5em",
        paddingBottom: "0.5em",
      });

      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="faq-container">
      <div className={`faq-wrapper ${fullWidth ? "full-width" : "contained"}`}>
        {title && (
          <div className="faq-title">
            <h2>
              Frequently <br /> Asked Questions
            </h2>
          </div>
        )}

        <div className="faq-items">
          {faq.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <span
                  className="faq-icon"
                  ref={(el) => (iconRefs.current[index] = el)}
                >
                  <ArrowRight size={20} />
                </span>
              </div>
              <div
                className="faq-answer"
                ref={(el) => (contentRefs.current[index] = el)}
                style={{ height: 0, opacity: 0, overflow: "hidden" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
