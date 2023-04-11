import React from 'react';
import './App.css';
import {useState} from 'react';
import {Input} from './components/Input';
import ToDoItem from './components/ToDoItem';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from './store/store';
import { ActionTypes } from './types';


export const App = () => {
  const [title, setTitle] = useState('title');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  const removeTodo = (id: number) => {
    dispatch({type: ActionTypes.REMOVE_ITEM, payload: { id: id }});
  };

  const changeCheckbox = (id: number) => {
    const todo = {
      id: id,
    };
    dispatch({type: ActionTypes.IS_DONE_ITEM, payload: todo});
  };

  const onChangeHandler = (title: string) => {
    (title === '') ? setError(true) : setError(false);
    setTitle(title);
  };

  const addTodo = (title: string) => {
    const todo = {
      id: Date.now(),
      isDone: false,
      title: title
    };
    if (!title) {
      setError(true);}
    else {
      dispatch({type: 'ADD_ITEM', payload: todo});
      setTitle('');
    }
  };

  return (
    <>
      <div>
        {error && <h1>input is empty</h1>}
      </div>
      <div className="first-line">
        <Input title={title} onChange={onChangeHandler}/>
        <button className="btn" value={title} onClick={() => addTodo(title)}>Add</button>
      </div>

      {todos.map(el =>
        <ToDoItem
          key={el.id}
          title={el.title}
          id={el.id}
          isDone={el.isDone}
          onCheck={changeCheckbox}
          onClick={removeTodo}
        />
      )}
    </>
  );
};
