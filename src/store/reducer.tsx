import { ActionTypes, ToDoType } from '../types';

type StateType = {
  todos: ToDoType[]
}

const initialState: StateType = {
  todos: []
};

export const todoReducer = (state = initialState, action: { type: ActionTypes, payload: any }): StateType => {
  switch (action.type){
  case ActionTypes.ADD_ITEM:
    return {
      ...state,
      todos: [
        ...state.todos,
        action.payload
      ]
    };
  case ActionTypes.IS_DONE_ITEM:
    return {
      ...state,
      todos: state.todos.map((el) => ((el.id === action.payload.id)
        ? { ...el, isDone: !el.isDone }
        : el))
    };
  case ActionTypes.REMOVE_ITEM:
    return {
      ...state,
      todos: state.todos.filter((el) => (el.id !== action.payload.id))
    };
  default:
    return state;
  }
};

