import HomeProjects from "../Components/homeprojects";
import HomeAbout from "../Components/homeabout";
import HomeContact from "../Components/homecontact";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  const moveMouse = (event) => {
    const pointerX = event.pageX;
    const pointerY = event.pageY;
    // console.log("pointer", pointerX, pointerY);
  };

  return (
    <div className="bluebackground" onMouseMove={moveMouse}>
      <Container>
        <Row className="midden">
          <Col md={8}>
            <div>
              <h5>Hello there, my name is Joris</h5>
              <h1>
                Let's <span>build</span> something special together!
              </h1>
              <h4 className="mt-4">
                I craft beautifull websites that are people friendly and focused
                on branding
              </h4>
              <LinkContainer to={"/projects"}>
                <button
                  className="mt-4 px-5 py-3 btn btn-outline-primary"
                  href="#"
                >
                  Explore
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
