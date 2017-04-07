import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Root from '../../ui/index.js';
import Bases from '../../ui/components/body/Bases';

export const routes = () => (
  <Router history={browserHistory}>
    <Root>
      <Route exact={true} path="/" component={Bases}/>
    </Root>
  </Router>
)
