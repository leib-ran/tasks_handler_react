import React, { useLayoutEffect } from "react";
import Form from "../form/Form";
import Task from "../tasks/Tasks";

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
    let arrcopy = [...this.state.text];
    let done = [...this.state.done];
    let counter = 0;
    let size = done.length;
    for (let index = 0; index < size; index++) {
      if (done[counter] == "true") {
        done = done.slice(0, counter).concat(done.slice(counter + 1));
        arrcopy = arrcopy.slice(0, counter).concat(arrcopy.slice(counter + 1));
        --counter;
      }
      ++counter;
    }
    this.setState({ done: done, text: arrcopy });
    localStorage.setItem("done", JSON.stringify(done));
    localStorage.setItem("text", JSON.stringify(arrcopy));
  }
  signTask = function (index) {
    let doneArr = [...this.state.done];
    doneArr[index] = doneArr[index] == "false" ? "true" : "false";
    this.setState({ done: doneArr });
    localStorage.setItem("done", JSON.stringify(doneArr));
  };

  render() {
    return (
      <div>
        <Form
          add={this.addTask.bind(this)}
          delAll={this.removeAll.bind(this)}
          delcompleted={this.removecompleted.bind(this)}
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
