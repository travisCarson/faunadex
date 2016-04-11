// Map is almost just like a normal object but it is immutable
// by nature.  Using these objects prevents us from mutating the
// state accidentally.
import {Map} from 'immutable';

// Helper function for below
function setState(state, newState) {
  return state.merge(newState);
}

function setUserName(state, newUserName) {
  return state.merge({'user': {1: {username: newUserName}}});
}

// This is what does the heavy lifting, based on the action that the
// reducer receives, it does something based on that.  Remember, this
// must be a Pure Function.
export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'CHANGE_USER_NAME':
      return setUserName(state, action.username);
  }
  console.log('New State Is: ', state);
  window.state = state;
  return state;
}
