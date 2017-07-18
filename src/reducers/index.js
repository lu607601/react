import { combineReducers } from 'redux'
import todos from './todo'
import visibiltyFilter from  './visibiltyFilter'
const todoApp = combineReducers({
    todos,
    visibiltyFilter
})

export default todoApp
