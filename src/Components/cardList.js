import { Col, Row } from "react-bootstrap";
import { ComputerItem } from "./computerItem";

export const CardList = (props) => {
    return(
        <Row>
            {props.computers.map(c => 
                <Col key={c.id} sm={4} className="my-4">
                    <ComputerItem computer={c}/>
                </Col>
            )}
    </Row>
    )
}