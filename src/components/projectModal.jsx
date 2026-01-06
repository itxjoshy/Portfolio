import React from "react";

function ProjectModal({
  isOpen,
  onClose,
  project,
  activeImage,
  setActiveImage,
}) {
  if (!isOpen || !project) return null;
  const { description } = project;
  console.log(description);
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content-wrapper">
          <button onClick={onClose} className="close_button">
            +
          </button>
          <div className="modal_content">
            {/* MAIN IMAGE */}

            <img
              src={activeImage}
              alt={project.name}
              className="modal-main-image"
            />
            {/* IMAGE SELECTOR */}
            <div className="image-selector">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  onClick={() => setActiveImage(img)}
                  className={img === activeImage ? "active-image" : ""}
                />
              ))}
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
                  {description.bullets.map((bullet, idx) => (
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
                <button>
                  <img
                    src="https://cdn.simpleicons.org/github/black"
                    alt="Github"
                  />
                  Github
                </button>
                <button> {"->"}</button>
              </div>
              <div className="image__bento"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
