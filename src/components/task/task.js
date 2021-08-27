import React, { Component } from "react";
import { formatDistance, format } from "date-fns";

import "./task.css";
import PropTypes from "prop-types";

export default class Task extends Component {
  constructor() {
    super();
    this.linkTimer = 0;
    this.timeNow = 0;
  }

  state = {
    timePlay: 0,
    intevalStart: false,
    dateInterval: 0,
  };

  componentDidMount() {
    this.timeNow = setInterval(
      () =>
        this.setState((prevState) => {
          // eslint-disable-next-line no-param-reassign
          return { dateInterval: ++prevState.dateInterval };
        }),
      60000
    );
    this.setState({
      timePlay: this.props.timer,
    });
  }

  componentWillUnmount() {
    clearInterval(this.linkTimer);
    clearInterval(this.timeNow);
  }

  setNewInterval = (item, timeSize) => {
    const timer = setInterval(
      () =>
        this.setState((prevState) => {
          // eslint-disable-next-line no-param-reassign
          return { [item]: --prevState[item] };
        }),
      timeSize
    );
    return timer;
  };

  useInterval = () => {
    if (!this.state.intevalStart) {
      this.setState({
        intevalStart: true,
      });
      this.linkTimer = this.setNewInterval("timePlay", 1000);
    }
  };

  usePause = () => {
    clearInterval(this.linkTimer);
    this.setState({
      intevalStart: false,
    });
  };

  onChecked = () => {
    this.props.onToggleDone();
    this.usePause();
  };

  finished = () => {
    clearInterval(this.linkTimer);
    return "finished";
  };

  static propTypes = {
    label: PropTypes.string,
    id: PropTypes.number,
    onDeleleted: PropTypes.func,
    done: PropTypes.bool,
    onToggleDone: PropTypes.func,
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { label, id, time, timer, onDeleleted, done } = this.props;
    let className = "todo-list__item";
    if (done) {
      className += " completed";
    }
    const dateNew = new Date(0, 0, 0, 0, 0, 0);
    dateNew.setSeconds(this.state.timePlay);
    let data = format(dateNew, "mm:ss");

    let classPlay = "icon-player icon-play ";
    let classPause = "icon-player icon-pause ";
    if (this.state.intevalStart) {
      classPlay += "active";
    } else classPause += "active";

    const da = Date.now() + this.state.dateInterval;
    if (this.state.timePlay === 0) data = this.finished();

    return (
      <li key={id} className={className}>
        <div className="task">
          <input
            className="task__toggle"
            checked={done}
            type="checkbox"
            onChange={this.onChecked}
          />
          <label className="label">
            <span className="description">{label}</span>
            <span className="player">
              <button
                className={classPlay}
                onClick={className === "completed" ? null : this.useInterval}
              ></button>
              <button className={classPause} onClick={this.usePause}></button>
              <span className="time">{timer === "0" ? "finished" : data}</span>
            </span>
            <span className="created">
              created {formatDistance(time, da)} ago
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleleted}></button>
        </div>
      </li>
    );
  }
}
