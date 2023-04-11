import React from 'react';

type Props = {
  title: string,
  onChange: (val: string) => void;
}

const Input = (props: Props) => {
  return (
    <>
      <input
        className="title"
        type="text"
        value={props.title}
        onChange={e => props.onChange(e.target.value)}/>
    </>
  );
};

export {Input};