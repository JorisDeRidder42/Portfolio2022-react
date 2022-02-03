import HomeProjects from "../Components/homeprojects";
import { Container, Row, Col } from 'react-bootstrap';
import HomeAbout from "../Components/homeabout";
import { LinkContainer } from "react-router-bootstrap";
import HomeContact from "../Components/homecontact";

const Home = () => {
    return(
            <div className="bluebackground">
                    <Container className="hoogteHomePage">
                        <Row className="blok">
                            <Col md={6}>
                                <h1 className="text-white pb-4">Hi! I am Joris</h1>
                                <h1 className="text-white">Need a new <span>design</span> for your business?</h1>
                                <h6 className="mt-2 text-white">I am a <b>student programming</b> with the knowledge of  <b>front-end development</b> and <b>graphic design.</b></h6>
                                <LinkContainer to={'/projects'}>
                                    <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">View my projects</button>
                                </LinkContainer>
                            </Col>
                            <Col sm={6}>
                                {/* <Image src={require('Path1.png')} alt="hoofd"/> */}
                            </Col>
                        </Row>
                    </Container>
                <HomeAbout/>
                <HomeProjects/>
                <HomeContact/>
            </div>
    )
}
export{Home};