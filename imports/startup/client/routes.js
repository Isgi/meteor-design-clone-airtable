import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Root from '../../ui/components/root.js';
import List from '../../ui/components/list.js';
import Create from '../../ui/components/create.js';
import Update from '../../ui/components/update.js';
import Detail from '../../ui/components/detail.js';

export const routes = () => (
  <Router history={browserHistory}>
    <Root>
      <Route exact={true} path="/" component={List}/>
      <Route path="/create" component={Create}/>
      <Route path="/update/:id" component={Update}/>
      <Route path="/detail/:id" component={Detail}/>
    </Root>
  </Router>
)
