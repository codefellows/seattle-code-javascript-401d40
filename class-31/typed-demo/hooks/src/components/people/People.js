import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function People() {
  const [people, setPeople] = useState(['Jacob']);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    let person = e.target.person.value;
    setPeople([...people, person]);
    setShow(false);
  }
  const removePerson = (e) => {
    const person = e.target.value;
    /// loop thorugh and remove on click
  }

  return (
    // below is JSS
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Person</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {/* This is where our form goes */}
            <Form.Group>
              <Form.Label>Person Name</Form.Label>
              <Form.Control name="person" placeholder="Enter Name" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" type="submit">
              Save Changes
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Card style={{ width: '400px', margin: '20px' }}>
        <Card.Title>People</Card.Title>
        <Card.Body>
          <ListGroup>
            {people.map(person => <ListGroup.Item>
              {person}
              <Button value={person} onClick={removePerson}>X</Button>
            </ListGroup.Item>)}
          </ListGroup>
        </Card.Body>
        <Button onClick={handleShow}>Add a Person</Button>
      </Card>
    </>
  )
}
