import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './assets/styles/normalize.css';
import './index.css';
import NotFound from './components/NotFound/NotFound';
import App from './App';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
