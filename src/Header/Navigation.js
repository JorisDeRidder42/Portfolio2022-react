import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./navigation.css";
import { Link } from "react-scroll";
import logo from "../assets/LOGO_JDR.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar
        className="color-nav fixed-top"
        data-aos="fade-down"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Link to="home" smooth={true} offset={-80} duration={500}>
            <Navbar.Brand>
              <Image src={logo} alt="LogoJDR" className="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="navigatiefont"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span className="numberNavigation">01.</span>Over mij
              </Link>
              <Link
                className="navigatiefont"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span className="numberNavigation">02.</span>Projecten
              </Link>
              <Link
                className="navigatiefont"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span className="numberNavigation">03.</span>Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
