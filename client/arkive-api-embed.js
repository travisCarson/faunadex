// This is here because the function below needs to be a global variable and defined so for the api call to ARKive
// I don't want it to be global and want to move it to EncounterListEntry.js, but the request to the ARKive API
// is done with script tags appended to the window object, which is outside of the React components
// TODO move this to EncounterListEntry and figure out how to make requests to the ARKive API from inside React
var arkiveApiWidth = 320;
var arkiveApiHeight = 355;

var arkiveEmbedCallback = function(data) {
  var start = true;
  var iframeAttr;
  var iframeCreation = '<iframe className="frame" name="widget" src ="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
  var iframe = window.location.protocol + "//" + (data.results[0].url);
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
};
