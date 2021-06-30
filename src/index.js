import React, {Component} from 'react';
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header/app-header";
import NewTaskForm from "./components/new-tast-form/new-tast-form";
import TaskList from "./components/task-list/task-list";
import Footer from "./components/footer/footer";


import './index.css'

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink C', important: false, id: 1},
            {label: 'Make awesome App', important: false, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
        ]
    }

    // onCheckBoxClick = () => {
    //     this.setState(({todoData})=>{
    //         console.log(todoData)
    //     });
    // }


    deleteItem = (id) => {
        // const {todoDate} = this.state;
        this.setState(({todoData}) => {
            const idx =todoData.findIndex(el => el.id === id);

            // todoDate.splice(idx, 1);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1);

            const newArray = [...before, ...after];

            return {
                todoDate: newArray
            }
        })
    }

    render() {
        return (
            <section className="todoapp">
                <header class="header">
                    <AppHeader/>
                    <NewTaskForm/>
                </header>
                <section className="main">

                    <TaskList todos={this.state.todoData} onDeleted={this.deleteItem}/>
                    <Footer/>
                </section>
            </section>
        );
    }
};


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
