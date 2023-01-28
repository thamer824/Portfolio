import { Col } from "react-bootstrap";

import React from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
export const ProjectCard = ({ title, description, imgUrl ,Url}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <br />
          <a className="nI" href={Url}>Github Url</a>
           
        </div>
       
      </div>
     
    </Col>
  )
}
