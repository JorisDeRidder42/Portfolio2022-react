import { Card, Col, Container, Image, Row } from "react-bootstrap";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Projects } from "../projects/projects";

export const ProjectItem = () => {
  return (
    <Container>
      {Projects.map((project, key) => (
        <Row>
          <Col md={6}>
            <Card key={project.id} className="mt-5">
              <Card.Body>
                <Card.Subtitle className="mb-2 featured">
                  <h4 className="featured">{project.featured}</h4>
                </Card.Subtitle>
                <Card.Title>
                  <h3>{project.title}</h3>
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>

                <ul className="mt-5 project-tech-list">
                  {project.tags.map((tag, key) => (
                    <li key={key}>{tag}</li>
                  ))}
                </ul>
                <a
                  className="iconLink"
                  href={project.link}
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
            <Image src={project.image} alt={project.alt} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
