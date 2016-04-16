exports.login = (username, password, callback) => {
  if (exports.isSignedIn()) {
    console.log('already signed in');
    return callback(null, true);
  }
  $.post('/api/user/signin', {username: username, password: password})
    .done((data) => {
      if (data.username) {
        window.localStorage.setItem('com.faunadex', data.token);
        callback(null, data);
      } else {
        callback(new Error('Not Logged In'));
      }
    })
  .fail((jqXHR, msg) => {
    callback(new Error(msg));
  });
};

exports.isSignedIn = () => !!window.localStorage.getItem('com.faunadex');

exports.signOut = function(callback) {
  window.localStorage.removeItem('com.faunadex');
  $.get('/api/user/signout', callback);
};

