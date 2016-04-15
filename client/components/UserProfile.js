import React from 'react';
import {connect} from 'react-redux';
import {EncounterList, EncounterListContainer} from './EncounterList';

export const UserProfile = React.createClass({
  render: function() {
    return (
      <div className='user-profile'>
        <h3 className='user-headline'> {this.props.userName} </h3>
        <img className='user-avatar' src={this.props.avatar} />
        <p className='user-description'> {this.props.description} </p>
        <p>Recent Activity</p>
        <div>
          <EncounterListContainer username='userName' />
        </div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    userName: state.getIn(['user', 'username']),
    avatar: state.getIn(['user', 'avatar']),
    description: state.getIn(['user', 'description']),
  }
}

export const UserProfileContainer = connect(mapStateToProps)(UserProfile);