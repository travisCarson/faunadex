import React from 'react';
import {connect} from 'react-redux';
import {AuthNavContainer} from './AuthNav.js';
import {NoAuthNavContainer} from './NoAuthNav.js';

export const Nav = React.createClass({

  render: function() {
    return (
      <nav className='nav'>
        {this.props.nav}
      </nav>
    );
  }
});

function mapStateToProps(state) {
  var nav = <NoAuthNavContainer />;
  if (state.getIn(['user', 'username'])) {
    nav = <AuthNavContainer />;
  }
  return {
    username: state.getIn(['user', 'username']),
    nav: nav,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);