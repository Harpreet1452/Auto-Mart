import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h6 className="footer-heading text-uppercase text-white">
            Informations
          </h6>
          <ul className="footer-link">
            <li>
              <a href="#!">Terms of Services</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h6 className="footer-heading text-uppercase text-white">Help</h6>
          <ul className="footer-link">
            <li>
              <a href="#!">Register</a>
            </li>
            <li>
              <a href="#!">Sign in</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h6 className="footer-heading text-uppercase text-white">
            Contact us
          </h6>
          <p className="contact-info">Need help?</p>
          <p className="contact-info">Phone: 022115566445</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
