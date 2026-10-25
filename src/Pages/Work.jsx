
import React from "react";
import "./Work.css";

const projects = [
  {
    number: "01",
    category: "EDUCATION TECHNOLOGY",
    title: "Learning Management System",
    subtitle: "Learn. Build. Grow.",
    description:
      "A learning platform designed to make online education easier to explore, with organized courses, lessons, and payment-based learning workflows.",
    features: [
      "Course browsing interface",
      "Course and lesson organization",
      "Paid course access workflow",
      "Learning-focused user experience",
    ],
    tech: ["React", "JavaScript", "CSS", "Razorpay"],
    url: "https://learningmanagement-liard.vercel.app/",
    style: "project-orange",
    icon: "⌘",
  },
  {
    number: "02",
    category: "FULL STACK DEVELOPMENT",
    title: "E-Commerce Store",
    subtitle: "From product to purchase.",
    description:
      "A shopping website built around the online shopping journey, connecting product browsing, cart management, order placement, and payments.",
    features: [
      "Product browsing experience",
      "Shopping cart functionality",
      "Order placement workflow",
      "COD and Razorpay integration",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    url: "https://ecommerce-mauve-rho-25.vercel.app/",
    style: "project-teal",
    icon: "↗",
  },
  {
    number: "03",
    category: "CREATIVE DEVELOPMENT",
    title: "3D Website Experience",
    subtitle: "Beyond the ordinary web.",
    description:
      "A visually engaging website experience designed to make browsing immersive through creative presentation, modern web design, and interactive visuals.",
    features: [
      "3D-inspired visual experience",
      "Modern and immersive design",
      "Creative user interface",
      "Live deployed website",
    ],
    tech: ["React", "JavaScript", "CSS", "3D Web Design"],
    url: "https://3dwebsite1-p22p.vercel.app/",
    style: "project-purple",
    icon: "◈",
  },
];

const Work = () => {
  const phoneNumber = "8970520956"; 

  const whatsappMessage = encodeURIComponent(
    "Hi! I visited your portfolio and I'm interested in getting a website developed."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <main className="work-page">
      {/* Background effects */}
      <div className="work-glow work-glow-one"></div>
      <div className="work-glow work-glow-two"></div>
      <div className="work-grid-bg"></div>

      {/* Heading */}
      <section className="work-header">
        <div className="work-eyebrow">
          <span className="work-status-dot"></span>
          MY CREATIVE SPACE
        </div>

        <h1>
          Selected <span className="work-gradient">Work.</span>
        </h1>

        <p className="work-intro">
          I turn ideas into digital experiences. From immersive
          web design to full-stack applications, every project
          is an opportunity to learn, experiment, and build
          something meaningful.
        </p>

        <div className="work-stats">
          <div className="work-stat">
            <span className="stat-number">03</span>
            <span className="stat-label">FEATURED PROJECTS</span>
          </div>

          <div className="stat-divider"></div>

          <div className="work-stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">IDEAS TO BUILD</span>
          </div>

          <div className="stat-divider"></div>

          <div className="work-stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">LIVE ACCESS</span>
          </div>
        </div>
      </section>

      {/* Project list */}
      <section className="work-projects">
        {projects.map((project, index) => (
          <article
            className={`work-card ${project.style}`}
            key={project.number}
            style={{ "--card-index": index }}
          >
            <div className="work-card-top">
              <span className="work-project-number">
                / {project.number}
              </span>

              <span className="work-category">
                {project.category}
              </span>
            </div>

            {/* Animated project preview */}
            <div className="work-preview">
              <div className="preview-orbit preview-orbit-one"></div>
              <div className="preview-orbit preview-orbit-two"></div>

              <div className="preview-cross preview-cross-one"></div>
              <div className="preview-cross preview-cross-two"></div>

              <div className="preview-window">
                <div className="preview-window-top">
                  <div className="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>LIVE PROJECT</span>

                  <span className="preview-live-dot"></span>
                </div>

                <div className="preview-window-content">
                  <span className="preview-icon">
                    {project.icon}
                  </span>

                  <span className="preview-mini-label">
                    DIGITAL EXPERIENCE / {project.number}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.subtitle}</p>

                  <div className="preview-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <span className="preview-orbit-label">
                {project.number} — EXPLORE
              </span>
            </div>

            {/* Project information */}
            <div className="work-card-content">
              <h2>{project.title}</h2>

              <h3>{project.subtitle}</h3>

              <p className="work-description">
                {project.description}
              </p>

              <div className="work-feature-heading">
                WHAT'S INSIDE
              </div>

              <ul className="work-features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <span className="feature-check">↗</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="work-tech-heading">
                TECHNOLOGIES & FOCUS
              </div>

              <div className="work-tech-list">
                {project.tech.map((technology) => (
                  <span className="work-tech" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                className="work-live-button"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Explore Live Project</span>
                <span className="work-arrow">↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Closing section */}
      <section className="work-outro">
        <span className="outro-spark">✳</span>

        <p className="outro-label">THE NEXT CHAPTER</p>

        <h2>
          Good ideas deserve
          <br />
          <span>great execution.</span>
        </h2>

        <p className="outro-description">
          I'm always interested in building useful products,
          exploring new technologies, and turning creative ideas
          into working applications.
        </p>

        <a className="work-contact-button" href="/contact">
          Let's Build Something
          <span>↗</span>
        </a>
      </section>

      {/* Floating WhatsApp button */}
      <a
        className="work-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="work-whatsapp-icon"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.5h-.01a10.6 10.6 0 0 1-5.4-1.48l-.4-.24-3.92 1.03 1.05-3.82-.26-.42A10.5 10.5 0 1 1 16 26.5Zm5.8-7.85c-.32-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.7.16-.21.32-.81 1.02-.99 1.23-.18.21-.36.24-.68.08-.32-.16-1.33-.49-2.52-1.55-.93-.82-1.56-1.84-1.74-2.16-.18-.32-.02-.49.13-.64.14-.14.32-.36.48-.54.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.7-1.7-.97-2.33-.26-.61-.52-.52-.7-.53h-.6c-.21 0-.54.08-.83.4-.29.32-1.08 1.06-1.08 2.59s1.11 3.02 1.27 3.23c.16.21 2.19 3.35 5.32 4.7.74.32 1.32.51 1.78.65.75.24 1.43.2 1.97.12.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z"
          />
        </svg>

        <span className="work-whatsapp-text">Let's Talk</span>
        <span className="work-whatsapp-pulse"></span>
      </a>
    </main>
  );
};

export default Work;
