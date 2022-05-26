import React from "react";
import "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeProjects = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h1 className="watermark">Projects</h1>
          <h2 className="text-start">
            <span className="numberTitle">02.</span>My projects
          </h2>
        </Col>
        <Col md={6}>
          <h3 className="quote">
            My work is the bridge to digital experiences.
          </h3>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="mt-5 card">
              <Card.Body>
                <h4 className="featured">Featured project</h4>
                <Card.Title>
                  <h3>Tournament app</h3>
                </Card.Title>
                <Card.Text>
                  Application developed for school where you can choose a game
                  and write yourself in for that game against other players.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </Container>
  );
};
export default HomeProjects;
