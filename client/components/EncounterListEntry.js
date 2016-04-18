import React from 'react';
import {connect} from 'react-redux';

// the first of two things that a React-Redux component exports is 
// a standard React component which uses a bunch of props.
export const EncounterListEntry = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // TODO make the below function be used as the callback for arkiveApi
  // arkiveEmbedCallback: function(data) { 
  //   this.props.apiARKive(data);
  // },
  componentDidMount: function() {
    // arkiveEmbedCallback is a global variable at this moment
    // TODO somehow put arkiveEmbedCallback into this file
    // var arkiveEmbedCallback = this.arkiveEmbedCallback;
    this.props.arkiveApi(this.props.key, this.props.encounter.get('scientificname').toLowerCase(), this.props.id, this.props.width, this.props.height, this.props.images, this.props.text, 'arkiveEmbedCallback');
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
        <div>Title: {enc.get('title')}</div>
        <div>Animal: {enc.get('animal')}</div>
        <div>Location: {enc.get('location')}</div>
        <div>Post Time: {enc.get('postTime')}</div>
        <div>User: {encUser}</div>
        <div id={enc.get('animal')} className='animal'></div>
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
    username: state.getIn(['user', 'username']),
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
    arkiveApiAjaxCall: (key, animal, animalId, width, height, imgs, text, cb) => {
      var src = 'https://api.arkive.org/v2/embedScript/species/scientificName/' + animal 
        + '?key=' + key + (animalId ? '&id=' + animalId : '') + '&mtype=all&w=' 
        + width + '&h=' + height + '&tn=' + (imgs ? 1 : 0) + '&text=' 
        + (text ? 1 : 0) + '&callback=' + cb;
      $.ajax({
        url: src,
        type: 'GET',
        beforeSend: function(xhr) {xhr.setRequestHeader('Access-Control-Allow-Origin', 'allow');},
        success: function() {
          console.log(data);
        }
      });
    },
    // TODO use the below for the callback to the ARKive API
    arkiveEmbedCallback: (data) => {
      dispatch((dispatch) => {
        var start = true;
        var iframeAttr;
        var iframeCreation = '<iframe className="frame" name="widget" src ="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
        var iframe = window.location.protocol + "//" + (data.results[0].url);
        console.log(iframe);
        if (data.error !== 'null') {
          var $fauna = $('<div></div>');
          $fauna.attr('class', 'iframe');
          $fauna.html(iframeCreation);
          // use the below to add only one iframe to each encounter
          // TODO make below unnecessary
          $('.encounter .animal').each(function(index) {
            if (!$(this).has('.iframe').length && start) {
              $(this).append($fauna);
              start = false;
              iframeAttr = $('iframe', this)[0];
            }
          });
          iframeAttr.height = arkiveApiHeight;
          iframeAttr.width = arkiveApiWidth + 22;
          iframeAttr.src = iframe;
        }
      });
    },
    goToEncounter: (enc, router) => {
      $.post('/api/encounter', {id: enc.get('id')}, (dbEncounter) => {
        if (dbEncounter) {
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
        } else {
          dispatch({
            type: 'GO_TO_ENCOUNTER',
            state: {
              encounter: {
                username: enc.getIn(['user', 'username']),
                title: enc.get('title'),
                description: enc.get('description'),
                location: enc.get('location'),
                encounterTime: enc.get('encounterTime'),
                postTime: enc.get('postTime'),
              },
            },
          });
        }
      });
      router.push('/encounterDetails');
    },
  }
};
// Lastly, we export an object which tells what function to use to map
// the state to the props
export const EncounterListEntryContainer = connect(mapStateToProps, mapDispatchToProps)(EncounterListEntry);
