import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "REST APIs",
    "Responsive Design",
  ];

  return (
    <section className="about-page" id="about">
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* Heading */}
        <div className="about-heading">
          <span className="about-label">
            <span className="about-status-dot"></span>
            GET TO KNOW ME
          </span>

          <h1>
            A little about
            <br />
            <span className="about-gradient">who I am.</span>
          </h1>

          <p>
            Developer by passion. Problem solver by nature.
            Always building something new.
          </p>
        </div>

        {/* About Content */}
        <div className="about-grid">

          {/* Profile Card - No Image */}
          <div className="about-profile-card">
            <div className="about-profile-top">
              <span className="profile-symbol">&lt;/&gt;</span>
              <span className="profile-number">01 — ABOUT</span>
            </div>

            <div className="profile-code">
              <span className="code-line">
                <span className="code-purple">const</span> developer = {"{"}
              </span>
              <span className="code-line code-indent">
                role: <span className="code-green">"Full Stack"</span>,
              </span>
              <span className="code-line code-indent">
                stack: <span className="code-green">"MERN"</span>,
              </span>
              <span className="code-line code-indent">
                mindset: <span className="code-green">"Keep Building"</span>
              </span>
              <span className="code-line">{"};"}</span>
            </div>

            <h2>Full Stack Developer</h2>
            <p className="profile-role">
              MERN Stack Developer
            </p>

            <div className="profile-divider"></div>

            <p className="profile-quote">
              "Turning ideas into experiences, one line of code at a time."
            </p>

            <div className="profile-status">
              <span></span> Passionate about building
            </div>
          </div>

          {/* My Journey */}
          <div className="about-story">
            <span className="story-label">MY JOURNEY</span>

            <h2>
              Building the web,
              <br />
              <span>one idea at a time.</span>
            </h2>

            <p>
              Hi! I'm a Full Stack MERN Developer passionate about
              creating modern, responsive, and user-friendly web
              applications. I enjoy turning creative ideas into
              functional digital products.
            </p>

            <p>
              I work with MongoDB, Express.js, React.js, and Node.js
              to build complete web applications, from interactive
              frontend interfaces to backend APIs and database
              integration.
            </p>

            <p>
              I believe in writing clean code, solving problems,
              learning new technologies, and continuously improving
              my development skills through hands-on projects.
            </p>

            <a href="/work" className="about-work-btn">
              Explore My Projects <span>↗</span>
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="about-skills">
          <div className="skills-heading">
            <div>
              <span className="story-label">MY TOOLKIT</span>
              <h2>
                Technologies I work with<span>.</span>
              </h2>
            </div>

            <span className="skills-count">10 SKILLS</span>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill}
                style={{ "--skill-index": index }}
              >
                <span className="skill-icon">✳</span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Banner */}
        <div className="about-banner">
          <div>
            <span className="story-label">WHAT'S NEXT?</span>
            <h2>Let's build something meaningful.</h2>
            <p>
              Open to exciting projects, collaborations, and new
              opportunities.
            </p>
          </div>

          <a href="/contact" className="about-contact-btn">
            Get in Touch <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;