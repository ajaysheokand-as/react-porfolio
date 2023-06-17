import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AjAySHEOKAND.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import { Banner } from "../Banner/Banner";
import '../Tools/ToolStyles.css';
import { Quote } from "../Tools/Quote/Quote";
function Home() {
  return (
    <>
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AjAy SHEOKAND</strong>
              </h1>

              <p className="heading-description blockquote">
                I am passionate about using Javascript and Animation Libraries
                to create awesome user experiences. With over five years of
                experience developing web applications using the latest
                front-end and back-end technologies.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    <div className="mt-2">
      {/* <div className="row">
      <div className="col-12"><Banner/></div>
      </div> */}
      
        <div className="d-flex justify-content-center m-4 row">
        <div className="col-sm-12 col-md-6 mb-2">
        <Banner/>
            </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <Quote/>
            </div>
          </div>
    
    </div>
    </>
  );
}

export default Home;
