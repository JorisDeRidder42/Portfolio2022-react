import React from "react";
import "bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Tournament from "../assets/images/tournament.PNG";
import Sarandonga from "../assets/images/sarandonga.PNG";
import Pokemon from "../assets/video/pokedraw.gif";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import { FaGithubSquare } from "react-icons/fa";

const HomeProjects = () => {
  return (
    <div className="projects my-5 py-5">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2 className="text-start">Enkele dingen die ik heb gemaakt</h2>
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

                  <ul className="mt-5 project-tech-list">
                    <li>Mysql</li>
                    <li>MaterialDesign</li>
                    <li>C#</li>
                  </ul>
                  <a
                    className="iconLink"
                    href="https://github.com/JorisDeRidder42/DMProject_Toernooi"
                    aria-label="Github"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Image
                src={Tournament}
                className="mt-5"
                alt="tournament"
                fluid={true}
              />
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Card className="mt-5 card">
                <Card.Body>
                  <Card.Title>
                    <h3>Pokédraw app</h3>
                  </Card.Title>
                  <Card.Text>
                    Een applicatie die een pokemon-database heeft a.d.h.v. een
                    pokemon api en waar je een willekeurige Pokémon kunt trekken
                    en natekennen.
                  </Card.Text>

                  <ul className="mt-5 project-tech-list">
                    <li>Pokemon api</li>
                    <li>Ionic</li>
                  </ul>
                  <a
                    className="iconLink"
                    href="https://github.com/JorisDeRidder42/pokedrawing"
                    aria-label="Github"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Image
                src={Pokemon}
                className="video"
                alt="pokedraw"
                fluid={true}
              />
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Card className="mt-5 card">
                <Card.Body>
                  <Card.Title>
                    <h3>Sarandonga</h3>
                  </Card.Title>
                  <Card.Text>
                    Dit is een website ontworpen voor een dans gezelschap in
                    Lint. Sarandonga geeft flamenco lessen aan kinderen,
                    volwassenen en bejaarden, maar geeft ook optredens en
                    workshops.
                  </Card.Text>
                  <ul className="mt-5 project-tech-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                  </ul>
                  <a
                    className="iconLink"
                    href="http://www.sarandonga.be/"
                    aria-label="Github"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Image
                src={Sarandonga}
                className="mt-5"
                alt="tournament"
                fluid={true}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default HomeProjects;
