import React from 'react';

// React-bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <ListGroup>
      {todos.map((todo, i) => {
        return <TodoListItem key={i} todo={todo} />;
      })}
    </ListGroup>
  );
};

export default TodoList;
