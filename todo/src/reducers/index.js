import { ADD_TODO } from '../actions/todoActions'

const initialState = {
    todos: [
      { task: 'Cook', completed: false },
      { task: 'Clean', completered: false}
    ]
  };

  function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
        const newTodo = {
            todo: action.payload,
            id: Date.now(),
        };
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
        default:
        return state;
    }
}

  export default reducer;