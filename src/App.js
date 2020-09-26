import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNews from './components/pages/TopNews';
import Categories from './components/pages/Categories';

import './index.scss';

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TopNews} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
