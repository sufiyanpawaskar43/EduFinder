import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG, FaFlickr } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-col">
          <h3>LOGO</h3>
          <p>Slogan Company</p>
        </div>

        <div className="footer-col">
          <ul>
            <li><a href="#">Weebly Themes</a></li>
            <li><a href="#">Pre-Sale FAQs</a></li>
            <li><a href="#">Submit a Ticket</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Theme Tweak</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li><a href="#">Showcase</a></li>
            <li><a href="#">WidgetKit</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaRss /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaFlickr /></a>
        </div>
        <p>© Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
