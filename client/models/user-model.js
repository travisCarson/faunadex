var Profile = Backbone.Model.extend({
  defaults : {
    username: '',
    password: '',
    avatar: '', //path (most likely a url) to an image file
    description: '' //short user autobiography
  }
});
