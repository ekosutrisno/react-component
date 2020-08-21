import React, { Component } from 'react';

export class FooterFragment extends Component {
   render() {
      return (
         <footer className="h-16 relative w-full border-t border-gray-800 bg-gray-900 z-30">
            <div className="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between">
               <div className="flex items-end">
                  <span className="text-xl flex items-center">
                     <span className="font-semibold text-gray-300">IT</span>
                     <span className="font-normal text-green-400">Architect Inc</span>
                  </span>
               </div>
               <div className="flex text-gray-300">
                  <div className="relative text-left inline-flex">
                     <button className="rounded-md hover:text-green-400 focus:outline-none"><svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                     </button>
                     <div className="mt-2 w-auto rounded-md shadow-lg z-50 origin-top-right absolute bottom-0 right-0" style={{ display: 'none' }}>
                        <div className="rounded-md bg-white dark:bg-gray-800 shadow-xs">
                           <ul className="py-2">
                              <li>
                                 <a href="/ru/installation" className="flex px-4 items-center hover:text-primary-500 leading-7">Русский</a>
                              </li>
                              <li>
                                 <a href="/fr/installation" className="flex px-4 items-center hover:text-primary-500 leading-7">Français</a>
                              </li>
                              <li>
                                 <a href="/ja/installation" className="flex px-4 items-center hover:text-primary-500 leading-7">日本語</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <span className="inline-flex ml-4">
                     <button aria-label="Color Mode" className="rounded-md hover:text-primary-500 focus:outline-none transition ease-in-out duration-150">
                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                     </button>
                  </span>
               </div>
            </div>
         </footer>
      );
   }
}

export default FooterFragment;
