import React from 'react';

// Components
import TodoList from './todos/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

// Data
const todosData = [
  { text: 'Make a cake' },
  { text: 'Make a cake' },
  { text: 'Make a cake' },
];

const App = () => {
  return (
    <div className='App'>
      <TodoList todos={todosData} />
    </div>
  );
};

export default App;
