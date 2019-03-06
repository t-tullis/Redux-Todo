import { ADD_TODO, TOGGLE_TODO } from '../actions/todoActions'

const initialState = {
    todos: [
      { task: 'Cook', completed: false, id: 4192938 },
      { task: 'Clean', completed: false, id: 76391287}
    ]
  };

  function reducer(state = initialState, action){
      console.log(action)
    switch(action.type){
        case ADD_TODO:
            const newTodo = {
                task: action.payload,
                id: Date.now(),
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
        };
        case TOGGLE_TODO:
        return{
            ...state,
            todos: state.todos.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        }
        default:
        return state;
    }
}

  export default reducer;