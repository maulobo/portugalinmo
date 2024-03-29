import React, { Children, useState } from "react";
import descubre from "../Images/descubre.webp";
import { FaRegBuilding } from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import { TbBuilding } from "react-icons/tb";
import { BsHouse } from "react-icons/bs";
import { MdCropLandscape } from "react-icons/md";
import "./style.css";
import { TitleI } from "./Title";
import { ContainerI } from "../ContainerI";
import { DivMio } from "../DivMio";

const CardBody = ({ children }) => {
  const items = React.Children.toArray(children);
  console.log(items);
  return (
    <>
      <ContainerI>
        <DivMio icons>
          <TitleI green>DESCUBRE</TitleI>
          <div className="card_iconS">
            <p>Departamentos</p>
            <FaRegBuilding className="card_icono" />
          </div>
          <div className="card_iconS">
            <p>Casas</p>
            <BsHouse className="card_icono" />
          </div>
          <div className="card_iconS">
            <p>Terrenos</p>
            <MdCropLandscape className="card_icono" />
          </div>
          <div className="card_iconS">
            <p>Locales</p>
            <BiStore className="card_icono" />
          </div>
          <div className="card_iconS">
            <p>Oficinas</p>
            <TbBuilding className="card_icono" />
          </div>
        </DivMio>
        <DivMio>
          <img src={descubre} alt="edificio" className="card_img" />
        </DivMio>
      </ContainerI>
    </>
  );
};

export { CardBody };
