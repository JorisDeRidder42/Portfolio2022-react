import HomeProjects from "../Components/homeprojects";
import HomeAbout from "../Components/homeabout";
import HomeContact from "../Components/homecontact";
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { FaArrowDown  } from 'react-icons/fa';
import { CgArrowLongDown  } from 'react-icons/cg';

const Home = () => {
    return(
            <div className="bluebackground">
                <Container>
                        <Row className="midden">
                            <Col md={8}>
                                <div>
                                    <h1 className="text-white">Need a new <span>design</span> for your business?</h1>
                                    <h4 className="mt-4 text-white tekst">Front-end/Back-end/Programmer</h4>
                                    <LinkContainer to={'/projects'}>
                                        <button className="mt-4 px-5 py-3 btn btn-primary" a href="#">Explore</button>
                                    </LinkContainer>
                                    <div className="iconArrow">
                                        <CgArrowLongDown/>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="contact mt-5">
                                    <h5>Based in Belgium <br/> Get in touch for availlabillity</h5>
                                    <a href="https://www.google.be" rel="noreferrer" target="_blank">LinkedIn</a>
                                    <a href="https://www.google.be" rel="noreferrer" target="_blank">Dribbble</a>
                                    <a href="https://www.google.be" rel="noreferrer" target="_blank">Instagram</a>
                                </div>
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