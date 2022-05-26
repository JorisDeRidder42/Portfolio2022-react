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
          <Col md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
