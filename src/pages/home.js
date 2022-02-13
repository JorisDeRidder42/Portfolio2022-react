import HomeProjects from "../Components/homeprojects";
import HomeAbout from "../Components/homeabout";
import HomeContact from "../Components/homecontact";
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

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
                                {/* <image src="../assets/profiel.jpg" className="img-fluid" alt="hoofd"/> */}
                            </Col>
                            <div className="mouse"></div>
                        </Row>
                    </Container>
                <HomeAbout/>
                <HomeProjects/>
                <HomeContact/>
            </div>
    )
}
export{Home};