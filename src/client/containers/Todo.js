import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRandomTodo } from '../actions/ActionTypes';

class App extends Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    this.props.getRandomTodo();
  }
  render() {
    console.log(this.props, 'PROPIT');
    return (
      <div>
        <h3>Todo List</h3>
        <button onClick={this.addTodo}>Add Todo</button>
        {
          this.props.todos.map(todo => {
            return (
              <div>{todo.text}</div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}


export default connect( mapStateToProps, {
  getRandomTodo
})(App)
