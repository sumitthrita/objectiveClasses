import React from 'react';

import Registration from "./components/Registration/Registration";
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TermCondition from './components/TermsCondition/TermCondition';
import FeeStructure from './components/FeeStructure/FeeStructure';

const App = () => {
  return (
    <Router>
        <div>
         <Switch>
           <Route path="/" exact strict component={Homepage} />
           {/* <Route path="/Courses" exact strict component={Courses} /> */}
           <Route path="/registration" exact strict component={Registration}/>
           <Route path="/termCondition" component={TermCondition} />
           <Route path="/feeStructure" exact strict component={FeeStructure} />
          </Switch>
         </div>
   </Router> 
  );
}

export default App;
