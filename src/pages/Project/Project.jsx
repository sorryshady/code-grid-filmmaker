import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="page project">
      <section className="project-header">
        <p className="primary sm">Short film on self-discovery</p>
        <h2>Fragments of Light</h2>
      </section>

      <section className="project-banner-img">
        <img src="/project/project-1.jpg" alt="" />
      </section>

      <section className="project-details">
        <div className="details">
          <p className="primary sm">Overview</p>
          <h4>
            LumLens partnered with VisionTech Global to address eye strain
            issues for corporate professionals caused by prolonged screen
            exposure.
          </h4>
        </div>

        <div className="details">
          <p className="primary sm">Year</p>
          <h4>2010</h4>
        </div>

        <div className="details">
          <p className="primary sm">Category</p>
          <h4>Documentary</h4>
        </div>

        <div className="details">
          <p className="primary sm">Running Time</p>
          <h4>1:00</h4>
        </div>

        <div className="details">
          <p className="primary sm">Client</p>
          <h4>VisionTech Global</h4>
        </div>
      </section>

      <section className="project-images">
        <div className="project-images-container">
          <div className="project-img">
            <img src="/project/project-1.jpg" alt="" />
          </div>

          <div className="project-img">
            <img src="/project/project-2.jpg" alt="" />
          </div>

          <div className="project-img">
            <img src="/project/project-3.jpg" alt="" />
          </div>

          <div className="project-img">
            <img src="/project/project-4.jpg" alt="" />
          </div>

          <div className="project-img">
            <img src="/project/project-5.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="project-details">
        <div className="details">
          <p className="primary sm">Editor</p>
          <h4>Editor Name</h4>
        </div>

        <div className="details">
          <p className="primary sm">Sound Design</p>
          <h4>Sound Designer Name</h4>
        </div>

        <div className="details">
          <p className="primary sm">Art Director</p>
          <h4>Art Director Name</h4>
        </div>

        <div className="details">
          <p className="primary sm">Producer</p>
          <h4>Producer Name</h4>
        </div>

        <div className="details">
          <p className="primary sm">Director</p>
          <h4>Director Name</h4>
        </div>
      </section>

      <section className="next-project">
        <p className="primary sm">02 - 05</p>
        <h3>Next</h3>

        <div className="next-project-img">
          <img src="/project/project-2.jpg" alt="" />
        </div>

        <h4>Market Pulse</h4>
      </section>
    </div>
  );
};

export default Project;
