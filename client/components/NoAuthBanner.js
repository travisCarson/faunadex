import React from 'react';
import {connect} from 'react-redux';

export const NoAuthBanner = React.createClass({

  render: function() {
    return (
      <div className="no-auth-banner">
        <img className="faunadex-logo" src="http://vignette2.wikia.nocookie.net/farmville/images/c/c2/Deep_Sea_Manatee-icon.png" />
        <h1 className="faunadex-title">Faunadex</h1>
        <a className="share-new-encounter-link" href="/#/newencounter">Share New Encounter</a>
        <a className="logout-link" href="">Logout</a> { /* this doesn't do anything at present */ }
        <a className="user-profile-link" href="/#/userprofile">{this.props.username}</a>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return ({
    username: state.getIn(['user', 'username']),
  });
};

function mapDispatchToProps(dispatch) {
  return {

  };
}

export const NoAuthBannerContainer = connect(mapStateToProps, mapDispatchToProps)(NoAuthBanner);