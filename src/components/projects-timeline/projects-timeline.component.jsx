import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import AnanyaEngineers from "../../assets/img/projects/ananyaengineers.PNG";
import seoblog from "../../assets/img/projects/seoblog.PNG";
import task_manager from "../../assets/img/projects/task-manager.jpg";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";

import "./projects-timeline.styles.css";

export default function TimeLine() {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Smart Brain */}
          <ImageEvent date="setTrend" className="text-center" text="Set Trend" src={AnanyaEngineers} alt="">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                         
                        </ul>
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/shivaprasadgit/my-ecomersesite" target="_blank">
                SOURCE CODE
                </UrlButton>
             
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent date="14/01/2020" className="text-center" text="seoblog" src={seoblog} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>This app is used to create blogs after user sigup and make a coments on other blogs
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search through Robots</li>
                          <li>Users and Robots being fetched via API call</li>
                          <li>Usage of Redux store</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REDUX} alt="Redux" rounded className="image-style m-1"></Image> Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/shivaprasadgit/seoblog" target="_blank">
                  Source code
                </UrlButton>
             
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent date="15/12/2019" className="text-center" text="task-manager" src={task_manager} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>this project save the user data in Database login information 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Raise a Product for people to see and Vote</li>
                          <li>Delete a product</li>
                          <li>Like and Dislike a product</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DJANGO} alt="Django" rounded className="image-style m-1"></Image> Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
             
                <UrlButton href="https://github.com/shivaprasadgit/task-manager-apps" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio using Django */}
          <ImageEvent date="07/12/2019" className="text-center" text="Portfolio using Django" src={AnanyaEngineers} alt="Portfolio using Django">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first portfolio website built using Django.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Send emails</li>
                          <li>View my projects</li>
                          <li>Write a blog</li>
                          <li>Hosted using Digital ocean under www.akjfun.com</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DJANGO} alt="Django" rounded className="image-style m-1"></Image> Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DIGITAL_OCEAN} alt="Digital Ocean" rounded className="image-style m-1"></Image> Digital-Ocean
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my Portfolio website to recent one.
                          <br />
                          You can still see a video of my old portfolio by clicking on the button below.
                          <br />
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton href="" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


  {/* Project: Product_Hunt_Clone */}

  <ImageEvent date="15/12/2019" className="text-center" text="Netflix" src={AnanyaEngineers} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This website is a clone of Product Hunt built using Django.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Raise a Product for people to see and Vote</li>
                          <li>Delete a product</li>
                          <li>Like and Dislike a product</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_DJANGO} alt="Django" rounded className="image-style m-1"></Image> Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_POSTGRESQL} alt="PostgreSQL" rounded className="image-style1 m-1"></Image> PostgreSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton href="" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>









        </Events>
      </Timeline>
    </div>
  );
}
