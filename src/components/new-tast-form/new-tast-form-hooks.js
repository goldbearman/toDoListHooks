import React, { useState } from "react";

import "./new-tast-form.css";

const NewTaskFormHooks = ({ onItemAdded }) => {
  const [label, setLabel] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  const onLabelChange = (e) => {
    switch (e.target.name) {
      case "task":
        setLabel(e.target.value);
        break;
      case "min":
        // eslint-disable-next-line no-use-before-define
        setMin(checkNun(e.target.value));
        break;
      case "sec":
        // eslint-disable-next-line no-use-before-define
        setSec(checkNun(e.target.value));
        break;
      default:
        break;
    }
  };

  const checkNun = (value) => {
    let num = value;
    if (num > 59) num = 59;
    if (num < 0) num = 0;
    return num;
  };

  const handleKeyDown = (e) => {
    if (
      e.keyCode === 107 ||
      e.keyCode === 109 ||
      e.keyCode === 187 ||
      e.keyCode === 189
    ) {
      e.preventDefault();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (label !== undefined && label.trim() !== "") {
      onItemAdded({
        label,
        min,
        sec,
      });
    }
    setLabel("");
    setMin("");
    setSec("");
  };

  return (
    <div className="task-input">
      <form className="task-input__task" onSubmit={onSubmit}>
        <input
          autoComplete="off"
          type="text"
          className="new-todo task-name"
          name="task"
          placeholder="Task"
          autoFocus
          onChange={onLabelChange}
          value={label}
        />
      </form>
      <form className="task-input__min" onSubmit={onSubmit}>
        <input
          autoComplete="off"
          type="number"
          className="new-todo time"
          name="min"
          min="0"
          placeholder="Min"
          onKeyDown={handleKeyDown}
          onChange={onLabelChange}
          value={min}
        />
      </form>
      <form className="task-input__sec" onSubmit={onSubmit}>
        <input
          autoComplete="off"
          type="number"
          className="new-todo time"
          name="sec"
          placeholder="Sec"
          onKeyDown={handleKeyDown}
          onChange={onLabelChange}
          value={sec}
        />
      </form>
    </div>
  );
};

export default NewTaskFormHooks;
