import React from 'react';

// React-bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos }) => {
  return (
    <div className='d-flex flex-column mb-3'>
      <h1 className='text-center'>Todo List</h1>
      <NewTodoForm className='mb-3' />
      <ListGroup className='border border-2'>
        {todos.map((todo, i) => {
          return <TodoListItem key={i} todo={todo} />;
        })}
      </ListGroup>
    </div>
  );
};

export default TodoList;
