import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './pages/intro';
import Questionanswer from './pages/questionanswer';
import Score from './pages/score';
import Error from './pages/error';

const AppRouter = ()=> (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/questionanswer" component={Questionanswer} />
        <Route path="/score" component={Score} />
        <Route path="/error" component={Error} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;