import React from "react";
import "./style.css";
import Themetoggle from "../components/themetoggle";
import { logotext } from "../content_option";

const Headermain = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="site__header">
        <div className="header_inner">
          <div className="brand_block">
            <div className="brand_logo">K</div>
            <div className="brand_text">
              <h1 className="brand_name">{logotext}</h1>
              <p className="brand_subtitle">Student Developer</p>
            </div>
          </div>
          <div className="header_nav">
            <button className="nav_link" onClick={() => scrollTo("about")}>
              About
            </button>
            <button className="nav_link" onClick={() => scrollTo("projects")}>
              Projects
            </button>
            <button className="nav_link" onClick={() => scrollTo("skills")}>
              Skills
            </button>
            <button className="nav_link" onClick={() => scrollTo("contact")}>
              Contact
            </button>
            <div className="theme_toggle_border" aria-label="Theme toggle">
              <Themetoggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
