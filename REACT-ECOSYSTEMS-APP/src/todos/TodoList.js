import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from '../actions';

// Redux-Thunk
import { loadTodos } from '../thunks';

// React-bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

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
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
