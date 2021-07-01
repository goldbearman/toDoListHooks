import React, {Component} from 'react';

import './new-tast-form.css'

export default class NewTaskForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    }

    render() {
        return (
            <form action="" onSubmit={this.onSubmit}>
                <input
                    type='text'
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={this.onLabelChange}/>
            </form>
        )
    }
}

