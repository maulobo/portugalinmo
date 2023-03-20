import React from "react";
import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-container2">
        <div className="footer-info">
          <p>Sector donde se encuentra</p>
          <p>Numero de telefono</p>
          <p>Correo</p>
          <p>Warap</p>
          <p>Warap</p>
          <p>redes</p>
        </div>
        <div className="footer-simbol">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>
      </section>
      <p className="footer-info">
        © Built with pride and caffeine by Anabel de Prado y Mauro Lobo. All
        rights reserved.
      </p>
    </div>
  );
};

export { Footer };
