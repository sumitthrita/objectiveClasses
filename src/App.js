


import React from 'react';

import Registration from "./components/Registration";
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Courses from './components/Courses';
import Faculty from "./components/Faculty";

const App = () => {
  return (
    <Router>
        <div>
         {/* <Homepage /> */}
         <Switch>
           <Route path="/" exact strict component={Homepage} />
           <Route path="/Courses" exact strict component={Courses} />
           <Route path="/faculty" exact strict component={Faculty} />
           {/* <Route path="/blog"  exact strict component={Blog} />
           <Route path="/services" exact strict component={Service} />
           <Route path="/contact" exact strict component={Contact}/> */}
           <Route path="/registration" exact strict component={Registration}/>
           {/* <Route path="/login" exact strict component={Login}/>
           <Route path="/bikeInfo" exact strict component={BikeInfo} />
           <Route path="/feedback" eact strict component={Feedback} /> */}
          </Switch>
         </div>
   </Router> 
  );
}

export default App;
