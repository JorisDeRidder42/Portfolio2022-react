import React from "react";
import { Card } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const CardContact = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Card data-aos="fade-down" data-aos-easing="linear">
      <Card.Body>
        <ul className="contact-info">
          <li>Joris De Ridder</li>
          <li>België, Antwerpen</li>
          <li>2547 Lint</li>
          <li>0492/64.13.23</li>

          <li>
            <a className="mail" href="mailto:Joris.42@hotmail.com">
              Joris.42@hotmail.com
            </a>
          </li>
          <li className="icons">
            <a
              href="https://www.linkedin.com/in/joris-de-ridder-800363193/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/jorisdrdesign/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/JorisDeRidder42"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};
