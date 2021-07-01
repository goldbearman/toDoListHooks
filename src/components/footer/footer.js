import React, {Component} from 'react'

import './footer.css'


export default class Footer extends Component {



    // pressFilterActiveFooter() {
    //     // const {filterActiveFooter} = this.props
    //     // filterActiveFooter();
    //     this.props.filterActiveFooter().bind(this);
    // }

    render() {

        const {toDo,filterActiveFooter} = this.props

        return (
            <footer className="footer">
                <span className="todo-count">{toDo} items left</span>
                <ul className="filters">
                    <li>
                        <button className="selected">All</button>
                    </li>
                    <li>
                        <button onClick={filterActiveFooter}>Active</button>
                    </li>
                    <li>
                        <button>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }

}

