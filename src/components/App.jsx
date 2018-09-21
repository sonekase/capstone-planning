import React from 'react';
import Welcome from './Welcome';
import Film from './Film';
import { Switch, Route } from 'react-router-dom';

function App () {

  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Welcome/>} />
        <Route exact path='/Film' render={()=><Film/>} />
      </Switch>
    </div>
  );
}

export default App;
