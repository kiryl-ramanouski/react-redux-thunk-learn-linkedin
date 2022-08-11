import React from 'react';

// React-bootstrap components
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

// Styled Components
import styled from 'styled-components';
const TodoItemContainer = styled.div``;

export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 86400000 * 5)
    ? 'none'
    : '2px solid red';

const TodoItemWarningBorder = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    getBorderStyleForDate(
      new Date(props.createdAt),
      new Date(Date.now() - 8640000 * 5)
    )};
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemWarningBorder;
  return (
    <Container createdAt={todo.createdAt}>
      <ListGroup.Item className='d-flex justify-content-between align-items-center'>
        <div>
          <h3>{todo.text}</h3>
          <p>Created at: {new Date(todo.createdAt).toLocaleDateString()}</p>
        </div>

        <ButtonGroup size='sm'>
          {todo.isCompleted ? null : (
            <Button
              onClick={() => onCompletedPressed(todo.id)}
              variant='success'
            >
              Completed
            </Button>
          )}
          <Button onClick={() => onRemovePressed(todo.id)} variant='danger'>
            Remove
          </Button>
        </ButtonGroup>
      </ListGroup.Item>
    </Container>
  );
};

export default TodoListItem;
