import React, { Component } from "react";

import "./new-tast-form.css";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label !== undefined && this.state.label.trim() !== "") {
      // eslint-disable-next-line react/prop-types
      this.props.onItemAdded(this.state.label);
    }
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="Task                                 Min      Second"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
