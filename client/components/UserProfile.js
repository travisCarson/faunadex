import React from 'react';
import {connect} from 'react-redux';

export const UserProfile = React.createClass({
  render: function() {
    return (
      <div className='user-profile'>
        <h3 className='user-headline'> {this.props.userName} </h3>
        <img className='user-avatar' src={this.props.avatar} />
        <p className='user-description'> {this.props.description} </p>
        {/*
          we may want to add a list of user encounters here

          if so, then we can also include a function that opens the encounter when clicked
        */} 
      </div>
  }
});

function mapStateToProps(state) {
  return {
    userName: state.getIn(['user', 'username']),
    avatar: state.getIn(['user', 'avatar']),
    descr: state.getIn(['user', 'description']),
  }
}

export const UserProfileContainer = connect(mapStateToProps)(UserProfile);