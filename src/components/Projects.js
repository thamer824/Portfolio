import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import proj from "../assets/img/Q.jpg";
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaBeer } from 'react-icons/fa';

import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/cal.png";
import projImg from "../assets/img/food.png";


import projImg5 from "../assets/img/C.PNG";

import projImg6 from "../assets/img/E.PNG";
import projImg7 from "../assets/img/m.PNG";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [



    {
      title: "Food Ordering app",
      description: "PHP",
      imgUrl: projImg,
      Url: "https://github.com/thamer824/iss-project"
    }
   ,
    {
      title: "Business Startup",
      description: "VueJs,NodeJs,PostgresQL,Docker",
      imgUrl: projImg1,
      Url:"https://github.com/thamer824/tamer"
    }
  
    , {
      title: "Calculator",
      description: "ReactJs,NodeJs,Express,MongoDB",
      imgUrl: projImg4,
      Url: "https://github.com/thamer824/Calculator"
    },
    {
      title: "E-commerce Website Startup",
      description: "VueJs,NodeJs,PostgresQL,Docker",
      imgUrl: projImg2,
      Url:"https://github.com/thamer824/E-commerce"
    },
    {
      title: "E-commerce website",
      description: "Design & Development",
      imgUrl: projImg3,
      Url:"https://github.com/thamer824/habitica"
    },
    {
      title: "Smu-Portal",
      description: "AngularJs,NodeJs,PostgresQL",
      imgUrl: proj,
      Url:"https://github.com/thamer824/smuportal-frontend"
    }, {
      title: "Real time Chat Application",
      description: "ReactJs,NodeJs,Express,MongoDB,SocketIO",
      imgUrl: projImg5,
      Url:"https://github.com/thamer824/ChatApp"
    },
    {
      title: "E-learning Platform",
      description: "VueJs,NodeJs,Express,MongoDB",
      imgUrl: projImg7,
      Url:"https://github.com/thamer824/tamer"
    }, ,
    {
      title: "E-commerce Website ",
      description: "ReactJs,NodeJs,PostgresQL,Docker",
      imgUrl: projImg6,
      Url:"https://github.com/thamer824/E-commerce"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> My Personal Projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">FullStack Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">School Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certifications</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                               
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <section id="experince">

                          <div className="container2 experin__d">


                            <div className="frontend">
                              <h4 className="s">Bank Management System :</h4>
                              <br />
                              <div className="content1">
                                <article className="details">


                                  <div>
                                    <small className="text1">It is a platform that allows the administrator to find all his customers as well as all the contact details relating to them, the addition of a new customer, the modification of his contact details and his removal from the list is also possible.</small></div>
                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h5>Technologies : PHP - MySql</h5>


                                </article>


                              </div>
                            </div>
                            <div className="frontend">
                              <h4 className="s">E-Learning Platform : Mindfitness</h4>
                              <div className="content1">
                                <article className="details">
                                  <div>
                                    <small className="text1">Mindfitness is a Cloud based e-learning platform that enables universities to upload the courses (In video, text or other formats) as well as upload  the grades of its students to improve their abilities and facilitate the  learning mechanism.</small></div>
                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h5>Technologies :  VueJs - NodeJs - MongoDB - Docker</h5>
                                </article>
                              </div>
                            </div>

                            <div className="frontend">
                              <h4 className="s">Web Development Project : Ponos</h4>
                              <div className="content1">
                                <article className="details">
                                  <div>
                                    <small className="text1">Ponos is web platform that is considered as marketplace for Students in fields like writing, graphic design and web development. The site helps Students find projects, communicate with clients and get paid..</small></div>
                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h5>Technologies : Wordpress</h5>
                                </article>
                              </div>
                            </div>



                            <div className="frontend">
                              <h4 className="s">Web Development Project : SMoodle</h4>
                              <div className="content1">
                                <article className="details">
                                  <div>
                                    <small className="text1">Moodle is a learning platform created to offer instructors, staff, and students a solitary reliable, secure, and integrated solution to develop individualized learning environments.</small></div>
                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h5>Technologies :  AngularJS - NodeJs - Express -MongoDB</h5>
                                </article>
                              </div>
                            </div>                     
                          </div>
                        </section>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <section >

                          <div className="container1 experin__c">


                            <div className="backend">
                              <h3>Cetification</h3>
                              <div className="content">
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <div><h4>AWS Academy Cloud Foundations</h4>
                                    <small className="text">Experinced</small></div>
                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h4>International Hackathon For Challenges Facing PWDs.</h4>

                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <div><h5>Introduction to Packet Tracer (TraceCisco Networking
                                    Academy)</h5>
                                    <small className="text">Experinced</small></div>
                                </article>


                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h4>Python for Data Science,AI & Development (coursera)</h4>

                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <div><h4>Training on React from (GoMyCode) Tunisia</h4>
                                    <small className="text">Experinced</small></div>
                                </article>
                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h4>Algorithms & Complexity (coursera)</h4>

                                </article>

                                <article className="details">
                                  <BsPatchCheckFill className="details-icon" />
                                  <h4>Ethics-technology-engineering (coursera)</h4>

                                </article>

                              </div>
                            </div>
                          </div>
                        </section>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
