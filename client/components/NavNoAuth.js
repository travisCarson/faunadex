import React from 'react';
import {connect} from 'react-redux';

export const NavNoAuth = React.createClass({

  render: function() {
    return (
      <ul>
        <li className="home-link"><a href="/#/">Home</a></li>
        <li className="share-new-encounter-link"><a href="/#/signup">Share New Encounter</a></li>
        <li className="signin-link"><a href="/#/signin">Sign in</a></li>
        <li className="signup-link"><a href="/#/signup">Sign up</a></li>
      </ul>
    );
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const NavNoAuthContainer = connect(mapStateToProps, mapDispatchToProps)(NavNoAuth);

