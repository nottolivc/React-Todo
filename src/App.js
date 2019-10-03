import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  class App extends React.Component {
    constructor() {
      super()
      // State for our class component is one object, unlike split state w hooks
      this.state = {
        items: TodoList
      }
    }
  
    toggleItem = (event, itemId) => {
      event.preventDefault()
  
      this.setState({
        items: this.state.items.map(item => {
          if (item.id === itemId) {
            return {
              ...item, // merge existing item with new values below
              completed: !item.completed
            }
          } else {
            return item
          }
        })
      })
    }
  
    clearCompleted = event => {
      event.preventDefault()
  
      this.setState({
        // filter out all items
        items: this.state.items.filter(item => {
          return !item.completed
        })
      })
    }
  
    addItem = (event, itemName) => {
      const newItem = {
        id: Date.now(),
        name: itemName,
        completed: false
      }
  
      this.setState({
        items: [newItem, ...this.state.items]
      })
    }
  
    render() {
      return (
        <div className="App">
          <div className="header">
            <h1>Welcome to Your Todo List!</h1>
            <br />
            </div>
            <div className="container">
            <div className="input-box">
            <br />
            <TodoForm addItem={this.addItem} />
            </div>
  
          <div className="todo-list">
            {this.state.items.map(item => (
              <Todo
                key={item.id}
                item={item}
                onClick={(e) => this.toggleItem(e, item.id)}
              />
            ))}
  
            <button className="clear-btn" onClick={this.clearCompleted}>
              Reset List
            </button>
          </div>
        </div>
      </div>
      );
    }
  }
  
export default App;
