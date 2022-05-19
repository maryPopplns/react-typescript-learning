import React from 'react';

type inputProps = {
  value: String,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

export default function Input(props: inputProps) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
  }
  return (
    <input type='text' onChange={handleInputChange} value={props.value}></input>
  );
}
