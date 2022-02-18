
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import AboutSkills from "../Components/aboutskills";

const About = () => {
    return(
        <div className="bluebackground">
            <Container className="hoogteHomePage">
                <Row>
                    <Col md={6} className="mt-5">
                        <h1 className="mt-4">Hi I'm Joris</h1>
                        <h6 className="mt-2 text-white tekst">I'm a student programming based in Belgium Antwerp.I have a serious passion for design and animations. Dedicated person who is a big fan of movies, TV series and Badminton. Interested in working with positive people.</h6>
                        <LinkContainer to={'/contact'}>
                            <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">Let's make something special!</button>
                        </LinkContainer>
                    </Col>
                    <Col sm={6}>
                        <image src="../assets/profiel.jpg" className="img-fluid" alt="hoofd"/>
                    </Col>
                </Row>
            </Container>
            <AboutSkills/>
    </div>

    )
}
export {About};