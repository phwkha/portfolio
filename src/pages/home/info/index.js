import React from "react";
import "./style.css";
import Typewriter from "typewriter-effect";
import { introdata } from "../../../content_option";

const Info = () => {
  return (
    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
                <div className="profile-image-container">
                    <img 
                        src={introdata.my_img_url} 
                        alt="Profile" 
                        className="profile-image-circle"
                    />
                </div>
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h2 className="fluidz-48 mb-1x" style={{ fontWeight: "bold", height: "80px" }}>
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
                      deleteSpeed: 10,
                    }}
                  />
                </h2>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <a href={introdata.my_cv} rel="noopener noreferrer">
                    <div id="button_p" className="ac_btn btn ">
                      Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <a href="https://github.com/phwkha" rel="noopener noreferrer">
                    <div id="button_h" className="ac_btn btn">
                      github
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Info;