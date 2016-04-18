import React from 'react';
import {connect} from 'react-redux';

export const EncounterDetails = React.createClass({
  render: function() {
    var enc = this.props.encounter;
    var encounterTime = moment(enc.encounterTime, 'YYYY[-]MM[-]DD[T]hh:mm:ss[.000Z]').fromNow();
    var postTime = moment(enc.postTime, 'YYYY[-]MM[-]DD[T]hh:mm:ss[.000Z]').fromNow();
    return (
      <div className="encounter-details">
        <h3>{enc.animal}</h3>
        <div className="scientific-name">( {enc.scientificName} )</div>
        <img src={enc.photo} />
        <div className="description">{enc.description}</div>
        <div className="location">Location: {enc.location}</div>
        <div className="encounter-time">Encounter Time: {encounterTime}</div>
        <div className="post-time">Post Time: {postTime}</div>
        <div className="username">User: {enc.username}</div>
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
