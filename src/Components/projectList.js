import { Projects } from "../projects/projects";
import { ProjectItem } from "./projectItem";
import { Col, Row } from "react-bootstrap";
import { ProjectImage } from "./projectImage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ProjectList = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Row data-aos="fade-down">
      {Projects.map((p) => (
        <Col key={p.id} className="my-4">
          <ProjectItem project={p} />
          <ProjectImage image={p} />
        </Col>
      ))}
    </Row>
  );
};
