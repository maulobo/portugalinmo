import React from "react";
import { ContainerI } from "../ContainerI";
import { DivMio } from "../DivMio";
import img1 from "../Images/ima1.jpg";
import "./style.css";
import { TitleI } from "./Title";

const AboutUs = () => {
  return (
    <>
      <ContainerI>
        <DivMio>
          <img src={img1} alt="edificio1" className="fotito" />
        </DivMio>
        <DivMio>
          <TitleI green style={{ marginBottom: "3em" }}>
            SOBRE NOSOTROS
          </TitleI>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ullam
            incidunt ipsum corporis quis. Praesentium, deserunt aliquid? Non,
            eveniet labore, ullam illo ab blanditiis at et repellat iste nulla
            tempora!
          </p>
        </DivMio>
      </ContainerI>
    </>
  );
};

export default AboutUs;
