import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CRUD"
              description="CRUD is the acronym for CREATE, READ, UPDATE and DELETE. These terms describe the four essential operations for creating and managing persistent data elements, mainly in relational and NoSQL databases "
              ghLink="https://github.com/songtoantd18/reactJs-fullFunction-myself"
              demoLink="https://crud-reactjs-songtoan.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Who wants to be a millionaire"
              description=" Who wants to be a millionaire is a game that adds knowledge, a
              game that combines the use of assistive rights such as skip,50/50 with music to
              increase user experience "
              ghLink="https://github.com/songtoantd18/AILATRIEUPHU"
              demoLink="http://songtoantd18_reactjs-ailatrieuphu.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Clinic Web"
              description="Clinic App is a website that helps patients register for medical examination
              schedules, view clinic information, choose hours, declare basic medical
              conditions, view available schedules, book appointments, arrange time. Also help
              doctors Doctors can manage their patients, their own schedule View information
              about pre-booked appointments, edit, cancel appointments Send mail, send
              noti¦cation messages to patients when canceling, editing appointments Can be
              edited opening hours of the clinic, Can enter the prescription for the patient after
              visiting the clinic to save the history"
              ghLink="https://github.com/05August/clinic"
              demoLink="https://clinic-tau.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
