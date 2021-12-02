import React from 'react'
import 'bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HomeProjects = () => {
    return (
        <Container fluid>
                    <div className="bluebackground">
                    <h2 className="tussentitel mt-5">Projects</h2>
                        <Container>
                    <Row>
                    <Col md={6}>
                            <div className="allaround">
                                <div className="card">
                                    <div className="counter"><h3>01</h3></div>
                                    <div className="content">
                                        <h2>Captain Marvel</h2>
                                        <p>Captain Marvel is a Legend in the MCU.</p>
                                        <a href ="#" className="buttonread">Read more</a>
                                    </div>
                                    <img src="./assets/captmarvel.png" id="captain" alt="Captain Marvel"></img>
                                </div>
                            </div>
                        </Col> 
                        <Col md={6}>
                            <div className="allaround">
                                <div className="card">
                                    <div className="counter"><h3>02</h3></div>
                                    <div className="content">
                                        <h2>Sarandonga</h2>
                                        <p>Sarandonga is a dancing company in Belgium. specialised in spanish Flamenco.</p>
                                        <a href ="#" className="buttonread">Read more</a>
                                    </div>
                                    <img src="./assets/sarandonga.png" id="malena" alt="Sarandonga Malena"></img>
                                </div>
                            </div>
                        </Col> 
                        </Row>
                </Container>
            </div>
        </Container>
    )
}
export default HomeProjects;
