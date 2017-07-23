import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
class Head extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    render () {
        const { addTodo } = this.props
        return (
            <div className='header'>
                <TodoTextInput newTodo addTodo={addTodo} />
            </div>
        )
    }
}

export default Head
