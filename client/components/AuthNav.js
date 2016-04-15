import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export const AuthNav = React.createClass({

  render: function() {
    return (
      <div className="auth-nav">
        <img className="faunadex-logo" src="http://vignette2.wikia.nocookie.net/farmville/images/c/c2/Deep_Sea_Manatee-icon.png" />
        <h1 className="faunadex-title">Faunadex</h1>
        <ul className="nav-links">
          <li className="share-new-encounter-link"><Link to="/newencounter">Share New Encounter</Link></li>
          <li className="user-profile-link"><Link to="/userprofile">{this.props.username}</Link></li>
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