
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-tag">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Turning ideas
            <br />
            into <span className="gradient-text">digital</span>
            <br />
            experiences<span className="hero-dot">.</span>
          </h1>

          <p className="hero-description">
            I'm a Full Stack MERN Developer building modern,
            responsive, and interactive web applications.
            From beautiful frontend interfaces to powerful
            backend APIs and database integration, I turn
            ideas into real-world digital experiences.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => navigate("/work")}
              className="hero-btn primary-btn"
            >
              Explore My Work <span>↗</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="hero-btn secondary-btn"
            >
              Let's Talk <span>→</span>
            </button>
          </div>

          <div className="hero-footer">
            <span>REACT</span>
            <span className="footer-divider"></span>
            <span>NODE.JS</span>
            <span className="footer-divider"></span>
            <span>MONGODB</span>
          </div>
        </div>

        {/* Right Animated Design */}
        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-card">
            <div className="card-top">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="card-label">
                CREATIVE DEVELOPER
              </span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">"Your Name"</span>,
              </p>

              <p className="code-indent">
                passion: <span className="code-green">"Building"</span>,
              </p>

              <p className="code-indent">
                skills: [<span className="code-orange">"React"</span>,
              </p>

              <p className="code-indent">
                <span className="code-orange">"Node.js"</span>],
              </p>

              <p className="code-indent">
                creativity: <span className="code-pink">Infinity</span>
              </p>

              <p>{"};"}</p>

              <p className="code-bottom">
                <span className="code-purple">console</span>.log(
                <span className="code-green">"Let's build!"</span>)
                <span className="typing-cursor"></span>
              </p>
            </div>

            <div className="card-bottom">
              <span>● SYSTEM ONLINE</span>
              <span>001 / 100</span>
            </div>
          </div>

          <div className="hero-number">01</div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-line"></span>
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};

export default Hero;
