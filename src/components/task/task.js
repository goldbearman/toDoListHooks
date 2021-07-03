import React, {Component} from 'react'
import {formatDistanceToNow } from 'date-fns'

import './task.css'
import PropTypes from 'prop-types'


export default class Task extends Component {

    static defaultProps = {
        label:'The task name',
        done:false
    }

    static propTypes = {
        label:PropTypes.string,
        id:PropTypes.number,
        onDeleleted: PropTypes.func,
        done: PropTypes.bool,
        onToggleDone: PropTypes.func,
    }


    render() {
        const {label, id,onDeleleted,onToggleDone,done, time} = this.props

        let className = '';
        if (done) {
            className += ' completed';
        }

        return (
            <li key={id} className={className}>
                <div className="view">
                    <input className="toggle" checked={done} type="checkbox" onChange={onToggleDone}/>
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">{formatDistanceToNow(time, { addSuffix: true })}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleleted}></button>
                </div>
            </li>
        );
    }
}


