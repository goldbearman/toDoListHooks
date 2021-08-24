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
    // this.timeNow = setInterval(
    //   () =>
    //     this.setState((prevState) => {
    //       // eslint-disable-next-line no-param-reassign
    //       return { dateInterval: ++prevState.dateInterval };
    //     }),
    //   60000
    // );
    // eslint-disable-next-line no-undef
    this.timeNow = this.setNewInterval("dateInterval", 60000);
  }

  componentWillUnmount() {
    clearInterval(this.linkTimer);
    clearInterval(this.timeNow);
  }

  setNewInterval = (item, timeSize) => {
    console.log(item);
    const timer = setInterval(
      () =>
        this.setState((prevState) => {
          // console.log(item);
          // console.log(item);
          // console.log(prevState.item);
          // eslint-disable-next-line no-param-reassign
          return { [item]: ++prevState[item] };
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
      // this.linkTimer = setInterval(
      //   () =>
      //     this.setState((prevState) => {
      //       // eslint-disable-next-line no-param-reassign
      //       return { timePlay: ++prevState.timePlay };
      //     }),
      //   1000
      // );
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

    // console.log(this.state.timePlay);
    // console.log(this.state.dateInterval);
    // console.log(time);

    const dateNew = new Date(0, 0, 0, 0, 0, 0);
    // dateNew.setHours(0, 0, 0, 0);
    dateNew.setSeconds(this.state.timePlay);
    // console.log(this.state.timePlay);
    const data = format(dateNew, "mm:ss");
    // console.log(data);

    let classPlay = "icon-player icon-play ";
    let classPause = "icon-player icon-pause ";
    if (this.state.intevalStart) {
      classPlay += "active";
    } else classPause += "active";

    const da = Date.now() + this.state.dateInterval;

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
