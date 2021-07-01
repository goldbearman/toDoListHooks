import React, {Component} from 'react';
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header/app-header";
import NewTaskForm from "./components/new-tast-form/new-tast-form";
import TaskList from "./components/task-list/task-list";
import Footer from "./components/footer/footer";


import './index.css'

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createToDoItem('Drink C'),
            this.createToDoItem('Make awesome App'),
            this.createToDoItem('Have a lunch'),
            this.createToDoItem('Have a coffee'),
            this.createToDoItem('Have a diner'),
        ]
    }

    addItem = (text) => {

        const newItem = {
            label: text,
            important: false,
            done: false,
            id: this.maxId++
        }
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];
            return {
                todoData: newArray
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, newItem, ...after];
            return {
                todoData: newArray
            }
        })
    }

    createToDoItem(label) {
        return {
            label, important: false, done: false, id: this.maxId++
        }
    }

    filterActive = () => {
        this.setState(({todoData}) => {

            const newArray = todoData.filter(item => !item.done)
            console.log(newArray)
            return {
                todoData: newArray
            }
        })
    }


    render() {

        const toDo = this.state.todoData.filter((el) => !el.done).length;

        return (
            <section className="todoapp">
                <header className="header">
                    <AppHeader/>
                    <NewTaskForm onItemAdded={this.addItem}/>
                </header>
                <section className="main">

                    <TaskList todos={this.state.todoData}
                              onDeleted={this.deleteItem}
                              onToggleDone={this.onToggleDone}
                    />
                    <Footer toDo={toDo} filterActiveFooter={this.filterActive}/>
                </section>
            </section>
        );
    }
};

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
