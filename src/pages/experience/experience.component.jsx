import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src="https://logicrefine.files.wordpress.com/2020/03/logicrefine-logo-25.jpg" alt="Logic Refine logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Title className="text-center">Uniqon Consulting Ltd</Card.Title>

                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Domain:</strong> Full Stack Developer
                    <br/>
                    <strong>Project Name:</strong> V_Doctors
                    <br/>
                    <strong>Description:</strong> 
                    <br/>
                    <strong>Technology:</strong>ReactJs,NodeJs,ExpressJS,MongoDB
                    <br/>
                    <strong>Duration:</strong> June 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
