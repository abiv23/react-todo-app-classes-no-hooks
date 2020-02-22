import React, {Component} from 'react';
import TodoList from './components/todo-list/todo-list';

class App extends Component {
  render(){
    return (
    <div className="App">
      <TodoList buttonText="submit"/>
    </div>
    )
  }
}

export default App;
