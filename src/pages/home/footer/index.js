import React from "react";
import "./footer.css";
import { introdata } from "../../../content_option";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_brand">
            <div className="footer_logo">K</div>
            <span className="footer_name">Phan Huu Kha</span>
          </div>
          <p className="footer_text">
            A student's portfolio, built while learning. Made with React ❤️
          </p>
          <div className="footer_links">
            <a href={introdata.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className="footer_dot">·</span>
            <a href={`mailto:${introdata.email}`}>Email</a>
            <span className="footer_dot">·</span>
            <a href={introdata.my_cv} rel="noopener noreferrer">Resume</a>
          </div>
          <p className="footer_copyright">
            © {new Date().getFullYear()} Phan Huu Kha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
