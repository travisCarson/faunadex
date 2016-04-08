// ES6 import syntax, works similar to a node 'require' statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App, AppContainer} from './components/App';
import {User, UserContainer} from './components/User';
// in ES6 you can assign variables from an object using 
// what are called "Destructuring"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
import {Router, Route, Link, hashHistory} from 'react-router';
import {List, Map} from 'immutable';

// A reducer is a function which takes the state, and an action, and
// returns a new state based on the action. All reducer functions
//   1) MUST BE pure functions, see http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/
//   2) MUST return a state, even if the state is empty or the same
//   3) MUST NEVER alter the existing state, only return a new one
//   4) MUST NEVER call non-pure functions, like AJAX calls
import reducer from './reducers/userReducer.js'; 

// Create the Redux Store, this should be a representation of the
// entire application in the form of an object.  This should never
// be mutated.  To change it's values you have to dispatch an action
// which calls a reducer and returns a new state, which is set
// to the current state.
const store = createStore(reducer);

// Here we dispatch a simple action which sets the state.  To see the
// details of what this function is doing, look in the following folder:
// client/reducers/reducer.js
// In React-Redux you NEVER alter the state directly, like this:
//   store.user = {<MyNewUserObject>};
// Instead you dispatch an action which calls the reducer function
// and the reducer does the work of returning a new state
// Behind the scenes, you'll write reducers that merge new elements into
// your state, which you can see in the client/reducers files
store.dispatch({
  type: 'SET_STATE',
  state: {
    user: { name: 'Joe Smoe', description: 'One day, Ill be set via an AJAX call' },
    encounters: [ { description: 'Joes first encounter' }, { description: 'Joes second encounter' }, { description: 'Joes third encounter' }]
  }
});

// store.dispatch({
//   type: 'SET_USERNAME',
//   username: user.input.from.somewhere
// });
// Routes tell our app what to render at what urls
// In the future, we can probably set the routes to some other 
// module and include it.
//
// Provider is a special built in component which gives all child
// components access to the store.
ReactDOM.render(
  (<Provider store={store}>
    <Router history={hashHistory}>
      <Route component={AppContainer} path="/" />
      <Route component={UserContainer} path="/user" />
    </Router>
  </Provider>),
  // Do our inital render on the #app element in index.html
  document.getElementById('app'));

