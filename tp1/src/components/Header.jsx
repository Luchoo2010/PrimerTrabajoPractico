import React from "react";
import FotoPerfil from "../assets/images.jpg"
import  "../css/Header.css"

const Header = () => {
  return (
    <div>
      <h1 style={{ color: "grey" }}>Luciano Salvador Azalot</h1>
      <img src={FotoPerfil} alt="" className="foto" />
    </div>
  );
};

export default Header;
