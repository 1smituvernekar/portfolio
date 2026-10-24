import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* Footer heading */}
        <div className="footer-heading">
          <span className="footer-eyebrow">
            <span className="footer-dot"></span>
            LET'S CONNECT
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            I'm a Full Stack MERN Developer passionate about
            building creative websites and useful digital
            experiences.
          </p>
        </div>

        {/* Two boxes in one row */}
        <div className="footer-boxes">
          {/* Contact box */}
          <div className="footer-box footer-contact-box">
            <span className="footer-box-number">01 / CONTACT</span>

            <div className="footer-box-icon">↗</div>

            <h3>Have a project in mind?</h3>

            <p>
              Let's turn your ideas into something amazing.
              I'm always open to discussing new projects and
              opportunities.
            </p>

            <a
              href="#contact"
              className="footer-action"
            >
              Get In Touch <span>↗</span>
            </a>
          </div>

          {/* Social links box */}
          <div className="footer-box footer-social-box">
            <span className="footer-box-number">02 / FOLLOW</span>

            <div className="footer-box-icon">✳</div>

            <h3>Find me online.</h3>

            <p>
              Explore my work, follow my journey, and connect
              with me across the developer community.
            </p>

            <div className="footer-social-links">
              <a
                href="https://github.com/1smituvernekar"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/smitu-surendra-vernekar-129747283/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>

              <a
                href="https://www.instagram.com/smituvernekar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="footer-bottom">
          <a href="/" className="footer-logo">
            PORTFOLIO<span>.</span>
          </a>

          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/work">My Work</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <p className="footer-copyright">
            © {new Date().getFullYear()} · Built with passion.
          </p>
        </div>

        <div className="footer-big-text">
          LET'S CREATE.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
