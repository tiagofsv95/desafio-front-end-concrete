import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Result from './pages/Result';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/result" component={Result} />
        <Route path="/notFound" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
