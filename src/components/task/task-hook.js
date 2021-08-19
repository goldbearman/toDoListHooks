import React, { useState, useEffect } from "react";
import { formatDistanceToNow, format } from "date-fns";

import "./task.css";
import PropTypes from "prop-types";

const TaskHook = (label, id, time, onDeleleted, onToggleDone, done) => {
  let linkTimer = 0;
  let classPlay = "icon-player icon-play ";
  let classPause = "icon-player icon-pause ";
  const timeNow = new Date();

  // eslint-disable-next-line no-unused-vars
  const [timePlay, setTimePlay] = useState(0);
  const [intevalStart, setIntevalStart] = useState(false);

  useEffect(() => {
    return () => clearTimeout(linkTimer);
  }, []);

  const useInterval = () => {
    if (!intevalStart) {
      setIntevalStart(true);
      // eslint-disable-next-line no-param-reassign
      linkTimer = setInterval(() => setTimePlay((timer) => ++timer), 1000);
    }
  };

  const usePause = () => {
    clearInterval(this.linkTimer);
    this.setState({
      intevalStart: false,
    });
  };

  const onChecked = () => {
    onToggleDone();
    usePause();
  };

  const setClassName = () => {
    let className = "";
    if (done) {
      className += "completed";
    }
    return className;
  };

  const getDate = () => {
    const dateNew = new Date(0, 0, 0, 0, 0, 0);
    dateNew.setSeconds(this.state.timePlay);
    const data = format(dateNew, "mm:ss");
    return data;
  };

  // eslint-disable-next-line no-return-assign
  return (
    <li key={id} className={setClassName}>
      <div className="view">
        <input
          className="toggle"
          checked={done}
          type="checkbox"
          onChange={onChecked}
        />
        <label className="label">
          <span className="description">{label}</span>
          <span className="player">
            <button
              className={intevalStart ? classPlay : (classPlay += "active")}
              onClick={setClassName === "completed" ? null : useInterval}
            ></button>
            <button
              className={!intevalStart ? (classPause += "active") : classPause}
              onClick={usePause}
            ></button>
            <span className="time">{getDate}</span>
          </span>
          <span className="created">
            created {formatDistanceToNow(time, timeNow)}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleleted}></button>
      </div>
    </li>
  );
};

TaskHook.propTypes = {
  label: PropTypes.string,
  id: PropTypes.number,
  onDeleleted: PropTypes.func,
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
};

export default TaskHook;
