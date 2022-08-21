import { Card } from "react-bootstrap";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const ProjectItem = (props) => {
  return (
    <div>
      <Card className="mt-5">
        <h1 className="projectNumber">{props.project.id}</h1>
        <Card.Body>
          <Card.Subtitle className="mt-2">
            <h4 className="featured">
              {props.project.featured ? "Featured" : ""}
            </h4>
          </Card.Subtitle>
          <Card.Title className="mt-3">
            <h3>{props.project.title}</h3>
          </Card.Title>
          <Card.Text className="mt-4">{props.project.description}</Card.Text>
          <p className="mt-4">{props.project.date}</p>
          <ul className="mt-5 project-tech-list">
            {props.project.tags.map((tag, key) => (
              <li key={key}>{tag}</li>
            ))}
          </ul>
          <a
            className="iconLink"
            href={props.project.link}
            aria-label="Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            {props.project.link ? <FiExternalLink /> : <FiGithub />}
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
