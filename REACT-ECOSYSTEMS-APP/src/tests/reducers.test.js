import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todos reducer', () => {
  it('Adds a new todo when CREATE_TODO action is received', () => {
    const fakeTodo = {
      text: 'Fake Todo',
      isCompleted: false,
    };
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: { todo: fakeTodo },
    };
    const originalState = { isLoading: false, data: [] };
    const expectedState = {
      isLoading: false,
      data: [fakeTodo],
    };
    const actualState = todos(originalState, fakeAction);
    expect(actualState).to.deep.equal(expectedState);
  });
});
