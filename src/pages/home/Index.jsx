import React from "react";
import { CardBody } from "../../components/Main/CardBody";
import { Footer } from "../../components/Main/Footer";
import { Hero } from "../../components/Main/Hero";
import Container from "react-bootstrap/Container";
import AboutUs from "../../components/Main/AboutUs";
import ImagesGallery from "../../components/Main/ImagesGallery.jsx";
import "../../components/main/style.css";
import OurServices from "../../components/Main/OurServices";
import Maps from "../../components/Main/Maps";

const Home = () => {
  return (
    <>
      <main className="main_body">
        <Hero />
        <Container>
          <CardBody />
          <AboutUs />
          <div className="cont-title">
            <h3 className="titulito">PROPIEDADES EN VENTA</h3>
            <section className="hrr"></section>
          </div>
        </Container>
        <ImagesGallery />
        <OurServices />
        <Maps />
        <Footer />
      </main>
    </>
  );
};

export { Home };
