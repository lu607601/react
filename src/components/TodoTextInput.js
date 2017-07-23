import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoTextInput extends Component {
    static props = {
        addTodo: PropTypes.func.isRequired,
        text: PropTypes.string,
        newTodo: PropTypes.bool
    }
    state = {
        text: this.props.text || 'statetxt'
    }
    handleSave = e => {
        var text = e.target.value
        if (text.length !==0 && !this.props.newTodo ) {
            this.props.addTodo(text)
        }
    }
    handleChange = e => {
        this.setState({ text: e.target.value })
    }
    handleSubmit = e => {
        var text = e.target.value
        if (e.which === 13) {
            this.props.addTodo(text)
            if (this.props.newTodo) {
                this.setState({ text: '' })
            }
        }
    }
    render () {
        return (
            <input type='text'
                placeholder='input'
                autoFocus='true'
                value={this.state.text}
                onBlur={this.handleSave}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit} />
        )
    }
}
