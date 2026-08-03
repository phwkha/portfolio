import React, { useState } from "react";
import "./projects.css";
import { projects } from "../../../content_option";
import { FaGithub, FaChevronDown, FaChevronUp, FaServer, FaLayerGroup } from "react-icons/fa";

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="projects_section" id="projects">
      <div className="projects_container">
        <div className="section_header animate-fadeInUp">
          <span className="section_tag">Projects</span>
          <h2 className="section_title">Learning Projects</h2>
          <p className="section_subtitle">
            Personal projects I built during my studies — far from perfect, but each one is a step in my self-learning journey.
          </p>
        </div>

        <div className="projects_grid">
          {projects.map((project, index) => (
            <article
              className={`project_card animate-fadeInUp ${expanded === project.id ? "project_card_expanded" : ""}`}
              key={project.id}
              style={{
                animationDelay: `${index * 0.15}s`,
                "--project-accent": project.accent,
              }}
            >
              {/* Image */}
              <div className="project_image_wrapper">
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  className="project_image"
                  loading="lazy"
                />
                <div className="project_image_overlay">
                  <span className="project_number">0{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="project_body">
                <div className="project_header">
                  <div>
                    <h3 className="project_title">{project.title}</h3>
                    <span className="project_subtitle">{project.subtitle}</span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_github_btn"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                </div>

                <p className="project_summary">{project.summary}</p>

                {/* Tech Stack */}
                <div className="project_tech_tags">
                  {project.stack.map((tech) => (
                    <span className="tech_tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand toggle */}
                <button
                  className="project_expand_btn"
                  onClick={() => toggleExpand(project.id)}
                >
                  {expanded === project.id ? (
                    <>
                      <span>Hide Details</span>
                      <FaChevronUp />
                    </>
                  ) : (
                    <>
                      <span>View Details</span>
                      <FaChevronDown />
                    </>
                  )}
                </button>

                {/* Expandable details */}
                {expanded === project.id && (
                  <div className="project_details">
                    {/* Highlights */}
                    <div className="project_detail_block">
                      <h4>
                        <FaLayerGroup /> What I Learned
                      </h4>
                      <ul className="project_highlights">
                        {project.highlights.map((h, i) => (
                          <li key={i}>
                            <span className="highlight_bullet">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture */}
                    <div className="project_detail_block">
                      <h4>
                        <FaServer /> System Architecture
                      </h4>
                      <div className="project_arch_flow">
                        {project.architecture.map((item, i) => (
                          <React.Fragment key={i}>
                            <span className="arch_node">{item}</span>
                            {i < project.architecture.length - 1 && (
                              <span className="arch_arrow">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Source Code Link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project_source_btn"
                    >
                      <FaGithub />
                      View Source Code
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
