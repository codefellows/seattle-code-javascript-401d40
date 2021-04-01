import React from 'react';
import useForm from '../../hooks/useForm.js';
import { Button, Form } from 'react-bootstrap';

export default function TodoForm({ addItem }) {
// eslint-disable-next-line
  const [values, handleInputChange, handleSubmit] = useForm(addItem);
 
  return (
    <>
      <h3>Add To Do Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Button variant="primary" type="submit">Add Item</Button>
      </Form>
    </>
  );
}
