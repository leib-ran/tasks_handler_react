import React from "react";

export default function Task(props) {
  return (
    <div className="row">
      <span className="text">{props.text}</span>
      <button className="v-button">&#10004;</button>
    </div>
  );
}
