import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Song Toan </span>
            from <span className="purple">Da Nang,Viet Nam</span>
            <br />I am a Front-end Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football with my friend
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading book
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " I can do all things through Christ which strengtheneth me."{" "}
          </p>
          <footer className="blockquote-footer">Philippians 4:13</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
