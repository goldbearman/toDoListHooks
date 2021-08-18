import React, { Component } from "react";
import { formatDistanceToNow, format } from "date-fns";

import "./task.css";
import PropTypes from "prop-types";

export default class Task extends Component {
  constructor() {
    super();
    this.linkTimer = 0;
  }

  state = {
    timeNow: new Date(),
    timePlay: 0,
    intevalStart: false,
  };

  componentWillUnmount() {
    clearInterval(this.linkTimer);
  }

  useInterval = () => {
    if (!this.state.intevalStart) {
      this.setState({
        intevalStart: true,
      });
      this.linkTimer = setInterval(
        () =>
          this.setState((prevState) => {
            // eslint-disable-next-line no-param-reassign
            return { timePlay: ++prevState.timePlay };
          }),
        1000
      );
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
    const { label, id, time, onDeleleted, done } = this.props;
    let className = "";
    if (done) {
      className += "completed";
      // this.usePause();
    }

    const dateNew = new Date(0, 0, 0, 0, 0, 0);
    // dateNew.setHours(0, 0, 0, 0);
    dateNew.setSeconds(this.state.timePlay);
    const data = format(dateNew, "mm:ss");
    // console.log(data);

    let classPlay = "icon-player icon-play ";
    let classPause = "icon-player icon-pause ";
    if (this.state.play) {
      classPlay += "active";
    } else classPause += "active";

    return (
      <li key={id} className={className}>
        <div className="view">
          <input
            className="toggle"
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
