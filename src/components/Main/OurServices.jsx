import React from "react";
import { Button } from "./Btns";
import logo2 from "../../components/Images/logo2.png";
import { TitleI } from "./Title";
const OurServices = () => {
  return (
    <section className="ourserv-back">
      <div className="ourserv-box ourserv-logo">
        <img src={logo2} alt="logo" className="img-logo" />
      </div>
      <div className="ourserv-box ourserv-cont">
        <TitleI>Nuestros servicios</TitleI>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor natus
          amet nobis corrupti quia iure, fugit enim ad esse perspiciatis ducimus
          non sit quas ab expedita blanditiis, officiis mollitia delectus?
        </p>
        <Button className="btn-extras">Contectate</Button>
      </div>
    </section>
  );
};

export default OurServices;
