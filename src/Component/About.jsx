import React from "react";
import "./About.css";

import bgImg from "../Assets/about-bg-image.png";
import helmetImg from "../Assets/helmet.png";
import profileImg from "../Assets/profile.png";

const About = () => {
  return (
    <>
      <div className="about-wrap" id="about">

        {/* Background */}
        <div className="about-bg">
          <img
            src={bgImg}
            alt="lab bg"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        {/* Helmet ghost */}
        <div className="helmet-ghost">
          <img
            src={helmetImg}
            alt=""
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        <div className="glow-bottom"></div>

        <div className="vert-label">
          Stark Industries · Est. 2025
        </div>

        <div className="about-body">

          {/* LEFT */}
          <div className="about-left">
            <div className="photo-frame">

              <img
                src={profileImg}
                alt="Harry"
                onError={(e) => {
                  const parent = e.target.parentNode;
                  e.target.style.display = "none";
                  parent.style.background =
                    "linear-gradient(135deg,#1a0a00,#0a0a0a)";
                }}
              />

              <div className="photo-overlay"></div>

              {/* Arc Reactor */}
              <div className="arc-deco">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30"
                    stroke="rgba(185,28,28,0.3)" strokeWidth="0.5"
                    style={{ animation: "spin 20s linear infinite", transformOrigin: "32px 32px" }}
                  />
                  <circle cx="32" cy="32" r="22"
                    stroke="rgba(185,28,28,0.5)" strokeWidth="0.5"
                    strokeDasharray="4 4"
                    style={{ animation: "spinr 12s linear infinite", transformOrigin: "32px 32px" }}
                  />
                  <circle cx="32" cy="32" r="12"
                    stroke="rgba(147,197,253,0.6)" strokeWidth="0.5"
                    style={{ animation: "spin 6s linear infinite", transformOrigin: "32px 32px" }}
                  />
                  <circle cx="32" cy="32" r="5"
                    fill="rgba(147,197,253,0.8)"
                    style={{ animation: "pulse 2s ease-in-out infinite" }}
                  />
                  <polygon
                    points="32,26 36,34 28,34"
                    fill="rgba(147,197,253,0.4)"
                    style={{ animation: "spinr 8s linear infinite", transformOrigin: "32px 32px" }}
                  />
                </svg>
              </div>

            </div>

            <div className="photo-badge">
              <div className="badge-line"></div>
              <div className="badge-name">Harry · Frontend Dev</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right">

            <div className="section-tag">About Me</div>

            <div className="section-heading">
              The Man <br />
              <span className="outline">Behind</span> <br />
              <span className="red">The Code.</span>
            </div>

            <div className="about-section-divider"></div>

            <p className="about-story">
              I'm <strong>Harry</strong> — a <span className="red">self-taught frontend developer</span> from India.
              <br /><br />
              No degree. No shortcuts. Just <strong>obsessive attention to detail</strong>.
              <br /><br />
              I don't just write code — I <strong>engineer experiences.</strong>
            </p>

            <div className="about-stats">
              <div className="stat-block">
                <div className="stat-val">5<span>+</span></div>
                <div className="stat-lbl">Projects Built</div>
              </div>

              <div className="stat-block">
                <div className="stat-val">19</div>
                <div className="stat-lbl">Years Old</div>
              </div>

              <div className="stat-block">
                <div className="stat-val">100<span>%</span></div>
                <div className="stat-lbl">Self Taught</div>
              </div>

              <div className="stat-block">
                <div className="stat-val">∞</div>
                <div className="stat-lbl">Drive</div>
              </div>
            </div>

            <div className="tech-row">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Tailwind</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Framer Motion</span>
              <span className="tech-pill">GSAP</span>
              <span className="tech-pill">Figma</span>
              <span className="tech-pill">Vercel</span>
            </div>

            <div className="about-cta">
              <a href="#work" className="cta-main">See My Work</a>
              <a href="/Harry_CV_Frontend_Developer.pdf" download target="_blank" className="cta-ghost">Download CV</a>
            </div>

          </div>

        </div>
      </div>

      
    </>
  );
};

export default About;