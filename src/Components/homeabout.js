import React from 'react'
import 'bootstrap';
import { Container,Row, Col, Image } from 'react-bootstrap';
import { CardItem } from './cardItem';

const tekst1 = {
    header: 'Programming',
    content: 'Building brands or updating existing brands that reflect your business strategy. Services such as logo design, design for print (posters, flyers, whitepapers, business cards), illustrations and more!'
}
const tekst2 = {
    header: 'Webdesign',
    content: 'Using my experience as a designer I love to design and build websites that look amazing,  All my websites run on bootstrap and are responsive across all devices.'
}
const tekst3 = {
    header: 'Branding',
    content: 'Building brands or updating existing brands that reflect your business strategy. Services such as logo design, design for print (posters, flyers, whitepapers, business cards), illustrations and more!'
}

const HomeAbout = () => {
    return (
        <Container fluid>
                    <div className="bluebackground">
                        <Container>
                                    <h1 className=" mt-3 pt-5 text-center text-white">Hi I'm <span>Joris</span></h1>
                                    <h6 className='mt-2 text-center text-white'>I craft beautifull websites that are
                                    people friendly and focused on branding.</h6>
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
