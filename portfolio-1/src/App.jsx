import React, { useRef, useEffect, useState } from "react";
import image from "./assets/image.png";
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
      name: "Framer Motion",
      icon: "https://cdn.simpleicons.org/framer/white",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git/white",
    },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github/white",
    },
  ];
  const [repeatCount, setRepeatCount] = useState(12); // will grow if needed so the list covers the viewport
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <>
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
    </>
  );
}

export default App;
