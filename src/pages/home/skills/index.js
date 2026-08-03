import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import { skills } from "../../../content_option";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills_section" id="skills" ref={sectionRef}>
      <div className="skills_container">
        <div className="section_header animate-fadeInUp">
          <span className="section_tag">Learning</span>
          <h2 className="section_title">Skills & Technologies</h2>
          <p className="section_subtitle">
            Technologies I've been exploring and practicing through personal projects. I'm still in the learning phase and have a long way to go.
          </p>
        </div>

        <div className="skills_grid">
          {skills.map((skill, index) => (
            <div
              className="skill_item"
              key={skill.name}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="skill_info">
                <span className="skill_name">{skill.name}</span>
                <span className="skill_level">{skill.level}%</span>
              </div>
              <div className="skill_bar_track">
                <div
                  className="skill_bar_fill"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech categories */}
        <div className="tech_categories">
          <div className="tech_category">
            <h4>Learned</h4>
            <div className="tech_icons">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Python</span>
              <span>Django</span>
              <span>REST API</span>
            </div>
          </div>
          <div className="tech_category">
            <h4>Basic</h4>
            <div className="tech_icons">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Streamlit</span>
            </div>
          </div>
          <div className="tech_category">
            <h4>Database & Infra</h4>
            <div className="tech_icons">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Redis</span>
              <span>FAISS</span>
              <span>Kafka</span>
            </div>
          </div>
          <div className="tech_category">
            <h4>Exploring</h4>
            <div className="tech_icons">
              <span>Docker</span>
              <span>Jenkins</span>
              <span>ELK Stack</span>
              <span>Ollama</span>
              <span>LangChain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
