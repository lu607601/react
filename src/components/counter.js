import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
        this.incrementAsync = this.incrementAsync.bind(this)
    }
    incrementIfOdd () {
        if (this.props.value % 2) {
            this.props.onIncreatment()
        }
    }
    incrementAsync () {
        setTimeout(this.props.onIncreatment, 1000)
    }
    render() {
        const { value, onIncreatment, onDecreatment } = this.props
        return (
            <div>
                <p>Clicked times:<span>{value}</span></p>
                <button onClick={onIncreatment}>+</button>
                <button onClick={onDecreatment}>-</button>
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                <button onClick={this.incrementAsync}>Increment async</button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreatment: PropTypes.func.isRequired,
    onDecreatment: PropTypes.func.isRequired
}

export default Counter