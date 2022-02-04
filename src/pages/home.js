import HomeProjects from "../Components/homeprojects";
import { Container, Row, Col } from 'react-bootstrap';
import HomeAbout from "../Components/homeabout";
import { LinkContainer } from "react-router-bootstrap";
import HomeContact from "../Components/homecontact";

const Home = () => {
    return(
            <div className="bluebackground">
                    <Container className="hoogteHomePage">
                        <Row className="blok mt-5">
                            <Col md={6}>
                                <h1 className="text-white">Need a new <span>design</span> for your business?</h1>
                                <h6 className="mt-2 text-white tekst">Hello there, my name is <span>Joris De Ridder</span>, I am a student <b>programmer</b> with knowledge of <b>UX/UI design</b> and <b>webdevelopment</b></h6>
                                <LinkContainer to={'/projects'}>
                                    <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">View my projects</button>
                                </LinkContainer>
                            </Col>
                            <Col sm={6}>
                                {/* <Image src={require('Path1.png')} alt="hoofd"/> */}
                            </Col>
                            <div class="mouse"></div>
                        </Row>
                    </Container>
                <HomeAbout/>
                <HomeProjects/>
                <HomeContact/>
            </div>
    )
}
export{Home};