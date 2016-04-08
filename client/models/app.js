console.log('Its Alive!!!!!');
import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from 'immutable';
import { Router, Route, Link } from 'react-router';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    (<div>
     {pair.map(function (thing) { return (<div>{thing}</div>); })}
     </div>),
     document.getElementById('app'));
