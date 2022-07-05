import { Card } from "react-bootstrap";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tournament from "../assets/images/tournament.PNG";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { project1 } from "../projects/projects";

const ProjectItem = (props) => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card className="mt-5 card">
            <Card.Body>
              <Card.Subtitle className="mb-2 featured">
                <h4 className="featured">Featured project</h4>
              </Card.Subtitle>
              <Card.Title>
                <h3>{project1.title}</h3>
              </Card.Title>
              <Card.Text>{project1.description}</Card.Text>

              <ul className="mt-5 project-tech-list">
                <li>{project1.tags}</li>
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
  );
};

export { ProjectItem };
