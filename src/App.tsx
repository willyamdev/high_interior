import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
    </Switch>
  );
}
export default App;