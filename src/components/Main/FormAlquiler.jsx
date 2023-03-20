import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "./Btns";
import styled from "styled-components";
import "./style.css";

export const FormMio = styled.form`
  max-width: 450px;
  .form-control:focus {
    box-shadow: inset 0 0 0 #dbab1e, 5px 5px 10px -5px #dbab1e;
    border: 1px solid #dbab1e;
  }
`;
const FormAlquiler = () => {
  return (
    <div className="form-container">
      <FormMio method="POST">
        <h4 className="ajust2">Quiero Alquilar</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" placeholder="Nombre" required />
          <Form.Text className="text-muted">prgramacion del error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <Form.Text className="text-muted">prgramacion del error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="tel"
            placeholder="Número telefónico"
            name="phoneNumber"
            required
          />
          <Form.Text className="text-muted">prgramacion del error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="Zona de interes"
            required
          />
          <Form.Text className="text-muted">prgramacion del error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="Tipo de propiedad"
            required
          />
          <Form.Text className="text-muted">prgramacion del error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={4}
            name="comments"
            style={{ resize: "none" }}
            placeholder="Estoy interesado en esta propiedad"
          />
        </Form.Group>
        <Button className="btn-extras" type="submit">
          ENVIAR
        </Button>
      </FormMio>
    </div>
  );
};

export default FormAlquiler;
