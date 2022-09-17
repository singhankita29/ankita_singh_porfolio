import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './contact-form.style.css';
const Contact= () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME HERE!</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* buttons */}
            <div className="m-2">
              <a href="mailto:ankitaaditi2903@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="ankitaaditi2903@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me Here!
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
           
            <div className="m-2">
              <a href="https://github.com/singhankita29" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Some other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default Contact;
