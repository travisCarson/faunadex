import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.

export const Picture = React.createClass({
  render: function() {
    return <div className='picture'>
      <img src={props.url} />
    </div>;
  }
});

// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
function mapStateToProps(state) {
  return {
    descr: state.getIn(['user', 'description']),
  };
}

// Lastly, we export an object which tells what function to use to map
// the state to the props
export const PictureContainer = connect(mapStateToProps)(Picture);
