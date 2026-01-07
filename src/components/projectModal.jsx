import React, { useEffect, useRef, useState } from "react";
import closeIcon from "../menu-icon-close.svg";
import linkIcon from "../link-icon.svg";
import carouselLeft from "../carousel-left.svg";
import carouselRight from "../carousel-right.svg";
function ProjectModal({
  isOpen,
  onClose,
  project,
  activeImage,
  setActiveImage,
}) {
  const thumbRefs = useRef([]);
  const [localIndex, setLocalIndex] = useState(0);

  useEffect(() => {
    if (!project || !project.images) return;

    const idx = project.images.indexOf(activeImage ?? project.images[0]);

    setLocalIndex(idx >= 0 ? idx : 0);
  }, [activeImage, project]);

  useEffect(() => {
    if (!project || !project.images) return;

    const el = thumbRefs.current[localIndex];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [localIndex, project]);

  // ✅ EARLY RETURN AFTER HOOKS
  if (!isOpen || !project) return null;

  const { description } = project;

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
      <div className="modal-container">
        <div className="modal-content-wrapper">
          <button onClick={onClose} className="close_button">
            <img src={closeIcon} alt="" />
          </button>
          <div
            className="modal_content"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
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
              <div
                style={{
                  display: "flex",
                  gap: 10,
                }}
              >
                {project.links && project.links.github ? (
                  <button
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    <p>Github</p>
                    <img
                      src="https://cdn.simpleicons.org/github/black"
                      alt="Github"
                    />
                  </button>
                ) : null}
                {project.links && project.links.webpage ? (
                  <button
                    onClick={() => window.open(project.links.webpage, "_blank")}
                  >
                    <img src={linkIcon} alt="link-image" />
                    <p>Demo</p>
                  </button>
                ) : null}
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
