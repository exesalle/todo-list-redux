export interface ToDoType {
  id: number,
  title: string,
  isDone: boolean
}

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  IS_DONE_ITEM = 'IS_DONE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

