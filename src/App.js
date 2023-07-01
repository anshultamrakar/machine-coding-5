import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {recipes} from './fakeFetch'
import RecipieInput from './RecipieInput';
import Modal from 'react-bootstrap/Modal';


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <ul>
        {recipes.map(item => (
          <li>
            <h4>{item.name}</h4>
          </li>
        ))}
      </ul>
     <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add a recipes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RecipieInput/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
