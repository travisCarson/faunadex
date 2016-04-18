import React from 'react';
import {connect} from 'react-redux';

export const EncounterDetails = React.createClass({
  render: function() {
    var enc = this.props.encounter;
    return (
      <div className="encounter-details">
        <div className="username">User: {enc.username}</div>
        <div className="title">Title: {enc.title}</div>
        <div className="animal">Animal: {enc.animal}</div>
        <div className="scientific-name">Scientific name: {enc.scientificName}</div>
        <img className="image" src={enc.photo} />
        <div className="description">Description: {enc.description}</div>
        <div className="location">Location: {enc.location}</div>
        <div className="encounter-time">Encounter Time: {enc.encounterTime}</div>
        <div className="post-time">Post Time: {enc.postTime}</div>
      </div>
      );
  }
});

function mapStateToProps(state) {
  return {
    encounter: state.get('encounter'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export const EncounterDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(EncounterDetails);