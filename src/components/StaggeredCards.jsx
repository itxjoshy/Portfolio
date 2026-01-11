import React, { useEffect } from "react";
import linkIcon from "../link-icon.svg";

function StaggeredCards({ projects, showModal }) {
  if (!projects) return; //mame sure it exists

  //keep orgnl index
  const indexProject = projects.map((project, idx) => ({ project, id: idx }));
  //left col
  const leftCol = indexProject.filter((projects, idx) => idx % 2 === 0);
  const rightCol = indexProject.filter((projects, idx) => idx % 2 !== 0);
  console.log(leftCol);
  return (
    <div className="projects-section">
      <ul className="left__column">
        {leftCol.map((object, index) => (
          <li key={index} className={index}>
            <div className="info">
              <div className="info-content">
                <h3>{object.project.name}</h3>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  {object.project.links && object.project.links.github ? (
                    <button
                      onClick={() =>
                        window.open(object.project.links.github, "_blank")
                      }
                    >
                      <img
                        src="https://cdn.simpleicons.org/github/black"
                        alt="Github"
                      />
                    </button>
                  ) : null}
                  {object.project.links && object.project.links.webpage ? (
                    <button
                      onClick={() =>
                        window.open(object.project.links.webpage, "_blank")
                      }
                    >
                      <img src={linkIcon} alt="link-image" />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
            <img
              src={object.project.image}
              alt={object.project.name}
              onClick={() => {
                showModal(object.id);
              }}
            />
          </li>
        ))}
      </ul>
      <ul className="right__column">
        {rightCol.map((object, index) => (
          <li key={index} className={index}>
            <div className="info">
              <div className="info-content">
                <h3>{object.project.name}</h3>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  {object.project.links && object.project.links.github ? (
                    <button
                      onClick={() =>
                        window.open(object.project.links.github, "_blank")
                      }
                    >
                      <img
                        src="https://cdn.simpleicons.org/github/black"
                        alt="Github"
                      />
                    </button>
                  ) : null}
                  {object.project.links && object.project.links.webpage ? (
                    <button
                      onClick={() =>
                        window.open(object.project.links.webpage, "_blank")
                      }
                    >
                      <img src={linkIcon} alt="link-image" />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
            <img
              src={object.project.image}
              alt={object.project.name}
              onClick={() => {
                showModal(object.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaggeredCards;
