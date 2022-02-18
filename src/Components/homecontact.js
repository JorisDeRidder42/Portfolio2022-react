import React from "react";
import { Container,Row, Col } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaLinkedin,FaGithub  } from 'react-icons/fa';


export const HomeContact = () => {

function sendEmail (e){
    e.preventDefault();

    emailjs.sendForm('service_3u0qshe', 'template_dzbnfmj',e.target,'user_3tFHbv7iprH8nesodsvCm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return(
        <div>
            <h2 className="my-5 pt-5">Contact <span>me</span></h2>
            <Container>
                <form onSubmit={sendEmail}>
                <Row>
                    <Col md={6}>
                            <Row>
                                <Col md={6}>
                                <Form.Group className="mb-3">
                                        <Form.Label>Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Name" name="name" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Email address*</Form.Label>
                                            <Form.Control type="email" placeholder="Email" name="email" />
                                        </Form.Group> 
                                </Col>
                            </Row>
                            
                            <Form.Group className="mb-3">
                                    <Form.Label>Subject*</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" name="subject" />
                                </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message*</Form.Label>
                                <Form.Control as="textarea" placeholder="Message" rows={3} name="message" />
                            </Form.Group>

                                <input type="submit" variant="primary" className="btn btn-primary mt-2 mb-5" value="Send Message"/>
                        </Col>
                    <Col md={6}>
                        <h3 className="text-start text-white">Ready to <span>collaborate?</span></h3>
                        <p className="text-white">Find me on social-media, connect with me through this form or mail me.</p>
                        <div className="mt-2 contactbox">
                            <ul>
                                <li>Joris De Ridder</li>
                                <li>Belgium, Antwerp</li>
                                <li>2547 Lint</li>
                                <li>@: <a href="mailto:Joris.42@hotmail.com">Joris.42@hotmail.com</a></li>
                                <li className="icons"><a href="" target="_blank"><FaFacebook/></a> <a href="" target="_blank"><FaInstagram/></a> <a href="" target="_blank"><FaLinkedin/></a> <a href="" target="_blank"><FaGithub/></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                </form>
            </Container>
        </div>
    )
}
export default HomeContact;
