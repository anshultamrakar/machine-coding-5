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
      <ul className='recipe_items'>
        {recipes.map(item => (
          <li>
            <img src = {item.url} width= "300" height = "300"/>
            <h5>{item.name}</h5>
            <p>Cuisine Type : {item.type}</p>
            <p>Ingredients : <span>See All</span> </p>
            <p>Instructions :  <span>See All</span> </p>
          </li>
        ))}
      </ul>
     <Button variant="primary" onClick={handleShow}>
       +
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
            Add a recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
