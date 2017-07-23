import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Footer from './Footer'

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }
    
    state = {
        filter: SHOW_ALL
    }

    handleShow = filter => {
        this.setState({filter})
    }

    renderFooter () {
        const { filter } = this.state
        return (
            <Footer 
                filter = {filter}
                onShow = {this.handleShow} />
        )
    }

    render () {
        const { todos, actions } = this.props
        const { filter } = this.state

        const todoList = todos.filter(TODO_FILTERS[filter])

        return (
            <section className='main'>
                <ul className='todo_list'>
                    {
                        todoList.map(todo => 
                            <TodoItem key={todo.id} todo={todo} {...actions}/>
                        )
                    }     
                </ul>
                {this.renderFooter()}
            </section>
        )        
    }
}
export default MainSection
