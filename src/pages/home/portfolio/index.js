import React from "react";
import "./style.css";

const Portfolio = () => {
  return (
    <div className="h_bg-image order-1 order-lg-2 h-100 right-panel-container">
      <div className="portfolio-content">
        <h1>Portfolio</h1>
        <div className="projects-grid">
          <div className="project-card">
            <hr />
            <h3>My AI Bot – Intelligent Chatbot System Powered by RAG (Retrieval-Augmented Generation)</h3>
            <p>My AI Bot is a modern chatbot application leveraging Retrieval-Augmented Generation (RAG) to provide highly accurate responses based on specific private datasets. By combining the power of locally-hosted Large Language Models (LLMs) with context-aware data retrieval, this project effectively mitigates AI "hallucinations" and ensures data privacy.</p>
            <a href="" rel="noopener noreferrer">
              <div id="button_h" className="ac_btn btn">
                View Source Code
                <div className="ring one"></div>
              </div>
            </a>
          </div>
          <div className="project-card">
            <hr />
            <h3>ChatWeb - Secure Messaging Platform with End-to-End Encryption (E2EE)</h3>
            <p>ChatWeb is a modern web-based communication platform prioritized on user privacy through a robust End-to-End Encryption (E2EE) mechanism. The project leverages the power of the Java Spring Boot ecosystem for the Backend and React for a dynamic, responsive Frontend to deliver a seamless and secure real-time messaging experience.</p>
            <h5>🛠 Tech Stack</h5>
            <ul style={{ listStyleType: "disc" }}>
              <li>Backend: Java 17, Spring Boot 3.5.x, Spring Security (JWT), Spring Data JPA, Spring Data MongoDB.</li>
              <li>Frontend: React 19, Vite, React Router, StompJS.</li>
              <li>Real-time Communication: WebSocket, SockJS, STOMP Messaging.</li>
              <li>Databases: PostgreSQL (Relational data), MongoDB (Message history), Redis (Caching & Rate Limiting).</li>
              <li>Security: RSA/AES Encryption (E2EE), JSON Web Token (JWT).</li>
              <li>Storage & Services: Cloudinary (Media storage), SendGrid (Email services).</li>
              <li>DevOps: Docker, Docker Compose.</li>
            </ul>
            <h5>✨ Key Features</h5>
            <ul style={{ listStyleType: "disc" }}>
              <li>End-to-End Encryption (E2EE): Ensures that message content is only readable by the sender and the recipient. Data is encrypted directly in the browser before being transmitted.</li>
              <li>Real-time Messaging: Integrated WebSocket with STOMP protocol allows for instantaneous message delivery without page reloads.</li>
              <li>Dual-Database Architecture: Utilizes PostgreSQL for structured user and permission management, while MongoDB handles high-volume chat logs efficiently.</li>
              <li>Media Management: Integrated Cloudinary for secure handling, optimization, and storage of images uploaded during conversations.</li>
              <li>Advanced Authorization: Robust API security using JWT, featuring granular Role-Based Access Control (RBAC) for Users and Admins.</li>
              <li>Automated API Documentation: Swagger UI (OpenAPI) integration for easy discovery and testing of Backend endpoints.</li>
            </ul>
            <h5>🏗 System Architecture</h5>
            <ol style={{ listStyleType: "1" }}>
              <li>Backend Server: Handles business logic, authentication, and message orchestration.</li>
              <li>Frontend Client: A modern UI that performs client-side encryption to maintain data privacy.</li>
              <li>Database Layer: A hybrid SQL/NoSQL strategy to ensure both data integrity and scalability.</li>
            </ol>
            <a href="https://github.com/phwkha/ChatWeb" rel="noopener noreferrer">
              <div id="button_h" className="ac_btn btn">
                View Source Code
                <div className="ring one"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;