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
    <div className="about">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h1 className="watermark">Over</h1>
            <h2 className="text-start">
              <span className="numberTitle">01.</span>Over mij
            </h2>
          </Col>
          <Col md={6}>
            <h3 className="quote">Less is more.</h3>
            <p>
              <em className="quoteName"> Ludwig Mies van der Rohe</em>
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
              />
            </Col>
            <Col md={6}>
              <p className="text-start mt-5 tekst">
                Hallo, ik ben Joris De Ridder,
                <strong>student programmeren</strong> te Thomas More.
                <br />
                Ik heb een serieuze passie voor ontwerp en web
                <br />
                <br />
                Als ik niet aan het coderen ben, speel ik waarschijnlijk
                badminton of kijk ik naar een film of serie.
              </p>

              <ul className="skills-list">
                <li>Javascript (ES6+)</li>
                <li>React</li>
                <li>Vue</li>
              </ul>

              <ul className="skills-list">
                <li>Typescript</li>
                <li>Ionic</li>
                <li>Wordpress</li>
              </ul>

              <ul className="skills-list">
                <li>C#</li>
                <li>.NET</li>
              </ul>
              <Col md={6}>
                <Link
                  className="mt-4 px-5 py-3 btn btn-outline-primary"
                  to="/public/assets/Cv_JorisDeRidder2021.pdf"
                  target="_blank"
                  download
                >
                  CV
                </Link>
              </Col>
              <Col md={6}>
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
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default HomeAbout;
