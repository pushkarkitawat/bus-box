import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactPage.css";
import { BackButton2 } from "./component/back";

const ContactPage = () => {
  return (
    <div className="contactpage">
     <section className="back"><BackButton2/></section>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions or need help? We’d love to hear from you.</p>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We’re here to help and answer any questions you might have.</p>
          <ul>
            <li><FaEnvelope className="icon" /> busboxsupport@Gmail.com</li>
            <li><FaPhoneAlt className="icon" /> +91 9004230913</li>
            <li><FaMapMarkerAlt className="icon" /> Mumbai, India</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
