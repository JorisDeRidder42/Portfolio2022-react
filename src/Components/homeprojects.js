import React from "react";
import "bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Tournament from "../assets/images/tournament.PNG";
import Sarandonga from "../assets/images/sarandonga.PNG";
import Pokemon from "../assets/video/pokedraw.gif";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { project, project1, project3 } from "../projects/projects";
import { ProjectItem } from "./projectItem";

const HomeProjects = (props) => {
  return (
    <div className="projects my-5 py-5">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2 className="text-start">Enkele dingen die ik heb gemaakt</h2>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md={6}>
              <ProjectItem />
            </Col>
            <Col md={6}>
              <ProjectItem />
            </Col>
          </Row>
        </Container>

        {/* <Container className="my-5">
          <Row>
            <Col md={6}>
              <Card className="mt-5 card">
                <Card.Body>
                  <Card.Subtitle className="mb-2 featured">
                    <h4 className="featured">Featured project</h4>
                  </Card.Subtitle>
                  <Card.Title>
                    <h3>{project.title}</h3>
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>

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
        </Container> */}
      </Container>
    </div>
  );
};
export default HomeProjects;
