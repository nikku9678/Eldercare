import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
      <img src="https://via.placeholder.com/60" alt="Placeholder" />
 
        <p>
          We are a leading company in providing the best services to our customers.
          Our goal is to exceed your expectations with our quality and commitment.
        </p>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>SEO</li>
          <li>Marketing</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <ul>
          <li>Email: info@company.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Street, City, Country</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>  
    </footer>
  );
};

export default Footer;
