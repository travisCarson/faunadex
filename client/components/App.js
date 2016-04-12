import React from 'react';
import {connect} from 'react-redux';
import {EncounterList, EncounterListContainer} from './EncounterList';

export const App = React.createClass({
  // TODO how do we get store?
  // TODO figure out on click events in React 
  render: function() {
    return (
      <div className='app'>
        Welcome to Faunadex!
        The user in the store is: {this.props.userName}
        <form>
        <input type='text' ref='inputForm' onChange={this.props.changeUserName}/>
          <button type='submit'>Submit</button>
        </form>
        <EncounterListContainer />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    userName: state.getIn(['user', '1', 'username'])
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

