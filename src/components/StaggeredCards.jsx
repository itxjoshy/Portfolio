import React, { useEffect } from "react";
import linkIcon from "../link-icon.svg";

function StaggeredCards({ projects, showModal }) {
  if (!projects) return; //mame sure it exists

  //keep orgnl index
  const indexProject = projects.map((project, idx) => ({ project, id: idx }));
  //left col
  const leftCol = indexProject.filter((projects, idx) => idx % 2 === 0);
  const rightCol = indexProject.filter((projects, idx) => idx % 2 !== 0);
  return (
    <div className="projects-section">
      <ul className="left__column">
        {leftCol.map((object, index) => (
          <li
            key={index}
            onClick={() => {
              showModal(object.id);
            }}
          >
            <div className="info">
              <div className="info-content">
                <h3>{object.project.name}</h3>
                <p>{object.project.description.cardSummary}</p>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 10,
                  }}
                >
                  {object.project.description.technologies.map((item, idx) => (
                    <div
                      key={idx}
                      className="tech"
                      style={{
                        background: "white",
                        borderRadius: 10,
                        color: "black",
                        padding: "5px 10px",
                      }}
                    >
                      {item}
                    </div>
                  ))}
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
          <li
            key={index}
            className={index}
            onClick={() => {
              showModal(object.id);
            }}
          >
            <div className="info">
              <div className="info-content">
                <h3>{object.project.name}</h3>
                <p>{object.project.description.cardSummary}</p>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 10,
                  }}
                >
                  {object.project.description.technologies.map((item, idx) => (
                    <div
                      key={idx}
                      className="tech"
                      style={{
                        background: "white",
                        borderRadius: 10,
                        color: "black",
                        padding: "5px 10px",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <img src={object.project.image} alt={object.project.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaggeredCards;
