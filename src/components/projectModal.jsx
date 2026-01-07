import React, { useEffect, useRef, useState } from "react";
import closeIcon from "../menu-icon-close.svg";
import carouselLeft from "../carousel-left.svg";
import carouselRight from "../carousel-right.svg";
function ProjectModal({
  isOpen,
  onClose,
  project,
  activeImage,
  setActiveImage,
}) {
  if (!isOpen || !project) return null;
  const { description } = project;

  const [localIndex, setLocalIndex] = useState(
    project.images.indexOf(activeImage || project.images[0]) || 0
  );
  const thumbRefs = useRef([]);

  useEffect(() => {
    const idx = project.images.indexOf(activeImage);
    if (idx >= 0) setLocalIndex(idx);
  }, [activeImage, project.images]);

  useEffect(() => {
    const el = thumbRefs.current[localIndex];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [localIndex]);

  const prev = () => {
    const next =
      (localIndex - 1 + project.images.length) % project.images.length;
    setActiveImage(project.images[next]);
    setLocalIndex(next);
  };

  const next = () => {
    const nxt = (localIndex + 1) % project.images.length;
    setActiveImage(project.images[nxt]);
    setLocalIndex(nxt);
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content-wrapper" onClick={onClose}>
          <button onClick={onClose} className="close_button">
            <img src={closeIcon} alt="" />
          </button>
          <div className="modal_content">
            {/* MAIN IMAGE */}
            <img
              src={activeImage}
              alt={project.name}
              className="modal-main-image"
            />

            {/* IMAGE SELECTOR - carousel */}
            <div className="carousel-wrapper">
              <button
                className="carousel-btn carousel-btn--left"
                onClick={prev}
                aria-label="Previous"
              >
                <img src={carouselLeft} alt="" />
              </button>
              <div className="image-selector" role="list">
                {project.images.map((img, idx) => (
                  <img
                    key={idx}
                    ref={(el) => (thumbRefs.current[idx] = el)}
                    src={img}
                    alt={`thumbnail ${idx + 1}`}
                    onClick={() => {
                      setActiveImage(img);
                      setLocalIndex(idx);
                    }}
                    className={
                      img === activeImage
                        ? "active-image carousel-thumb"
                        : "carousel-thumb"
                    }
                    role="listitem"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveImage(img);
                        setLocalIndex(idx);
                      }
                    }}
                  />
                ))}
              </div>
              <button
                className="carousel-btn carousel-btn--right"
                onClick={next}
                aria-label="Next"
              >
                <img src={carouselRight} alt="" />
              </button>
            </div>

            <div className="description">
              <h2>{project.name}</h2>
              <ul>
                {description.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <p>{description.summary}</p>
              <div className="insights">
                <ul>
                  {(description.bullets || []).map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button>
                  <img
                    src="https://cdn.simpleicons.org/github/black"
                    alt="Github"
                  />
                  Github
                </button>
                <button> {"->"}</button>
              </div>

              <div className="image__bento">
                {project.displayIMG.map((img, idx) => (
                  <img key={idx} src={img} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
