import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';

// Thunks
import { addTodoRequest } from '../thunks';

// React-bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewTodoForm = ({ todos, onCreatePressed }) => {
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
      <Button
        onClick={() => {
          const isDuplicateText = todos.some(
            (item) => item.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue('');
          } else {
            alert('Todo is already exist!');
          }
        }}
        variant='primary'
      >
        Create Todo
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
