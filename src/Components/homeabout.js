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
                    {/* <Col md={6}>
                            <Image src="./Path1.png" alt="hoofd"/>
                        </Col>
                        <Col md={6}>
                            <h2>Meet the coder</h2>
                            <p>Joris is a Front-End Developer based in Belgium Antwerp.
                                he has a serious passion for design and animations.

                                He is also a Dedicated codewars player and a big fan of movies and TV series.
                                He also plays competitive badminton.</p>
                            <button className=" mt-4 px-5 py-3 btn btn-outline-primary">Go to my resume</button>
                        </Col> */} 
                        </Row>
                </Container>
            </div>
        </Container>
    )
}
export default HomeProjects;
