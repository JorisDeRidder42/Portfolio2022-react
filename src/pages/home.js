import HomeProjects from "../Components/homeprojects";
import HomeAbout from "../Components/homeabout";
import HomeContact from "../Components/homecontact";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <div className="bluebackground home">
      <Container className="mt-5">
        <Row className="midden">
          <Col md={8}>
            <div>
              <h5 className="mt-">Hallo, mijn naam is Joris</h5>
              <h1>
                Een website die <span>uw organisatie</span> vooruit helpt!
              </h1>
              <p className="mt-4">
                Ik maak mooie websites die gebruiksvriendelijk zijn en gericht
                op groeien
              </p>
              <LinkContainer to={"/projects"}>
                <button
                  className="mt-4 px-5 py-3 btn btn-outline-primary"
                  href="#"
                >
                  Ontdek
                </button>
              </LinkContainer>
            </div>
          </Col>
          <Col sm={4}>
            {/* <img src="assets/3dgraphic.png" alt="blocks" /> */}
          </Col>
        </Row>
      </Container>
      <HomeAbout />
      <HomeProjects />
      <HomeContact />
    </div>
  );
};
export { Home };
