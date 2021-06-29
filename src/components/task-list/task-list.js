import React from "react";
import Task from "../task/task";



const TaskList = ({todos}) => {

    const elements = todos.map(item => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className='list-group-item'>
                <Task {...itemProps}/>
            </li>);
    });

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};

export default TaskList;