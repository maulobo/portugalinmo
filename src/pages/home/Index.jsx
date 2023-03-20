import React, { useEffect, useRef, useState } from "react";
import { CardBody } from "../../components/Main/CardBody";
import { Footer } from "../../components/Main/Footer";
import { Hero } from "../../components/Main/Hero";
import Container from "react-bootstrap/Container";
import AboutUs from "../../components/Main/AboutUs";
import ImagesGallery from "../../components/Main/ImagesGallery.jsx";
import "../../components/main/style.css";
import OurServices from "../../components/Main/OurServices";
import Maps from "../../components/Main/Maps";
import { animated, useSpring, useInView } from "@react-spring/web";

const Home = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  const [spring1, api1] = useSpring(() => ({
    config: { duration: 2000 },
  }));
  const [springs2, api2] = useSpring(() => ({
    config: { duration: 2000 },
  }));

  useEffect(() => {
    api1.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
  }, [inView1]);

  useEffect(() => {
    api2.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
  }, [inView2]);

  return (
    <>
      <main className="main_body">
        <Hero />
        <Container>
          <animated.div
            ref={ref1}
            style={{
              ...spring1,
            }}
          >
            <CardBody />
          </animated.div>
          <animated.div
            ref={ref2}
            style={{
              ...springs2,
            }}
          >
            <AboutUs />
          </animated.div>
          <div className="cont-title">
            <h3 className="titulito">PROPIEDADES EN VENTA</h3>
            <section className="hrr"></section>
          </div>
        </Container>
        <div className="ajust">
          <ImagesGallery />
        </div>
        <OurServices />
        <Maps />
        <div className="footer-ajust">
          <Footer />
        </div>
      </main>
    </>
  );
};

export { Home };
