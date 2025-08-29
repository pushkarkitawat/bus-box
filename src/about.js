import React from "react";
import { FaBullseye, FaUsers, FaRocket, FaShieldAlt } from "react-icons/fa";
import "./AboutPage.css"; // CSS file
import { BackButton2 } from "./component/back";

const AboutPage = () => {
  return (
    <div className="aboutpage">
     <section className="back"><BackButton2/></section>
      <section className="about-hero">
        <h1>About Our App</h1>
        <p>
          Our mission is to simplify lives with technology. We built this app to 
          help people stay productive, connected, and secure in today’s fast-paced world.
        </p>
      </section>

      
      <section className="mission-vision">
        <div className="mv-card">
          <FaBullseye className="mv-icon red" />
          <h2>Our Mission</h2>
          <p>
            To create simple, reliable, and secure digital solutions that empower
            individuals and businesses to achieve more with less effort.
          </p>
        </div>
        <div className="mv-card">
          <FaRocket className="mv-icon blue" />
          <h2>Our Vision</h2>
          <p>
            To become a trusted global platform where millions of users can
            manage their daily tasks with confidence and ease.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <FaUsers className="why-icon green" />
            <h3>User First</h3>
            <p>We prioritize user experience and keep things simple.</p>
          </div>
          <div className="why-card">
            <FaShieldAlt className="why-icon yellow" />
            <h3>Secure</h3>
            <p>Your privacy and data security are at the heart of everything we build.</p>
          </div>
          <div className="why-card">
            <FaRocket className="why-icon purple" />
            <h3>Innovative</h3>
            <p>We constantly improve with modern features and updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
