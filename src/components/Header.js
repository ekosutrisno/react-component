import React, { Component } from 'react';

export class Header extends Component {
   render() {
      return (
         <div className="mx-auto py-4 px-56 bg-gray-100 shadow-lg flex justify-start space-x-8 sticky top-0 left-0">
            <button className="py-2 px-3 font-semibold text-gray-800 focus:outline-none hover:text-green-600">Home</button>
            <button className="py-2 px-3 font-semibold text-gray-800 focus:outline-none hover:text-green-600">Feature</button>
            <button className="py-2 px-3 font-semibold text-gray-800 focus:outline-none hover:text-green-600">Contact Me</button>
         </div>
      );
   }
}

export default Header;
