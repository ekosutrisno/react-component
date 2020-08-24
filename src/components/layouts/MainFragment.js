import React, { Component } from 'react';
import AsideFragment from '../layouts/AsideFragment';
import ButtonsView from '../../pages/ButtonsView';
import CardsView from '../../pages/CardsView';
import ButtonContentView from '../../components/contents/ButtonContentView';

import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";

export class MainFragment extends Component {

   render() {

      return (
         <Router>
            <main className="container mx-auto px-4 lg:px-8">
               <div className="flex flex-wrap relative">
                  <AsideFragment />
                  <div className="flex flex-wrap-reverse w-full lg:w-4/5">
                     <div className="w-full py-4 lg:pt-8 lg:pb-4 border-gray-800 lg:w-3/4 lg:border-l lg:border-r">

                        {/* Content Ada disini */}
                        <div className="px-4">
                           {/* Switcing Content and Route  */}
                           <Switch>
                              <Route path="/button" component={ButtonsView} />
                              <Route path="/icon" component={CardsView} />
                              <Route path="/card" component={ButtonContentView} />
                              <Route path="/card-code" component={CardsView} />
                           </Switch>

                           <div className="pt-4 pb-4 lg:px-8 flex"><a href="https://github.com/ekosutrisno/react-component" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-medium hover:underline flex items-center">
                              Edit this page on GitHub
                              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                           </a>
                           </div>
                           <div className="flex justify-between items-center lg:px-8 pt-4 border-t border-gray-800">
                              <a href="/" className="text-green-400 font-bold hover:underline flex items-center lg:p-2 pl-0"><svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 mr-1"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                                 Introduction
                              </a>
                              <a href="/writing" className="text-green-400 font-bold hover:underline flex items-center lg:p-2 pr-0">
                                 Writing content
                                 <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-1"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="w-full lg:w-1/4 block relative">
                        <div className="lg:sticky lg:top-16 mt-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)" style={{ top: 4 + 'rem' }}>
                           <nav className="py-4 lg:py-8 lg:pl-8 lg:pr-2">
                              <h3 className="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">On this page</h3>
                              <ul className="scrollactive-nav">
                                 <li className="text-gray-700 dark:text-gray-300 border-t border-dashed dark:border-gray-800 first:border-t-0">
                                    <a href="#typescript" className="block text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-1 py-2 text-green-400">Installation</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
         </Router >
      );
   }
}

export default MainFragment;
