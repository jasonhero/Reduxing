import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Add_Todo } from '../actions/ActionTypes';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props, 'PROPIT');
    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Add_Todo, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
