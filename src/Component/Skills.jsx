import React, { useEffect, useRef } from "react";
import "./Skills.css";
import placeholder from '../Assets/placeholder.png';
const skillsData = [
  { name: "HTML5", level: "Expert", percent: 95, years: "3+ yrs", label: "// Core · 01" },
  { name: "CSS3", level: "Expert", percent: 92, years: "3+ yrs", label: "// Core · 02" },
  { name: "JavaScript", level: "Advanced", percent: 85, years: "2+ yrs", label: "// Core · 03" },
  { name: "React", level: "Advanced", percent: 80, years: "1+ yr", label: "// Framework · 04" },
  { name: "Next.js", level: "Intermediate", percent: 65, years: "1 yr", label: "// Framework · 05" },
  { name: "Tailwind", level: "Advanced", percent: 88, years: "1+ yr", label: "// Styling · 06" },
];
const tools = [
            "Git",
            "Vercel",
            "Figma",
            "Framer Motion",
            "GSAP",
            "VS Code",
            "GitHub",
            ];
const learning = [
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "Three.js",
            "Prisma",
            "REST APIs",
            ];
const Skills = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".sk-bar");

            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.classList.add("animated");
              }, i * 120);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-wrap" id="skills">

      {/* Background */}
      <div className="skills-bg">
        <img src={placeholder} alt="" />
      </div>

      <div className="skills-glow"></div>
      <div className="scanline"></div>

      {/* Header */}
      <div className="skills-header">
        <div className="skills-tag">System Diagnostics</div>

        <div className="skills-heading">
          Suit <br />
          <span className="outline">Capabilities</span> <br />
          <span className="red">Online.</span>
        </div>

        <div className="skills-subhead">
          // Running full diagnostic · All systems nominal
        </div>
      </div>

      {/* JARVIS */}
      <div className="jarvis-status">
        <div className="js-dot"></div>
        <div className="js-text">
          J.A.R.V.I.S. · <span>6 systems detected</span> · Proficiency scan complete
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="skills-grid" ref={gridRef}>
        {skillsData.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="sk-ghost">{skill.percent}</div>

            <div className="sk-top">
              <div>
                <div className="sk-label">{skill.label}</div>
                <div className="sk-name">{skill.name}</div>
              </div>

              <div className="sk-years">
                {skill.years}
                <br />
                active
              </div>
            </div>

            <div className="sk-bar-wrap">
              <div
                className="sk-bar"
                style={{ "--w": `${skill.percent}%` }}
              ></div>
            </div>

            <div className="sk-footer">
              <div className="sk-level">{skill.level}</div>
              <div className="sk-pct">{skill.percent}%</div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      {/* <div className="section-divider">
        <div className="div-line"></div>
        <div className="div-label">// Additional systems</div>
        <div className="div-line"></div>
      </div> */}

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-row">

            <div className="marquee-track">
            {[...tools, ...tools].map((tool, i) => (
                <div className="m-chip" key={i}>
                <div className="m-dot md-red"></div>
                <div className="m-name">{tool}</div>
                <div className="m-tag">Tool</div>
                </div>
            ))}
            </div>
        </div>

        <div className="marquee-row">

            <div className="marquee-track reverse">
            {[...learning, ...learning].map((tool, i) => (
                <div className="m-chip" key={i}>
                <div className="m-dot md-gold"></div>
                <div className="m-name">{tool}</div>
                <div className="m-tag">Learning</div>
                </div>
            ))}
            </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;