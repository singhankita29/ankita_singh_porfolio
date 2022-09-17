import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './about.style.css'
import pic from '../../assets/img/profile/pic.jpg'
import Button from 'react-bootstrap/Button'
const About = () => {
  return (
    <div id='about'>
      <h1 className="pt-3 text-center font-details pb-3">About me</h1>
      <Container>
         <Row className="pt-3 pb-5 align-items-center">
            {/*Profile Pic*/}
            <Col xs={12} md={6}>
             <Row className="justify-content-center mb-2 mr-2">
              <Image className="profile justify-content-end" alt="profile" src={pic} thumbnail fluid />
             </Row>
            </Col>
            {/*About me*/}
            <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                 Hi there! I am <strong>&nbsp;Ankita Singh</strong>
                <br />A full Stack Developer.Learning HTML, CSS, Javascript, Node.js, React.js and keen to learn more and more. Looking forward to work in challenging environment , where i can push my limits to a greater extend.
                <br />
                <br />
                </Row>
                <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                 <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1QweGgATfykGUgQ3f8OJNt2lZDNRpc2-d/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                   <a href="https://github.com/singhankita29" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
                </Row>
            </Col>
         </Row>
      </Container>
    </div>
  );
}

export default About;
