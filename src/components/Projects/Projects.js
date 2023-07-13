import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container className="d-flex flex-column">
      <Row className="container d-flex flex-column">
        <h1 className="project-heading">
          My Recent <strong className="">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        </Row>
        <div class="d-flex flex-wrap justify-content-between tools p-4">
          <Link to={"/PinCode"}>
            <button class="fill">PIN Code Finder</button>
          </Link>
          <Link to={"/hartron"}>
          <button class="slide">Hartron</button>
          </Link>
          <Link to={"/products"}>
          <button class="raise"> Refurbished Laptop's</button>
          </Link>
          <Link to={"/quotes"}>
          <button class="up">Quotes</button>
          </Link>
          <Link to={"#"}>
          <button class="pulse">Available Soon</button>
          </Link>
          <button class="offset">Available Soon</button>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
