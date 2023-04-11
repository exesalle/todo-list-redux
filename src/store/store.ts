import { combineReducers, legacy_createStore as createStore } from 'redux';
import { todoReducer } from './reducer';

const rootReducer = combineReducers({
  todoReducer
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;