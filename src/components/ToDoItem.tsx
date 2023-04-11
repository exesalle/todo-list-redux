import React from 'react';

type Props = {
  title: string,
  key: number,
  isDone: boolean,
  id: number
  onCheck: (val: number) => void;
  onClick: (val: number) => void;
}

const ToDoItem = (props: Props) => {
  return (
    <>
      <div className="todo-element" key={props.key}>
        <input className="todo-text" type="checkbox" checked={props.isDone} onChange={e => props.onCheck(props.id)}/>
        <p className="todo-text">ID:{props.id}</p>
        <p className="todo-text">{props.title}</p>
        <button className="btn" onClick={(e) => props.onClick(props.id)}>remove</button>
      </div>
    </>
  );
};

export default ToDoItem;