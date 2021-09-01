import React, { useState } from "react";

import AppHeader from "../app-header/app-header";
import NewTaskFormHooks from "../new-tast-form/new-tast-form-hooks";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

import "./app.css";

const AppHooks = () => {
  // eslint-disable-next-line no-unused-vars
  const [maxId, setMaxId] = useState(100);
  const [todoDataFilter, setTodoDataFilter] = useState({
    todoData: [],
    filter: "all",
  });

  // eslint-disable-next-line no-unused-vars
  const addItem = (item) => {
    setTodoDataFilter(({ todoData }) => {
      // eslint-disable-next-line no-use-before-define
      const newArr = [...todoData, createToDoItem(item)];
      return {
        todoData: newArr,
        filter: "all",
      };
    });
  };

  // eslint-disable-next-line no-unused-vars
  const clearCompleted = () => {
    setTodoDataFilter(({ todoData, filter }) => {
      const newArr = todoData.filter((item) => !item.done);
      return {
        todoData: newArr,
        filter,
      };
    });
  };

  // eslint-disable-next-line no-unused-vars
  const deleteItem = (id) => {
    setTodoDataFilter(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArray = [...before, ...after];
      return {
        todoData: newArray,
        filter: "all",
      };
    });
  };

  // eslint-disable-next-line no-unused-vars
  const onToggleDone = (id) => {
    console.log(id);
    setTodoDataFilter(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      console.log(idx);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArray = [...before, newItem, ...after];
      return {
        todoData: newArray,
        filter: "all",
      };
    });
  };

  // eslint-disable-next-line no-unused-vars
  const createToDoItem = ({ label, min, sec }) => {
    setMaxId((s) => s + 1);
    return {
      label,
      done: false,
      id: maxId,
      time: Date.now(),
      timer: Number(min) * 60 + Number(sec),
    };
  };

  // eslint-disable-next-line no-unused-vars
  const filterActive = (filter) => {
    setTodoDataFilter(({ todoData }) => {
      return {
        todoData,
        filter,
      };
    });
  };

  // eslint-disable-next-line no-unused-vars
  const showItems = (items) => {
    switch (todoDataFilter.filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "completed":
        return items.filter((item) => item.done);
      default:
        return "all";
    }
  };

  const toDo = todoDataFilter.todoData.filter((el) => !el.done).length;

  return (
    <section className="todoapp">
      <header className="header">
        <AppHeader />
        <NewTaskFormHooks onItemAdded={addItem} />
      </header>
      <section className="main">
        <TaskList
          todos={showItems(todoDataFilter.todoData)}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
        />
        <Footer
          toDo={toDo}
          filterActiveFooter={filterActive}
          filter={todoDataFilter.filter}
          clearCompleted={clearCompleted}
        />
      </section>
    </section>
  );
};

export default AppHooks;
