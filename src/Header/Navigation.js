import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./navigation.css";
import { Link } from "react-scroll";
import logo from "../assets/LOGO_JDR.png";

const Navigation = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar className="fixed-top" expand="lg" variant="dark">
        <Container>
          <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
            <Navbar.Brand>
              <Image src={logo} alt="LogoJDR" className="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="navigatiefont"
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <span className="numberNavigation">01.</span>over
              </Link>

              <Link
                className="navigatiefont"
                to="projects"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <span className="numberNavigation">02.</span>projecten
              </Link>
              <Link
                className="navigatiefont"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span className="numberNavigation">03.</span>contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
