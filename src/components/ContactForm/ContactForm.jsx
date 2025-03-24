import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Let's work together</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">(CQ — 07)</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Contact Me</h3>

            <p>
              Let’s create something amazing together! Reach out I’d love to
              hear about your project and ideas.
            </p>
          </div>

          <div className="contact-form-availability">
            <p className="primary sm">24/7 Full Time Support</p>

            <p className="primary sm">Available Worldwide</p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Name" />
          </div>

          <div className="form-item">
            <input type="text" placeholder="Email" />
          </div>

          <div className="form-item">
            <textarea type="text" rows={6} placeholder="Message" />
          </div>

          <div className="form-item">
            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
