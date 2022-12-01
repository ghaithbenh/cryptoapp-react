import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="container">
        <div className="col col-1">
          <h1>
            De<span className="primary">Fi</span>
          </h1>
        </div>

        <div className="col">
          <h5>Suport</h5>
          <span className="bar"></span>
          <a href="/">Contact Us</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">Faq</a>
        </div>
        <div className="col">
          <h5>Developers</h5>
          <span className="bar"></span>
          <a href="/">Cloud</a>
          <a href="/">Commerce</a>
          <a href="/">Pro</a>
          <a href="/">API</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"></span>
          <a href="/">
            <FaFacebook className="icons" /> Facebook
          </a>
          <a href="/">
            <FaTwitter className="icons" />
            Twitter
          </a>
          <a href="/">
            <FaLinkedin className="icons" />
            LinkedIn
          </a>
          <a href="/">
            <FaGithub className="icons" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
