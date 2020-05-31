import React from 'react';
import log from './login';

import signup from './signup';
import NAV from './nav.js';
import bmicalculator from './bmicalculator.js';
import home from './home'
import Footer from './footer.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="Nav">   
        <NAV/>   
        <Switch> 
          <Route path='/' exact component={home} />
          <Route path='/login' exact component={log} />
          
          <Route path='/signup' exact component={signup} /> 
          <Route path='/bmicalculator' exact component={bmicalculator} /> 
        </Switch>    
      </div>
      <Footer/>
    </Router>
  );
}

export default App;