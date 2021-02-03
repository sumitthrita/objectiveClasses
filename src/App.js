


import React from 'react';

import Registration from "./components/Registration";
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Courses from './components/Courses';

const App = () => {
  return (
    <Router>
        <div>
         {/* <Homepage /> */}
         <Switch>
           <Route path="/" exact strict component={Homepage} />
           <Route path="/Courses" exact strict component={Courses} />
           <Route path="/registration" exact strict component={Registration}/>
          </Switch>
         </div>
   </Router> 
  );
}

export default App;
