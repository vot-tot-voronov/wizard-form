import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Step1} from './components/step1';
import {Step2} from './components/step2';
import {Step3} from './components/step3';
import {Result} from './components/result';

const Header = () => <h1>Header</h1>;

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Step1} />
          <Route path='/step2' component={Step2} />
          <Route path='/step3' component={Step3} />
          <Route path='/result' component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
