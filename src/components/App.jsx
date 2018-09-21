import React from 'react';
import Welcome from './Welcome';
import Film from './Film';
import Display from './Display';
import Material from './Material';
import { Switch, Route } from 'react-router-dom';

function App () {

  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Welcome/>} />
        <Route exact path='/Film' render={()=><Film/>} />
        <Route exact path='/Display' render={()=><Display/>} />
        <Route exact path='/Material' render={()=><Material/>} />
      </Switch>
    </div>
  );
}

export default App;
