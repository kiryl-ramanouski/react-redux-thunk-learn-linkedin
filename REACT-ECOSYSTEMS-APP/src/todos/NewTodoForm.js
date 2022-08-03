import React, { useState } from 'react';

// React-bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewTodoForm() {
  const [inputValue, setInputValue] = useState('');
  return (
    <Form className='border border-2 p-3 mb-3'>
      <Form.Group className='mb-3'>
        <Form.Label>Todo name</Form.Label>
        <Form.Control
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Type your new todo here'
        />
        <Form.Text className='text-muted'>Add todo description</Form.Text>
      </Form.Group>
      <Button variant='primary'>Create Todo</Button>
    </Form>
  );
}

export default NewTodoForm;
