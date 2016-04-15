import React from 'react';
import {connect} from 'react-redux';

export const AuthNav = React.createClass({

  render: function() {
    return (
      <div className="auth-nav">
        <img className="faunadex-logo" src="http://vignette2.wikia.nocookie.net/farmville/images/c/c2/Deep_Sea_Manatee-icon.png" />
        <h1 className="faunadex-title">Faunadex</h1>
        <ul className="nav-links">
          <li className="share-new-encounter-link"><a href="/#/newencounter">Share New Encounter</a></li>
          <li className="user-profile-link"><a href="/#/userprofile">{this.props.username}</a></li>
          <li className="logout-link"><a href="/api/user/signout">Logout</a></li>
        </ul>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    username: state.getIn(['user', 'username']),
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export const AuthNavContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNav);