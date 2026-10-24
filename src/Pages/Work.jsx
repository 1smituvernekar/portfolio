
import React from "react";
import "./Work.css";

const projects = [
  {
    number: "01",
    category: "EDUCATION TECHNOLOGY",
    title: "Learning Management System",
    subtitle: "Learn. Build. Grow.",
    description:
      "A learning platform concept designed to make online education easier to explore. It showcases a course-focused experience with learning content, course access, and payment-based learning workflows.",
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
  },,
  {
    number: "02",
    category: "FULL STACK DEVELOPMENT",
    title: "E-Commerce Store",
    subtitle: "From product to purchase.",
    description:
      "A shopping website built around the online shopping journey. Explore a product-focused interface and the functionality needed to connect product browsing, cart management, and order placement.",
    features: [
      "Product browsing experience",
      "Shopping cart functionality",
      "Order placement workflow",
      "COD and Razorpay payment integration",
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
      "A visually engaging 3D website experience designed to make browsing feel more immersive. This project explores creative presentation, modern web design, and interactive visual experiences.",
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
                0{index + 1} — EXPLORE
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
    </main>
  );
};

export default Work;
