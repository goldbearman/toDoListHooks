import React, {Component} from 'react'

import './task.css'


export default class Task extends Component {

    onCheckBoxClick = () => {
        console.log('Done' + this.props.label);
    }

    render() {
        const {label, important = false} = this.props

        return (
            <div className="view">
                <input className="toggle" type="checkbox" onClick={this.onCheckBoxClick}/>
                <label>
                    <span className="description">{label}</span>
                    <span className="created">created 5 minutes ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        )
    }
}


