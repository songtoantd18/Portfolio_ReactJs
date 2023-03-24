import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/77.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an Automatic Production engineer, graduated from Da Nang
              University of Science and Technology. I want to switch to
              Information Technology for a better life. I know it will be
              difficult to change majors ,for me nothing is impossible.
              <b className="purple"> NO PRESSURE NO DIAMONDS </b>
              Whenever possible, I also apply my passion for developing products
              with Javascript and Modern Javascript Library and Frameworks like
              React.js
              <br />
              {/* <br />I want to switch to
              <i>
                <b className="purple"> Information Technology </b>
              </i> */}
              {/* <br />
              <br />
              for a better life. I know it will be difficult to change majors
              ,for me nothing is impossible. &nbsp;
              <i>
                <b className="purple"> NO PRESSURE NO DIAMONDS </b>{" "}
                <b className="purple"></b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Javascript</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/songtoantd18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/song-to%C3%A0n-nguy%E1%BB%85n-6356b122b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/nguyensong.toan.33/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
