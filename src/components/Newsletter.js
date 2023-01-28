import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CV from "../assets/img/Cv.pdf"
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={9} xl={5}>
              <h3>Download CV<br></br> & get to know me more ...                 </h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col  md={3} xl={3}>
             
                <div className="new-email-bx">
                  
                  <a className="ne" href={CV} download>Download  </a>
                </div>
              
            </Col>
            
            
           
          </Row>
        </div>
      </Col>
  )
}
