import React from 'react';
import {connect} from 'react-redux';

export const NoAuthNav = React.createClass({

  render: function() {
    return (
      <div className="no-auth-nav">
        <img className="faunadex-logo" src="http://vignette2.wikia.nocookie.net/farmville/images/c/c2/Deep_Sea_Manatee-icon.png" />
        <h1 className="faunadex-title">Faunadex</h1>
        <ul className="nav-links">
          <li className="share-new-encounter-link"><a href="/#/signup">Share New Encounter</a></li>
          <li className="signin-link"><a href="/#/signin">Sign in</a></li>
          <li className="signup-link"><a href="/#/signup">Sign up</a></li>
        </ul>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const NoAuthNavContainer = connect(mapStateToProps, mapDispatchToProps)(NoAuthNav);

