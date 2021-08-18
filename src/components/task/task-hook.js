import React, { Component } from "react";
import { formatDistanceToNow, format } from "date-fns";

import "./task.css";
import PropTypes from "prop-types";

const TaskHook = () =>{

  const [timeNow, setTimeNow] = useState(new Date());
  const [timePlay, setTimePlay] = useState(0);
  const [play, setPlay] = useState(false);
  const [intevalStart, setIntevalStart] = useState(false);

  const useInterval = () => {
    if (!intevalStart) {
      setPlay(true);
      setIntevalStart(true);
      let time = this.state.timePlay;
      this.linkTimer = setInterval(
        () =>
          this.setState({
            timePlay: ++time,
          }),
        1000
      );
    }
  };





};