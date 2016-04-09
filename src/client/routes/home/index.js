import React from 'react';
import Todo from '../../containers/Todo';


class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the page!</h1>
        <div className='btn'>Materialize</div>
        <Todo />
      </div>
    )
  }
}


export default Index;
