import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
// import UndoRedo from '../containers/UndoRedo'
import VisibilityList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibilityList />
        <Footer />
    </div>
)

export default App
