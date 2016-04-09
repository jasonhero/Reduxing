// Load dependencies
import React from 'react';

import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

//Load CSS
import './assets/css/main.scss';

// Load Routes
import Home from './routes/home/index';
import PageNotFound from  './routes/notfound/index';


// Load Redux Store
import Store from './store';

// Routing Setup
render((
  <Provider store={Store}>
    <Router history={browserHistory} >
      <Route path='/'>
        <IndexRoute component={Home} />
      </Route>
      <Route path='*' component={PageNotFound}>
      </Route>
    </Router>
  </Provider>
),
  document.getElementById('root')
);
