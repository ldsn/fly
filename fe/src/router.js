import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import ConfigList from './routes/ConfigList';
import ConfigPage from './routes/ConfigPage';
import StructPage from './routes/StructPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ConfigList} />
        <Route path="/config" exact component={ConfigPage} />
        <Route path="/struct" exact component={StructPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
