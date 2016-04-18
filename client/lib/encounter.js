exports.recentEncounters = (callback) => {
  $.get('/api/recentencounters')
    .retry({ times: 5, timeout: 500 })
    .done((data) => {
      callback(null, data);
    });
};