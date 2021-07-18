import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import React from "react";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.language == "English" ? "Submitted!" : "Soumis!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          {props.language == "English" ? "Thank you! We appreciate your feedback and will take into account your thoughts to improve our services!" : "Merci! Nous apprécions vos commentaires et prendrons en compte vos réflexions pour améliorer nos services !"}
          </p>
        </Modal.Body>
        <Modal.Footer>
         <button className="button spacing" onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

const Feedback = ({language}) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="pageMargin">
            <h1>{language == "English" ? "Feedback" : "Réactions"}</h1>
            <p>{language == "English" ? "Your feedback will be anonymous. Thank you for taking the time to help improve our services!" : "Vos commentaires seront anonymes. Merci d'avoir pris le temps d'aider à améliorer nos services!"}</p>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{language == "English" ? "Comments:" : "Commentaires:"}</Form.Label>
                    <Form.Control as="textarea" rows={3} className="textArea"/>
                </Form.Group>
            </Form>

            <div className="sportPageMargin" >
            <button className="button" onClick={() => setModalShow(true)}>
                {language == "English" ? "Submit" : "Soumettre"}
            </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                language={language}
            />
            </div>
        </div>
    );
}
 
export default Feedback;