import React from "react";

import "./footer.css";
import PropTypes from "prop-types";

const Footer = ({ toDo, filterActiveFooter, filter, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <ul className="filters">
        <li>
          <button
            className={filter === "all" ? "selected" : ""}
            onClick={() => filterActiveFooter("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === "active" ? "selected" : ""}
            onClick={() => filterActiveFooter("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === "completed" ? "selected" : ""}
            onClick={() => filterActiveFooter("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  toDo: 0,
  filter: "all",
};

Footer.propTypes = {
  toDo: PropTypes.number,
  filter: PropTypes.string,
  clearCompleted: PropTypes.func,
  filterActiveFooter: PropTypes.func,
};

export default Footer;
