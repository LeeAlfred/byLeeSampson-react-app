import React, { useEffect, useState} from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Contact (){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (<div className="contact">
<Button variant="secondary" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p> Message me on <a href="https://www.linkedin.com/in/lee-sampson-831a6614a/" target="_blank">my Linkedin Page</a></p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    );
}


export default Contact;