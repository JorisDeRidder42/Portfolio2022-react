import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const HomeAbout = () => {
  return (
    <div>
      <Container>
        <h2 className="pt-5 text-start">About me</h2>
        <div className="line"></div>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src="assets/profiel.jpg"
                className="prof mt-5"
                alt="profilePicture"
                responsive
              />
            </Col>
            <Col md={6}>
              <h2 className="text-start">Hi I am Joris</h2>
              <p className="text-start mt-4">
                Hi I'm Joris, student programming based in Belgium Antwerp. I
                have a serious passion for design and web I also play badminton
                and watch alot of movies & series
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default HomeAbout;
