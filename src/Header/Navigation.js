import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import "./navigation.css";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  return (
    <Navbar className="color-nav" expand="lg" variant="dark">
      <Container>
        <LinkContainer exact to={"/"}>
          <Navbar.Brand>
            <img src="./assets/LOGO_JDR.png" alt="LogoJDR" className="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className="numberNavigation">01.</span>about
            </Link>

            <Nav.Link className="navigatiefont">
              <span className="numberNavigation">02.</span>projects
            </Nav.Link>
            <Nav.Link className="navigatiefont">
              <span className="numberNavigation">03.</span>contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
