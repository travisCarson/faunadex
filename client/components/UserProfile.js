import React from 'react';
import {connect} from 'react-redux';
import {EncounterList, EncounterListContainer} from './EncounterList';
import enc from '../lib/encounter.js';

export const UserProfile = React.createClass({
  componentDidMount: function() {
    this.props.retrieveUserEncounters(this.props.username);
  },

  render: function() {
    return (
      <div className='user-profile'>
        <h2 className='user-headline'> {this.props.username} </h2>
        <img className='user-avatar' src={this.props.avatar} />
        <p className='user-description'> {this.props.description} </p>
        <hr />
        <p>{this.props.username + "'s"} encounters:</p>
        <div>
          <EncounterListContainer encounters={this.props.encounters} />
        </div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    encounters: state.getIn(['encounters']),
    username: state.getIn(['user', 'username']),
    avatar: state.getIn(['user', 'avatar']),
    description: state.getIn(['user', 'description'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveUserEncounters: (username) => {
      dispatch((dispatch) => {
        enc.userEncounters(username, function(err, data) {
          if (data) {
            dispatch({ type: 'SET_STATE', state: { encounters: data.encounters } });
          } else {
            dispatch({ type: 'GET_ENCOUNTERS_FAIL' });
          }
        });
      });
    }
  };
}

export const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
