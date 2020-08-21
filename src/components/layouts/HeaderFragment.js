import React, { Component } from 'react';
// import PropTypes from 'prop-types'

export class HeaderFragment extends Component {
   static propTypes = {

   };

   render() {
      let customInputStyle = { marginTop: 37 + 'px', display: 'none' };
      return (
         <nav className="fixed text-gray-300 top-0 z-40 w-full border-b border-gray-800 bg-gray-900">
            <div className="container mx-auto flex-1 px-4 lg:px-8">
               <div className="flex justify-between items-center h-16">
                  <div className="lg:w-1/5 flex items-center pr-4">
                     <a href="/" aria-current="page" aria-label="Nuxt Content Logo" className="flex-shrink-0 flex-1 font-bold text-xl nuxt-link-exact-active nuxt-link-active">
                        {/* image logo */}
                        {/* <img src="/logo-light.svg" alt="Nuxt Content" className="h-8 max-w-full light-img" /> */}
                        <span className="text-2xl flex items-center">
                           <span className="font-medium text-green-400">Erajaya</span>
                           <span className="font-semibold">DSL</span>
                        </span>
                     </a>
                  </div>
                  <div className="hidden flex-1 lg:flex justify-center w-4/6">
                     <div className="w-full relative flex flex-col justify-between">
                        <div className="w-full relative">
                           <label htmlFor="search" className="sr-only">Search</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              </div>
                              <input id="search" placeholder="Search the docs (Press &quot;/&quot; to focus)" type="search" autoComplete="off" className="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-white focus:text-white focus:border-gray-700 rounded-md focus:outline-none focus:bg-gray-900 bg-gray-800" />
                           </div>
                        </div>
                        <ul className="z-10 absolute w-full flex-1 top-0 bg-gray-900 rounded-md border border-gray-500 overflow-hidden" style={customInputStyle}>
                           {/*  */}
                        </ul>
                     </div>
                  </div>

                  <div className="lg:w-1/5 flex items-center pl-8 justify-between">
                     <a href="/releases" className="font-semibold leading-none text-gray-300 hover:text-green-300 text-base mr-4">v1.2.3</a>
                     <div className="flex items-center">
                        <a href="https://twitter.com/ekostr_96" target="_blank" rel="noopener noreferrer" title="Twitter" name="Twitter"
                           className="hover:text-gray-300 text-gray-500 ml-4 hidden lg:block">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter w-5 h-5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a> <a href="https://github.com/ekosutrisno/react-component" target="_blank" rel="noopener noreferrer" title="Github" name="Github"
                              className="hover:text-gray-300 text-gray-500 ml-4 hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> <button aria-label="Menu"
                                 className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-300 focus:outline-none -mr-2"><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      );
   }
}

export default HeaderFragment;
