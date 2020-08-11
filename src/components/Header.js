import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import CardsView from '../pages/CardsView';
import ButtonsView from '../pages/ButtonsView';

export class Header extends Component {
   render() {
      return (
         <Router>
            <div>
               <div className="mx-auto py-4 px-56 bg-gray-100 shadow-lg flex justify-start space-x-8 sticky top-0 left-0">
                  <Link to="/" className="py-2 px-3 font-semibold text-gray-800 focus:outline-none hover:text-green-600">Home</Link>
                  <Link to="/cardview" className="py-2 px-3 font-semibold text-gray-800 focus:outline-none hover:text-green-600">Feature</Link>
                  <Link to="/button" className="py-2 px-3 font-semibold text-gray-800 focus:outline-none hover:text-green-600">Contact Me</Link>
               </div>
               <Switch>
                  <Route path="/cardview">
                     <CardsView />
                  </Route>
                  <Route path="/button">
                     <ButtonsView />
                  </Route>
               </Switch>
            </div>
         </Router>
      );
   }
}

export default Header;
