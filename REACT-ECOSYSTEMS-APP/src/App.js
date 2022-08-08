import React from 'react';

// Components
import TodoList from './todos/TodoList';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled Components
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 1rem;
`;

const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default App;
