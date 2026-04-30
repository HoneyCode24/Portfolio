import React from "react";
import "./Hero.css";
import heroImg from "../Assets/iron-man-hero-image.png";

const Hero = () => {
  return (
    <>
      <div className="hero-wrap">

        {/* Decorative grid */}
        <div className="grid-lines">
          <div className="grid-v" style={{ left: "25%" }}></div>
          <div className="grid-v" style={{ left: "50%" }}></div>
          <div className="grid-v" style={{ left: "75%" }}></div>
          <div className="grid-h" style={{ top: "33%" }}></div>
          <div className="grid-h" style={{ top: "66%" }}></div>
        </div>

        {/* NAVBAR */}
        <nav className="navbar">
          <a href="#" className="nav-logo">
            Harry<span>.</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="nav-cta">Hire Me</a>
        </nav>

        <div className="corner-mark">Portfolio — 2026</div>

        {/* BODY */}
        <div className="hero-body">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tag">Frontend Developer</div>

            <div className="hero-name">
              Harry  <br />
              <span className="outline">Builds</span> <br />
              <span className="red">Sharp.</span>
            </div>

            <div className="hero-role">
              React · Next.js · Motion Design
            </div>

            <div className="hero-divider"></div>

            <p className="hero-desc">
              I craft <strong>fast, visually sharp</strong> web experiences for businesses that want to stand out. 19 years old. Self-taught. Building toward something big.
            </p>

            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-num">5<span>+</span></div>
                <div className="stat-label">Projects Built</div>
              </div>

              <div className="stat-item">
                <div className="stat-num">19</div>
                <div className="stat-label">Years Old</div>
              </div>

              <div className="stat-item">
                <div className="stat-num">∞</div>
                <div className="stat-label">Drive</div>
              </div>
            </div>

            <div className="btn-row">
              <a href="#work" className="btn-primary">View My Work</a>
              <a href="/Harry-CV-Frontend_Developer.html" download target="_blank" className="btn-secondary">Download CV</a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-right">
            <div className="hero-img-wrap">
              <img
                src={heroImg}
                alt="Iron Man hero"
                onError={(e) => {
                  const parent = e.target.parentNode;
                  e.target.style.display = "none";
                  parent.style.background =
                    "linear-gradient(135deg,#fff5f5 0%,#fef2f2 40%,#fee2e2 100%)";
                }}
              />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="badge-float">
          <div className="badge-dot"></div>
          <div className="badge-text">Available for work</div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line"></div>
          <div className="scroll-text">Scroll</div>
        </div>

      </div>
      
    </>
  );
};

export default Hero;