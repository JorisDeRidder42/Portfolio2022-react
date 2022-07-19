import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="py-5 footer">
      <Container>
        <Row>
          <Col md={6}>
            <p className="m-2">© 2022 jorisdrdesign – All rights reserved.</p>
          </Col>
          <Col md={6}>
            <p className="m-2">
              Designed and build by myself with adobe XD and React
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
