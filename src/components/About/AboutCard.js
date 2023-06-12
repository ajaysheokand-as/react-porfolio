import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Header>
      Hi Everyone, I am <b >AjAy SHEOKAND </b>
            from <b> Narwana, Haryana India.</b>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, Nodejs, SASS, MongoDB, JavaScript, HTML5, CSS3.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Listing Podcast
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
