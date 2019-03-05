import React, { Component } from 'react';
import Todo from './components/Todo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo />
        </header>
      </div>
    );
  }
}

export default App;
