import React from 'react';
import {connect} from 'react-redux';
import {EncounterList, EncounterListContainer} from './EncounterList';

export const UserProfile = React.createClass({
  componentDidMount: function() {
    this.props.retrieveUserEncounters(this.props.username);
  },

  render: function() {
    return (
      <div className='user-profile'>
        <h3 className='user-headline'> {this.props.username} </h3>
        <img className='user-avatar' src={this.props.avatar} />
        <p className='user-description'> {this.props.description} </p>
        <p>Recent Activity</p>
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
    },
    retrieveUserEncounters: (username) => {
      dispatch((dispatch) => {
        $.get('/api/user/encounters/' + username, (data) => {
          if (data) {
            dispatch({ type: 'SET_STATE', state: { encounters: data } });
          } else {
            dispatch({ type: 'GET_ENCOUNTERS_FAIL' });
          }
        });
      });
    }
  };
}

export const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
