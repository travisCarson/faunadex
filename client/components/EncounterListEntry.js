import React from 'react';
import {connect} from 'react-redux';
import encounterFunctions from '../lib/encounter.js';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const EncounterListEntry = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    var enc = this.props.encounter;
    var encUser = enc.get('user');
    // This logic is for the difference in data structure between api calls to /api/recentencounters
    // and /api/user/encounters
    if (encUser) {
      encUser = enc.getIn(['user', 'username']);
    } else {
      encUser = this.props.username;
    }
    return ( 
      <div className='encounter' onClick={() => this.props.goToEncounter(enc, this.context.router)}>
        <h3>{enc.get('title')}</h3>
        <img src={ enc.get('photo')} />
        <div>{enc.get('animal')}, {enc.get('location')}</div>
        <div className='encuser'>( Encountered by {encUser} )</div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    username: state.getIn(['user', 'username']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToEncounter: (enc, router) => {
      encounterFunctions.encounter({id: enc.get('id')}, (err, dbEncounter) => {
        dispatch({
          type: 'GO_TO_ENCOUNTER',
          state: {
            encounter: {
              username: enc.getIn(['user', 'username']),
              title: dbEncounter.title,
              description: dbEncounter.description,
              location: dbEncounter.location,
              photo: dbEncounter.photo,
              animal: dbEncounter.animal,
              scientificName: dbEncounter.scientificname,
              encounterTime: dbEncounter.encountertime,
              postTime: dbEncounter.posttime,
            },
          },
        });
        router.push('/encounterDetails');
      });
    },
  }
};
// Lastly, we export an object which tells what function to use to map
// the state to the props
export const EncounterListEntryContainer = connect(mapStateToProps, mapDispatchToProps)(EncounterListEntry);
