import React, { useLayoutEffect } from "react";
import Form from "../form/Form";
import Task from "../tasks/tasks";

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      text:
        localStorage["tasks"] == null ? [] : JSON.parse(localStorage["tasks"]),
      done:
        localStorage["done"] == null ? [] : JSON.parse(localStorage["done"]),
    };
    this.signTask = this.signTask.bind(this);
  }

  addTask() {
    let textVal = document.querySelector("#text_field").value;
    let arrCopy = [...this.state.text];
    let arrDone = [...this.state.done];
    this.setState({
      text: arrCopy.concat(textVal),
      done: arrDone.concat("false"),
    });
    localStorage.setItem("tasks", JSON.stringify(arrCopy.concat(textVal)));
    localStorage.setItem("done", JSON.stringify(arrDone.concat(["false"])));
  }
  removeAll() {
    localStorage.setItem("tasks", "[]");
    localStorage.setItem("done", "[]");

    this.setState({ text: [], done: [] });
  }

  removecompleted() {
    document.querySelectorAll("delcompleted");
  }
  signTask = function (index) {
    console.log(this);
    let doneArr = [...this.state.done];
    doneArr[index] = "true";
    this.setState({ done: doneArr });
  };

  render() {
    return (
      <div>
        <Form
          add={this.addTask.bind(this)}
          delAll={this.removeAll.bind(this)}
        ></Form>
        {this.state.text.map((element, index) => {
          return (
            <Task
              key={index}
              text={element}
              done={this.state.done[index]}
              vBtn={this.signTask}
              id={index}
            ></Task>
          );
        })}
      </div>
    );
  }
}
