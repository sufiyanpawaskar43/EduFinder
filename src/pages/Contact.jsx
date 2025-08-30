import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    source: "",
    newsletter: false,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        source: "",
        newsletter: false,
      });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="contact-wrapper">
      {/* Left text */}
      <div className="contact-text">
        <h1>
          <i className="fas fa-globe"></i> Say Hey
        </h1>
        <h5>Not sure where to start?</h5>
        <p>
          Tell us about your interest, your timeline, how you heard about us,
          and where you're located.
        </p>
        <p>We read every message. Thanks for making it a meaningful one.</p>
      </div>

      {/* Right form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-comment-dots"></i>
            <textarea
              id="message"
              rows="3"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-bullhorn"></i>
            <input
              type="text"
              id="source"
              placeholder="How did you hear about us?"
              value={formData.source}
              onChange={handleChange}
            />
          </div>

          <div className="form-footer">
            <label>
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <span> Sign up to EduFinder</span>
            </label>
            <button type="submit" className="btn-submit">
              <i className="fas fa-paper-plane"></i> Submit
            </button>
          </div>
        </form>

        {success && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i> Thank you! Your message has
            been received. We'll get back to you shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
