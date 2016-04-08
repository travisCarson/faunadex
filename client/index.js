console.log('Its Alive!!!!!');
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
//import reducer from './reducer';
import {Router, Route, Link} from 'react-router';
import {List, Map} from 'immutable';

const pair = ['Trainspotting', '28 Days Later'];

const routes = (<Route component={App}>
  <Route path="/results" component={Results} />
</Route>);

ReactDOM.render(
    (<Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
    </Provider>),
    document.getElementById('app')
    );

