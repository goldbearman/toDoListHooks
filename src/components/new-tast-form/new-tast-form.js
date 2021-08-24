import React, { Component } from "react";
import NumericInput from "react-numeric-input";

import "./new-tast-form.css";

export default class NewTaskForm extends Component {
  state = {
    label: "",
    min: "",
    sec: "",
  };

  onLabelChange = (e) => {
    console.log(e.target.name);
    // switch (e.target.name) {
    //   case "task":
    //     this.setState({
    //       label: e.target.value,
    //     });
    //     break;
    //   case "min":
    //     this.setState({
    //       min: e.target.value,
    //     });
    //     break;
    //   case "sec":
    //     this.setState({
    //       sec: e.target.value,
    //     });
    //     break;
    //   default:
    //     break;
    // }
    this.setState({
      label: e.target.value,
      min: 15,
      sec: "00",
    });
  };

  onSubmit = (e) => {
    console.log("onSubmit");
    e.preventDefault();
    console.log(e.target.label);
    if (this.state.label !== undefined && this.state.label.trim() !== "") {
      // eslint-disable-next-line react/prop-types
      this.props.onItemAdded(this.state.label);
    }
    this.setState({
      label: "",
      min: "",
      sec: "",
    });
  };

  render() {
    return (
      <>
        <form className="task-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            name="task"
            placeholder="Task"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
            // defaultValue={this.state.sec}
          />
        </form>
        <NumericInput
          type="number"
          style={false}
          className="new-todo task"
          name="min"
          placeholder="Min"
          min={0}
          max={60}
          maxLength={2}
          // onChange={this.onLabelChange}
          value={this.state.min}
          // defaultValue={this.state.sec}
        />
        <NumericInput
          style={false}
          type="number"
          className="new-todo task"
          name="sec"
          min={0}
          max={60}
          maxLength={2}
          placeholder="Sec"
          // onChange={this.onLabelChange}
          value={this.state.sec}
          // defaultValue={this.state.sec}
        />
      </>
    );
  }
}
