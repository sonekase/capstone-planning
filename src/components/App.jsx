import React from 'react';
import Welcome from './Welcome';
import { Switch, Route } from 'react-router-dom';

function App () {

  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Welcome/>} />
      </Switch>
    </div>
  );
}

export default App;
