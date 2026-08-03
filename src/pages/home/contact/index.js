import React from "react";
import "./contact.css";
import { introdata } from "../../../content_option";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <div className="contact_container">
        <div className="section_header animate-fadeInUp">
          <span className="section_tag">Get in Touch</span>
          <h2 className="section_title">Let's Connect</h2>
          <p className="section_subtitle">
            I'm always happy to chat about internship opportunities, share learning experiences, or just talk about tech. Feel free to reach out!
          </p>
        </div>

        <div className="contact_grid">
          <a href={`mailto:${introdata.email}`} className="contact_card">
            <div className="contact_card_icon" style={{ background: "rgba(99, 102, 241, 0.1)", color: "#6366f1" }}>
              <FaEnvelope />
            </div>
            <div className="contact_card_info">
              <h4>Email</h4>
              <p>{introdata.email}</p>
            </div>
            <FaPaperPlane className="contact_card_arrow" />
          </a>

          <a href={introdata.github} target="_blank" rel="noopener noreferrer" className="contact_card">
            <div className="contact_card_icon" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981" }}>
              <FaGithub />
            </div>
            <div className="contact_card_info">
              <h4>GitHub</h4>
              <p>phwkha</p>
            </div>
            <FaPaperPlane className="contact_card_arrow" />
          </a>

          <a href={`tel:${introdata.phone.replace(/\s+/g, "")}`} className="contact_card">
            <div className="contact_card_icon" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" }}>
              <FaPhoneAlt />
            </div>
            <div className="contact_card_info">
              <h4>Phone</h4>
              <p>{introdata.phone}</p>
            </div>
            <FaPaperPlane className="contact_card_arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
