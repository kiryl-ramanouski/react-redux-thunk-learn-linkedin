import React from 'react';

// React-bootstrap components
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <ListGroup.Item className='d-flex justify-content-between'>
      <h3>{todo.text}</h3>
      <ButtonGroup size='sm'>
        {todo.isCompleted ? null : (
          <Button
            onClick={() => onCompletedPressed(todo.text)}
            variant='success'
          >
            Completed
          </Button>
        )}
        <Button onClick={() => onRemovePressed(todo.text)} variant='danger'>
          Remove
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
};

export default TodoListItem;
