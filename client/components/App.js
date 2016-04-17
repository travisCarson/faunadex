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
        Welcome back to the Faunadex {this.props.username}!
        <h2>Recent Activity</h2>
        <EncounterListContainer encounters={this.props.recentEncounters} />
        <UserProfileContainer />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    recentEncounters: state.getIn(['recentEncounters']),
    username: state.getIn(['user', 'username']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
