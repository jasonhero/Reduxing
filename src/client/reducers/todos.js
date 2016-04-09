import { ADD_TODO } from '../actions/ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: (state.length + 1),
          completed: false
        }
      ]
    default:
      return state;
  }
}
