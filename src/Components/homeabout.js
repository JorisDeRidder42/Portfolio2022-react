import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import profilePicture from "../assets/images/profielfoto.jpg";
import { Skills } from "../projects/skills";

const HomeAbout = () => {
  return (
    <div className="about">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2 className="text-start">Wie ben ik?</h2>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src={profilePicture}
                className="profilePicture m-5 w-75"
                alt="profilePicture"
                fluid={true}
              />
            </Col>
            <Col md={6}>
              <Card className="mt-5 p-5">
                <p className="text-start tekst">
                  Mijn naam is Joris De Ridder,
                  <span> student programmeren</span> te Thomas More.
                  <br />
                  <br />
                  Ik heb een serieuze passie voor
                  <span> grafisch design en websites.</span>
                  <br />
                  Momenteel ben ik bezig aan mijn laatste jaar. Hierna zou ik
                  graag willen werken als <span>front-end developer.</span>
                  <br />
                  <br />
                  Ik ben geboren in <span>februari 1997</span>, het jaar van
                  Jurassic Park The Lost World, Batman & Robin en ook Men in
                  Black.
                  <br />
                  <br />
                  Als ik niet aan het coderen ben, ben ik waarschijnlijk
                  badminton aan het spelen of een film/serie aan het bekijken.
                </p>

                <ul className="skills-list">
                  {Skills.map((skill, key) => (
                    <li key={key}>{skill}</li>
                  ))}
                </ul>
                <Row>
                  <Col md={6}>
                    <a
                      href="../assets/CVJDR.pdf"
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
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default HomeAbout;
