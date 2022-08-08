import React from 'react';

// Components
import TodoList from './todos/TodoList';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='App'>
      <TodoList />
    </div>
  );
};

export default App;
