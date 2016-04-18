import React from 'react';
import {connect} from 'react-redux';
import auth from '../lib/auth.js';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.

export const SignIn = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  signIn: function(e) {
    e.preventDefault();
    this.props.dispatchSignIn(this.refs.username.value, this.refs.password.value, this.context.router);
  },

  render: function() {
    return <form className='sign-in'>
      <h2>Sign In</h2>
      <div>Username: <input id="username" ref="username" /></div>
      <div>Password: <input id="password" ref="password" /></div>
      <button onClick={this.signIn}>Sign In</button>
    </form>;
  }
});

// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
function mapStateToProps(state) {
  return {
    username: state.getIn(['user', 'username']),
    descr: state.getIn(['user', 'description']),
  };
}

// There is also a function for mapping functions to the dispatching of actions
function mapDispatchToProps(dispatch) {
  return {
    dispatchSignIn: (username, password, router) => {
      dispatch((dispatch) => {
        dispatch({ type: 'SIGN_IN_ATTEMPT' });
        auth.login(username, password, function(err, data) {
          if (!err && data.type === 'USER') {
            console.log('got back username: ', data.user.username);
            dispatch({ type: 'SET_STATE', state: { user: data.user } });
            router.push('/');
            return;
          } else {
            var message = '';
            if (!err) { message = data.error; }
            dispatch({ type: 'SIGN_IN_FAIL', message });
          }
        });
      });
    }
  };
}
// Lastly, we export an object which tells what function to use to map
// the state to the props
export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);
