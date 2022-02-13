import React from 'react';
import 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


const AboutSkills = () => {
    return ( 
        <Container className='mt-5'>
            <Row>
                <Col md={6}>
                    <h2 className='text-white'>Skills</h2>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <p className='text-white'>HTML/CSS</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>React</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>C#/.NET</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-white'>Javascript</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>Typescript</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>C#</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p className='text-white'>SQL</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>Github</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>Ionic</p>
                            </Col>
                        </Row>
                <Col md={6}>
                    
                </Col>
        </Container>
                </Col>

                <Col md={6}>
                    
                </Col>
            </Row>
        </Container>
    )
}
export default AboutSkills;
