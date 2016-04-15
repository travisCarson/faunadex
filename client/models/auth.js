module.exports = {
  login: (email, password, callback) => {
    if (this.loggedIn()) {
      return callback(null, true);
    }
    $.post('/api/user/signin', {username: username, password: password})
    .done((data) => {
      if (data.username) {
        callback(null, data);
      } else {
        callback(new Error('Not Logged In'));
      }
    })
    .fail((jqXHR, msg) => {
      callback(new Error(msg));
    });
  },

  isSignedIn: () => {
    $.get('/api/user/issignedin')
    .done((data) => {
      return data;
    })
    .fail((jqXHR, msg) => {
      return false;
    });
  }






};
