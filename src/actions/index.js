import * as types from '../constants/actionTypes'
export const addTodo = (text) => {
    return ({
    type: types.ADD_TODO,
    text
})}

export const deleteTodo = (id) => {
    return ({
    type: types.DELETE_TODO,
    id
})}

export const completedTodo = (id) => {
    return ({
        type: types.COMPLETED_TODO,
        id
    })
}
