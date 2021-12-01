import React from "react";
import { Switch } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

import { Home } from "../Components/home";
import { about } from "../Components/about";
import { projects } from "../Components/project";
import { contact } from "../Components/contact";


const Routing = () => {
  return(
      <Navbar className="color-nav" expand="lg" variant="dark">
        <Container>
          <LinkContainer exact to={"/"}>
            <Navbar.Brand><img src="./assets/LogoJDRwhite.png" alt="LogoJDR" className="logo" fluid/></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer exact to="/about">
                <Nav.Link className="navigatiefont">about</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/projects">
              <Nav.Link className="navigatiefont">projects</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/contact">
            <Nav.Link className="navigatiefont">contact</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

const Main = () => {
  return <Container className="link">
          <Switch>
              <Route exact path="/about" component={about}/>
              <Route exact path="/projects" component={projects}/>
              <Route exact path="/contact" component={contact}/>
              <Route path="/" component={Home}/>
          </Switch>
      </Container>
}

const Alles = () => {
  return(
    <div>
      <Routing/>
      <Main/>
    </div>
  )
}

export {Alles};