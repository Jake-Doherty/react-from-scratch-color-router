import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import NotFound from '../NotFound/NotFound.js';
import RGB from '../RGB/RGB.js';
import './Main.css';

export default function Main() {
  return (
    <main>
      <Nav />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}
