import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="page work">
      <div className="work-carousel">
        <div className="work-slider-img">
          <img src="/work/work-1.jpg" alt="" />
        </div>

        <div className="work-items-preview-container">
          <div className="work-item active">
            <img src="/work/work-1.jpg" alt="" />
          </div>
          <div className="work-item">
            <img src="/work/work-2.jpg" alt="" />
          </div>
          <div className="work-item">
            <img src="/work/work-3.jpg" alt="" />
          </div>
          <div className="work-item">
            <img src="/work/work-4.jpg" alt="" />
          </div>
          <div className="work-item">
            <img src="/work/work-5.jpg" alt="" />
          </div>
          <div className="work-item">
            <img src="/work/work-6.jpg" alt="" />
          </div>
        </div>

        <div className="carousel-info">
          <p className="primary sm">Project Desc 1</p>
          <h1>Project Title 1</h1>
        </div>
      </div>
    </div>
  );
};

export default Work;
