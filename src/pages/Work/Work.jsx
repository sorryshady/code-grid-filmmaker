import projects from "../../data/projects";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

import { gsap } from "gsap";

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const carouselDescriptionRef = useRef(null);
  const carouselTitleRef = useRef(null);
  const workSliderImgRef = useRef(null);
  const descriptionTextRef = useRef(null);
  const titleTextRef = useRef(null);
  const imageRef = useRef(null);

  const animateCarouselInfo = (newProject) => {
    const tl = gsap.timeline();

    tl.to([descriptionTextRef.current, titleTextRef.current], {
      yPercent: -100,
      duration: 0.75,
      stagger: 0.25,
      ease: "power4.in",
    });

    tl.to(
      imageRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          if (descriptionTextRef.current) descriptionTextRef.current.remove();
          if (titleTextRef.current && titleTextRef.current.parentNode) {
            titleTextRef.current.parentNode.remove();
          }
          if (imageRef.current) imageRef.current.remove();

          const newDescriptionEl = document.createElement("p");
          newDescriptionEl.className = "primary sm";
          newDescriptionEl.textContent = newProject.description;

          const newLinkEl = document.createElement("a");
          newLinkEl.href = "/sample-project";
          const newTitleEl = document.createElement("h1");
          newTitleEl.textContent = newProject.title;
          newLinkEl.appendChild(newTitleEl);

          const newImageEl = document.createElement("img");
          newImageEl.src = newProject.image;
          newImageEl.alt = newProject.title;

          gsap.set(newDescriptionEl, { yPercent: 100 });
          gsap.set(newTitleEl, { yPercent: 100 });
          gsap.set(newImageEl, { opacity: 0 });

          carouselDescriptionRef.current.appendChild(newDescriptionEl);
          carouselTitleRef.current.appendChild(newLinkEl);
          workSliderImgRef.current.appendChild(newImageEl);

          descriptionTextRef.current = newDescriptionEl;
          titleTextRef.current = newTitleEl;
          imageRef.current = newImageEl;

          const inTl = gsap.timeline();

          inTl.to(newImageEl, {
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
          });

          inTl.to(
            [newDescriptionEl, newTitleEl],
            {
              yPercent: 0,
              duration: 0.75,
              stagger: 0.25,
              ease: "power4.out",
            },
            "-=0.5"
          );
          setActiveProject(newProject);
        },
      },
      "-=0.5"
    );
  };

  useEffect(() => {
    if (
      carouselDescriptionRef.current &&
      carouselTitleRef.current &&
      workSliderImgRef.current
    ) {
      descriptionTextRef.current =
        carouselDescriptionRef.current.querySelector("p");
      titleTextRef.current = carouselTitleRef.current.querySelector("h1");
      imageRef.current = workSliderImgRef.current.querySelector("img");
    }
  }, []);

  const handleWorkItemClick = (project) => {
    if (project.id !== activeProject.id) {
      animateCarouselInfo(project);
    }
  };

  return (
    <div className="page work">
      <div className="work-carousel">
        <div className="work-slider-img" ref={workSliderImgRef}>
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
          <div className="carousel-description" ref={carouselDescriptionRef}>
            <p className="primary sm">{activeProject.description}</p>
          </div>
          <div className="carousel-title" ref={carouselTitleRef}>
            <Link to="/sample-project">
              <h1>{activeProject.title}</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
