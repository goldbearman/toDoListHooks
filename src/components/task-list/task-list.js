import React from "react";
import PropTypes from "prop-types";
import TaskHooks from "../task/task-hooks";
// import Task from "../task/task";

import "./task-list.css";

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id } = item;

    return (
      <TaskHooks
        key={id}
        {...item}
        onDeleleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
};

export default TaskList;
