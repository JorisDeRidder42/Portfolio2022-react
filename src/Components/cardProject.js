import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CardProject = (props) => {
    return(
        <div>
            <Card>
                <Card.Img variant="top" alt="pc"/>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Tools: {props.tools}</Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">Year: {props.year}</Card.Subtitle>
                        <div class="d-flex justify-content-center">
                        <LinkContainer to={'/projects'}>
                            <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">See my projects</button>
                        </LinkContainer>
                        </div>
                    </Card.Body>
                </Card>
        </div>
    )
}

export {CardProject};