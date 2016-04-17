import React from 'react';
import {connect} from 'react-redux';
import {NavAuthContainer} from './NavAuth.js';
import {NavNoAuthContainer} from './NavNoAuth.js';

export const Nav = React.createClass({
  render: function() {
    return (
      <header>
        <img src="/images/manatee.png" />
        <h1>Faunadex</h1>
        <h2>Gotta encounter em all!</h2>
      <nav>
        {this.props.nav}
      </nav>
      </header>
    );
  }
});

function mapStateToProps(state) {
  var nav = <NavNoAuthContainer />;
  if (state.getIn(['user', 'username'])) {
    nav = <NavAuthContainer />;
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
