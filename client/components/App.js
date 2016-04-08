import {connect} from 'react-redux';
import React from 'react';

export const App = React.createClass({
  render: function() {
    return (<div>
      Welcome to Faunadex!
      The user in the store is: {this.props.userName}
    </div>);
  }
});

function mapStateToProps(state) {
  return {
    userName: state.getIn(['user', 'name'])
  };
}

export const AppContainer = connect(mapStateToProps)(App);

