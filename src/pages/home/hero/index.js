import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { introdata } from "../../../data/content_option";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero_section" id="about">
      {/* Background decorative elements */}
      <div className="hero_bg_decor">
        <div className="hero_orb hero_orb_1"></div>
        <div className="hero_orb hero_orb_2"></div>
        <div className="hero_orb hero_orb_3"></div>
        <div className="hero_grid_overlay"></div>
      </div>

      <div className="hero_container">
        <div className="hero_content">
          {/* Left: Info */}
          <div className="hero_info animate-fadeInUp">
            <div className="hero_badge">
              <span className="hero_badge_dot"></span>
              Looking for Internship
            </div>

            <h1 className="hero_title">
              {introdata.title}
              <span className="hero_title_accent">.</span>
            </h1>

            <div className="hero_typewriter">
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                    introdata.animated.fourth,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 15,
                }}
              />
            </div>

            <p className="hero_desc">{introdata.description}</p>

            <div className="hero_actions">
              <a
                href={introdata.my_cv}
                rel="noopener noreferrer"
                className="hero_btn hero_btn_primary"
              >
                <FaDownload />
                <span>Resume</span>
              </a>
              <a
                href={introdata.github}
                rel="noopener noreferrer"
                className="hero_btn hero_btn_secondary"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>

            <div className="hero_contact_links">
              <a href={`mailto:${introdata.email}`} className="hero_contact_item">
                <FaEnvelope />
                <span>{introdata.email}</span>
              </a>
              <a
                href={`tel:${introdata.phone.replace(/\s+/g, "")}`}
                className="hero_contact_item"
              >
                <FaPhoneAlt />
                <span>{introdata.phone}</span>
              </a>
            </div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="hero_visual animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="hero_avatar_wrapper">
              <div className="hero_avatar_ring"></div>
              <img
                src={introdata.my_img_url}
                alt="Phan Huu Kha"
                className="hero_avatar"
              />
            </div>

            <div className="hero_stats">
              <div className="hero_stat_item">
                <span className="hero_stat_number">3</span>
                <span className="hero_stat_label">Learning Projects</span>
              </div>
              <div className="hero_stat_divider"></div>
              <div className="hero_stat_item">
                <span className="hero_stat_number">10+</span>
                <span className="hero_stat_label">Learning</span>
              </div>
              <div className="hero_stat_divider"></div>
              <div className="hero_stat_item">
                <span className="hero_stat_number">∞</span>
                <span className="hero_stat_label">Always trying</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
