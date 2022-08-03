import React from 'react';

// React-bootstrap components
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoListItem = ({ todo }) => {
  return (
    <ListGroup.Item className='d-flex justify-content-between'>
      <h3>{todo.text}</h3>
      <ButtonGroup size='sm'>
        <Button variant='success'>Completed</Button>
        <Button variant='danger'>Remove</Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
};

export default TodoListItem;
