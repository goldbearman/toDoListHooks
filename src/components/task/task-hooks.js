import React, { useState, useEffect } from "react";
import { format, formatDistance } from "date-fns";

import "./task.css";
// import PropTypes from "prop-types";

const TaskHooks = ({
  label,
  id,
  time,
  timer,
  done,
  onDeleleted,
  onToggleDone,
}) => {
  const [timePlay, setTimePlay] = useState(0);
  const [intevalStart, setIntevalStart] = useState(false);
  const [dateInterval, setDateInterval] = useState(0);
  const [linkTimer, setlinkTimer] = useState(0);
  const [timeNow, settimeNow] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const timerNow = setInterval(
      // eslint-disable-next-line no-param-reassign
      () => setDateInterval((t) => ++t),
      60000
    );
    settimeNow(timerNow);
    setTimePlay(timer);
  }, []);

  useEffect(
    () => () => {
      clearInterval(linkTimer);
      clearInterval(timeNow);
    },
    []
  );

  // eslint-disable-next-line no-unused-vars
  const useInterval = () => {
    if (!intevalStart) {
      setIntevalStart(true);
      const linkTimerPlay = setInterval(
        // eslint-disable-next-line no-param-reassign
        () => {
          // eslint-disable-next-line no-param-reassign
          setTimePlay((t) => --t);
        },
        1000
      );
      setlinkTimer(linkTimerPlay);
    }
  };

  const usePause = () => {
    clearInterval(linkTimer);
    setIntevalStart(false);
  };

  const onChecked = () => {
    onToggleDone();
    usePause();
  };

  const finished = () => {
    clearInterval(linkTimer);
    return "finished";
  };

  let className = "todo-list__item";
  if (done) {
    className += " completed";
  }
  const dateNew = new Date(0, 0, 0, 0, 0, 0);
  dateNew.setSeconds(timePlay);
  let data = format(dateNew, "mm:ss");

  let classPlay = "icon-player icon-play ";
  let classPause = "icon-player icon-pause ";
  if (intevalStart) {
    classPlay += "active";
  } else classPause += "active";

  const da = Date.now() + dateInterval;
  if (timePlay === 0) data = finished();

  return (
    <li key={id} className={className}>
      <div className="task">
        <input
          className="task__toggle"
          checked={done}
          type="checkbox"
          onChange={onChecked}
        />
        <label className="label">
          <span className="description">{label}</span>
          <span className="player">
            <button
              className={classPlay}
              onClick={className === "completed" ? null : useInterval}
            ></button>
            <button className={classPause} onClick={usePause}></button>
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
};
export default TaskHooks;
