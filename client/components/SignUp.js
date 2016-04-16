import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.

export const SignUp = React.createClass({
  signUp: function() {
    this.props.dispatchSignUp(this.refs.username.value, this.refs.password.value);
  },

  render: function() {
    return <div className='sign-up'>
      <h2>Sign Up</h2>
      <div>Username: <input ref="username" /></div>
      <div>Password: <input ref="password" /></div>
      <button onClick={this.signUp}>Sign Up</button>
    </div>;
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
    dispatchSignUp: (username, password) => {
      dispatch({
        type: 'SIGN_UP_ATTEMPT',
        username: username,
        password: password
      });
    }
  };
}
// Lastly, we export an object which tells what function to use to map
// the state to the props
export const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

