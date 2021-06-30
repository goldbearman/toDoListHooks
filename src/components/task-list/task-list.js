import React from "react";
import Task from "../task/task";

import './task-list.css'

const TaskList = ({todos,onDeleted}) => {

    const elements = todos.map(item => {
        const {id} = item;

        return (
                <Task {...item} onDeleleted={()=>onDeleted(id)}/>
            );
    });

    return (
        <ul className='todo-list'>{elements}</ul>
    );
};

export default TaskList;