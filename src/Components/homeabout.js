import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePicture from "../assets/images/profielfoto.jpg";

const HomeAbout = () => {
  return (
    <div className="about my-5 py-5">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2 className="text-start">
              <span className="numberTitle">01.</span>Wie ben ik?
            </h2>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src={profilePicture}
                className="profilePicture m-5 w-50"
                alt="profilePicture"
                fluid={true}
              />
            </Col>
            <Col md={6}>
              <p className="text-start mt-5 tekst">
                Hallo, ik ben Joris De Ridder, student programmeren te Thomas
                More.
                <br />
                <br />
                Ik heb een serieuze passie voor grafisch design en websites.
                <br />
                <br />
                Momenteel ben ik bezig aan mijn laatste jaar, hierna zou ik
                graag willen werken als front-end developer.
                <br />
                <br />
                Ik ben geboren in februari 1997, het jaar van jurassic park the
                lost world, batman & robin en ook Men in black (zalige films).
                <br />
                <br />
                Als ik niet aan het coderen ben, ben ik waarschijnlijk badminton
                aan het spelen of een film/serie aan het bekijken.
              </p>

              <ul className="skills-list">
                <li>Javascript</li>
                <li>React</li>
                <li>Vue</li>
                <li>Typescript</li>
                <li>Ionic</li>
                <li>Wordpress</li>
                <li>C#</li>
                <li>.NET</li>
              </ul>
              <hr />
              <ul className="skills-list">
                <li>Leergierig</li>
                <li>Creatief</li>
                <li>Behulpzaam</li>
                <li>Goede luisteraar</li>
                <li>Doorzetter</li>
                <li>Gedisciplineerd</li>
              </ul>
              <Row>
                <Col md={6}>
                  <a
                    href="../assets/CvJorisDeRidder2022.pdf"
                    className="mt-4 px-5' py-3 btn btn-outline-primary"
                    download
                  >
                    CV
                  </a>
                </Col>
                <Col md={6}>
                  <div className="icons mt-4">
                    <a
                      href="https://www.linkedin.com/in/joris-de-ridder-800363193/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/jorisdrdesign/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://github.com/JorisDeRidder42"
                      target="_blank"
                      rel="noreferrer"
                    >
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
