import React from "react";
import "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
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
        <ProjectItem />
      </Container>
    </div>
  );
};
export default HomeProjects;
