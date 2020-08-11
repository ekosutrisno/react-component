import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import CardMansony from './CardMansony';
export default function BasicExample() {
   return (
      <Router>
         <div>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/dashboard">Dashboard</Link>
               </li>
            </ul>

            <hr />
            <Switch>
               <Route exact path="/">
                  <CardMansony
                     title="CardMansony 02"
                     src="http://lorempixel.com/640/480/people"
                     imgHeight="64" />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}
