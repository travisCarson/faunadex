import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const Comment = React.createClass({

  render: function() {
    return (
      <div className="comment">
        <p> {this.props.username} </p>
        <p> {this.props.body} </p>
      </div>   
    );
  }
};


function mapStateToProps(state) {
  return{

  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
export const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);