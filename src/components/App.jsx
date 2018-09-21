import React from 'react';
import Welcome from './Welcome';
import Film from './Film';
import Display from './Display';
import { Switch, Route } from 'react-router-dom';

function App () {

  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Welcome/>} />
        <Route exact path='/Film' render={()=><Film/>} />
        <Route exact path='/Display' render={()=><Display/>} />
      </Switch>
    </div>
  );
}

export default App;
