import React from 'react';
import {connect} from 'react-redux';
import {CommentContainer} from './Comment.js';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const CommentList = React.createClass({

  componentDidMount: function() {
    console.log('encounterid:', this.props.encounterid);
    this.getComments(this.props.encounterid);
  },

  newComment: function(commentBody) {
    var newComment = {
      encounterid: this.props.encounterid,
      userid: this.props.userid,
      message: commentBody,
    };
    $.post('/api/posts', newComment, (data) => {
      if (data) {
        this.getComments(this.props.encounterid);
      }
    });
  },

  getComments: function(encounterid) {
    console.log('/api/posts/' + encounterid);
    $.get('/api/posts/' + encounterid, (data) => {
      console.log('Getting comments, get', data, encounterid);
      if (data) {
        this.props.dispatchEncounterComments(data);
      } else {
        console.log('error retrieving comments');
      }
    });
  },

  render: function() {
    return (
      <div className="comment-list">
        {this.props.comments.map(comment => <CommentContainer comment={comment} />)}
        <input ref="commentBody" />
        <button onClick={() => this.newComment(this.refs.commentBody.value)}>Add Comment</button>
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
    userid: state.getIn(['user', 'id']),
    comments: state.get('comments'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchEncounterComments: (data) => {
      console.log('Getting comments, dispatch', data);
      dispatch((dispatch) => {
        dispatch({
          type: "GET_ALL_COMMENTS",
          comments: data.posts,
        });
      });
    }
  };
}

export const CommentListContainer = connect(mapStateToProps, mapDispatchToProps)(CommentList);
