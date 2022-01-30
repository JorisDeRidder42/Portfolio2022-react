import React from 'react';
import 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { CardProject } from './cardProject';
import { Card, Button } from "react-bootstrap";


const tekst1 = {
    title: 'Sarandonga',
    text: 'Created a website for a flamenco dance company based in Belgium.',
    tools: 'Bootstrap 5, HTML5, CSS3',
    year: '2017',
}
const tekst2 = {
    title: 'Gianni Claes',
    text: 'Personal Logo for a friend.',
    tools: 'Illustrator, photoshop',
    year: '2020',
}
const tekst3 = {
    title: 'Tournament',
    text: 'Created a program where you can login, choose a game and register yourself for that tournament',
    tools: 'Visual studio : C# & SQL',
    year: '2021',
}

const HomeProjects = () => {
    return ( 
        <Container>
            <h1 className="mt-3 pt-5 text-center">Check out my <span>projects</span></h1>
            <Row className="my-5">
                <Col md={4}>
                    <CardProject {... tekst1}/>
                </Col>
                <Col md={4}>
                    <CardProject {...tekst2}/>
                </Col>
                <Col md={4}>
                    <CardProject {...tekst3}/>
                </Col>
            </Row>
        </Container>
    )
}
export default HomeProjects;
