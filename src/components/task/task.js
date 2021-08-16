import React, { Component } from "react";
import { formatDistanceToNow, format } from "date-fns";

import "./task.css";
import PropTypes from "prop-types";

export default class Task extends Component {
  constructor() {
    super();
    this.timer = 0;
    this.intevalStart = false;
  }

  state = {
    timeNow: new Date(),
    timePlay: 0,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  useInterval = () => {
    // Your custom logic here
    if (!this.intevalStart) {
      this.intevalStart = true;
      let time = this.state.timePlay;
      this.timer = setInterval(
        () =>
          this.setState({
            timePlay: time++,
          }),
        1000
      );
    }
  };

  usePause = () => {
    clearInterval(this.timer);
    this.intevalStart = false;
  };

  tick() {
    this.setState({
      timeNow: new Date(),
    });
  }

  static defaultProps = {
    label: "The task name",
    done: false,
  };

  static propTypes = {
    label: PropTypes.string,
    id: PropTypes.number,
    onDeleleted: PropTypes.func,
    done: PropTypes.bool,
    onToggleDone: PropTypes.func,
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { label, id, time, onDeleleted, onToggleDone, done } = this.props;

    let className = "";
    if (done) {
      className += " completed";
    }

    const dateNew = new Date(0, 0, 0, 0, 0, 0);
    // dateNew.setHours(0, 0, 0, 0);
    dateNew.setSeconds(this.state.timePlay);
    const data = format(dateNew, "mm:ss");
    // console.log(data);

    return (
      <li key={id} className={className}>
        <div className="view">
          <input
            className="toggle"
            checked={done}
            type="checkbox"
            onChange={onToggleDone}
          />
          <label>
            <span className="description">{label}</span>
            <span className="player">
              <button
                className="icon-player icon-play"
                onClick={this.useInterval}
              ></button>
              <button
                className="icon-player icon-pause"
                onClick={this.usePause}
              ></button>
              <span className="time">{data}</span>
            </span>
            <span className="created">
              created {formatDistanceToNow(time, this.state.timeNow)}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleleted}></button>
        </div>
      </li>
    );
  }
}
