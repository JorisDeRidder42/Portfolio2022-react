import React from "react";
import { Container,Row, Col, Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";

const HomeContact = () => {
    return(
        <div>
            <h2 className="my-5 pt-5">Contact <span>me</span></h2>
            <Container>
                <Form>
                <Row>
                    <Col md={6}>
                            <Row>
                                <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                    
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Message" rows={3} />
                            </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send message
                                </Button>
                        </Col>
                    <Col md={6}>
                        <h3 className="text-start text-white">Ready to <span>collaborate?</span></h3>
                        <p className="text-white">Find me on socialmedia, connect with me through this form or mail me.</p>
                        <div className="mt-5 contactbox">
                            <ul>
                                <li>Joris De Ridder</li>
                                <li>Belgium, Antwerp</li>
                                <li>2547 Lint</li>
                                <li>@: <a href="email">Jorisderidder@outlook.be</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                </Form>
            </Container>
        </div>
    )
}
export default HomeContact;
