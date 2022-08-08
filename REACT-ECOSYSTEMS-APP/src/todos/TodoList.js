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
    <div className='d-flex flex-column mb-3'>
      <h1 className='text-center'>Todo List</h1>
      <NewTodoForm />
      <h3>incomplete Todos</h3>
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
      <h3 className='mt-3'>Completed Todos</h3>
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
    </div>
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
