import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    static props = {
        todo: PropTypes.object.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completedTodo: PropTypes.func.isRequired
    }
    state = {
        editing: false
    }
    render () {
        const { todo, deleteTodo, completedTodo } = this.props
        let element 
        // 如果是可编辑的
        if (this.state.editing) {
            console.log('可编辑')
        } else {
            element = (
                <div className='view'>
                    <input className='toggle'
                        type='checkbox' 
                        checked={todo.completed}
                        onChange={() => completedTodo(todo.id)}/>
                    <label>{todo.text}</label>
                    <button className='destroy'
                        onClick={() => deleteTodo(todo.id)}>
                        X
                    </button>
                </div>
            )
        }
        return (
            <li>
                {element}
            </li>
        )
    }
}
