import { Card } from "react-bootstrap";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Projects } from "../projects/projects";

export const ProjectItem = () => {
  return (
    <div>
      {Projects.map((project) => (
        <Card className="mt-5">
          <Card.Body>
            <Card.Subtitle className="mb-2 featured">
              <h4 className="featured">Featured project</h4>
            </Card.Subtitle>
            <Card.Title>
              <h3>{project.title}</h3>
            </Card.Title>
            <Card.Text>{project.description}</Card.Text>

            <ul className="mt-5 project-tech-list">
              {project.tags.map((tag) => (
                <li>{tag}</li>
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
      ))}
    </div>
  );
};
