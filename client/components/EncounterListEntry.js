import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const EncounterListEntry = React.createClass({
  // TODO make the below function be used as the callback for arkiveApi
  // arkiveEmbedCallback: function(data) { 
  //   this.props.apiARKive(data);
  // },
  componentDidMount: function() {
    // arkiveEmbedCallback is a global variable at this moment
    // TODO somehow put arkiveEmbedCallback into this file
    // var arkiveEmbedCallback = this.arkiveEmbedCallback;
    function arkiveApi(key, animal, animalId, width, height, imgs, text, cb) {
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
      if (window.attachEvent)
          window.attachEvent('onload', async_load);
      else
          window.addEventListener('load', async_load, false);
    };
    arkiveApi(this.props.key, this.props.animal, this.props.id, this.props.width, this.props.height, this.props.images, this.props.text, 'arkiveEmbedCallback');
  },
  render: function() {
    // <div onClick={this.props.goToEncounter}>Synopsis: {this.props.encounter}</div>
    var enc = this.props.encounter;
    return ( 
      <div className='encounter'>
        <div>Title: {enc.get('title')}</div>
        <div>Description: {enc.get('description')}</div>
        <div>Location: {enc.get('location')}</div>
        <div>Encounter Time: {enc.get('encounterTime')}</div>
        <div>Post Time: {enc.get('postTime')}</div>
        <div>User: {enc.getIn(['user', 'username'])}</div>
        <div id={enc.get('title').toLowerCase().split(' ').join('%20')}></div>
        <hr />
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
    goToEncounter: (event) => {
      dispatch({
        type: 'GO_TO_ENCOUNTER',
        encounter: event.target.value 
      })
    },
    apiARKive: (data) => {
      dispatch((dispatch) => {
        var iframeCreation = '<iframe id="frame" name="widget" src ="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
        var iframe = window.location.protocol + "//" + (data.results[0].url);
        if (data.error != 'null') {
            // var $faunad = $('\"#' + arkiveApiSpeciesName + '\"');
            // $(document.body).append($faunad);
            var $fauna = $('<div></div>');
            $fauna.attr('id', this.props.animal);
            $fauna.html(iframeCreation);
            $(document.body).append($fauna);
            var iframeAttr = parent.document.getElementById("frame");
            iframeAttr.height = this.props.height;
            iframeAttr.width = this.props.width + 22;
            iframeAttr.src = iframe;
        }
      });
    }
  };
}
// Lastly, we export an object which tells what function to use to map
// the state to the props
export const EncounterListEntryContainer = connect(mapStateToProps, mapDispatchToProps)(EncounterListEntry);
