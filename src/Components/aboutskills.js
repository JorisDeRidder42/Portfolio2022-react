import React from 'react';
import 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaVuejs} from 'react-icons/fa';


const AboutSkills = () => {
    return ( 
        <Container className='mt-5'>
            <Row>
                <Col md={6}>
                    <h2 className='text-white mb-3'>Skills</h2>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <p className='text-white'>HTML/CSS</p>
                                <div className='iconsskills'>
                                    <FaHtml5/><FaCss3Alt/>
                                </div>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>React</p>
                                <div className='iconsskills'>
                                    <FaReact/>
                                </div>
                            </Col>
                            <Col md={4}>
                            <p className='text-white'>Vue</p>
                            <div className='iconsskills'>
                                <FaVuejs/>
                            </div>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col md={4}>
                                <p className='text-white'>Javascript/Typescript</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>.NET</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>C#</p>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col md={4}>
                                <p className='text-white'>SQL</p>
                            </Col>
                            <Col md={4}>
                                <p className='text-white'>Github</p>
                                <div className='iconsskills'>
                                    <FaGithub/>
                                </div>
                                
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
