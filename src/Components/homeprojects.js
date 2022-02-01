import React from 'react';
import 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


const HomeProjects = () => {
    return ( 
        <Container>
            <h1 className="mt-3 pt-5 text-center">Check out my <span>projects</span></h1>
            <Row className="my-5">
                <Col md={4}>
                    <Card>
                        <Card.Img className="image" variant="top" alt="pc" src="./assets/gianni.png"/>
                            <Card.Body>
                                <Card.Title>Sarandonga</Card.Title>
                                <Card.Text>
                                    Created a website for a flamenco dance company based in Belgium.
                                </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Tools: Bootstrap 5, HTML5, CSS3</Card.Subtitle>
                            <Card.Subtitle className="mb-4 text-muted">Year: 2017</Card.Subtitle>
                                <div class="d-flex justify-content-center">
                                <LinkContainer to={'/projects'}>
                                    <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">See my projects</button>
                                </LinkContainer>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                   
                </Col>
            </Row>
        </Container>
    )
}
export default HomeProjects;
