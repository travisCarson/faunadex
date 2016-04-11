import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const Encounter = React.createClass({
  
  render: function() {
    return ( 
      <div>
        // There has to be a better way to access the information in the line below <br />
        // The line below is so bad <br />
        <span onClick={this.props.goToEncounter}>Synopsis: {this.props.encounter}</span><br />
        <span>Title: {this.props.encounter._root.entries[0][1]}</span><br />
        <span>Description: {this.props.description}</span><br />
        <span>Location: {this.props.location}</span><br />
        <span>Encounter Time: {this.props.encounterTime}</span><br />
        <span>Post Time: {this.props.postTime}</span><br />
      </div>
    );
  }
});

// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
function mapStateToProps(state) {
  return {
    // TODO don't hardcode the number 1 into the below. Make that be dynamic
    title: state.getIn(['encounters', '1', 'title']),
    description: state.getIn(['encounters', '1', 'description']),
    location: state.getIn(['encounters', '1', 'location']),
    encounterTime: state.getIn(['encounters', '1', 'encountertime']),
    postTime: state.getIn(['encounters', '1', 'posttime'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToEncounter: (event) => {
      dispatch({
        type: 'GO_TO_ENCOUNTER',
        encounter: event.target.value 
      })
    }
  };
}
// Lastly, we export an object which tells what function to use to map
// the state to the props
export const EncounterContainer = connect(mapStateToProps)(Encounter);