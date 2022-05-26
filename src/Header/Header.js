import React from "react";
import { Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Projects } from "../pages/project";
import { Contact } from "../pages/contact";
import { Button } from "bootstrap";

const Routing = (props) => {
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
            <LinkContainer exact to="/about">
              <Nav.Link className="navigatiefont">
                <span className="numberHeader">01.</span>about
              </Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/projects">
              <Nav.Link className="navigatiefont">
                <span className="numberHeader">02.</span>projects
              </Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/contact">
              <Nav.Link className="navigatiefont">
                <span className="numberHeader">03.</span>contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Main = () => {
  return (
    <Container className="link">
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
};

const Alles = () => {
  return (
    <div>
      <Routing />
      <Main />
    </div>
  );
};

export { Alles };
