import {connect} from 'react-redux';
import React from 'react';

export const App = React.createClass({
  // TODO how do we get store?
  // TODO figure out on click events in React 
  render: function() {
    return (<div>
      Welcome to Faunadex!
      The user in the store is: {this.props.userName}
      <form>
      <input type='text' ref='inputForm' onChange={this.props.changeUserName}/>
        <button type='submit'>Submit</button>
      </form>
    </div>);
  }
});

function mapStateToProps(state) {
  return {
    userName: state.getIn(['user', 'name'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeUserName: (event) => {
      dispatch({
        type: 'CHANGE_USER_NAME',
        username: event.target.value 
      })
    }
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

