import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import React from "react";

const RegisterModal = (props) => {
    const [validated, setValidated] = useState(false);

    const [step1Visible, setstep1Visible] = useState(true);
    const [step2Visible, setstep2Visible] = useState(false);
    const [step3Visible, setstep3Visible] = useState(false);
    const [step4Visible, setstep4Visible] = useState(false);

    const [name1, setname1] = useState("");
    const [name1InV, setname1InV] = useState(false);
    const [name1V, setname1V] = useState(false);
    const [phone, setphone] = useState("");
    const [phoneInV, setphoneInV] = useState(false);
    const [phoneV, setphoneV] = useState(false);
    const [email, setemail] = useState("");
    const [emailInV, setemailInV] = useState(false);
    const [emailV, setemailV] = useState(false);
    const [dobV, setdobV] = useState(false);

    const [name2, setname2] = useState("");
    const [name2InV, setname2InV] = useState(false);
    const [name2V, setname2V] = useState(false);
    const [cardNum, setcardNum] = useState("");
    const [cardNumInV, setcardNumInV] = useState(false);
    const [cardNumV, setcardNumV] = useState(false);

    const goToStep1 = () => {
        setstep1Visible(true);
        setstep2Visible(false);
        setstep3Visible(false);
        setstep4Visible(false);
    }

    const goToStep2 = () => {
        
        setstep1Visible(false);
        setstep2Visible(true);
        setstep3Visible(false);
        setstep4Visible(false);
    }

    const goToStep3 = () => {
        let phonefilter = new RegExp(/^(\([0-9][0-9][0-9]+)\)?-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/);
        let nameFlag = false;
        let emailFlag = false;
        let phoneFlag = false;

        if (!(name1.trim() === "")) {
            setname1InV(false);
            setname1V(true);
            nameFlag = true;
        }
        else{
            setname1InV(true);
            setname1V(false);
        }
        if (!(email.trim() === "")) {
            setemailInV(false);
            setemailV(true);
            emailFlag = true;
        }
        else {
            setemailInV(true);
            setemailV(false);
        }
        if (phonefilter.test(phone)) {
            setphoneInV(false);
            setphoneV(true);
            phoneFlag = true;
        }
        else {
            setphoneInV(true);
            setphoneV(false);
        }
        if (nameFlag && emailFlag && phoneFlag){
            setstep1Visible(false);
            setstep2Visible(false);
            setstep3Visible(true);
            setstep4Visible(false);
            setValidated(true);
        }
        else{
            setdobV(true);
            setValidated(false);
        }
    }
    const successStep = () => {
        let cardNumfilter = new RegExp(/^\d{4}[\s-]\d{4}[\s-]\d{4}[\s-]\d{4}$/);
        let name2Flag = false;
        let cardNumFlag = false;

        if (!(name2.trim() === "")) {
            setname2InV(false);
            setname2V(true);
            name2Flag = true;
        }
        else{
            setname2InV(true);
            setname2V(false);
        }
        if (cardNumfilter.test(cardNum)) {
            setcardNumInV(false);
            setcardNumV(true);
            cardNumFlag = true;
        }
        else {
            setcardNumInV(true);
            setcardNumV(false);
        }

        if (name2Flag && cardNumFlag){
            setstep1Visible(false);
            setstep2Visible(false);
            setstep3Visible(false);
            setstep4Visible(true);
            setValidated(true);
        }
        else{
            setValidated(false);
        }
        
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Format: (###)-###-####
        </Tooltip>
      );

      const submitTooltip = (props) => (
        <Tooltip id="button-tooltip2" {...props}>
          Make sure all information is correct before submitting
        </Tooltip>
      );

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Container fluid className={step1Visible ? "" : "d-none"}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Step 1 of 3: Preferences
                 </Modal.Title></Container>
            <Container  fluid className={step2Visible ? "" : "d-none"}>
                <Modal.Title id="contained-modal-title-vcenter">
                   Step 2 of 3: Personal Information
                </Modal.Title></Container>
            <Container  fluid className={step3Visible ? "" : "d-none"}>
                <Modal.Title id="contained-modal-title-vcenter">
                     Step 3 of 3: Payment
                </Modal.Title></Container>
            <Container  fluid className={step4Visible ? "" : "d-none"}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Successfully Registered!
                </Modal.Title></Container>
             </Modal.Header>

        <Modal.Body>
            <Container fluid className={step1Visible ? "" : "d-none"}>
                <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Sport</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Basketball</option>
                        <option>Badminton</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Program</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Beginner Boys Lessons (Year-round)</option>
                        <option>Beginner Girls Lessons (Year-round)</option>
                        <option>Intermediate Boys Lessons (Year-round)</option>
                        <option>Intermediate Girls Lessons (Year-round)</option>
                        <option>Beginner Boys Summer Camp</option>
                        <option>Beginner Girls Summer Camp</option>
                        <option>Intermediate Boys Summer Camp</option>
                        <option>Intermediate Girls Summer Camp</option>
                    </Form.Control>
                </Form.Group>
                </Form>
            </Container>
            <Container fluid className={step2Visible ? "" : "d-none"}>
                <Form validated={validated}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control isInvalid={name1InV} isValid={name1V} onChange={(e) => setname1(e.target.value)} value={name1} type="text" placeholder="Enter Name"/>
                        <Form.Control.Feedback type="invalid">
                             Name cannot be empty.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                        
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 100, hide: 200 }}
                            overlay={renderTooltip}
                        >
                            <Form.Label>Phone Number</Form.Label>
                        </OverlayTrigger>
                        <Form.Control isInvalid={phoneInV} isValid={phoneV} onChange={(e) => setphone(e.target.value)} value={phone} type="phone" placeholder="(123)-123-1234" />
                        <Form.Control.Feedback type="invalid">
                            Invalid format. Please use format (###)-###-####.
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control isInvalid={emailInV} isValid={emailV} onChange={(e) => setemail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">
                            Invalid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="dob">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control isValid={dobV} type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                </Form>
            </Container>
            <Container fluid className={step3Visible ? "" : "d-none"}>
                <Form>

                        <Form.Group controlId="formGridName">
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control isInvalid={name2InV} isValid={name2V} onChange={(e) => setname2(e.target.value)} value={name2} type="text" placeholder="Enter Name" />
                        <Form.Control.Feedback type="invalid">
                           Name cannot be empty.
                        </Form.Control.Feedback>
                        </Form.Group>


                    <Form.Group controlId="formGridCredit">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control isInvalid={cardNumInV} isValid={cardNumV} onChange={(e) => setcardNum(e.target.value)} value={cardNum} type="text" placeholder="1234 5678 9123 4567" />
                        <Form.Control.Feedback type="invalid">
                            Card Number must be in #### #### #### #### format
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Container>
            <Container fluid className={step4Visible ? "" : "d-none"}>
                <h5>Your registration was a success! Thank you for registering with Zeplex! We will send you a confirmation email shortly.</h5>
            </Container>
        </Modal.Body>

        <Modal.Footer className="modalButtons">
            <Container fluid className={step1Visible ? "" : "d-none"}>
            <button className="button" onClick={goToStep2}>Next</button>
            </Container>
            <Container fluid className={step2Visible ? "" : "d-none"}>
            <button className="button" onClick={goToStep1}>Back</button>
            <button className="button spacing" onClick={goToStep3}>Next</button>
            </Container>
            <Container fluid className={step3Visible ? "" : "d-none"}>
            <button className="button" onClick={goToStep2}>Back</button> 
            <OverlayTrigger
                            placement="right"
                            delay={{ show: 100, hide: 200 }}
                            overlay={submitTooltip}
                        >
                           <button className="button spacing" onClick={successStep}>Submit</button>
                        </OverlayTrigger>

            </Container>
            <Container fluid className={step4Visible ? "" : "d-none"}>
            <button className="button" onClick={goToStep1}>Register Again</button>
            <button className="button spacing" onClick={props.onHide}>Close</button>
            </Container>
        </Modal.Footer>
      </Modal>
    );
    
  } 

  export default RegisterModal;