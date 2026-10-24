
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Name: ${formData.name}
Email: ${formData.email}

${formData.message}
    `;

    const emailLink =
      "mailto:YOUR_EMAIL@example.com" +
      "?subject=" + encodeURIComponent(formData.subject) +
      "&body=" + encodeURIComponent(body);

    setStatus("Opening your email application...");
    window.location.href = emailLink;
  };

  return (
    <section className="contact-page">
      <div className="contact-page-glow"></div>

      <div className="contact-page-container">
        {/* Page Heading */}
        <div className="contact-page-heading">
          <span className="contact-page-tag">
            <span></span> CONTACT ME
          </span>

          <h1>
            Let's start a
            <br />
            <span>conversation.</span>
          </h1>

          <p>
            Have a project, an opportunity, or an idea?
            I'd love to hear from you. Let's create something
            amazing together.
          </p>
        </div>

        <div className="contact-page-grid">
          {/* Contact Information */}
          <div className="contact-page-info">
            <span className="contact-page-eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Every great project
              <br />
              starts with a <span>hello.</span>
            </h2>

            <p className="contact-page-text">
              I'm a Full Stack MERN Developer interested in
              creating useful, beautiful, and responsive web
              applications. Reach out and let's discuss your idea.
            </p>

            <a
              className="contact-page-link"
              href="mailto:YOUR_EMAIL@example.com"
            >
              <span className="contact-page-icon">@</span>
              <span>
                <small>EMAIL ADDRESS</small>
                <strong>smituvernekar6@gmail.com</strong>
              </span>
              <span className="contact-page-arrow">↗</span>
            </a>

            <div className="contact-page-link">
              <span className="contact-page-icon">⌘</span>
              <span>
                <small>EXPERTISE</small>
                <strong>Full Stack MERN Development</strong>
              </span>
            </div>

            <div className="contact-page-socials">
              <span>FOLLOW MY JOURNEY</span>

              <div>
                <a
                  href="https://github.com/1smituvernekar"
                  target="_blank"
                  rel="noreferrer"
                >
                  GH
                </a>

                <a
                  href="https://www.linkedin.com/in/smitu-surendra-vernekar-129747283/"
                  target="_blank"
                  rel="noreferrer"
                >
                  in
                </a>

                <a
                  href="https://www.instagram.com/smituvernekar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="contact-page-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-title">
              <div>
                <span>YOUR NEXT BIG IDEA</span>
                <h2>Send a message<span>.</span></h2>
              </div>
              <div className="contact-form-star">✳</div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="page-name">Full name</label>
              <input
                id="page-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group">
              <label htmlFor="page-email">Email address</label>
              <input
                id="page-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group">
              <label htmlFor="page-subject">Subject</label>
              <input
                id="page-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group">
              <label htmlFor="page-message">Message</label>
              <textarea
                id="page-message"
                name="message"
                rows="5"
                placeholder="Tell me about your idea..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button className="contact-page-submit" type="submit">
              <span>Let's Talk</span>
              <span>↗</span>
            </button>

            {status && (
              <p className="contact-page-status">{status}</p>
            )}

            <p className="contact-page-note">
              Your message is prepared in your email app for you to send.
            </p>
          </form>
        </div>

        <div className="contact-page-bottom">
          <span>GOOD IDEAS START WITH A CONVERSATION.</span>
          <span className="contact-bottom-star">✳</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
