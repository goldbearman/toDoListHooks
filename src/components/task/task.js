import React, {Component} from 'react'

import './task.css'


export default class Task extends Component {

    state = {
        done: false
    }

    onCheckBoxClick = () => {
        this.setState(({done})=>{
            return {
                done: !done
            }
        });
    }

    render() {
        const {label, id,onDeleleted} = this.props
        const {done} = this.state;

        let className = '';
        if (done) {
            className += ' completed';
        }

        return (
            <li key={id} className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={this.onCheckBoxClick}/>
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


