import React from "react";

const Person = (props) => {
  return (
    <div>
      <p>Person 1 {props.name} </p>
      <p>Person 2 {props.age}</p>
    </div>
  );
};

export default Person;
