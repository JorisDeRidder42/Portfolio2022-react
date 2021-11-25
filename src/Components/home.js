import { Image } from "react-bootstrap";
import Homeabout from "./homeabout";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <div>
        <Container className="container">
        <Row className="blok">
            <Col md={6}>
                <h6 className="mt-2">Hi, my name is <span>Joris De Ridder</span></h6>
                    <h1>Need a new <span>design</span> for your business?</h1>
                <h6 className="mt-2">Graphic design / Front End Developer  / Programmer</h6>
                        <button className=" mt-4 px-5 py-3 btn btn-primary">Watch my projects</button>
                        <button className=" mt-4 px-5 py-3 mx-4 btn btn-outline-primary">Go to my resume</button>
            </Col>
            <Col sm={6}>
                {/* <Image src={require('Path1.png')} alt="hoofd"/> */}
            </Col>
        </Row>
         </Container>
         {/* <div className="clip">
            <div className="header"></div>
        </div>    */}
  <Homeabout/>
  </div>
    )
}
export{Home};