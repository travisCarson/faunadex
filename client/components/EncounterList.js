import React from 'react';
import {connect} from 'react-redux';
import {EncounterListEntry, EncounterListEntryContainer} from './EncounterListEntry';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const EncounterList = React.createClass({
  
  render: function() {
    return (
      <div className='encounter-list'>
        {this.props.encounters.map(encounter =>
          // I don't know what to pass in below so I just put encounter
          <EncounterListEntryContainer key={encounter.get('id')} encounter={encounter} />
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
  };
}

// Lastly, we export an object which tells what function to use to map
// the state to the props
export const EncounterListContainer = connect(mapStateToProps)(EncounterList);
