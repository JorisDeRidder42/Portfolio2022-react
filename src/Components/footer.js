import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="py-5 footer">
      <Container>
        <Row>
          <Col md={6}>
            <p className="m-2">
              © 2022 jorisdrdesign – Alle rechten voorbehouden.
            </p>
          </Col>
          <Col md={6}>
            <p className="m-2">
              Ontworpen en opgemaakt door mezelf met Adobe XD en React.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
