import React from "react";
import { Title, TitleI } from "./Title";
import "./style.css";
import img from "../../components/images/ima1.jpg";

const RenderCard1 = (el) => {
  const { name, description } = el;

  return (
    <div className="card-container">
      <div className="card-box card-ima">
        <img src={img} alt="img" className="card-img" />
      </div>
      <div className="card-box card-plus">
        <TitleI>{name}</TitleI>
        <p>{description}</p>
        <div>
          <button className="button-box2">CONECTATE</button>
        </div>
      </div>
    </div>
  );
};

export default RenderCard1;
