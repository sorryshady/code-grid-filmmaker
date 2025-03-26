import React, { useState } from "react";
import "./Work.css";

import projects from "../../data/projects";

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleWorkItemClick = (project) => {
    setActiveProject(project);
  };

  return (
    <div className="page work">
      <div className="work-carousel">
        <div className="work-slider-img">
          <img src={activeProject.image} alt={activeProject.title} />
        </div>

        <div className="work-items-preview-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`work-item ${
                activeProject.id === project.id ? "active" : ""
              }`}
              onClick={() => handleWorkItemClick(project)}
            >
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>

        <div className="carousel-info">
          <p className="primary sm">{activeProject.description}</p>
          <h1>{activeProject.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Work;
