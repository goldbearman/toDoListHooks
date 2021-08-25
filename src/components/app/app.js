import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import NewTaskForm from "../new-tast-form/new-tast-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  static propTypes = {};

  state = {
    todoData: [
      // this.createToDoItem({ label: "Drink coffee" }),
      // this.createToDoItem({ label: "Make awesome App" }),
      // this.createToDoItem({ label: "Have a lunch" }),
    ],
    filter: "all",
  };

  addItem = (item) => {
    console.log(item);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, this.createToDoItem(item)];
      return {
        todoData: newArr,
        filter: "all",
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData, filter }) => {
      const newArr = todoData.filter((item) => !item.done);
      return {
        todoData: newArr,
        filter,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
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

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

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

  createToDoItem({ label, min, sec }) {
    console.log(label, min, sec);
    return {
      label,
      done: false,
      id: this.maxId++,
      time: Date.now(),
      timer: min * 60 + sec,
    };
  }

  filterActive = (filter) => {
    this.setState(({ todoData }) => {
      return {
        todoData,
        filter,
      };
    });
  };

  showItems(items) {
    switch (this.state.filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "completed":
        return items.filter((item) => item.done);
      default:
        return "all";
    }
  }

  render() {
    const toDo = this.state.todoData.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <header className="header">
          <AppHeader />
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todos={this.showItems(this.state.todoData)}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
          />
          <Footer
            toDo={toDo}
            filterActiveFooter={this.filterActive}
            filter={this.state.filter}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}
