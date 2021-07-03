import React, {Component} from 'react'

import './footer.css'
import PropTypes from "prop-types";



export default class Footer extends Component {

    static defaultProps = {
        filter:'all'
    }

    static propTypes = {
        filterActiveFooter: PropTypes.func,
        onToggleDone: PropTypes.func,
        clearCompleted: PropTypes.func,
        toDo:PropTypes.number,
        filter:PropTypes.string
    }


    render() {

        const {toDo,filterActiveFooter,filter,clearCompleted} = this.props

        console.log(filter + " filter")
        return (
            <footer className="footer">
                <span className="todo-count">{toDo} items left</span>
                <ul className="filters">
                    <li>
                        <button className={filter==='all'?'selected':''} onClick={()=>filterActiveFooter('all')}>All</button>
                    </li>
                    <li>
                        <button className={filter==='active'?'selected':''} onClick={()=>filterActiveFooter('active')}>Active</button>
                    </li>
                    <li>
                        <button className={filter==='completed'?'selected':''} onClick={()=>filterActiveFooter('completed')}>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed" onClick={()=>clearCompleted()}>Clear completed</button>
            </footer>
        )
    }

}

