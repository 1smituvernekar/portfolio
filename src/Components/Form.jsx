
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
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

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const mailtoLink =
      "mailto:YOUR_EMAIL@example.com" +
      "?subject=" + encodeURIComponent(formData.subject) +
      "&body=" + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
    setStatus("Your email app should open with your message ready to send.");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">
        {/* Left Content */}
        <div className="contact-info">
          <p className="contact-tag">
            <span className="contact-dot"></span>
            LET'S CONNECT
          </p>

          <h2>
            Have an idea?
            <br />
            Let's make it
            <br />
            <span className="contact-gradient">happen.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind, need a developer, or just want
            to talk about technology? I'd love to hear from you.
            Let's create something meaningful together.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon">@</div>
              <div>
                <span>Email me</span>
                <p>smituvernekar6@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">↗</div>
              <div>
                <span>Based in</span>
                <p>India · Available worldwide</p>
              </div>
            </div>
          </div>

          <div className="contact-orbit">
            <span className="orbit-dot"></span>
            <span className="orbit-dot orbit-dot-two"></span>
            <span className="orbit-dot orbit-dot-three"></span>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <div>
              <span className="form-small-title">GOT A PROJECT?</span>
              <h3>Send me a message</h3>
            </div>
            <span className="form-sparkle">✳</span>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="xyz"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Let's build something amazing"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me a little about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            <span>Send Message</span>
            <span className="submit-arrow">↗</span>
          </button>

          {status && <p className="form-status">{status}</p>}

          <p className="form-note">
            <span>✦</span> Let's turn your idea into reality.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;
