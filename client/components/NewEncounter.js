import React from 'react';
import {connect} from 'react-redux';

export const NewEncounter = React.createClass({
  newEncounter: function() {
    this.props.dispatchNewEncounter(this.refs.title.value, 
                                    this.refs.description.value, 
                                    this.refs.location.value, 
                                    this.refs.encounterTime.value, 
                                    this.refs.photoUrl);
  },

  render: function() {
    return (<div className="new-encounter">
              <h2>Create new encounter</h2>
              <div>Title: <input ref="title" /></div>
              <div>Description: <input ref="description" /></div>
              <div>Location: <input ref="location" /></div>
              <div>Time of encounter: <input ref="encounterTime" /></div>
              <div>Photo URL: <input ref="photoUrl" /></div>
              <button onClick={this.newEncounter}>Add New Encounter</button>
            </div>);
  } 
});

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    dispatchNewEncounter: (title, description, location, encounterTime, photoUrl) => {
      dispatch({
        type: 'CREATE_NEW_ENCOUNTER',
        title: title,
        description: description,
        location: location,
        encounterTime: encounterTime,
        photo: photoUrl
      });
    }
  };
};

export const NewEncounterContainer = connect(mapStateToProps, mapDispatchToProps)(NewEncounter);