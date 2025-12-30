import React, { useRef, useEffect, useState } from "react";
import image from "./assets/image.png";
import prod1img from "./assets/mip.jpg";
import prod2img from "./assets/liora.png";
// import prod3img from "./assets/pep.png";
// import prod4img from "./assets/ariks.png";
import prod5img from "./assets/gridlock.png";
import prod6img from "./assets/pokedex.png";
import "./app.css";

function App() {
  const baseItems = ["MIP", "Liora", "PEP", "Ariks Atelier", "ITXhub"]; // base item(s) to repeat
  const technologies = [
    {
      name: "HTML",
      icon: "https://cdn.simpleicons.org/html5/white",
    },
    {
      name: "CSS",
      icon: "https://cdn.simpleicons.org/css/white",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/white",
    },
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/white",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.simpleicons.org/vue.js/white",
    },
    {
      name: "Tailwindcss",
      icon: "https://cdn.simpleicons.org/tailwindcss/white",
    },
    {
      name: "Firebase",
      icon: "https://cdn.simpleicons.org/firebase/white",
    },
    {
      name: "Framer Motion",
      icon: "https://cdn.simpleicons.org/framer/white",
    },
  ];
  const projects = [
    {
      name: "Project 1",
      image: prod1img,
      images: [prod1img, prod2img, prod5img],
    },
    {
      name: "Project 2",
      image: prod2img,
      images: [prod2img, prod5img, prod6img],
    },
    {
      name: "Project 3",
      image: prod6img,
      images: [prod6img, prod5img, prod2img],
    },
    {
      name: "Project 4",
      image: prod6img,
      images: [prod6img, prod5img, prod2img],
    },
    {
      name: "Project 5",
      image: prod6img,
      images: [prod6img, prod5img, prod2img],
    },
  ];
  const [repeatCount, setRepeatCount] = useState(12); // will grow if needed so the list covers the viewport
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const items = Array.from(
    { length: repeatCount },
    (_, i) => baseItems[i % baseItems.length]
  );
  // refs & measurements
  const marqueeRef = useRef(null);
  const firstListRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(12); // seconds

  useEffect(() => {
    const speedPxPerSec = 50; // px/sec - tune to change speed

    const updateMeasurements = () => {
      const listEl = firstListRef.current;
      const containerEl = marqueeRef.current;
      if (!listEl || !containerEl) return;

      const listW = listEl.offsetWidth;
      const containerW = containerEl.offsetWidth;

      // if list is narrower than the visible container, increase repeats so there's no gap
      if (listW < containerW) {
        // increase until listW >= containerW (use multiplier to avoid many re-renders)
        setRepeatCount((prev) => {
          let next = prev;
          // multiply until the produced list width will exceed container width.
          // We can't know exact width until re-render, but doubling is efficient.
          next = Math.max(prev * 2, prev + 4);
          return next;
        });
        return; // wait for next render to measure again
      }

      // set translate distance to exactly the list width to loop seamlessly
      setDistance(listW);
      setDuration(Math.max(4, Math.round(listW / speedPxPerSec)));
    };

    // measure on RAF to ensure layout is ready
    const rafHandle = () => requestAnimationFrame(updateMeasurements);
    rafHandle();

    const ro = new ResizeObserver(rafHandle);
    if (marqueeRef.current) ro.observe(marqueeRef.current);
    if (firstListRef.current) ro.observe(firstListRef.current);

    window.addEventListener("load", rafHandle);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", rafHandle);
      cancelAnimationFrame(rafHandle);
    };
  }, [repeatCount]);

  const showMenu = () => {
    // logic to show the marquee
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const showModal = (cardId) => {
    setActiveProject(projects[cardId]);
    setActiveImage(projects[cardId].image);
    // open modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
    setActiveImage(null);
  };

  return (
    <>
      <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <button onClick={closeModal}>+</button>
        {isModalOpen && activeProject && (
          <div className="modal modal-open" onClick={closeModal}>
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                {/* MAIN IMAGE */}
                <img
                  src={activeImage}
                  alt={activeProject.name}
                  className="modal-main-image"
                />

                {/* IMAGE SELECTOR */}
                <div className="image-selector">
                  {activeProject.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt=""
                      onClick={() => setActiveImage(img)}
                      className={img === activeImage ? "active-image" : ""}
                    />
                  ))}
                </div>

                <p>{activeProject.name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <header>
        <button onClick={showMenu}>+</button>
      </header>
      <nav className={`menu ${isMenuOpen ? "menu--open" : ""}`}>
        <div className="quick-links">
          <a href="#about">linkedIn</a>
          <a href="#projects">Resume</a>
        </div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="hero">
        <div className="marquee-container">
          <div
            className="marquee"
            ref={marqueeRef}
            style={{
              ["--marquee-distance"]: distance ? `${distance}px` : "0px",
              ["--marquee-duration"]: `${duration}s`,
            }}
          >
            <div
              className="marquee__track"
              style={{ animationPlayState: distance ? "running" : "paused" }}
            >
              <ul ref={firstListRef} className="marquee__list">
                {items.map((t, i) => (
                  <li className="marquee__item" key={i}>
                    {t}
                  </li>
                ))}
              </ul>

              <ul
                className="marquee__list"
                aria-hidden
                style={{ marginLeft: "4rem" }}
              >
                {items.map((t, i) => (
                  <li className="marquee__item" key={`dup-${i}`}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <img src={image} alt="portrait" />

        <div className="hero-content">
          <p>Hi, I’m</p>
          <p>
            <strong>Josiah Audu</strong>
          </p>
          <p>Front End Developer / CS Student</p>
          <p className="location">
            <svg
              className="location__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            Nigeria
          </p>
        </div>
      </main>
      <section className="container">
        <div className="technologies-section">
          <h2>Technologies</h2>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container">
        <div className="projects-section">
          <h2>Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li
                key={index}
                data-id={index}
                onClick={() => {
                  showModal(index);
                }}
              >
                <div className="info">
                  <h3>{project.name}</h3>
                </div>
                <img src={project.image} alt={project.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
