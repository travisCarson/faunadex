import React from 'react';
import {connect} from 'react-redux';
import {CommentListContainer} from './CommentList.js';

export const EncounterDetails = React.createClass({
  componentDidMount: function() {
    // arkiveEmbedCallback is a global variable at this moment
    // TODO somehow put arkiveEmbedCallback into this file
    // var arkiveEmbedCallback = this.arkiveEmbedCallback;
    this.props.arkiveApi(this.props.key, this.props.encounter.scientificName.toLowerCase(), this.props.id, this.props.width, this.props.height, this.props.images, this.props.text, 'arkiveEmbedCallback');
  },
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

        <CommentListContainer encounterid={ enc.id } />

      </div>
      );
  }
});

// <div id="arkiveIframe"></div>
// Next, you have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component

function mapStateToProps(state) {
  return {
    encounter: state.get('encounter'),
    key: state.getIn(['arkiveApiKey']),
    animal: state.getIn(['arkiveApiSpeciesName']),
    id: state.getIn(['arkiveApiSpeciesId']),
    width: state.getIn(['arkiveApiWidth']),
    height: state.getIn(['arkiveApiHeight']),
    images: state.getIn(['arkiveApiImages']),
    text: state.getIn(['arkiveApiText']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // the below creates a script tag, which makes the API request to the ARKive API
    // this is not ideal and a GET request would be much more managable and useful to interact
    // with React
    arkiveApi: (key, animal, animalId, width, height, imgs, text, cb) => {
      function async_load() {
        var s = document.createElement('script'); 
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://api.arkive.org/v2/embedScript/species/scientificName/' + animal
        + '?key=' + key + (animalId ? '&id=' + animalId : '') + '&mtype=all&w='
        + width + '&h=' + height + '&tn=' + (imgs ? 1 : 0) + '&text='
        + (text ? 1 : 0) + '&callback=' + cb;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      };
      async_load();
    },
    // the below function is an attempt to recreate the above, but with a GET request instead
    // TODO make the below work
    // arkiveApiAjaxCall: (key, animal, animalId, width, height, imgs, text, cb) => {
    //   var src = 'https://api.arkive.org/v2/embedScript/species/scientificName/' + animal
    //     + '?key=' + key + (animalId ? '&id=' + animalId : '') + '&mtype=all&w='
    //     + width + '&h=' + height + '&tn=' + (imgs ? 1 : 0) + '&text='
    //     + (text ? 1 : 0) + '&callback=' + cb;
    //   $.ajax({
    //     url: src,
    //     type: 'GET',
    //     dataType: 'jsonp',
    //     beforeSend: function(xhr) {xhr.setRequestHeader('Access-Control-Allow-Origin', 'allow');},
    //     success: function() {
    //       console.log(data);
    //     }
    //   });
    // },
    // TODO use the below for the callback to the ARKive API
    // arkiveEmbedCallback: (data) => {
    //   dispatch((dispatch) => {
    //     var iframeCreation = '<iframe id="frame" name="widget" src ="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
    //     var iframe = window.location.protocol + "//" + (data.results[0].url);
    //     if (data.error !== 'null') {
    //       var $fauna = $('<div></div>');
    //       $fauna.attr('class', 'iframe');
    //       $fauna.html(iframeCreation);
    //       $('.encounter-details').append($fauna);
    //       var iframeAttr = parent.document.getElementById('frame');
    //       console.log(parent.document.getElementById('frame'));
    //       iframeAttr.height = arkiveApiHeight;
    //       iframeAttr.width = arkiveApiWidth + 22;
    //       iframeAttr.src = iframe;
    //     }
    //   });
    // }
  };
}

export const EncounterDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(EncounterDetails);
