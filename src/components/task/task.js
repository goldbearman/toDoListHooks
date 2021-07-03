import React, {Component} from 'react'

import './task.css'


export default class Task extends Component {

    render() {
        const {label, id,onDeleleted,onToggleDone,onToggleImportant,done} = this.props

        let className = '';
        if (done) {
            className += ' completed';
        }

        return (
            <li key={id} className={className}>
                <div className="view">
                    <input className="toggle" checked={done} type="checkbox" onClick={onToggleDone}/>
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleleted}></button>
                </div>
            </li>
        );
    }
}


