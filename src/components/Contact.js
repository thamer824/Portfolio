import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {
  const [Values, SetValues] = useState({
    from_name: "",
    from_email: "",
    Phone: ""
  });
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }
  const toastObjetct = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  const form = useRef();
  const handleChange = (event) => {
    SetValues({ ...Values, [event.target.name]: event.target.value }); // hedhi maneha l values lkol khalihom kima houma ela l traget.name yetbadel w ywali li yktbou l user yetupdayta
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const { from_name, from_email, Phone } = Values;
    if (from_name === "" | from_name.length < 3) {
      //React-Toastify allows you to add notifications to your app with ease
      toast.error("Username is Required and must Be Valid ", toastObjetct
      );
      return false;

    }
    else if (from_email === "") {
      toast.error("Email is Required! ", toastObjetct);
      return false;
    }
    else if (Phone === "" | !(Phone.match('[0-9]{8}'))) {
      toast.error("Phone is Required! ", toastObjetct);
      return false;
    }
    emailjs.sendForm('service_l2bpf6r', 'template_l3jfmzp', form.current, 'fgxnMMV1ciCU_mql2')
      .then((result) => {
        console.log(result.text);
        toast("Email Sent Successfully", toastObjetct);
      }, (error) => {
        console.log(error.text);
        toast.error(error.text, toastObjetct);
      });
  }





  const [value, setValue] = useState()

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Lets Get In Touch ! </h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="from_name" onChange={(e) => handleChange(e)} placeholder="First Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_name" placeholder="Last Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="from_email" onChange={(e) => handleChange(e)} placeholder="Email Address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="Phone" onChange={(e) => handleChange(e)} placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message" ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                        <ToastContainer />
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
