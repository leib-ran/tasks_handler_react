import React from "react";

export default function Task(props) {
  let temp = 0;
  if (props.done == "false") {
    temp = (
      <span className="text w-80 bg-white ml-2.5 mt-3 text-left pl-2">
        {props.text}
      </span>
    );
  } else {
    temp = (
      <span className="text w-80 bg-green-100 line-through ml-2.5 mt-3 text-left pl-2">
        {props.text}
      </span>
    );
  }
  return (
    <div className="row flex">
      {temp}
      <button
        className="v-button mt-3 bg-green-300 w-8 text-white"
        onClick={() => props.vBtn(props.id)}
      >
        &#10003;
      </button>
    </div>
  );
}
