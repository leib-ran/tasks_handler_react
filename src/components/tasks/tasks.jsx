import React from "react";

export default function Task(props) {
  return (
    <div className="flex mt-2.5">
      <span className="text bg-white w-80  ml-3 text-left pl-2">
        {props.text}
      </span>
      <button
        className="v-button bg-green-200 text-white h-7 w-8"
        onClick={props.completeTask}
      >
        &#10003;
      </button>
    </div>
  );
}
