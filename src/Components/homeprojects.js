import React from 'react';
import 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


const HomeProjects = () => {
    return ( 
        <Container>
            <h2 className="my-5 py-5">Check out my <span>projects</span></h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-5">
                        <Card.Img className="image" variant="top" alt="pc" src="./assets/gianni.png"/>
                            <Card.Body>
                                <Card.Title className="title">Flores y fiesta</Card.Title>
                                <Card.Text>
                                    Created a website for a flamenco dance companys based in Belgium.
                                </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Tools: Bootstrap 5, HTML5, CSS3 & Javascript</Card.Subtitle>
                            <Card.Subtitle className="mb-4 text-muted">Year: 2017</Card.Subtitle>
                                <div className="d-flex justify-content-center">
                                <LinkContainer to={'/projects'}>
                                    <button className=" px-5 py-3 my-4 btn btn-primary" a href="#">See my projects</button>
                                </LinkContainer>
                            </div>
                        </Card.Body>
                        <div className="line"></div>
                    </Card>
                </Col>
                <Col md={4}>
                <Card className="mb-5">
                        <Card.Img className="image" variant="top" alt="pc" src="./assets/gianni.png"/>
                            <Card.Body>
                                <Card.Title className="title">Gianni Claes</Card.Title>
                                <Card.Text>
                                    Personal logo design for a friend his portfolio.
                                </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Tools: Illustrator & photoshop</Card.Subtitle>
                            <Card.Subtitle className="mb-4 text-muted">Year: 2020</Card.Subtitle>
                                <div className="d-flex justify-content-center">
                                <LinkContainer to={'/projects'}>
                                    <button className="my-4 px-5 py-3 btn btn-primary" a href="#">See my projects</button>
                                </LinkContainer>
                            </div>
                        </Card.Body>
                        <div className="line"></div>
                    </Card>
                </Col>
                <Col md={4}>
                <Card className="mb-5">
                        <Card.Img className="image" variant="top" alt="pc" src="./assets/tournament.png"/>
                            <Card.Body>
                                <Card.Title className="title">Tournament</Card.Title>
                                <Card.Text>
                                Created a program where you can choose a game and register yourself for that chosentournament
                                </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Tools: Visual studio: C# & SQL</Card.Subtitle>
                            <Card.Subtitle className="mb-4 text-muted">Year: 2021</Card.Subtitle>
                                <div className="d-flex justify-content-center">
                                <LinkContainer to={'/projects'}>
                                    <button className="my-4 px-5 py-3 btn btn-primary" a href="#">See my projects</button>
                                </LinkContainer>
                            </div>
                        </Card.Body>
                        <div className="line"></div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default HomeProjects;
