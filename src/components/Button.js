import React, { Component } from 'react';

export class Button extends Component {
   render(props) {
      return (
         <div class="mx-auto space-x-3">
            <button
               className="btn-primary focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out">
               {this.props.btnText}
            </button>
         </div>
      );
   }
}

export default Button;
