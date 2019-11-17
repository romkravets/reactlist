import React from 'react';
import Header from './Header.js'
import ToDo from './ToDo.js'
import Clock from './Clock.js'
import './App.css';

class App extends React.Component {
  state = {todos: ['first','second','third']};

  onAdd = todo => this.setState({todos: [...this.state.todos, todo]});

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header title={"This is our ToDo"} onAdd={this.onAdd}/>
          <ToDo todoList={this.state.todos}/>
          <Clock/>
        </header>
      </div>
    );
  }
}

export default App;
