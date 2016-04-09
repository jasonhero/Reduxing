import { API_CALL } from '../middleware/api';

export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function getRandomTodo() {
  return (dispatch) => {
    return API_CALL().then(text => {
      dispatch(addTodo(text));
    })
  }
}
