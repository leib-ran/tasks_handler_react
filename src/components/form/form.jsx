import React from "react";

export default function Form(props) {
  return (
    <div>
      <h1>My Tasks List</h1>
      <input id="text_field" type="text" placeholder="New Task" />
      <button id="+" onClick={props.add}>
        +
      </button>
      <button id="del_all">Delete All</button>
      <button id="delete_Completed">Delete Completed</button>
    </div>
  );
}
