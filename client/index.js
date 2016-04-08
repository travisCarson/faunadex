console.log('Its Alive!!!!!');
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
//import reducer from './reducer';
import {Router, Route, Link} from 'react-router';
import {List, Map} from 'immutable';

const store = createStore(function () {});
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});

const routes = (<Route component={App}>
  <Route path="/" component={App} />
</Route>);

ReactDOM.render(
  (<Provider store={store}>
    <Router >{routes}</Router>
  </Provider>),
  document.getElementById('app'));

