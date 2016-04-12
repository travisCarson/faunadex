import React from 'react';
import {connect} from 'react-redux';
import {Encounter, EncounterContainer} from './Encounter';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const EncounterList = React.createClass({
  
  render: function() {
    return (
      <div>
        {this.props.encounters.map(encounter =>
          // I don't know what to pass in below so I just put encounter
          <EncounterContainer encounter={encounter} />
        )}
      </div>
    );
  }
});

// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
function mapStateToProps(state) {
  return {
    encounters: state.get('encounters')
  };
}

// Lastly, we export an object which tells what function to use to map
// the state to the props
export const EncounterListContainer = connect(mapStateToProps)(EncounterList);
