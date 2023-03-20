import React, { useState } from "react";
import { Button } from "../../components/Main/Btns";
import FormAlquiler from "../../components/Main/FormAlquiler";
import FormVenta from "../../components/Main/FormVenta";
import { HeroPages } from "../../components/Main/HeroPages";
import { Navbaar } from "../../components/Main/Navbar";
import { TitleI } from "../../components/Main/Title";
import logo from "../../components/Images/logo.png";
import { Footer } from "../../components/Main/Footer";

const Contact = () => {
  const [tipe, setTipe] = useState("comprar");

  return (
    <>
      <Navbaar />
      <div className="contact-maxCont">
        <HeroPages>
          <TitleI big>Contacto</TitleI>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut,
            odit eos cupiditate ducimus placeat, quos non hic nemo obcaecati
            repudiandae! Delectus, illum corrupti. Unde mollitia ullam
            perferendis consectetur laudantium!
          </p>
        </HeroPages>
        <div className="contact-container">
          <div className="contact-choose">
            <Button onClick={() => setTipe("comprar")}>Comprar</Button>
            <Button onClick={() => setTipe("alquilar")}>Alquilar</Button>
          </div>
          <div className="contact-form-container">
            {tipe && (tipe === "alquilar" ? <FormAlquiler /> : <FormVenta />)}
            <div className="contact-info">
              <img src={logo} alt="logo" className="footer-logo" />
              <h4>direccion</h4>
              <h4>correo</h4>
              <h4>etc</h4>
              <h4>etc</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13619.738489487409!2d-64.1974338!3d-31.4159273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3251fc63cbf%3A0xe2d7b2e1e100760d!2sPortugal%20Inmobiliaria!5e0!3m2!1ses-419!2sar!4v1678744645586!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Contact };
