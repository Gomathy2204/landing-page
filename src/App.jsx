import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Smart Platform</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h2>Empower Your Financial Journey</h2>
        <p>Track expenses, save money, and grow your wealth with ease.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Fast & Reliable</h3>
            <p>Seamless transactions anytime.</p>
          </div>
          <div className="card">
            <h3>Secure Platform</h3>
            <p>Your data and finances are safe with us.</p>
          </div>
          <div className="card">
            <h3>User-Friendly</h3>
            <p>Simple interface for everyone to use.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About</h2>
        <p>
          This platform is designed to make personal finance management easy
          and efficient. Start taking control of your finances today.
        </p>
      </section>

            {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions? We'd love to hear from you.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>


      {/* Footer */}
      <footer className="footer">
  <div className="footer-content">
    <div>
      <h3>Smart Platform</h3>
      <p>
        Helping users manage finances efficiently with simple and secure
        solutions.
      </p>
    </div>

    <div>
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div>
      <h4>Contact</h4>
      <p>Email: contact@example.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  </div>

  <div className="footer-bottom">
    © 2025 Smart Platform. All rights reserved.
  </div>
</footer>

    </div>
  );
}

export default App;
