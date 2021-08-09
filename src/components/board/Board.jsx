import React from "react";
import Form from "../form/Form";

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  AddTask() {
    let textVal = document.querySelector("#text_field").value;
    console.log(textVal);
    this.setState({ text: textVal });
    // console.log(this.state.text);
  }
  render() {
    return <Form add={this.AddTask.bind(this)}></Form>;
  }
}
