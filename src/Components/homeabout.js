import React from 'react'
import 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const Homeabout = () => {
    return (
        <div>
            <Container fluid>
                <Row className="blok">
                <Col md={6}>
                <h2 className="tussentitel pt-5 mx-5">about</h2>
                ...
                </Col>
                <Col sm={6}>
                    <h2>Meet the coder</h2>
                    <p>Joris is a Front-End Developer based in Belgium Antwerp.
                    he has a serious passion for design and animations.
                    
                    He is also a Dedicated codewars player and a big fan of movies and TV series.
                    He also plays competitive badminton.</p>
                    <button className=" mt-4 px-5 py-3 mx-4 btn btn-outline-primary">Go to my resume</button>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
export default Homeabout;
