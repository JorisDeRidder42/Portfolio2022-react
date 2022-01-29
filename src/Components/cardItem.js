
import { Card } from "react-bootstrap"
import React from "react"

const CardItem = (props) => {
    console.log(props)
    return(
        <Card>
            <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {CardItem};