import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  );
};

export default Themetoggle;
