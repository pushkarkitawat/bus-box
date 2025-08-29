import React from "react";
import { FaMobileAlt, FaGlobe, FaClock, FaShieldAlt } from "react-icons/fa";
import "./HomePage.css"; // import CSS file
import { BackButton2 } from "./component/back";
const HomePage = () => {
  return (
    <div className="homepage">
      <section className="back">
      <BackButton2/>
      </section>
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Smart, Simple & Reliable App for Everyone</h1>
        <p>Discover a new way to connect, manage, and simplify your daily tasks with ease.</p>
      </section>
      <section className="features">
        <h2>Why Choose Our App</h2>
        <div className="features-grid">
          <div className="feature">
            <FaMobileAlt className="icon blue" />
            <h3>User-Friendly Design</h3>
            <p>Enjoy a clean, modern, and easy-to-use interface for all your needs.</p>
          </div>
          <div className="feature">
            <FaGlobe className="icon green" />
            <h3>Accessible Anywhere</h3>
            <p>Use our app anytime, anywhere across multiple devices.</p>
          </div>
          <div className="feature">
            <FaClock className="icon yellow" />
            <h3>Time-Saving Tools</h3>
            <p>Boost your productivity with smart automation features.</p>
          </div>
          <div className="feature">
            <FaShieldAlt className="icon red" />
            <h3>Secure & Private</h3>
            <p>Your data is protected with top-level security and encryption.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
