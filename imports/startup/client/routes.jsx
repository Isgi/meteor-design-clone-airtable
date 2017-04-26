import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Root from '../../ui/index';
import Team from '../../ui/components/team/team';
import TeamDetail from '../../ui/components/team-detail/team-detail';

export const routes = () => (
  <Router history={browserHistory}>
    <Root>
      <Route key="main" exact={true} path="/" component={Team}/>
      <Route key="detail" exact={true} path="/team/:id" component={TeamDetail}/>
    </Root>
  </Router>
)
