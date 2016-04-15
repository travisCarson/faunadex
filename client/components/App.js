import React from 'react';
import {connect} from 'react-redux';
import {EncounterList, EncounterListContainer} from './EncounterList';
import {UserProfileContainer} from './UserProfile.js';

export const App = React.createClass({
  // TODO how do we get store?
  // TODO figure out on click events in React 
  render: function() {
    return (
      <div className='app'>
        Welcome to Faunadex!
        The user in the store is: {this.props.username}
        <form>
        <input type='text' ref='inputForm' onChange={this.props.changeUserName}/>
          <button type='submit' onClick={this.props.testAction}>Submit</button>
        </form>
        <EncounterListContainer />
        <UserProfileContainer />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    userName: state.getIn(['user', 'username']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeUserName: (event) => {
      dispatch({
        type: 'CHANGE_USER_NAME',
        username: event.target.value 
      });
    },
    testAction: (event) => {
      event.preventDefault();
      dispatch((dispatch) => {
        $.get('https://thesession.org/tunes/2?format=json', function(data) {
          console.log('got data from thesession.org');
          console.log(data);
          //We could dispatch another action here using the data we got
        });
      });
    }
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

