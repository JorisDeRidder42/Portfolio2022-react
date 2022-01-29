import React from 'react'
import 'bootstrap';
import { Container,Row, Col } from 'react-bootstrap';
import { CardItem } from './cardItem';
const tekst1 = {
    header: 'Programmeren',
    content: 'Blablablaa'
}
const tekst2 = {
    header: 'Graphic design',
    content: 'Alaaakbar'
}
const tekst3 = {
    header: 'Webdesign',
    content: 'Constanin'
}

const HomeAbout = (props) => {
    return (
        <Container fluid>
                    <div className="bluebackground">
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <CardItem {...tekst1}/>
                                </Col>
                                <Col md={4}>
                                    <CardItem {...tekst2}/>
                                </Col>
                                <Col md={4}>
                                    <CardItem {...tekst3}/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
        </Container>
    )
}
export default HomeAbout;
