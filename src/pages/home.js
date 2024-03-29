import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "react-scroll/modules/components/Link";
import Footer from "../Footer/footer";
import HomeContact from "./homecontact";
import HomeProjects from "./homeprojects";
import HomeAbout from "./homeabout";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="home bluebackground mb-5">
      <Container className="mt-5">
        <Row className="center">
          <Col md={6}>
            <div className="mx-3" data-aos="fade-up" data-aos-delay="300">
              <h5 className="mt-3">Hallo, mijn naam is Joris</h5>
              <h1>
                Ik <span>ontwerp</span> applicaties voor het web
              </h1>
              <p className="mt-4">
                Ik ben een student programmeren te <strong>Thomas More </strong>
                die gespecialiseerd is in het bouwen van uitzonderlijke digitale
                ervaringen.
              </p>
              <Link to="projects" offset={-90} duration={500}>
                <button
                  className="mt-4 px-5 py-3 btn btn-outline-primary"
                  href="#"
                >
                  Ontdek
                </button>
              </Link>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
      <HomeAbout />
      <HomeProjects />
      <HomeContact />
      <Footer />
    </div>
  );
};
export { Home };
