export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (text) => ({
  action: CREATE_TODO,
  payload: text,
});
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text) => ({
  action: REMOVE_TODO,
  payload: text,
});
