import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export const NoAuthNav = React.createClass({

  render: function() {
    return (
      <div className="no-auth-nav">
        <img className="faunadex-logo" src="http://vignette2.wikia.nocookie.net/farmville/images/c/c2/Deep_Sea_Manatee-icon.png" />
        <h1 className="faunadex-title">Faunadex</h1>
        <ul className="nav-links">
          <li className="share-new-encounter-link"><Link to="/signup">Share New Encounter</Link></li>
          <li className="signin-link"><Link to="/signin">Sign in</Link></li>
          <li className="signup-link"><Link to="/signup">Sign up</Link></li>
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

