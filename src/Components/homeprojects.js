import React from "react";
import "bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Tournament from "../assets/images/tournament.PNG";
import Pokedraw from "../assets/video/pokedraw.gif";

const HomeProjects = () => {
  return (
    <div className="projects mt-5 pt-5">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2 className="text-start">
              <span className="numberTitle">02.</span>Mijn Projecten
            </h2>
          </Col>
          <Col md={6}>
            <h3 className="quote">
              My work is the bridge to digital experiences.
            </h3>
          </Col>
        </Row>
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Card className="mt-5 card">
                <Card.Body>
                  <Card.Subtitle className="mb-2 featured">
                    <h4 className="featured">Featured project</h4>
                  </Card.Subtitle>
                  <Card.Title>
                    <h3>Tournament app</h3>
                  </Card.Title>
                  <Card.Text>
                    Deze applicatie voor school is om ervoor te zorgen dat
                    kinderen/jongeren zich gemakkelijk kunnen registreren voor
                    een online spel. Alsnog kunnen ze een uur en toernooi kiezen
                    van het gekozen spel.
                  </Card.Text>
                  <ul className="project-tech-list">
                    <li>Mysql</li>
                    <li>MaterialDesign</li>
                    <li>C#</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Image src={Tournament} alt="tournament" fluid={true} />
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Card className="mt-5 card">
                <Card.Body>
                  <Card.Subtitle className="mb-2 featured">
                    <h4 className="featured">Featured project</h4>
                  </Card.Subtitle>
                  <Card.Title>
                    <h3>Pokédraw app</h3>
                  </Card.Title>
                  <Card.Text>
                    Een applicatie die een pokemon-database heeft a.d.h.v. een
                    pokemon api en waar je een willekeurige Pokémon kunt trekken
                    en natekennen.
                  </Card.Text>
                  <ul className="project-tech-list">
                    <li>Ionic</li>
                    <li>Pokemon API</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Image src={Pokedraw} className="video" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default HomeProjects;
