import React from 'react'
import 'bootstrap';
import { Container,Row, Col } from 'react-bootstrap';
import { CardItem } from './cardItem';

const tekst1 = {
    header: 'Programming',
    content: 'I create good looking products that are focused on UX and stores data or make use of an API that collects data.'
}
const tekst2 = {
    header: 'Webdesign',
    content: 'Using my experience as a designer I love to design and build websites that look amazing. All my websites run on bootstrap and are always fully responsive across all devices.'
}
const tekst3 = {
    header: 'Branding',
    content: 'Building brands or updating existing brands that reflect your business strategy. Services such as logo design, design for print (posters, flyers, whitepapers, business cards).'
}

const HomeAbout = () => {
    return (
        <Container fluid="true">
                    <div className=" pb-5">
                        <Container>
                                    <h2 className="pt-5">Hi I'm <span>Joris</span></h2>
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
