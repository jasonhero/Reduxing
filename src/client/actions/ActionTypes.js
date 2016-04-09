export const ADD_TODO = 'ADD_TODO';

export function Add_Todo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
