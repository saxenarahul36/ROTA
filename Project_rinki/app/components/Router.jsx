import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Articles from './Articles.jsx';
import Article from './Article.jsx';
import DR from './DR.jsx';
import SIT from './SIT.jsx';
import DEV from './DEV.jsx';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/articles" component={Articles}/>
      <Route exact path="/articles/:id" component={Article}/>
      <Route exact path="/dr" component={DR}/>
      <Route exact path="/sit" component={SIT}/>
      <Route exact path="/dev" component={DEV}/>
  </Switch>
);

export default Main;
