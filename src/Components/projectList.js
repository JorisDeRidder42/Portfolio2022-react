import { Projects } from "../projects/projects";
import { ProjectItem } from "./projectItem";
import { Col, Row } from "react-bootstrap";
import { ProjectImage } from "./projectImage";

export const ProjectList = () => {
  return (
    <Row>
      {Projects.map((p) => (
        <Col key={p.id} className="my-4">
          <ProjectItem project={p} />
          <ProjectImage image={p} />
        </Col>
      ))}
    </Row>
  );
};
