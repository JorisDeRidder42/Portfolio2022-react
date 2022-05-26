import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {
  FaLinkedin,
  FaInstagram,
  FaDribbbleSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="watermark">About</h1>
            <h2 className="text-start">
              <span className="numberTitle">01.</span>About me
            </h2>
          </Col>
          <Col md={6}>
            <h3 className="quote">Simplicity is the soul of efficiency.</h3>
            <p>
              <em className="quoteName">Austin Freeman</em>
            </p>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src="assets/profielfoto.jpg"
                className="prof m-5 w-50"
                alt="profilePicture"
                responsive
              />
            </Col>
            <Col md={6}>
              <p className="text-start mt-5 tekst">
                Hi I'm Joris De Ridder, <strong>student programming</strong>{" "}
                based in Belgium Antwerp.
                <br />I have a serious passion for design and web. <br />
                <br />
                When I am not coding, I am probably playing badminton or
                watching a movie or series.
              </p>
              <Row>
                <Col md={4}>
                  <ul>
                    <li>Javascript (ES6+)</li>
                    <li>React</li>
                    <li>Vue</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul>
                    <li>Typescript</li>
                    <li>Ionic</li>
                    <li>Wordpress</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul>
                    <li>C#</li>
                    <li>.NET</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Link
                    className="mt-4 px-5 py-3 btn btn-outline-primary"
                    to="/public/assets/Cv_JorisDeRidder2021.pdf"
                    target="_blank"
                    download
                  >
                    Resume
                  </Link>
                </Col>
                <Col md={8}>
                  <div className="icons mt-4">
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
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default HomeAbout;
