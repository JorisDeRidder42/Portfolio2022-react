import HomeProjects from "../Components/homeprojects";
import HomeAbout from "../Components/homeabout";
import HomeContact from "../Components/homecontact";
import { Container, Row, Col } from "react-bootstrap";
import Link from "react-scroll/modules/components/Link";

const Home = () => {
  return (
    <div className="home bluebackground">
      <Container className="mt-5">
        <Row className="midden">
          <Col md={8}>
            <div>
              <h5 className="mt-">Hallo, mijn naam is Joris</h5>
              <h1>
                Ik <span>bouw</span> spullen voor het web
              </h1>
              <p className="mt-4">
                Ik ben een student programmeren te <strong>Thomas More </strong>
                die gespecialiseerd is in het bouwen van uitzonderlijke digitale
                ervaringen.
              </p>
              <Link to="projects" offset={-120} duration={500}>
                <button
                  className="mt-4 px-5 py-3 btn btn-outline-primary"
                  href="#"
                >
                  Ontdek
                </button>
              </Link>
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
