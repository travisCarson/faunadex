// This is here because the function below needs to be a global variable and defined so for the api call to ARKive
// I don't want it to be global and want to move it to EncounterListEntry.js, but I couldn't figure out how

var arkiveApiSpeciesName = 'panthera%20tigris'; // note spaces replaced by %20
var arkiveApiWidth = 320;
var arkiveApiHeight = 355;

function arkiveEmbedCallback(data) {
  var iframeCreation = '<iframe id="frame" name="widget" src ="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
  var iframe = window.location.protocol + "//" + (data.results[0].url);
  if (data.error != 'null') {
      // var $faunad = $('\"#' + arkiveApiSpeciesName + '\"');
      // $(document.body).append($faunad);
      var $fauna = $('<div></div>');
      $fauna.attr('id', arkiveApiSpeciesName);
      $fauna.html(iframeCreation);
      $(document.body).append($fauna);
      var iframeAttr = parent.document.getElementById("frame");
      iframeAttr.height = arkiveApiHeight;
      iframeAttr.width = arkiveApiWidth + 22;
      iframeAttr.src = iframe;
    }
}
