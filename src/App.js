import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNews from './components/pages/TopNews';
import Categories from './components/pages/Categories';
import MorePage from './components/pages/MorePage';

import './index.scss';

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route component={TopNews} exact path="/" />
          <Route component={Categories} path="/categories" />
          <Route component={MorePage} path="/more" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
