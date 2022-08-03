import React from 'react';

// Components
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div className='list-wrapper'>
      {todos.map((todo) => {
        <TodoItem todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
