import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const Encounter = React.createClass({
  
  render: function() {
    return <div>
      Title: {this.props.title} <br />
      Description: {this.props.description} <br />
      Location: {this.props.location} <br />
      Encounter Time: {this.props.encounterTime} <br />
      Post Time: {this.props.postTime} <br />
    </div>;
  }
});

// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
function mapStateToProps(state) {
  return {
    title: state.getIn(['encounters', '1', 'username']),
    description: state.getIn(['encounters', '1', 'description']),
    location: state.getIn(['encounters', '1', 'location']),
    encounterTime: state.getIn(['encounters', '1', 'encountertime']),
    postTime: state.getIn(['encounters', '1', 'posttime'])
  };
}

// Lastly, we export an object which tells what function to use to map
// the state to the props
export const EncounterContainer = connect(mapStateToProps)(Encounter);