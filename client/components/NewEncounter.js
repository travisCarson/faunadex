import React from 'react';
import {connect} from 'react-redux';

export const NewEncounter = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  newEncounter: function() {
    this.props.dispatchNewEncounter(this.props.userid,
                                    this.refs.title.value, 
                                    this.refs.description.value, 
                                    this.refs.location.value, 
                                    this.refs.encounterTime.value,
                                    this.refs.photo.value,
                                    this.context.router
                                    );
  },

  render: function() {
    return (<div className="new-encounter">
              <h2>Create new encounter</h2>
              <div>Title: <input ref="title" /></div>
              <div>Description: <input ref="description" /></div>
              <div>Location: <input ref="location" /></div>
              <div>Date of encounter:<input ref="encounterTime" /> (format: YYYY-MM-DD)</div>
              <div>Photo: <input ref="photo" /></div>
              <button onClick={this.newEncounter}>Add New Encounter</button>
            </div>);
  }
});

function mapStateToProps(state) {
  return {
    userid: state.getIn(['user', 'id']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchNewEncounter: (userid, title, description, location, encounterTime, photo, router) => {
      var encounter = {
        type: 'CREATE_NEW_ENCOUNTER',
        userid: userid,
        title: title, 
        description: description,
        location: location,
        encountertime: encounterTime,
        photo: photo
      };
      dispatch(encounter);
      router.push('/userprofile');
      $.post('/api/user/encounter', encounter);
    }
  }
}

export const NewEncounterContainer = connect(mapStateToProps, mapDispatchToProps)(NewEncounter);