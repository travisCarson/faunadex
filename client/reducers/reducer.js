// Map is almost just like a normal object but it is immutable
// by nature.  Using these objects prevents us from mutating the
// state accidentally.
import {Map, List} from 'immutable';

// Helper function for below
function setState(state, newState) {
  return state.merge(newState);
}

function setUserName(state, newUserName) {
  return state.merge({'user': {username: newUserName}});
}

function goToEncounter(state, encounter) {
  // ideally below I would somehow change the path to only show the encounter
  console.log('clicked');
  return state.merge({'encounter': encounter});
}

function signInAttempt(state, action) {
  // ideally below I would somehow change the path to only show the encounter
  console.log('sign in attempted');
  console.log(action.username, ' ', action.password);
}

function signUpAttempt(state, action) {
  // ideally below I would somehow change the path to only show the encounter
  console.log('sign up attempted');
  console.log(action.username, ' ', action.password);
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
    case 'GO_TO_ENCOUNTER':
      return goToEncounter(state, action.encounter);
    case 'SIGN_IN_ATTEMPT':
      return signInAttempt(state, action);
    case 'SIGN_UP_ATTEMPT':
      return signUpAttempt(state, action);
  }
  console.log('New State Is: ', state);
  window.state = state;
  return state;
}

