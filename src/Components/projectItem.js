import { Card } from "react-bootstrap";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { project } from "../projects/projects";

const ProjectItem = () => {
  return (
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
          <li>{project.tags}</li>
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
  );
};

export { ProjectItem };
