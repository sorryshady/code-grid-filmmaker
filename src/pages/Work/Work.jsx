import React, { useState } from "react";
import "./Work.css";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Fragments of Light",
      description: "Short film on self-discovery.",
      image: "/work/work-1.jpg",
    },
    {
      id: 2,
      title: "Market Pulse",
      description: "Street life, raw and real.",
      image: "/work/work-2.jpg",
    },
    {
      id: 3,
      title: "The Stillness Project",
      description: "Visual ode to silence.",
      image: "/work/work-3.jpg",
    },
    {
      id: 4,
      title: "Chroma/City",
      description: "Urban color in motion.",
      image: "/work/work-4.jpg",
    },
    {
      id: 5,
      title: "Echoes of Silence",
      description: "Grief told through memory.",
      image: "/work/work-5.jpg",
    },
  ];

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
