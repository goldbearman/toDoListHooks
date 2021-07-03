import React, {Component} from 'react'

import './footer.css'


export default class Footer extends Component {



    // pressFilterActiveFooter() {
    //     // const {filterActiveFooter} = this.props
    //     // filterActiveFooter();
    //     this.props.filterActiveFooter().bind(this);
    // }

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

