import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const User = React.createClass({
  
  render: function() {
    return <div>
      Username: {this.props.userName} <br />
      And his description is {this.props.descr}
    </div>;
  }
});

// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
function mapStateToProps(state) {
  return {
    userName: state.getIn(['user', 'name']),
    descr: state.getIn(['user', 'description']),

  };
}

// Lastly, we export an object which tells what function to use to map
// the state to the props
export const UserContainer = connect(mapStateToProps)(User);