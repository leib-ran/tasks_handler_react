import React from "react";
import Form from "../form/Form";
import Task from "../tasks/tasks";

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      text:
        localStorage["tasks"] == null ? [] : JSON.parse(localStorage["tasks"]),
    };
  }

  AddTask() {
    let textVal = document.querySelector("#text_field").value;
    let arrCopy = [...this.state.text];
    this.setState({ text: arrCopy.concat(textVal) });
    console.log(arrCopy.concat(textVal));
    localStorage.setItem("tasks", JSON.stringify(arrCopy.concat(textVal)));
  }
  render() {
    return (
      <div>
        <Form add={this.AddTask.bind(this)}></Form>
        {this.state.text.map((element, index) => {
          return <Task key={index} text={element}></Task>;
        })}
      </div>
    );
  }
}
