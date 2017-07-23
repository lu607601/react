import React from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import Head from '../components/Head'
import MainSection from '../components/MainSection'

const App = ({todos, actions}) =>(
    <div>
        <Head addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions}></MainSection>
    </div>
)
App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    todos: state.todos
})
const mapDispatchProps = (dispatch)=> ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchProps
)(App)
