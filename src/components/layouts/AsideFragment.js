import React, { Component } from 'react';

export class AsideFragment extends Component {
   render() {
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
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Introduction
                                    </button>
                        </li>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Installation
                                    </button>
                        </li>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              What News?
                                    </button>
                        </li>
                     </ul>
                  </li>
                  <li className="mb-4">
                     <h3 className="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Components</h3>
                     <ul>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Makan Nasi
                                    </button>
                        </li>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Minum Susu
                                    </button>
                        </li>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Mandi di sungai
                                    </button>
                        </li>
                     </ul>
                  </li>
                  <li className="mb-4">
                     <h3 className="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Kegiatan</h3>
                     <ul>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Besok Libur
                                    </button>
                        </li>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Lusa libur
                                    </button>
                        </li>
                        <li className="text-gray-300">
                           <button aria-current="page"
                              className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                              Sampai Senin
                                    </button>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </aside>
      );
   }
}

export default AsideFragment;
