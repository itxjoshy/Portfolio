import React, { useRef, useEffect, useState } from "react";
import heroImg from "/assets/image.png";
import menuIconOpen from "./menu-icon-open.svg";
import menuIconClose from "./menu-icon-close.svg";
import prod2img from "/assets/liora.png";
import prod3img from "/assets/pokedex.png";
import prod5img from "/assets/gridlock.png";
import prod6img from "/assets/rccg.png";
import prod7img from "/assets/byfegor.png";
import cv from "/assets/audujosiah_CV.pdf";
import StaggeredCards from "./components/StaggeredCards";
import ProjectModal from "./components/projectModal";
import "./app.css";

function App() {
  const baseItems = ["MIP", "Liora", "PEP", "Ariks Atelier", "ITXhub"]; // base item(s) to repeat
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/white",
    },
    {
      name: "Tailwindcss",
      icon: "https://cdn.simpleicons.org/tailwindcss/white",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/white",
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
      name: "MIP Website",
      image: "/assets/modal-img/mip/mip_1.png",
      images: [
        "/assets/modal-img/mip/mip_1.png",
        "/assets/modal-img/mip/mip_2.png",
        "/assets/modal-img/mip/mip_3.png",
        "/assets/modal-img/mip/mip_4.png",
        "/assets/modal-img/mip/mip_5.png",
        "/assets/modal-img/mip/mip_6.png",
        "/assets/modal-img/mip/mip_7.png",
        "/assets/modal-img/mip/mip_10.png",
      ],
      displayIMG: [
        "/assets/modal-img/mip/mip_7.png",
        "/assets/modal-img/mip/mip_9.png",
        "/assets/modal-img/mip/mip_8.png",
      ],

      description: {
        technologies: ["HTML", "CSS", "JS"],
        summary:
          "Built a responsive multi-page website using semantic HTML, modern CSS, and vanilla JavaScript. Implemented reusable layout components, responsive breakpoints, and basic DOM manipulation to enhance interactivity and usability across devices.",
        bullets: [
          "Built with HTML, CSS, JS",
          "Responsive landing page for MIP Cooperative",
          "Includes user registration form with smooth UX",
          "Focused on clean UI, accessibility, and fast load times",
        ],
        cardSummary:
          "A responsive multi-page corporate website built with semantic HTML, modern CSS, and vanilla JavaScript.",
      },
      links: {
        github: "https://github.com/itxjoshy/mip-coop-website",
        webpage: "https://www.mipcooperative.com/",
      },
    },
    {
      name: "Liora - Ecommerce (Fullstack)",
      image: "/assets/modal-img/liora/liora.png",
      images: [
        "/assets/modal-img/liora/liora.png",
        "/assets/modal-img/liora/liora_4.png",
        "/assets/modal-img/liora/liora_5.png",
        "/assets/modal-img/liora/liora_6.png",
        "/assets/modal-img/liora/liora_7.png",
        "/assets/modal-img/liora/liora_2.png",
        "/assets/modal-img/liora/liora_3.png",
      ],
      displayIMG: [
        "/assets/modal-img/liora/liora_3.png",
        "/assets/modal-img/liora/liora_2.png",
        "/assets/modal-img/liora/liora_1.png",
      ],

      description: {
        technologies: ["react", "CSS", "JS", "firebase", "paystack"],
        summary:
          "Developed a scalable e-commerce frontend using React with state-based cart management and dynamic product rendering. Integrated Firebase for data handling and Paystack for payment processing, ensuring secure transactions and a smooth checkout flow.",
        bullets: [
          "Built with React, CSS, JS, Firebase, Paystack",
          "Dynamic product rendering",
          "State-based cart management with dynamic product rendering",
          "Integrated Firebase for data storage and management",
          "Integrated Paystack for secure online payments",
          "Optimized checkout flow for smooth user experience",
        ],
        cardSummary:
          "A scalable React-based e-commerce platform with Firebase backend integration and Paystack payments.",
      },
      links: {
        github: "https://github.com/itxjoshy/liora-website",
        webpage: "https://liorastudios.vercel.app",
      },
    },
    {
      name: "RCCG Website - CA",
      image: prod6img,
      images: [
        prod6img,
        "/assets/modal-img/rccg/rccg_1.png",
        "/assets/modal-img/rccg/rccg_2.png",
        "/assets/modal-img/rccg/rccg_3.png",
        "/assets/modal-img/rccg/rccg_4.png",
        "/assets/modal-img/rccg/rccg_5.png",
        "/assets/modal-img/rccg/rccg_6.png",
        "/assets/modal-img/rccg/rccg_7.png",
        "/assets/modal-img/rccg/rccg_8.png",
      ],
      displayIMG: [
        "/assets/modal-img/pep/pep_1.png",
        "/assets/modal-img/pep/pep_2.png",
        "/assets/modal-img/pep/pep_3.png",
      ],
      description: {
        technologies: ["react", "CSS", "JS"],
        summary:
          "Created a performance-optimized React website with modular components and reusable UI patterns. Focused on clean component structure, responsive design, and maintainable styling for an appealing web presence.",
        bullets: [
          "Built with React, CSS, JS",
          "modular React components",
          "Responsive design with reusable UI patterns",
          "Optimized for performance and maintainability",
        ],
        cardSummary:
          "A clean website built with React and modular, reusable components. For a church.",
      },
      links: {
        github: "https://github.com/itxjoshy/church-site-2/",
        webpage: "https://rccgfountainoflife.ca",
      },
    },

    {
      name: "Pokedex",
      image: prod3img,
      images: [
        "/assets/modal-img/pokedex/pokedex_1.png",
        "/assets/modal-img/pokedex/pokedex_2.png",
      ],
      displayIMG: [
        "/assets/modal-img/pokedex/pokedex_1.png",
        "/assets/modal-img/pokedex/pokedex_2.png",
      ],
      description: {
        technologies: ["HTML", "CSS", "JS", "pokeApi"],
        summary:
          "Built an interactive web application that consumes the PokéAPI using asynchronous JavaScript (fetch/async–await). Implemented dynamic data rendering, search functionality, and basic error handling for API responses.",
        bullets: [
          "Built with HTML, CSS, JS, PokéAPI",
          "Interactive web app consuming PokéAPI",
          "Used fetch API to retrieve data from PokéAPI",
          "Implemented search functionality for Pokémon",
          "Implemented dynamic data rendering and search functionality",
          "Includes error handling for API requests",
        ],
        cardSummary:
          "An interactive Pokédex web app consuming the PokéAPI with dynamic rendering and search functionality.",
      },
      links: {
        github: "https://github.com/itxjoshy/pokedex-App",
        webpage: "https://itxpokedexapp.vercel.app",
      },
    },
    {
      name: "Byfegor - Ecommerce",
      image: prod7img,
      images: [
        prod7img,
        "/assets/modal-img/byfegor/byfegor_1.png",
        "/assets/modal-img/byfegor/byfegor_2.png",
        "/assets/modal-img/byfegor/byfegor_3.png",
        "/assets/modal-img/byfegor/byfegor_4.png",
      ],
      displayIMG: [
        "/assets/modal-img/byfegor/byfegor_1.png",
        "/assets/modal-img/byfegor/byfegor_2.png",
        "/assets/modal-img/byfegor/byfegor_3.png",
      ],
      description: {
        technologies: ["React", "CSS", "JS", "WhatsApp API"],
        summary:
          "Developed an Ecommerce website that allows users to purchase products online using the WhatsApp API to send custom messages directly to the vendor.",
        bullets: [
          "Built with React, CSS, JS, WhatsApp API",
          "Ecommerce website with seamless user experience",
          "Integrated WhatsApp API for direct communication with vendors",
          "Implemented dynamic product listings",
          "Optimized for mobile and desktop devices",
        ],
        cardSummary:
          "An Ecommerce website that allows users to purchase products online using the whatsapp api to send custom messages directly to the vendor.",
      },
      links: {
        github: "https://github.com/itxjoshy/pokedex-App",
        webpage: "https://pokedex-app-delta-ten.vercel.app",
      },
    },
  ];

  const tabData = {
    work: [
      {
        role: "Cloud Operations Intern",
        duration: "Feb 2026- Now",
        company: "Galaxy Backbone",
        location: "Nigeria",
        description:
          "developed and manage a full ecomnmerce site for my clothing startup, implementing clean seamless UI/UX that allow users to easily access and operate the site ",
      },
      {
        role: "lead front end engineer",
        duration: "Dec 2024 - Now",
        company: "MIP Cooperative",
        location: "Nigeria",
        description:
          "developed and manage a site used to inform the public about the services of the cooperative, with a form portal allowing users to register smoothly ",
      },
      {
        role: "lead front end engineer",
        duration: "Dec 2025 - Now",
        company: "PEP Energy",
        location: "Nigeria",
        description:
          "developed and manage a site used to inform the public about the services of the cooperative, with a form portal allowing users to register smoothly ",
      },
      {
        role: "lead front end engineer",
        duration: "Dec 2024 - Now",
        company: "MIP Cooperative",
        location: "Nigeria",
        description:
          "developed and manage a site used to inform the public about the services of the cooperative, with a form portal allowing users to register smoothly ",
      },
      {
        role: "lead front end engineer / designer",
        duration: "Dec 2025 - Now",
        company: "Liora Studios",
        location: "Nigeria",
        description:
          "developed and manage a full ecomnmerce site for my clothing startup, implementing clean seamless UI/UX that allow users to easily access and operate the site ",
      },
    ],
    education: [
      {
        role: "Bsc. computer science",
        duration: "Oct 2023 - April 2027",
        company: "Mewar International Univeristy",
        location: "Nigeria",
        description:
          "Currently studying computer science as my undergraduate study at mewar international university - under a 50% scholarship",
      },
      {
        role: "Web Development - Frontend",
        duration: "Nov 2022 -  July 2023",
        company: "Super Simple Dev",
        location: "USA - Online",
        description:
          "Started my front end development journey, by completing the 'supersimpledev' frontend course, allowing me to have an understanding of front end practices",
      },
      {
        role: "Harvard Cs50",
        duration: "Oct 202 -  July 2023",
        company: "Harvard Univeristy | EDx",
        location: "USA - Online",
        description:
          "Took the popular cs50 - introduction to computer science course by harvard university (prior to university), where i learnt all the fundamentals of computer systems and how they operate. Additional courses include: introduction to Web dev, Artificial Inteligence",
      },
    ],
  };
  const [repeatCount, setRepeatCount] = useState(12); // will grow if needed so the list covers the viewport
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [activeTabContent, setActiveTabContent] = useState(tabData.work);
  const items = Array.from(
    { length: repeatCount },
    (_, i) => baseItems[i % baseItems.length],
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
  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, isModalOpen]);

  const showMenu = () => {
    // logic to show the marquee
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const showModal = (cardId) => {
    setActiveProject(projects[cardId]);
    setActiveImage(projects[cardId].images[0]);
    // open modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
    setActiveImage(null);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={activeProject}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />

      <header>
        <button onClick={showMenu}>
          <img src={isMenuOpen ? menuIconClose : menuIconOpen} alt="" />
        </button>
      </header>
      <nav className={`menu ${isMenuOpen ? "menu--open" : ""}`}>
        <div className="quick-links">
          <a href="https://www.linkedin.com/in/josiahaudu/" target="_blank">
            linkedIn
          </a>
          <a href={cv} target="_blank">
            Resume
          </a>
        </div>
        <ul>
          <li>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
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

        <img src={heroImg} alt="portrait" />

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
      <section
        className="container"
        id="about"
        style={{
          color: "black",
        }}
      >
        <div className="tab-section">
          <div className="tab-buttons">
            <button
              className={`button ${activeTab === 1 ? "active-btn" : ""}`}
              onClick={() => {
                setActiveTab(1);
                setActiveTabContent(tabData.work);
              }}
            >
              Experience
            </button>
            <button
              className={`button ${activeTab === 2 ? "active-btn" : ""}`}
              onClick={() => {
                setActiveTab(2);
                setActiveTabContent(tabData.education);
              }}
            >
              Education
            </button>
          </div>
          <div className="tab-content">
            <ul className="tab-list">
              {activeTabContent.map((item, idx) => {
                return (
                  <div key={idx} className="item">
                    <li>{item.role}</li>
                    <p className="duration__item">{item.duration}</p>
                    <div className="location-info">
                      <p
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        {item.company}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <svg
                          className="location__icon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                        </svg>
                        <p
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="description__item">{item.description}</p>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container" id="projects">
        <h2
          style={{
            color: "black",
          }}
        >
          Projects
        </h2>
        <StaggeredCards projects={projects} showModal={showModal} />
      </section>
      <footer id="contact">
        <div className="container">
          {/* Top Section */}
          <div className="top-section">
            <div className="copyright">© 2026</div>
            <button onClick={scrollToTop} className="back-to-top">
              <span className="back-to-top-text">BACK TO TOP</span>
              <div className="icon-circle">
                <span className="arrow">↑</span>
              </div>
            </button>
          </div>

          {/* Main CTA Section */}
          <div className="cta-section">
            <h2 className="cta-heading">HAVE A PROJECT IN MIND?</h2>
            <h1 className="main-heading">LET'S TALK</h1>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="social-links">
              <a
                href="https://github.com/itxjoshy"
                target="_blank"
                className="social-button"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/josiahaudu/"
                target="_blank"
                className="social-button"
              >
                LINKEDIN
              </a>
              <a href={cv} className="social-button">
                RESUME
              </a>
            </div>
            <div className="credits">
              <p className="credit-text">
                Design And Developed by <strong>Audu Josiah</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
