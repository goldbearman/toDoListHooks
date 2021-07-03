import React from "react";
import Task from "../task/task";
import PropTypes from 'prop-types'

import './task-list.css'

const TaskList = ({todos,onDeleted,onToggleDone,onToggleImportant}) => {

    const elements = todos.map(item => {
        const {id} = item;

        return (
                <Task {...item} onDeleleted={()=>onDeleted(id)}
                      onToggleDone={()=>onToggleDone(id)}
                      onToggleImportant={()=>onToggleImportant(id)}
                />
            );
    });

    return (
        <ul className='todo-list'>{elements}</ul>
    );
};


TaskList.defaultProps ={

}

TaskList.propTypes = {

}

export default TaskList;