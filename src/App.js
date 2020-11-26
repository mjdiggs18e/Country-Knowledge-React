import React from 'react';
import LandingHeader from './component/LandingHeader';
import DetailHeader from './component/DetailHeader';
import CountryList from './component/CountryList';
import CountryDetail from './component/CountryDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingHeader />
          <CountryList />
        </Route>
        <Route path="/country/:id">
          <DetailHeader />
          <CountryDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
