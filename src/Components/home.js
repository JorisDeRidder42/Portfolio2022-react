import HomeProjects from "./homeprojects";
import { Container, Row, Col } from 'react-bootstrap';
import HomeAbout from "./homeabout";

const Home = () => {
    return(
        <div>
        <Container className="hoogteHomePage">
            <Row className="blok">
                <Col md={6}>
                        <h1>I <span>create</span> apps, websites & brands</h1>
                        <h6 className="mt-2">I am a <b>student programming</b> with the knowledge of  <b>front-end development</b> and <b>graphic design.</b></h6>
                        <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">See my projects</button>
                </Col>
                <Col sm={6}>
                    {/* <Image src={require('Path1.png')} alt="hoofd"/> */}
                </Col>
            </Row>
         </Container>
  <HomeAbout/>
  <HomeProjects/>
  </div>
    )
}
export{Home};