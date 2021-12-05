import { Image } from "react-bootstrap";
import HomeProjects from "./homeabout";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <div>
        <Container className="hoogteHome">
            <Row className="blok">
                <Col md={6}>
                        <h1>I <span>create</span> apps, websites & brands</h1>
                        <h6 className="mt-2">I am a <b>front-end developper</b> with knowledge of <b>programming</b> and <b>graphic design.</b></h6>
                        <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">See my projects</button>
                </Col>
                <Col sm={6}>
                    {/* <Image src={require('Path1.png')} alt="hoofd"/> */}
                </Col>
            </Row>
         </Container>
  <HomeProjects/>
  </div>
    )
}
export{Home};