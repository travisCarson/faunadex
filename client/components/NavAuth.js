import React from 'react';
import {connect} from 'react-redux';
import auth from '../lib/auth.js';

export const NavAuth = React.createClass({

  render: function() {
    return (
      <ul>
        <li className="share-new-encounter-link"><a href="/#/newencounter">Share New Encounter</a></li>
        <li className="user-profile-link"><a href="/#/userprofile">{this.props.username}</a></li>
        <li className="logout-link"><a onClick={this.props.signOut} href="/#/">Signout</a></li>
      </ul>
    );
  }
});

function mapStateToProps(state) {
  return {
    username: state.getIn(['user', 'username']),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    signOut: function(e) {
      e.preventDefault();
      dispatch({ type: 'SIGNOUT'});
      $.ajaxSetup({ headers: { 'x-access-token': '' } });
      auth.signOut();
    }
  };
}

export const NavAuthContainer = connect(mapStateToProps, mapDispatchToProps)(NavAuth);

