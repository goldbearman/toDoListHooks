import React from 'react';
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header/app-header";
import NewTaskForm from "./components/new-tast-form/new-tast-form";
import TaskList from "./components/task-list/task-list";


import './index.css'

const App = () => {

    const todoData = [
        {label: 'Drink Coffee',important:false, id:1},
        {label: 'Make awesome App',important:false, id:2},
        {label: 'Have a lunch',important:false, id:3},
    ];

    return (
        <section className="todoapp">
            <header class="header">
                <AppHeader/>
                <NewTaskForm/>
            </header>
            <section className="main">

                <TaskList todos={todoData} />

            </section>
        </section>
    );
};


ReactDOM.render(
    <App/>
    , document.getElementById('root'));
