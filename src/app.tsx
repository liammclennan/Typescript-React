/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Math from './math';
import { Router, Route, Link, hashHistory, browserHistory  } from 'react-router';

console.log(Math.add(3,4));

var App = React.createClass({
    render: function () {
        return <h1>Hello, world!</h1>;
    }
});

ReactDOM.render(
    <Router history={window.location.protocol.startsWith('file') ? hashHistory : browserHistory}>
    <Route path="/" component={App}></Route>
    </Router>
  ,
  document.getElementById('container')
);
