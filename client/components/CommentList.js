import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const CommentList = React.createClass({

  newComment: function(encounterid, username, commentBody) {
    var newComment = {
      encounterid: encounterid,
      username: state.getIn(['user', 'username']),
      commentBody: text,
    };
    $.post('/api/posts', newComment, (err, data) => 
      if (data) {
        this.getComments();
      }
    )
  },
  getComments: function() {
    $.get('/api/posts/' + state.getIn(['encounter', 'id']), (err, data) => {
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
        {this.props.comments.map(comment =>
          <CommentListContainer comment={comment} />
        )}
        <input ref="commentBody" />
        <button onClick={() => this.newComment(this.props.username, this.refs.commentBody.value)} />
      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    username: state.getIn(['user', 'username']),
    encounterid: state.getIn(['encounter', 'id']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchEncounterComments: (data) => {
      dipatch((dispatch) => {
        dispatch({
          type: "GET_ALL_COMMENTS",
          comments: data,
        });
      }
    }
  };
}

export const CommentListContainer = connect(mapStateToProps, mapDispatchToProps)(CommentList);