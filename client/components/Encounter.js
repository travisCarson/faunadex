import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const Encounter = React.createClass({
  
  render: function() {
    // <div onClick={this.props.goToEncounter}>Synopsis: {this.props.encounter}</div>
    var enc = this.props.encounter;
    return ( 
      <div className='encounter'>
        <div>User: {this.props.username}<div>
        <div>Title: {enc.get('title')}</div>
        <div>Description: {enc.get('description')}</div>
        <div>Location: {enc.get('location')}</div>
        <div>Encounter Time: {enc.get('encounterTime')}</div>
        <div>Post Time: {enc.get('postTime')}</div>
        <hr />
      </div>
    );
  }
});

// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
function mapStateToProps(state) {
  return {
    username: state.getIn(['user', 'username']),
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
export const EncounterContainer = connect(mapStateToProps, mapDispatchToProps)(Encounter);
