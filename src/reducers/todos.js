import { ADD_TODO, DELETE_TODO, COMPLETED_TODO } from '../constants/actionTypes' 
const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]
export default function todos(state = initialState, action) {

    switch(action.type) {
        case ADD_TODO:
            return [
            {
              id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
              completed: false,
              text: action.text
            },
            ...state
          ]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case COMPLETED_TODO:
            // 注意返回的数据格式 () {}都是不一样的
            return state.map((todo) => 
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}
