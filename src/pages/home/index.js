import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../data/content_option";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "../../components/footer";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </section>
    </HelmetProvider>
  );
};
