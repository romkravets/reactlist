import React from 'react';
import Header from './Header.js'
import ToDo from './ToDo.js'
import './App.css';

function App() {
  state = {todos: ['first','second','third']};
  return (
    <div className="App">
      <header className="App-header">
        <Header title={"This is our ToDo"}/>
        <ToDo todoList={this.state.todos}/>
      </header>
    </div>
  );
}

export default App;
