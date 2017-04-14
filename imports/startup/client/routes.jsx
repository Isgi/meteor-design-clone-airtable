import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Root from '../../ui/index';
import Bases from '../../ui/components/base/base';
import ProjectDetail from '../../ui/components/project-detail/project-detail';

export const routes = () => (
  <Router history={browserHistory}>
    <Root>
      <Route key="main" exact={true} path="/" component={Bases}/>
      <Route key="detail" exact={true} path="/project/:id" component={ProjectDetail}/>
    </Root>
  </Router>
)
