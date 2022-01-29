
import { Button, Card } from "react-bootstrap"
import {React} from './React';

export const CardItem = (props) => {
    return(
        <Card style={{ width: '14rem' }}>
        <Card.Header>{props.computer.name}</Card.Header>
            <Card.Body>
            <FontAwesomeIcon style={style} icon={faLaptop}></FontAwesomeIcon>
            <Card.Text className="mt-3">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
    )
}