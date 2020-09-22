import React from 'react';
import {
   Link
} from "react-router-dom";

function BreadCrumb(props) {
   let items = props.items ? props.items : [
      { path: '', label: '', icon: 'fa fa-home' },
      { path: '', label: 'Navigations', icon: '' },
      { path: '', label: 'BreadCrumb', icon: 'fa fa-search' }
   ];
   return (
      <div className="w-full flex items-center justify-start px-3 py-2 bg-transparent">
         {
            items.map((item, idx) => {
               return (
                  <div>
                     {  (idx > 0) ? <Divider separator={props.separator ? props.separator : '/'} /> : ''}
                     <Link aria-current="page"
                        to={item.path}
                        className="px-2 w-full focus:outline-none font-semibold  focus:text-gray-600 rounded py-1 justify-start">
                        <span className={item.icon ? item.icon : ''}></span>  <span>{item.label ? item.label : ''}</span>
                     </Link>
                  </div>
               );
            })
         }
      </div>
   );

   function Divider(props) {
      return (
         <span className="font-bold text-gray-700">{props.separator}</span>
      );
   }
}

export default BreadCrumb;
