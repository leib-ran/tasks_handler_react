import React from "react";

export default function Task(props) {
  return (
    <div className="row flex">
      <span className="text w-80 bg-white ml-2.5 mt-3 text-left pl-2">
        {props.text}
      </span>
      <button
        className="v-button mt-3 bg-green-300 w-8 text-white"
        onClick={props.completeTask}
      >
        &#10003;
      </button>
    </div>
  );
}
