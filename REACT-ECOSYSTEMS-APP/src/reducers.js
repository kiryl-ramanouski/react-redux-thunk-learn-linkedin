import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;
  const { text } = payload;
  switch (type) {
    case CREATE_TODO:
      const newTodo = {
        text: text,
        isCompeted: false,
      };
      return state.concat(newTodo);
    case REMOVE_TODO:
      return state.filter((item) => item.text !== text);
    default:
      return state;
  }
};
