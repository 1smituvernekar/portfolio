
import React from "react";
import "./Works.css";

import poster3d from "../assets/3d.png";
import ecommercePoster from "../assets/ecom.png";
import furniturePoster from "../assets/furniture.png";
import edemyPoster from "../assets/edemy.png";

const projects = [
  
  {
    number: "01",
    category: "FURNITURE & E-COMMERCE",
    title: "Furniture Website",
    subtitle: "Designed for modern living.",
    description:
      "A modern furniture website showcasing stylish furniture through an elegant, responsive shopping experience.",
    features: [
      "Furniture product showcase",
      "Responsive mobile and desktop design",
      "Featured products and collections",
      "Live deployed website",
    ],
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    url: "https://furniture-website1-lime.vercel.app/",
    image: furniturePoster,
    style: "project-orange",
    icon: "⌂",
  },
  
  {
    number: "02",
    category: "FULL STACK DEVELOPMENT",
    title: "E-Commerce Store",
    subtitle: "From product to purchase.",
    description:
      "A full-stack shopping website with product browsing, cart management, order placement, and payment integration.",
    features: [
      "Product browsing",
      "Shopping cart functionality",
      "Order placement",
      "COD and Razorpay payments",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    url: "https://ecommerce-mauve-rho-25.vercel.app/",
    image: ecommercePoster,
    style: "project-teal",
    icon: "↗",
  },
  {
    number: "03",
    category: "EDUCATION TECHNOLOGY",
    title: "Learning Management System",
    subtitle: "Learn. Build. Grow.",
    description:
      "An online learning platform for exploring courses, organizing lessons, and accessing paid learning content.",
    features: [
      "Course browsing interface",
      "Course and lesson organization",
      "Paid course access",
      "Learning-focused experience",
    ],
    tech: ["React", "JavaScript", "CSS", "Razorpay"],
    url: "https://learningmanagement-liard.vercel.app/",
    image: edemyPoster,
    style: "project-orange",
    icon: "⌘",
  },
  
{
    number: "04",
    category: "CREATIVE DEVELOPMENT",
    title: "3D Website Experience",
    subtitle: "Beyond the ordinary web.",
    description:
      "An immersive 3D website experience featuring creative visuals, modern layouts, and interactive design.",
    features: [
      "3D-inspired visual experience",
      "Modern and immersive design",
      "Creative user interface",
      "Live deployed website",
    ],
    tech: ["React", "JavaScript", "CSS", "3D Web Design"],
    url: "https://3dwebsite1-p22p.vercel.app/",
    image: poster3d,
    style: "project-purple",
    icon: "◈",
  },
];

const Work = () => {
  return (
    <main className="work-page">
      <div className="work-glow work-glow-one"></div>
      <div className="work-glow work-glow-two"></div>
      <div className="work-grid-bg"></div>

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
            <span className="stat-number">04</span>
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

            {/* Actual website poster */}
            <a
              className="work-preview"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <img
                className="work-poster-image"
                src={project.image}
                alt={`${project.title} website screenshot`}
                loading="lazy"
              />

              <div className="work-poster-overlay">
                <span>VIEW LIVE WEBSITE</span>
                <span className="work-arrow">↗</span>
              </div>

              <span className="work-poster-number">
                PROJECT / {project.number}
              </span>
            </a>

            <div className="work-card-content">
              <span className="work-mini-label">
                DIGITAL EXPERIENCE / {project.number}
              </span>

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
