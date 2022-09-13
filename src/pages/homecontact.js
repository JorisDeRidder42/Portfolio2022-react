import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { CardContact } from "../Components/cardContact";

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
            <h2 className="text-start">Neem contact op</h2>
          </Col>
        </Row>
        <Container className="mt-5">
          <Form onSubmit={sendEmail}>
            <Row>
              <Col md={6}>
                <p>
                  Vind mij op sociale media, connecteer met mij via dit
                  formulier of via e-mail
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
                      <Form.Label>Email-adres*</Form.Label>
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
                <CardContact />
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    </div>
  );
};
export default HomeContact;
