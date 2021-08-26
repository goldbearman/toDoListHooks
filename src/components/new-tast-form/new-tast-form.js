import React, { Component } from "react";

import "./new-tast-form.css";

export default class NewTaskForm extends Component {
  state = {
    label: "",
    min: "",
    sec: "",
  };

  onLabelChange = (e) => {
    console.log(e.key);
    switch (e.target.name) {
      case "task":
        console.log("t");
        this.setState({
          label: e.target.value,
        });
        break;
      case "min":
        this.setState({
          min: this.checkNun(e.target.value, e),
        });
        break;
      case "sec":
        this.setState({
          sec: this.checkNun(e.target.value, e),
        });
        break;
      default:
        break;
    }
  };

  checkNun = (value) => {
    let num = value;
    if (num > 59) num = 59;
    if (num < 0) num = 0;
    return num;
  };

  handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (
      e.keyCode === 107 ||
      e.keyCode === 109 ||
      e.keyCode === 187 ||
      e.keyCode === 189
    ) {
      e.preventDefault();
    }
  };

  onSubmit = (e) => {
    console.log("onSubmit");
    e.preventDefault();
    if (this.state.label !== undefined && this.state.label.trim() !== "") {
      console.log(this.state);
      this.props.onItemAdded({
        label: this.state.label,
        min: this.checkNun(this.state.min),
        sec: this.checkNun(this.state.sec),
      });
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
        <form className="tasker" onSubmit={this.onSubmit}>
          <input
            autoComplete="off"
            type="text"
            className="new-todo task"
            name="task"
            placeholder="Task"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
        <form className="timer" onSubmit={this.onSubmit}>
          <input
            autoComplete="off"
            type="number"
            className="new-todo time"
            name="min"
            min="0"
            placeholder="Min"
            onKeyDown={this.handleKeyDown}
            onChange={this.onLabelChange}
            value={this.state.min}
          />
        </form>
        <form className="timer" onSubmit={this.onSubmit}>
          <input
            autoComplete="off"
            type="number"
            className="new-todo time"
            name="sec"
            placeholder="Sec"
            onKeyDown={this.handleKeyDown}
            onChange={this.onLabelChange}
            value={this.state.sec}
          />
        </form>
      </>
    );
  }
}
