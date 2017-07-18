const todos = (state = [], action) => {
    // console.log('111', action)
    switch(action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
        // return state.map(todo =>
        //   (todo.id === action.id) 
        //     ? {...todo, completed: !todo.completed}
        //     : todo
        // )
            var map = state.map(todo =>
              (todo.id === action.id) 
                ? {...todo, completed: !todo.completed}
                : todo
            )
            console.log('map', map)
            return map
        default: 
            return state
    }
}

export default todos
