import React from 'react';
import { connect } from 'react-redux';
import '../App.css'

import { addTodo, toggleTodo } from '../actions/todoActions'

class Todo extends React.Component {
    state ={
        newTodo: '',
        id: Date.now(),
        completed: false
    }

    handleChanges = e =>{
        this.setState({ newTodo: e.target.value})
    }

    addTodo = e =>{
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    toggleTodo = id => {
        this.props.toggleTodo(id)
    };

    render() {
        return (
            <div>
            <h1>TODO List</h1>
                <div className="todo-list">
                    {this.props.todos.map((todo) => {
                        return(
                            <div key={todo.id} onClick={() => this.toggleTodo(todo.id)}
                            style={ todo.completed ? { color: 'white', textDecoration: 'line-through', opacity: 0.5 } : null }>
                                <h3 className='task'>{todo.task}</h3>
                            </div>
                        )
                    }
                )}
                </div>
                <input className='todo-form'
                type="text"
                name="newTodo"
                value={this.state.newTodo}
                onChange={this.handleChanges}
                placeholder="Add New Todo"
            />
          <button className='todo-btn' onClick={this.addTodo}>Add Todo</button>
          </div>
        )
    }
}

const mapStateToProps = state => ({
todos: state.todos
})

export default connect(
    mapStateToProps,
    { addTodo, toggleTodo }
)(Todo);