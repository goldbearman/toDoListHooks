import React, { Component } from "react";
import NumericInput from "react-numeric-input";

import "./new-tast-form.css";

export default class NewTaskForm extends Component {
  state = {
    // label: "",
    // min: "",
    // sec: "",
    label: "",
    min: "",
    sec: "",
  };

  onLabelChange = (e) => {
    console.log(e);
    switch (e.target.name) {
      case "task":
        console.log("t");
        this.setState({
          label: e.target.value,
        });
        break;
      case "min":
        this.setState({
          min: e.target.value,
        });
        break;
      case "sec":
        this.setState({
          sec: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  checkNun = (num) => {
    let number = num;
    console.log(number);
    if (typeof number === "string") number = 0;
    if (number > 60 || number < 0) number = 59;
    console.log(number);
    return number;
  };

  onLabelChangeMin = (value) => {
    this.setState({
      min: value,
    });
  };

  onLabelChangeSec = (value) => {
    console.log(value);
    this.setState({
      sec: value,
    });
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
          <NumericInput
            type="number"
            style={false}
            className="new-todo time"
            name="min"
            placeholder="Min"
            min={0}
            max={60}
            maxLength={2}
            onChange={this.onLabelChangeMin}
            value={this.state.min}
          />
        </form>
        <form className="timer" onSubmit={this.onSubmit}>
          <NumericInput
            style={false}
            type="number"
            className="new-todo time"
            name="sec"
            min={0}
            max={60}
            maxLength={2}
            placeholder="Sec"
            onChange={this.onLabelChangeSec}
            value={this.state.sec}
          />
        </form>
      </>
    );
  }
}
