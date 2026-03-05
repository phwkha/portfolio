import React, { useState } from "react";
import "./style.css";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="theme_toggle_border">
              <Themetoggle />
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
