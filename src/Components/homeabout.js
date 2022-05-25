import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {
  FaLinkedin,
  FaInstagram,
  FaDribbbleSquare,
  FaGithubSquare,
} from "react-icons/fa";

const HomeAbout = () => {
  return (
    <div>
      <Container>
        <h1 className="watermark">About</h1>
        <h2 className="pt-5 text-start">About me</h2>
        <div className="line"></div>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src="assets/profiel.jpg"
                className="prof m-5 w-50"
                alt="profilePicture"
                responsive
              />
            </Col>
            <Col md={6}>
              <h2 className="text-start">Hi I am Joris</h2>
              <div className="line"></div>
              <p className="text-start mt-4 tekst">
                I am a <strong>student programming</strong> based in Belgium
                <em> Antwerp</em>.
                <br /> I have a serious passion for design and web.
                <br /> I also play badminton and watch alot of movies & series
              </p>
              <div className="icons">
                <a href="www.google.be" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="www.google.be" target="_blank">
                  <FaInstagram />
                </a>
                <a href="www.google.be" target="_blank">
                  <FaDribbbleSquare />
                </a>
                <a href="www.google.be" target="_blank">
                  <FaGithubSquare />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default HomeAbout;
