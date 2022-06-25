import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";

export const HomeContact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3u0qshe",
        "template_dzbnfmj",
        e.target,
        "user_3tFHbv7iprH8nesodsvCm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact pb-5">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2 className="text-start">
              <span className="numberTitle">03.</span>Neem contact op
            </h2>
          </Col>
        </Row>
        <Container className="mt-5">
          <Form onSubmit={sendEmail}>
            <Row>
              <Col md={6}>
                <p>
                  Find me on social-media, connect with me through this form or
                  mail me.
                </p>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Naam*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Naam"
                        name="Naam"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email addres*</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="Email"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Onderwerp*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Onderwerp"
                    name="Onderwerp"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bericht*</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Bericht"
                    rows={3}
                    name="Bericht"
                  />
                </Form.Group>

                <input
                  type="submit"
                  variant="primary"
                  className="btn btn-outline-primary mt-2 mb-5"
                  value="Stuur bericht"
                />
              </Col>
              <Col md={6}>
                <Card className="mb-5 p-3 card">
                  <Card.Body>
                    <ul className="contact-info">
                      <li>Joris De Ridder</li>
                      <li>België, Antwerpen</li>
                      <li>2547 Lint</li>
                      <li>0492/64.13.23</li>

                      <li>
                        @
                        <a href="mailto:Joris.42@hotmail.com">
                          Joris.42@hotmail.com
                        </a>
                      </li>
                      <li className="icons">
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
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    </div>
  );
};
export default HomeContact;
