import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';

// Redux-Thunk
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from '../thunks';

// Selectors
import {
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from '../selectors';

// React-bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

// Styled Components
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ListHeader = styled.h3`
  margin-top: 1rem;
`;

const TodoList = ({
  incompleteTodos,
  completedTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <h1>Loading todos...</h1>;
  const content = (
    <ListWrapper>
      <h1 className='text-center'>Todo List</h1>
      <NewTodoForm />
      <ListHeader>Incomplete Todos:</ListHeader>
      <ListGroup className='border border-2'>
        {incompleteTodos.map((todo, i) => {
          return (
            <TodoListItem
              key={i}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed}
            />
          );
        })}
      </ListGroup>
      <ListHeader>Completed Todos:</ListHeader>
      <ListGroup className='border border-2'>
        {completedTodos.map((todo, i) => {
          return (
            <TodoListItem
              key={i}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed}
            />
          );
        })}
      </ListGroup>
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
