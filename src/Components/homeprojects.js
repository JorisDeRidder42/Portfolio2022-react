import React from "react";
import "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeProjects = () => {
  return (
    <Container>
      <h1 className="watermark">Projects</h1>
      <h2 className="pt-5 text-start">My projects</h2>
      <div className="line"></div>
      <Container>
        <Row>
          {/* <Col md={6}>
            <h2>Tournament app</h2>
            <p>
              Application developed for school where you can choose a game and
              write yourself in for that game against other players.
            </p>
            <button className="mt-4 px-5 py-3 btn btn-primary">Explore</button>
          </Col>
          <Col md={6}></Col> */}
        </Row>
      </Container>
    </Container>
  );
};
export default HomeProjects;
