import { ADD_TODO } from '../actions/todoActions'

const initialState = {
    todos: [
      { task: 'Cook', completed: false },
      { task: 'Clean', completed: false}
    ]
  };

  function reducer(state = initialState, action){
      console.log(action)
    switch(action.type){
        case ADD_TODO:
            const newTodo = {
                task: action.payload,
                completed: false,
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