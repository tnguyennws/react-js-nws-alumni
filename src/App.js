import React from 'react';
import Menu from './components/Menu';
import Profil from './components/Profil';
import Accueil from './components/Accueil';
import Articles from './components/Articles';
import PageErreur from './components/PageErreur';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Accueil" component={Accueil} />
        <Route path="/Articles" component={Articles} />
        <Route path="/Profil" component={Profil} />
        <Route component={PageErreur} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
