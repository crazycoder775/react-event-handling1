import React from "react";

const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}> {props.name} </p>
      <p> Age: {props.age}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
