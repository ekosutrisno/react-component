import React, { Component } from 'react';

export class ButtonPrimary extends Component {
   handleClick() {
      console.log('this is:', this);
   }
   render() {
      let property = this.props;
      return (
         <button
            onClick={() => this.handleClick()}
            className="btn-primary focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900">
            {property.btnText}
         </button>
      );
   }
}

export default ButtonPrimary;
