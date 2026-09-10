const logotext = "PHAN HUU KHA";
const meta = {
  title: "Phan Huu Kha — Portfolio",
  description:
    "Software Engineering Student at Sai Gon University | Aspiring Backend Developer on a journey to becoming a Full-stack Professional.",
};

const introdata = {
  title: "I'm Phan Huu Kha",
  animated: {
    first: "I love coding (when it works) ❤️",
    second: "Professional Copy-Paster 🤫",
    third: "Deadline Destroyer (or getting destroyed by them) 💥",
    fourth: "Future Full-Stack, currently Full-Bugs 🥲",
  },
  description:
    "Software Engineering Student at Sai Gon University | Aspiring Backend Developer on a journey to becoming a Full-stack Professional.",
  my_img_url: require("../assets/images/avatar.jpg"),
  my_cv: require("../assets/cv-phanhuukha.pdf"),
  github: "https://github.com/phwkha",
  email: "phankhant0098@gmail.com",
  phone: "0396028857",
};

const skills = [
  { name: "Java / Spring Boot", level: 65 },
  { name: "Python / Django", level: 45 },
  { name: "React / JavaScript", level: 45 },
  { name: "PostgreSQL / MongoDB", level: 40 },
  { name: "Docker", level: 50 },
  { name: "Redis / Kafka", level: 40 },
  { name: "AI / RAG / LLM", level: 35 },
  { name: "WebSocket / STOMP", level: 45 },
];

const projects = [
  {
    id: "chatweb",
    title: "ChatWeb",
    subtitle: "Learning Project — Chat Platform",
    summary:
      "A personal project I built to understand how a real-time chat application works. Through this project, I got to practice with Spring Boot, WebSocket, and integrating multiple databases. This is not a commercial product — just a hands-on exercise to learn backend technologies.",
    image: "/chatweb_thumbnail.png",
    stack: [
      "Java 17",
      "Spring Boot",
      "React + Vite",
      "WebSocket / STOMP",
      "JUnit / Mockito",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "JWT",
      "Cloudinary",
      "Docker",
      "Jenkins",
    ],
    highlights: [
      "Wrote Unit Tests (JUnit / Mockito) to ensure backend reliability",
      "Self-learned and integrated WebSocket & STOMP for real-time messaging",
      "Experimented with hybrid storage: PostgreSQL for users, MongoDB for chat logs",
      "Explored event-driven architecture through Apache Kafka",
      "Practiced setting up a basic CI/CD pipeline with Jenkins",
      "Tried configuring ELK Stack (Elasticsearch, Logstash, Kibana) for logging",
      "Learned to set up monitoring with Prometheus + Grafana",
      "Integrated file uploads via Cloudinary",
      "Used Swagger UI for auto-generated API documentation",
    ],
    architecture: [
      "Spring Boot API",
      "React SPA",
      "Kafka Event Bus",
      "Redis Cache",
      "ELK Logging",
      "Prometheus + Grafana",
    ],
    url: "https://github.com/phwkha/ChatWeb-RealTime",
    accent: "#6366f1",
  },
  {
    id: "e2ee",
    title: "Secure Chat",
    subtitle: "Academic Project — E2EE & Blockchain",
    summary:
      "An academic research project on Information Security during university. I studied and practiced implementing End-to-End Encryption (E2EE) with RSA/AES, combined with public key verification on Ethereum Blockchain. This project was mainly for research and learning purposes — it hasn't been deployed in production.",
    image: "/e2ee_thumbnail.png",
    stack: [
      "Java 17",
      "Spring Boot",
      "ReactJS + Vite",
      "RSA / AES",
      "Ethereum",
      "Blockchain",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    highlights: [
      "Self-studied and implemented E2EE using RSA + AES hybrid encryption",
      "Researched Key Transparency protocol and tried verification on Ethereum",
      "Designed so the server never sees the original messages (zero-knowledge)",
      "Wrote a basic Smart Contract for public key verification",
      "Read research papers and applied security concepts into practice",
      "Built as an academic research project on Information Security",
    ],
    architecture: [
      "RSA/AES Crypto",
      "Ethereum Contracts",
      "Key Transparency",
      "Spring Boot API",
      "React Frontend",
    ],
    url: "https://github.com/phwkha/Secure-Chat-Web---End-to-End-Encryption-Key-Transparency",
    accent: "#10b981",
  },
  {
    id: "rag",
    title: "SmartDoc AI",
    subtitle: "Self-learning Project — RAG Chatbot",
    summary:
      "A personal project I built to learn about AI/LLM and Retrieval-Augmented Generation (RAG). I self-studied how to build a pipeline from document ingestion, semantic search, to answer generation. There's still a lot to improve, but through this project I gained a solid understanding of how RAG works.",
    image: "/rag_thumbnail.png",
    stack: [
      "Python",
      "Django",
      "Streamlit",
      "Ollama (LLM)",
      "FAISS",
      "BM25",
      "Cross-Encoder",
      "LangChain",
      "EasyOCR",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Self-learned Hybrid Search: combining FAISS (semantic) + BM25 (keyword)",
      "Explored and experimented with Cross-Encoder Re-ranking",
      "Tried implementing Multi-hop Retrieval for complex questions",
      "Practiced building a Self-Evaluation loop to assess answer quality",
      "Handled multi-format ingestion: PDF, DOCX, TXT, image OCR",
      "Ran LLM locally with Ollama to learn without API costs",
      "Explored Query Rewriting techniques to improve search results",
      "Still has many limitations, but a good first step to understanding RAG",
    ],
    architecture: [
      "Django Backend",
      "Streamlit UI",
      "Ollama LLM",
      "FAISS + BM25",
      "Cross-Encoder",
      "Self-Eval Loop",
    ],
    url: "https://github.com/phwkha/Smart-Doc-AI",
    accent: "#f59e0b",
  },
];

export { meta, introdata, logotext, skills, projects };
