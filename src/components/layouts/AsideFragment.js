import React, { Component } from 'react';
import dataRouter from '../../data/route';
import {
   Link
} from "react-router-dom";

export class AsideFragment extends Component {
   constructor(props) {
      super(props);
      this.state = dataRouter;
   }

   onItemClick = (path) => {
      this.setState({ activePath: path });
   };

   render() {
      const { generalSubItems, layoutSubItems, navigationSubItems, dataEntrySubItems } = this.state;
      let customInputStyle = { marginTop: 37 + 'px', display: 'none' };
      return (
         <aside className="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-gray-900 lg:bg-transparent hidden">
            <div className="lg:sticky scr-custom lg:top-16 lg:mt-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)" style={{ top: 4 + 'rem' }}>
               <ul className="p-4 lg:py-8 lg:pl-0 lg:pr-8">
                  <li className="mb-4 lg:hidden">
                     <div className="w-full relative flex flex-col justify-between">
                        <div className="w-full relative">
                           <label htmlFor="search" className="sr-only">Search</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              </div>
                              <input id="search" placeholder="Search the docs (Press &quot;/&quot; to focus)" type="search" autoComplete="off"
                                 className="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800" />
                           </div>
                        </div>
                        <ul className="z-10 absolute w-full flex-1 top-0 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden" style={customInputStyle}>
                           {/*  */}
                        </ul>
                     </div>
                  </li>
                  <li className="mb-4">
                     <h3 className="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Getting started</h3>
                     <ul>
                        <li className="text-gray-300">
                           <Link aria-current="page"
                              to="/"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Intoduction
                                    </Link>
                        </li>
                        <li className="text-gray-300">
                           <Link aria-current="page"
                              to="/"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Installation
                                    </Link>
                        </li>
                        <li className="text-gray-300">
                           <Link aria-current="page"
                              to="/"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Congiguration
                                    </Link>
                        </li>
                     </ul>
                  </li>
                  <li className="mb-4">
                     <h3 className="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Components</h3>
                     <ul>
                        {
                           generalSubItems.map((item) => {
                              return (
                                 <li className="text-gray-300">
                                    <Link aria-current="page"
                                       to={item.path}
                                       className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                                       {item.label}
                                    </Link>
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </li>
                  <li className="mb-4">
                     <h3 className="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Layout</h3>
                     <ul>
                        {
                           layoutSubItems.map((item) => {
                              return (
                                 <li className="text-gray-300">
                                    <Link aria-current="page"
                                       to={item.path}
                                       className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                                       {item.label}
                                    </Link>
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </li>
                  <li className="mb-4">
                     <h3 className="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Navigation</h3>
                     <ul>
                        {
                           navigationSubItems.map((item) => {
                              return (
                                 <li className="text-gray-300">
                                    <Link aria-current="page"
                                       to={item.path}
                                       className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                                       {item.label}
                                    </Link>
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </li>
                  <li className="mb-4">
                     <h3 className="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Data Entry</h3>
                     <ul>
                        {
                           dataEntrySubItems.map((item) => {
                              return (
                                 <li className="text-gray-300">
                                    <Link aria-current="page"
                                       to={item.path}
                                       className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                                       {item.label}
                                    </Link>
                                 </li>
                              );
                           })
                        }
                     </ul>
                  </li>
               </ul>
            </div>
         </aside>
      );
   }
}

export default AsideFragment;
