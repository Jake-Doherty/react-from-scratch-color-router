import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import RGB from '../RGB/RGB.js';
import './Main.css';

export default function Main() {
  return (
    <main>
      <Nav />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
      </Switch>
    </main>
  );
}
