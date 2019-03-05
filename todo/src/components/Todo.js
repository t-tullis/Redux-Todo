import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions'

class Todo extends React.Component {
    state ={
        newTodo: ''
    }

    handleChanges = e =>{
        this.setState({ newTodo: e.target.value})
    }

    addTodo = e =>{
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    render() {
        return (
            <div>
                <div className="todo-list">
                    {this.props.todos.map((todo, i) => {
                        return(
                            <div key={i}>
                                <h3>{todo.task}</h3>
                            </div>
                        )
                    }
                )}
                </div>
                <h1>Hey from TODO</h1>
                <input
                type="text"
                name="newTodo"
                value={this.state.newTodo}
                onChange={this.handleChanges}
                placeholder="Add New Todo"
            />
          <button onClick={this.addTodo}>Add Todo</button>
          </div>
        )
    }
}

const mapStateToProps = state => ({
todos: state.todos
})

export default connect(
    mapStateToProps,
    { addTodo }
)(Todo);