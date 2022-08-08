import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';

// Redux-Thunk
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from '../thunks';

// React-bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({
  todos = [],
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
      <ListGroup className='border border-2'>
        {todos.map((todo, i) => {
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
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
