import React, { useState } from "react";
import "./Project.css";
import img1 from "../Assets/restaurant.jpeg";
import img2 from "../Assets/street-style.jpeg";
import img3 from "../Assets/food-delivery.jpeg";
import img4 from "../Assets/admin-dashboard.jpeg";
import img5 from "../Assets/netflix-clone.jpeg";
import img6 from "../Assets/weather-app.jpeg";
import bgimg from "../Assets/hall-of-suits.png"

const projectsData = [
  {
    mark: "Mark I",
    short: "MK·I",
    cat: "// Restaurant · Landing Page",
    name: "Figaro",
    image: img1,
    desc: "Full luxury restaurant website with parallax effects, scroll animations, reservation form and fully responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Parallax", "Vercel"],
    live: "https://restarurant-v2.vercel.app",
    github: "https://github.com/HoneyCode24/Restarurant-v2",
  },
  {
    mark: "Mark II",
    short: "MK·II",
    cat: "// E-Commerce · Web App",
    name: "Street Style Store",
    image: img2,
    desc: "Full e-commerce storefront with cart and checkout flow.",
    tech: ["React", "Tailwind", "JavaScript"],
    live: "https://street-style-e-com-website.vercel.app",
    github: "https://github.com/HoneyCode24/StreetStyle-E-Com-Website",
  },
  {
    mark: "Mark III",
    short: "MK·III",
    cat: "// Food Tech · Landing",
    name: "Tomato",
    image: img3,
    desc: "Modern food delivery landing page.",
    tech: ["React", "CSS"],
    live: "https://food-delivery-beta-one.vercel.app",
    github: "https://github.com/HoneyCode24/Food-delivery",
  },
  {
    mark: "Mark IV",
    short: "MK·IV",
    cat: "// SaaS · Dashboard",
    name: "Shoppy",
    image: img4,
    desc: "Admin dashboard with analytics and charts.",
    tech: ["React", "Charts"],
    live: "https://admin-dashboard-one-beta-93.vercel.app",
    github: "https://github.com/HoneyCode24/Admin-Dashboard",
  },
  {
    mark: "Mark V",
    short: "MK·V",
    cat: "// Streaming · UI Clone",
    name: "Netflix Clone",
    image: img5,
    desc: "Pixel-perfect Netflix UI clone.",
    tech: ["React", "CSS"],
    live: "https://netflix-clone-eight-smoky.vercel.app",
    github: "https://github.com/HoneyCode24/Netflix-clone",
  },
  {
    mark: "Mark VI",
    short: "MK·VI",
    cat: "// Utility · API App",
    name: "Weather App",
    image: img6,
    desc: "Real-time weather app.",
    tech: ["JavaScript", "API"],
    live: "https://weather-web-app-beta-one.vercel.app",
    github: "https://github.com/HoneyCode24/Weather-Web-App",
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const p = projectsData[activeIndex];

  return (
    <div className="proj-wrap" id="work">
          {/* <div className="proj-bg">
                <img
                src={bgimg}
                alt=""
                />
            </div> */}
      <div className="proj-bg-layer"></div>
      <div className="noise"></div>

      {/* HEADER */}
      <div className="proj-header">
        <div className="proj-tag">Selected Works</div>

        <div className="proj-heading">
          The Hall 
          <span className="outline"> Of</span>
          <span className="red"> Suits.</span>
        </div>
      </div>

      <div className="proj-layout">

        {/* LEFT PANEL */}
        <div className="featured-panel">

          <div className="feat-img">
            <div className="feat-img-inner">

              <div className="feat-mark-bg">{p.short}</div>

              <img className="project-img"
                src={p.image}
                alt={p.name}/>
            </div>

            <div className="feat-topbar">
              <div className="feat-badge">{p.mark}</div>
              <div className="feat-live">
                <div className="live-dot"></div>
                <span className="live-txt">Live</span>
              </div>
            </div>
          </div>

          <div className="feat-body">
            <div className="feat-cat">{p.cat}</div>
            <div className="feat-name">{p.name}</div>
            <div className="feat-divider"></div>
            <div className="feat-desc">{p.desc}</div>

            <div className="feat-tech">
              {p.tech.map((t, i) => (
                <span key={i} className="tech-p">{t}</span>
              ))}
            </div>

            <div className="feat-links">
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="flink primary">Live Site</a>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="flink ghost">GitHub →</a>
            </div>
          </div>

        </div>

        {/* RIGHT LIST */}
        <div>

          <div className="proj-list">
            {projectsData.map((item, index) => (
              <div
                key={index}
                className={`proj-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="item-mark">{item.short}</div>

                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-cat">{item.cat}</div>
                </div>

                <div className="item-arc">
                  <svg width="22" height="22" viewBox="0 0 22 22">
                    <circle cx="11" cy="11" r="9" stroke="rgba(21, 255, 0, 0.4)" fill="none" />
                    <circle cx="11" cy="11" r="6" stroke="rgba(3, 255, 37, 0.6)" fill="none" />
                    <circle cx="11" cy="11" r="2.5" fill="rgba(22, 255, 14, 0.8)" />
                    </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="proj-counter">
            {String(activeIndex + 1).padStart(2, "0")} / 06 suits deployed
          </div>

        </div>

      </div>
    </div>
  );
};

export default Project;