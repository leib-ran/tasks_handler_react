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
    localStorage.setItem("tasks", JSON.stringify(arrCopy.concat(textVal)));
  }
  removeAll() {
    localStorage.setItem("tasks", "[]");
    this.setState({ text: [] });
  }

  removecompleted() {
    document.querySelectorAll("delcompleted");
  }

  render() {
    return (
      <div>
        <Form
          add={this.AddTask.bind(this)}
          delAll={this.removeAll.bind(this)}
        ></Form>
        {this.state.text.map((element, index) => {
          return <Task key={index} text={element}></Task>;
        })}
      </div>
    );
  }
}
