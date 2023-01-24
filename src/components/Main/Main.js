import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import './Main.css';

export default function Main() {
  return (
    <main>
      <Nav />
      <Switch>
        <Route path="/rgb" />
      </Switch>
    </main>
  );
}
