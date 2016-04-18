exports.recentEncounters = (callback) => {
  $.get('/api/recentencounters')
    .retry({ times: 5, timeout: 500 })
    .done((data) => {
      callback(null, data);
    });
};

exports.userEncounters = (username, callback) => {
  $.get('/api/user/encounters/' + username)
    .done((data) => {
      callback(null, data);
    });
};