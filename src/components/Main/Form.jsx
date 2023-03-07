import React, { useState } from "react";
import FormAlquiler from "./FormAlquiler";
import FormVenta from "./FormVenta";

const Form = () => {
  const [tipe, setTipe] = useState("");
  return (
    <>
      <form>
        <p>Elije el tipo de operacion</p>
        <input
          type="radio"
          id="comprar"
          name="tipe"
          value="comprar"
          onChange={(e) => setTipe(e.target.value)}
        />
        <label htmlFor="comprar">Comprar</label>
        <input
          type="radio"
          id="alquilar"
          name="tipe"
          value="alquilar"
          onChange={(e) => setTipe(e.target.value)}
        />
        <label htmlFor="alquilar">Alquilar</label>
        {tipe && (tipe === "alquilar" ? <FormAlquiler /> : <FormVenta />)}
      </form>
    </>
  );
};

export default Form;
