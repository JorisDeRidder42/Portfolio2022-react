
import { Card } from "react-bootstrap";
import React from "react";

const CardItem = (props) => {
    return(
        <Card className="my-5" style={{ width: '20rem' }}>
            <Card.Title className="mt-5">{props.header}</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            {props.content}
                        </Card.Text>
                    </Card.Body>
            <div className="line"></div>
        </Card>
    )
}

export {CardItem};